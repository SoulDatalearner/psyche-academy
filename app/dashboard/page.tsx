"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { supabase } from '../supabase';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        // If not logged in, boot back to login page
        router.push('/login');
      } else {
        setUser(user);
      }
      setLoading(false);
    };
    checkUser();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600 font-medium">Loading Dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-gray-200 p-6 md:p-10 shadow-sm">
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b pb-6 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-950">Student Dashboard</h1>
            <p className="text-gray-600 text-sm mt-1">Welcome back, <span className="font-semibold text-blue-700">{user?.email}</span></p>
          </div>
          <button 
            onClick={handleLogout}
            className="self-start sm:self-center border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-xl text-sm font-medium transition-colors"
          >
            Log Out
          </button>
        </div>

        {/* Target Indicator Card */}
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl p-6 text-white mb-8 shadow-sm">
          <h2 className="text-xl font-bold">Your Target Score: Band 7.5+</h2>
          <p className="text-blue-100 text-sm mt-1">Keep up the consistency! You are completing modules on track.</p>
        </div>

        {/* Progress Grid */}
        <h3 className="text-xl font-bold text-gray-950 mb-4">Your Section Breakdown</h3>
        <div className="space-y-5">
          {/* Reading */}
          <div>
            <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
              <span>Reading Practice</span>
              <span>75%</span>
            </div>
            <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
              <div className="bg-blue-600 h-3 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>

          {/* Listening */}
          <div>
            <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
              <span>Listening Arena</span>
              <span>82%</span>
            </div>
            <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
              <div className="bg-green-600 h-3 rounded-full" style={{ width: '82%' }}></div>
            </div>
          </div>

          {/* Writing */}
          <div>
            <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
              <span>AI Writing Feedback</span>
              <span>68%</span>
            </div>
            <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
              <div className="bg-amber-500 h-3 rounded-full" style={{ width: '68%' }}></div>
            </div>
          </div>

          {/* Speaking */}
          <div>
            <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
              <span>AI Speaking Partner</span>
              <span>70%</span>
            </div>
            <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
              <div className="bg-purple-600 h-3 rounded-full" style={{ width: '70%' }}></div>
            </div>
          </div>
        </div>

        {/* Quick Action Button */}
        <div className="mt-10 pt-6 border-t flex justify-end">
  <Link href="/modules" className="bg-gray-950 text-white text-sm font-medium px-6 py-2.5 rounded-xl hover:bg-gray-800 transition-colors">
    Jump to Practice Arena →
  </Link>
</div>
      </div>
    </div>
  );
}