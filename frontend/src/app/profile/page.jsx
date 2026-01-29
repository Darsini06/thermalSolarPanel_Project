"use client";

import React, { useState, useEffect } from "react";
import {
    User, Mail, Phone, MapPin,
    FileText, HardDrive, Calendar,
    Download, ExternalLink, Shield,
    Clock, CheckCircle, Activity
} from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { authAPI } from "@/lib/api";

export default function ProfilePage() {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Data States
    const [reports, setReports] = useState([]);
    const [links, setLinks] = useState([]);
    const [stats, setStats] = useState({ total_reports: 0, total_assets: 0 });

    useEffect(() => {
        const fetchProfileData = async () => {
            const token = localStorage.getItem("auth_token");
            const name = localStorage.getItem("user_name");
            const email = localStorage.getItem("user_email");

            if (!token) {
                router.push("/login");
                return;
            }

            setUser({ name, email });

            try {
                // Fetch user data in parallel
                const [reportsRes, linksRes] = await Promise.allSettled([
                    authAPI.getMyReports(),
                    authAPI.getMyLinks()
                ]);

                if (reportsRes.status === "fulfilled") {
                    setReports(reportsRes.value.data);
                }

                if (linksRes.status === "fulfilled") {
                    setLinks(linksRes.value.data);
                }

            } catch (err) {
                console.error("Error fetching profile data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchProfileData();
    }, [router]);

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Profile Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-100 mb-12 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50/50 rounded-full blur-3xl -mr-20 -mt-20"></div>

                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                        <div className="w-24 h-24 md:w-32 md:h-32 bg-slate-900 rounded-full flex items-center justify-center text-white shadow-2xl">
                            <span className="text-4xl font-bold">{user?.name?.charAt(0).toUpperCase()}</span>
                        </div>

                        <div className="flex-1">
                           
                            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-2">{user?.name}</h1>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-slate-500 font-medium">
                                <div className="flex items-center gap-2">
                                    <Mail size={18} className="text-orange-500" />
                                    {user?.email || "No email linked"}
                                </div>
                                <div className="hidden sm:block w-1.5 h-1.5 bg-slate-300 rounded-full"></div>
                                <div className="flex items-center gap-2">
                                    <Calendar size={18} className="text-orange-500" />
                                    Member since {new Date().getFullYear()}
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="text-center px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="text-3xl font-bold text-orange-600 mb-1">{reports.length}</div>
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Reports</div>
                            </div>
                            <div className="text-center px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="text-3xl font-bold text-slate-900 mb-1">{links.length}</div>
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Assets</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column: Asset Connections */}
                    <div className="lg:col-span-1 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-3xl p-6 shadow-lg shadow-slate-100 border border-slate-100"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                                    <HardDrive size={20} />
                                </div>
                                <h2 className="text-lg font-bold text-slate-900">Connected Assets</h2>
                            </div>

                            {links.length > 0 ? (
                                <div className="space-y-4">
                                    {links.map((link, i) => (
                                        <div key={i} className="group p-4 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-md transition-all border border-slate-100">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                                                    ID: #{link.id}
                                                </div>
                                                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                            </div>
                                            <div className="space-y-2">
                                                <a href={link.drive_link_1} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-orange-600 transition-colors truncate">
                                                    <ExternalLink size={14} />
                                                    Site Plans
                                                </a>
                                                <a href={link.drive_link_2} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-orange-600 transition-colors truncate">
                                                    <ExternalLink size={14} />
                                                    Site Photos
                                                </a>
                                            </div>
                                        </div>     
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-8 text-slate-400">
                                    <p className="text-sm">No assets connected yet.</p>
                                </div>
                            )}
                        </motion.div>
                    </div>

                    {/* Right Column: Reports & Documents */}
                    <div className="lg:col-span-2 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-3xl p-8 shadow-lg shadow-slate-100 border border-slate-100 min-h-[500px]"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 bg-orange-50 text-orange-600 rounded-xl">
                                        <FileText size={20} />
                                    </div>
                                    <h2 className="text-xl font-bold text-slate-900">Inspection Reports</h2>
                                </div>
                            </div>

                            {reports.length > 0 ? (
                                <div className="space-y-4">
                                    {reports.map((report, i) => (
                                        <div key={i} className="group flex items-center justify-between p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-orange-200 hover:bg-orange-50/30 transition-all">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-red-500">
                                                    <FileText size={24} />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-slate-900 group-hover:text-orange-700 transition-colors">
                                                        {report.filename || "Inspection Report"}
                                                    </h3>
                                                    <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                                                        <span className="flex items-center gap-1">
                                                            <Clock size={12} />
                                                            {new Date(report.created_at || Date.now()).toLocaleDateString()}
                                                        </span>
                                                        <span>•</span>
                                                        <span className="uppercase">{report.status || "Completed"}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <button className="p-3 bg-white text-slate-700 rounded-xl hover:bg-orange-600 hover:text-white shadow-sm hover:shadow-lg transition-all">
                                                <Download size={20} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                                    <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                                        <Activity size={32} className="text-slate-300" />
                                    </div>
                                    <p className="font-medium">No reports generated yet</p>
                                    <p className="text-sm mt-1 mb-6">Reports will appear here once your inspection is complete.</p>
                                </div>
                            )}
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    );

        }
