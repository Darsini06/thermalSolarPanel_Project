'use client';

import React from 'react';
import { Users, Shield, Plus, Search, Filter, MoreVertical, Mail, CheckCircle, Clock } from 'lucide-react';

export default function UserManagementPage() {
    const users = [
        { id: 1, name: 'Admin User', email: 'admin@solar.com', role: 'Super Admin', status: 'Active', joined: '2025-12-01' },
        { id: 2, name: 'Jane Smith', email: 'jane@solar.com', role: 'Editor', status: 'Active', joined: '2026-01-15' },
        { id: 3, name: 'Robert Johnson', email: 'robert@solar.com', role: 'Viewer', status: 'Inactive', joined: '2026-01-20' },
    ];

    return (
        <div className="p-8">
            {/* Page Header */}
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">User Management</h1>
                    <p className="text-gray-500 mt-1 font-medium">Manage administrative access and permissions</p>
                </div>
                <button className="flex items-center gap-2 px-5 py-2.5 bg-orange-600 text-white rounded-xl font-bold text-sm hover:bg-orange-700 transition-all shadow-lg shadow-orange-200">
                    <Plus size={18} />
                    Add New User
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Total Administrators</p>
                    <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-gray-900">12</span>
                        <span className="text-xs font-bold text-green-500">+2 this month</span>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Active Now</p>
                    <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-gray-900">4</span>
                        <span className="text-xs font-bold text-blue-500">Live sessions</span>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Security Status</p>
                    <div className="flex items-center gap-2 text-green-600 mt-1">
                        <Shield size={16} />
                        <span className="text-sm font-bold">Encrypted & Secure</span>
                    </div>
                </div>
            </div>

            {/* Users Table */}
            <div className="bg-white rounded-[2rem] border border-gray-100 shadow-xl shadow-slate-200/50 overflow-hidden">
                <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                    <div className="relative w-96">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search administrators..."
                            className="w-full pl-12 pr-4 py-3 bg-gray-50/50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all text-sm"
                        />
                    </div>
                    <div className="flex gap-2">
                        <button className="p-3 bg-gray-50 text-gray-500 rounded-xl hover:bg-gray-100 transition-colors">
                            <Filter size={18} />
                        </button>
                    </div>
                </div>

                <table className="w-full text-left">
                    <thead className="bg-gray-50/50">
                        <tr>
                            <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Administrator</th>
                            <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">System Role</th>
                            <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</th>
                            <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-slate-50/50 transition-colors group">
                                <td className="px-8 py-5">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center font-bold text-slate-600 border border-white shadow-sm">
                                            {user.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-900">{user.name}</p>
                                            <p className="text-xs text-gray-500">{user.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-8 py-5">
                                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold uppercase tracking-wider border border-blue-100">
                                        {user.role}
                                    </span>
                                </td>
                                <td className="px-8 py-5">
                                    <div className="flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full ${user.status === 'Active' ? 'bg-green-500' : 'bg-gray-300'}`} />
                                        <span className="text-sm font-medium text-gray-600">{user.status}</span>
                                    </div>
                                </td>
                                <td className="px-8 py-5">
                                    <button className="p-2 text-gray-400 hover:text-gray-900 transition-colors">
                                        <MoreVertical size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
