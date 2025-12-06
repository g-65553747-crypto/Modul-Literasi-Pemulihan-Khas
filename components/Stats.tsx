import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { StatData } from '../types';

interface StatsProps {
  stats: StatData[];
}

const Stats: React.FC<StatsProps> = ({ stats }) => {
  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];

  return (
    <div className="p-4 max-w-4xl mx-auto pb-32">
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Progress Chart 🌟</h2>
            <p className="text-gray-500 mb-8">Keep playing to fill up the bars!</p>
            
            <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={stats}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6b7280'}} />
                        <YAxis hide />
                        <Tooltip 
                            cursor={{fill: 'transparent'}}
                            contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}
                        />
                        <Bar dataKey="score" radius={[10, 10, 0, 0]}>
                            {stats.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm flex items-center justify-between border-l-4" style={{borderColor: COLORS[idx % COLORS.length]}}>
                    <div>
                        <h3 className="font-bold text-gray-700">{stat.name}</h3>
                        <p className="text-sm text-gray-400">Total Points</p>
                    </div>
                    <div className="text-2xl font-black text-gray-800">{stat.score}</div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Stats;
