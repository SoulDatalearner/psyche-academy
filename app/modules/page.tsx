"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '../supabase';

interface PracticeMaterial {
  id: string;
  title: string;
  type: 'Reading' | 'Listening' | 'Writing' | 'Speaking';
  difficulty: 'Academic' | 'General';
  status: 'Not Started' | 'In Progress' | 'Completed';
  bestScore: string | null;
  duration: string;
}

const staticMaterialsData: Omit<PracticeMaterial, 'status' | 'bestScore'>[] = [
  // Reading
  { id: 'R1', title: 'The Psychology of Shared Human Innovations', type: 'Reading', difficulty: 'Academic', duration: '60 mins' },
  { id: 'R2', title: 'Evolutionary Biology of High-Altitude Flora', type: 'Reading', difficulty: 'Academic', duration: '60 mins' },
  { id: 'R3', title: 'Rise and Fall of Industrial Urban Structures', type: 'Reading', difficulty: 'Academic', duration: '60 mins' },
  { id: 'R4', title: 'Corporate Management Frameworks in the 21st Century', type: 'Reading', difficulty: 'General', duration: '60 mins' },
  { id: 'R5', title: 'The Archeology of Ancient Marine Trade Routes', type: 'Reading', difficulty: 'Academic', duration: '60 mins' },
  { id: 'R6', title: 'Workplace Safety Standards & Protocols', type: 'Reading', difficulty: 'General', duration: '60 mins' },
  { id: 'R7', title: 'Micro-plastics impact on Subterranean Hydrology', type: 'Reading', difficulty: 'Academic', duration: '60 mins' },
  // Listening
  { id: 'L1', title: 'Academic Campus Orientation & Map Guide', type: 'Listening', difficulty: 'Academic', duration: '40 mins' },
  { id: 'L2', title: 'Public Transportation Strategy Debates', type: 'Listening', difficulty: 'General', duration: '40 mins' },
  { id: 'L3', title: 'Post-graduate Thesis Submission Seminar', type: 'Listening', difficulty: 'Academic', duration: '40 mins' },
  { id: 'L4', title: 'Eco-Tourism Accommodation Booking Dialogue', type: 'Listening', difficulty: 'General', duration: '40 mins' },
  { id: 'L5', title: 'Historical Museum Architectural Walkthrough', type: 'Listening', difficulty: 'Academic', duration: '40 mins' },
  { id: 'L6', title: 'Astrophysics Symposium Guest Introduction', type: 'Listening', difficulty: 'Academic', duration: '40 mins' },
  // Writing
  { id: 'W1', title: 'Automation Technologies vs Economic Infrastructure', type: 'Writing', difficulty: 'Academic', duration: '60 mins' },
  { id: 'W2', title: 'Global Urbanization Trends Line Graph Analysis', type: 'Writing', difficulty: 'Academic', duration: '60 mins' },
  { id: 'W3', title: 'Formal Letter: Workplace Discrepancy Escalation', type: 'Writing', difficulty: 'General', duration: '60 mins' },
  { id: 'W4', title: 'Public Funding Allocation for Abstract Arts', type: 'Writing', difficulty: 'Academic', duration: '60 mins' },
  { id: 'W5', title: 'Hydro-electric Power Generation Process Flowchart', type: 'Writing', difficulty: 'Academic', duration: '60 mins' },
  { id: 'W6', title: 'Youth Migration Causes in Developing Nations', type: 'Writing', difficulty: 'General', duration: '60 mins' },
  // Speaking
  { id: 'S1', title: 'Weekend Outdoor Locations & Personal Resonances', type: 'Speaking', difficulty: 'General', duration: '15 mins' },
  { id: 'S2', title: 'Technological Impacts on Interpersonal Empathy', type: 'Speaking', difficulty: 'Academic', duration: '15 mins' },
  { id: 'S3', title: 'Traditional Festivals and Cultural Preservation', type: 'Speaking', difficulty: 'General', duration: '15 mins' },
  { id: 'S4', title: 'Architectural Heritage vs Modern High-rises', type: 'Speaking', difficulty: 'Academic', duration: '15 mins' },
  { id: 'S5', title: 'Environmental Regulations & Consumer Actions', type: 'Speaking', difficulty: 'Academic', duration: '15 mins' },
  { id: 'S6', title: 'Childhood Memories and Lifelong Hobby Formations', type: 'Speaking', difficulty: 'General', duration: '15 mins' }
];

