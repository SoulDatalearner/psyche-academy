"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ieltsReadingTests, ReadingTest } from './practiceData';

type ViewTab = 'passage' | 'worksheet' | 'both';

export default function PracticeArena() {
  const searchParams = useSearchParams();
  const [testId, setTestId] = useState<string>('R1');
  const [testData, setTestData] = useState<ReadingTest | null>(null);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [scoreMetrics, setScoreMetrics] = useState<{ correct: number; total: number } | null>(null);
  
  const [activeTab, setActiveTab] = useState<ViewTab>('both');

  useEffect(() => {
    const queryId = searchParams.get('test') || 'R1';
    if (ieltsReadingTests[queryId]) {
      setTestId(queryId);
      setTestData(ieltsReadingTests[queryId]);
      setAnswers({});
      setSubmitted(false);
      setScoreMetrics(null);
    }
  }, [searchParams]);

  if (!testData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-sm font-medium text-gray-500 animate-pulse">Synchronizing reading parameters...</p>
      </div>
    );
  }

  const handleInputChange = (questionId: string, val: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: val }));
  };

  const handleCheckAnswers = () => {
    let correctCount = 0;
    const totalQuestions = Object.keys(testData.answerKey).length;

    Object.keys(testData.answerKey).forEach((key) => {
      const userAnswer = (answers[key] || '').trim().toLowerCase();
      const correctAnswer = testData.answerKey[key].toLowerCase();
      if (userAnswer === correctAnswer) {
        correctCount++;
      }
    });

    setScoreMetrics({ correct: correctCount, total: totalQuestions });
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pb-16">
      
      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 shadow-sm">
        <div className="flex items-center space-x-4">
          <Link href="/modules" className="text-sm font-medium text-purple-700 hover:underline">
            ← Back to Selection Hub
          </Link>
          <span className="text-gray-300">|</span>
          <h1 className="text-lg font-extrabold text-gray-950">{testData.title}</h1>
        </div>
        
        {/* Test Section Selector */}
        <div className="flex space-x-2">
          {['R1', 'R2', 'R3'].map((id, index) => (
            <Link
              key={id}
              href={`/practice?test=${id}`}
              className={`px-3 py-1 rounded-lg text-xs font-bold border transition-all ${
                testId === id 
                  ? 'bg-purple-700 text-white border-purple-700' 
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
            >
              Section {index + 1}
            </Link>
          ))}
        </div>
      </nav>

      {/* Main Container Workspace */}
      <div className="max-w-7xl mx-auto mt-6 px-4">
        
        {/* VIEW CONTROLLER TABS */}
        <div className="flex bg-gray-200/80 p-1.5 rounded-2xl w-full max-w-md mx-auto mb-6 border border-gray-300 shadow-xs">
          <button
            onClick={() => setActiveTab('passage')}
            className={`flex-1 text-center py-2 text-xs font-bold rounded-xl transition-all ${
              activeTab === 'passage' ? 'bg-white text-purple-700 shadow-xs' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Reading Passage
          </button>
          <button
            onClick={() => setActiveTab('worksheet')}
            className={`flex-1 text-center py-2 text-xs font-bold rounded-xl transition-all ${
              activeTab === 'worksheet' ? 'bg-white text-purple-700 shadow-xs' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Questions Sheet
          </button>
          <button
            onClick={() => setActiveTab('both')}
            className={`hidden lg:block flex-1 text-center py-2 text-xs font-bold rounded-xl transition-all ${
              activeTab === 'both' ? 'bg-white text-purple-700 shadow-xs' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Side-by-Side View
          </button>
        </div>

        {/* WORKSPACE LAYOUT PANELS */}
        <div className={`bg-white border border-gray-200 rounded-3xl shadow-sm p-6 md:p-8 ${
          activeTab === 'both' ? 'grid grid-cols-1 lg:grid-cols-2 gap-10' : 'block'
        }`}>
          
          {/* LEFT SIDE: THE READING PASSAGE */}
          <div className={`${activeTab === 'worksheet' ? 'hidden' : 'block'} bg-gray-50 rounded-2xl p-6 border border-gray-200 max-h-[650px] overflow-y-auto space-y-4`}>
            <h2 className="text-2xl font-extrabold text-gray-950 tracking-tight">{testData.passageTitle}</h2>
            <hr className="border-gray-200" />
            <div className="text-sm leading-relaxed text-gray-700 space-y-4">
              {testData.passageParagraphs.map((p, idx) => (
                <p key={idx}>
                  {p.label && <strong className="text-purple-700 mr-2">{p.label}</strong>}
                  {p.text}
                </p>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: WORKING ANSWER SHEET */}
          <div className={`${activeTab === 'passage' ? 'hidden' : 'block'} flex flex-col justify-between max-h-[650px] overflow-y-auto px-2 space-y-8`}>
            
            {/* INTERACTIVE PART 1 */}
            <div>
              <div className="bg-purple-50 border border-purple-100 rounded-xl p-4 mb-4 text-xs font-bold text-purple-900">
                {testData.instructionPart1}
              </div>
              <div className="space-y-4">
                {testData.questionsPart1.map((q) => (
                  <div key={q.id} className="p-3 border border-gray-100 rounded-xl bg-white shadow-xs">
                    <label className="block text-sm font-medium text-gray-800 mb-2">{q.text}</label>
                    {q.type === 'button-select' && q.options ? (
                      <div className="flex space-x-2">
                        {q.options.map((opt) => (
                          <button
                            key={opt}
                            disabled={submitted}
                            onClick={() => handleInputChange(q.id, opt)}
                            className={`px-3 py-1 text-xs font-bold border rounded-lg transition-all ${
                              answers[q.id] === opt 
                                ? 'bg-purple-700 text-white border-purple-700' 
                                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <input
                        type="text"
                        disabled={submitted}
                        value={answers[q.id] || ''}
                        onChange={(e) => handleInputChange(q.id, e.target.value)}
                        className="w-full max-w-xs border border-gray-300 rounded-xl px-3 py-1.5 text-sm bg-gray-50 text-gray-900 focus:outline-none focus:border-purple-700"
                        placeholder="Type answer here..."
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* INTERACTIVE PART 2 */}
            {testData.questionsPart2 && (
              <div>
                <div className="bg-purple-50 border border-purple-100 rounded-xl p-4 mb-4 text-xs font-bold text-purple-900">
                  {testData.instructionPart2}
                </div>
                <div className="space-y-4">
                  {testData.questionsPart2.map((q) => {
                    if (q.text.includes('[input]')) {
                      const parts = q.text.split('[input]');
                      return (
                        <div key={q.id} className="text-sm text-gray-800 leading-relaxed bg-white p-3 border rounded-xl">
                          {parts[0]}
                          <input
                            type="text"
                            disabled={submitted}
                            value={answers[q.id] || ''}
                            onChange={(e) => handleInputChange(q.id, e.target.value)}
                            className="mx-1 border-b-2 border-purple-500 focus:outline-none text-center bg-transparent max-w-[160px] text-purple-900 font-bold"
                            placeholder="..."
                          />
                          {parts[1]}
                        </div>
                      );
                    }
                    return (
                      <div key={q.id} className="p-3 border border-gray-100 rounded-xl bg-white shadow-xs">
                        <label className="block text-sm font-medium text-gray-800 mb-2">{q.text}</label>
                        <input
                          type="text"
                          disabled={submitted}
                          value={answers[q.id] || ''}
                          onChange={(e) => handleInputChange(q.id, e.target.value)}
                          className="w-full max-w-xs border border-gray-300 rounded-xl px-3 py-1.5 text-sm bg-gray-50 text-gray-900 focus:outline-none focus:border-purple-700"
                          placeholder="Type answer here..."
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* INTERACTIVE PART 3 */}
            {testData.questionsPart3 && (
              <div>
                <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-4 text-xs font-bold text-amber-900">
                  {testData.instructionPart3}
                </div>
                <div className="space-y-4">
                  {testData.questionsPart3.map((q) => (
                    <div key={q.id} className="bg-white border p-4 rounded-xl space-y-2">
                      <p className="text-sm font-bold text-gray-900">{q.text}</p>
                      {q.options?.map((opt) => {
                        const optionLetter = opt.charAt(0);
                        return (
                          <label key={opt} className="flex items-center space-x-3 text-xs p-2.5 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                            <input
                              type="radio"
                              name={q.id}
                              disabled={submitted}
                              checked={answers[q.id] === optionLetter}
                              onChange={() => handleInputChange(q.id, optionLetter)}
                              className="text-purple-600 focus:ring-purple-500"
                            />
                            <span className="text-gray-700">{opt}</span>
                          </label>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SCORE CONTROL PANEL */}
            <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between">
              {scoreMetrics && (
                <div className="text-sm font-bold bg-green-50 border border-green-200 text-green-800 px-4 py-2 rounded-xl">
                  Score: {scoreMetrics.correct} / {scoreMetrics.total} Items Correct!
                </div>
              )}
              <button
                onClick={handleCheckAnswers}
                disabled={submitted}
                className="ml-auto bg-gray-950 text-white font-bold text-sm px-6 py-2.5 rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-40"
              >
                {submitted ? 'Verified' : 'Check Answers'}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}