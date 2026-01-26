"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { HardDrive, FileUp, CheckCircle, Loader2, AlertCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import axios from "axios";

export default function UploadPage() {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [driveLink, setDriveLink] = useState("");
    const [uploading, setUploading] = useState(false);
    const [status, setStatus] = useState({ type: "", message: "" });

    useEffect(() => {
        const name = localStorage.getItem("user_name");
        const token = localStorage.getItem("auth_token");
        if (!token) {
            router.push("/login");
        } else {
            setUser({ name, token });
        }
    }, [router]);

    const handleLinkSubmit = async (e) => {
        e.preventDefault();

        if (!driveLink) {
            setStatus({ type: "error", message: "Please provide a Google Drive link." });
            return;
        }

        // Basic Google Drive link validation
        if (!driveLink.includes("drive.google.com")) {
            setStatus({ type: "error", message: "Please enter a valid Google Drive link (e.g., drive.google.com/...)." });
            return;
        }

        setUploading(true);
        setStatus({ type: "info", message: "Verifying and saving link..." });

        try {
            // Mock API call to save the link
            await new Promise(resolve => setTimeout(resolve, 1500));

            setStatus({
                type: "success",
                message: "Inspection documentation link successfully registered with your project!"
            });

            setDriveLink("");

        } catch (err) {
            setStatus({ type: "error", message: "Failed to save link. Please try again later." });
        } finally {
            setUploading(false);
        }
    };

    if (!user) return null;

    return (
        <div className="min-h-screen bg-white pt-32 pb-20 px-4">
            <div className="max-w-3xl mx-auto">
                <Link href="/" className="inline-flex items-center text-slate-500 hover:text-orange-600 mb-8 font-semibold transition-all hover:-translate-x-1">
                    <ArrowLeft size={18} className="mr-2" />
                    Back to Dashboard
                </Link>

                <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50/50 rounded-full translate-x-16 -translate-y-16"></div>

                    <div className="relative z-10">
                        <div className="flex items-center space-x-5 mb-10">
                            <div className="w-16 h-16 bg-orange-600 rounded-3xl flex items-center justify-center shadow-lg shadow-orange-200">
                                <HardDrive className="text-white" size={32} />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Project Documentation</h1>
                                <p className="text-slate-500 font-medium">Link your Google Drive inspection data</p>
                            </div>
                        </div>

                        {status.message && (
                            <div className={`mb-10 p-5 rounded-3xl flex items-center space-x-4 animate-in fade-in slide-in-from-top-4 duration-500 ${status.type === "success" ? "bg-emerald-50 text-emerald-700 border border-emerald-100/50" :
                                status.type === "error" ? "bg-red-50 text-red-700 border border-red-100/50" :
                                    "bg-orange-50 text-orange-700 border border-orange-100/50"
                                }`}>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${status.type === "success" ? "bg-emerald-100" : status.type === "error" ? "bg-red-100" : "bg-orange-100"}`}>
                                    {status.type === "success" ? <CheckCircle size={22} /> : status.type === "error" ? <AlertCircle size={22} /> : <Loader2 size={22} className="animate-spin" />}
                                </div>
                                <span className="font-bold text-base">{status.message}</span>
                            </div>
                        )}

                        <form onSubmit={handleLinkSubmit} className="space-y-8">
                            <div className="space-y-3">
                                <label htmlFor="driveLink" className="block text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">
                                    Google Drive Shared Link
                                </label>
                                <div className="relative flex items-center group">
                                    <div className="absolute left-5 text-slate-400 group-focus-within:text-orange-500 transition-colors">
                                        <FileUp size={22} />
                                    </div>
                                    <input
                                        id="driveLink"
                                        type="url"
                                        placeholder="https://drive.google.com/drive/folders/..."
                                        className="w-full pl-14 pr-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-[1.5rem] focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all font-medium text-slate-900 placeholder:text-slate-400"
                                        value={driveLink}
                                        onChange={(e) => setDriveLink(e.target.value)}
                                        required
                                    />
                                </div>
                                <p className="text-sm text-slate-500 ml-1 italic">
                                    * Please ensure the folder/file has "Anyone with the link" viewer access.
                                </p>
                            </div>

                            <button
                                type="submit"
                                disabled={uploading}
                                className="w-full py-5 bg-slate-900 text-white rounded-[1.5rem] font-bold text-lg shadow-2xl hover:bg-slate-800 active:scale-[0.98] transition-all flex items-center justify-center space-x-3 disabled:opacity-70"
                            >
                                {uploading ? (
                                    <>
                                        <Loader2 className="animate-spin" size={24} />
                                        <span>Submitting to Project...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Submit Documentation</span>
                                        <ArrowLeft className="rotate-180" size={20} />
                                    </>
                                )}
                            </button>
                        </form>

                        <div className="mt-14 pt-10 border-t border-slate-100">
                            <div className="bg-orange-50/50 rounded-[2rem] p-8 border border-orange-100/50">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-white rounded-2xl shadow-sm text-orange-600">
                                        <CheckCircle size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg mb-1">Professional Inspection Protocol</h4>
                                        <p className="text-slate-600 leading-relaxed font-medium">
                                            Registered Partner ID: <span className="text-orange-600 font-bold">INS-{Math.floor(1000 + Math.random() * 9000)}</span>
                                            <br />
                                            Once submitted, our engineering team will begin reviewing your thermographic data within 24 hours. Keep your link active during the review period.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