export default function ModulesOverview() {
  const [materials, setMaterials] = useState<PracticeMaterial[]>([]);
  const [filterType, setFilterType] = useState<string>('All');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchLiveProgress();
  }, []);

  const fetchLiveProgress = async () => {
    setLoading(true);
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      setLoading(false);
      return;
    }

    // Fetch records saved for current authenticated student user
    const { data: dbProgress } = await supabase
      .from('user_progress')
      .select('material_id, status, best_score')
      .eq('user_id', user.id);

    // Merge backend progress into our clean 25 modules array layout
    const merged = staticMaterialsData.map((item) => {
      const match = dbProgress?.find(p => p.material_id === item.id);
      return {
        ...item,
        status: (match?.status as any) || 'Not Started',
        bestScore: match?.best_score || null
      };
    });

    setMaterials(merged);
    setLoading(false);
  };

  const updateProgress = async (id: string, nextStatus: 'In Progress' | 'Not Started') => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    await supabase
      .from('user_progress')
      .upsert({ 
        user_id: user.id, 
        material_id: id, 
        status: nextStatus,
        best_score: nextStatus === 'Not Started' ? null : undefined
      }, { onConflict: 'user_id,material_id' });

    fetchLiveProgress();
  };

  const filteredMaterials = filterType === 'All' 
    ? materials 
    : materials.filter(m => m.type === filterType);

  const completedCount = materials.filter(m => m.status === 'Completed').length;
  const inProgressCount = materials.filter(m => m.status === 'In Progress').length;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center text-gray-500 text-sm font-medium">
        Syncing live data structures with Supabase...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pb-20">
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center space-x-4">
          <Link href="/dashboard" className="text-sm font-medium text-blue-700 hover:underline">
            ← Back to Student Hub
          </Link>
          <span className="text-gray-300">|</span>
          <h1 className="text-xl font-extrabold text-gray-950">Practice Materials Overview</h1>
        </div>
        <div className="text-xs font-semibold text-gray-500 bg-gray-100 rounded-full px-4 py-1.5 border border-gray-200">
          Total Modules Available: 25 Materials
        </div>
      </nav>

      <div className="max-w-7xl mx-auto mt-8 px-4">
        
        {/* Dynamic Metrics */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Overall Completion</span>
            <div className="mt-2 flex items-baseline space-x-2">
              <span className="text-3xl font-extrabold text-gray-950">{completedCount}</span>
              <span className="text-sm font-medium text-gray-500">/ 25 Completed</span>
            </div>
            <div className="w-full bg-gray-100 h-2 rounded-full mt-3 overflow-hidden">
              <div className="bg-blue-700 h-full rounded-full transition-all duration-500" style={{ width: `${(completedCount / 25) * 100}%` }}></div>
            </div>
          </div>
          <div className="border-t md:border-t-0 md:border-x border-gray-200 md:px-6 py-4 md:py-0">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Active Modules</span>
            <div className="mt-2 flex items-baseline space-x-2">
              <span className="text-3xl font-extrabold text-amber-600">{inProgressCount}</span>
              <span className="text-sm font-medium text-gray-500">Currently in attempt mode</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Ready for Review</span>
            <div className="mt-2 flex items-baseline space-x-2">
              <span className="text-3xl font-extrabold text-green-700">{materials.filter(m => m.bestScore).length}</span>
              <span className="text-sm font-medium text-gray-500">Graded attempt logs available</span>
            </div>
          </div>
        </div>

        {/* Section Filters */}
        <div className="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-xl border shadow-sm max-w-xl">
          {['All', 'Reading', 'Listening', 'Writing', 'Speaking'].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                filterType === type ? 'bg-blue-700 text-white shadow-sm' : 'text-gray-600 hover:text-gray-950 hover:bg-gray-50'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* 25 Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMaterials.map((material) => (
            <div key={material.id} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                    material.type === 'Reading' ? 'bg-blue-50 text-blue-800 border-blue-200' :
                    material.type === 'Listening' ? 'bg-green-50 text-green-800 border-green-200' :
                    material.type === 'Writing' ? 'bg-amber-50 text-amber-800 border-amber-200' :
                    'bg-purple-50 text-purple-800 border-purple-200'
                  }`}>
                    {material.type} ({material.id})
                  </span>
                  <span className="text-[11px] font-semibold text-gray-400 bg-gray-50 px-2 py-0.5 rounded border border-gray-100">
                    {material.difficulty}
                  </span>
                </div>
                <h3 className="text-base font-bold text-gray-950 leading-snug mb-3">{material.title}</h3>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex justify-between items-center mb-4 text-xs">
                  <div>
                    <span className="text-gray-400 font-medium">Status: </span>
                    <span className={`font-bold ${
                      material.status === 'Completed' ? 'text-green-700' : material.status === 'In Progress' ? 'text-amber-600' : 'text-gray-500'
                    }`}>{material.status}</span>
                  </div>
                  {material.bestScore ? (
                    <div className="bg-blue-50 border border-blue-100 px-2 py-0.5 rounded font-bold text-blue-700">Best: {material.bestScore}</div>
                  ) : (
                    <span className="text-gray-400 font-medium">{material.duration}</span>
                  )}
                </div>

                <div className="flex gap-2">
                  {material.status === 'Completed' ? (
                    <>
                      <button 
                        onClick={() => updateProgress(material.id, 'Not Started')}
                        className="flex-1 bg-gray-50 hover:bg-gray-100 border border-gray-300 text-gray-700 text-xs font-semibold py-2 px-3 rounded-xl transition-colors text-center"
                      >
                        Retake Test
                      </button>
                      <Link 
                        href="/practice"
                        className="flex-1 bg-gray-950 hover:bg-gray-800 text-white text-xs font-semibold py-2 px-3 rounded-xl transition-colors text-center flex items-center justify-center"
                      >
                        Review Output
                      </Link>
                    </>
                  ) : (
                    <Link 
                      href="/practice"
                      onClick={() => { if (material.status === 'Not Started') updateProgress(material.id, 'In Progress'); }}
                      className="w-full bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold py-2 px-4 rounded-xl transition-colors text-center block"
                    >
                      {material.status === 'In Progress' ? 'Resume Material' : 'Start Practice Test'}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}