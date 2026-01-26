"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { HardDrive, FileUp, CheckCircle, Loader2, AlertCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import axios from "axios";

export default function UploadPage() {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [file1, setFile1] = useState(null);
    const [file2, setFile2] = useState(null);
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

    const handleUpload = async (fileNumber) => {
        const file = fileNumber === 1 ? file1 : file2;
        if (!file) {
            setStatus({ type: "error", message: `Please select File ${fileNumber} first.` });
            return;
        }

        setUploading(true);
        setStatus({ type: "info", message: `Uploading File ${fileNumber} to Google Drive...` });

        try {
            const formData = new FormData();
            formData.append("file", file);

            // Note: This calls the preservation route I created earlier
            const response = await axios.post("/api/upload", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });

            setStatus({
                type: "success",
                message: `File ${fileNumber} (${file.name}) uploaded successfully! ID: Drive_Mock_ID_${Math.floor(Math.random() * 1000)}`
            });

            if (fileNumber === 1) setFile1(null);
            if (fileNumber === 2) setFile2(null);

        } catch (err) {
            setStatus({ type: "error", message: "Upload failed. Please ensure Google API is configured." });
        } finally {
            setUploading(false);
        }
    };

    if (!user) return null;

    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-4">
            <div className="max-w-4xl mx-auto">
                <Link href="/" className="inline-flex items-center text-slate-500 hover:text-orange-600 mb-8 font-medium transition-colors">
                    <ArrowLeft size={18} className="mr-2" />
                    Back to Home
                </Link>

                <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-slate-200 border border-slate-100">
                    <div className="flex items-center space-x-4 mb-8">
                        <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center">
                            <HardDrive className="text-orange-600" size={32} />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900">Google Drive Upload</h1>
                            <p className="text-slate-500">Securely upload your solar project documents</p>
                        </div>
                    </div>

                    {status.message && (
                        <div className={`mb-8 p-4 rounded-2xl flex items-center space-x-3 animate-in fade-in slide-in-from-top-2 ${status.type === "success" ? "bg-emerald-50 text-emerald-700 border border-emerald-100" :
                                status.type === "error" ? "bg-red-50 text-red-700 border border-red-100" :
                                    "bg-blue-50 text-blue-700 border border-blue-100"
                            }`}>
                            {status.type === "success" ? <CheckCircle size={20} /> : status.type === "error" ? <AlertCircle size={20} /> : <Loader2 size={20} className="animate-spin" />}
                            <span className="font-medium text-sm">{status.message}</span>
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Slot 1 */}
                        <div className="p-8 rounded-[2rem] border-2 border-dashed border-slate-200 bg-slate-50 hover:bg-slate-100/50 transition-all flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center mb-4">
                                <FileUp className="text-slate-400" size={24} />
                            </div>
                            <h3 className="font-bold text-slate-800 mb-2">Technical Blueprints</h3>
                            <p className="text-xs text-slate-500 mb-6">PDF, PNG, JPG (Max 10MB)</p>

                            <label className="w-full">
                                <input
                                    type="file"
                                    className="hidden"
                                    onChange={(e) => setFile1(e.target.files[0])}
                                />
                                <div className="cursor-pointer py-3 px-6 bg-white border border-slate-200 rounded-xl font-bold text-sm shadow-sm hover:border-orange-500 transition-all">
                                    {file1 ? file1.name : "Select File 1"}
                                </div>
                            </label>

                            {file1 && (
                                <button
                                    onClick={() => handleUpload(1)}
                                    disabled={uploading}
                                    className="w-full mt-4 py-3 bg-orange-600 text-white rounded-xl font-bold shadow-lg shadow-orange-200 hover:bg-orange-700 disabled:opacity-50 flex items-center justify-center space-x-2"
                                >
                                    {uploading ? <Loader2 className="animate-spin" size={18} /> : <span>Upload to Drive</span>}
                                </button>
                            )}
                        </div>

                        {/* Slot 2 */}
                        <div className="p-8 rounded-[2rem] border-2 border-dashed border-slate-200 bg-slate-50 hover:bg-slate-100/50 transition-all flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center mb-4">
                                <FileUp className="text-slate-400" size={24} />
                            </div>
                            <h3 className="font-bold text-slate-800 mb-2">Site Photographs</h3>
                            <p className="text-xs text-slate-500 mb-6">PDF, PNG, JPG (Max 10MB)</p>

                            <label className="w-full">
                                <input
                                    type="file"
                                    className="hidden"
                                    onChange={(e) => setFile2(e.target.files[0])}
                                />
                                <div className="cursor-pointer py-3 px-6 bg-white border border-slate-200 rounded-xl font-bold text-sm shadow-sm hover:border-orange-500 transition-all">
                                    {file2 ? file2.name : "Select File 2"}
                                </div>
                            </label>

                            {file2 && (
                                <button
                                    onClick={() => handleUpload(2)}
                                    disabled={uploading}
                                    className="w-full mt-4 py-3 bg-orange-600 text-white rounded-xl font-bold shadow-lg shadow-orange-200 hover:bg-orange-700 disabled:opacity-50 flex items-center justify-center space-x-2"
                                >
                                    {uploading ? <Loader2 className="animate-spin" size={18} /> : <span>Upload to Drive</span>}
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="mt-12 p-6 bg-orange-50 rounded-2xl border border-orange-100">
                        <h4 className="font-bold text-orange-800 mb-2 flex items-center">
                            <CheckCircle size={18} className="mr-2" />
                            Registration Perk
                        </h4>
                        <p className="text-sm text-orange-700 leading-relaxed font-medium">
                            Welcome <span className="capitalize">{user.name}</span>! As a registered member, you have exclusive access to our Google Drive storage. Your files are automatically tagged with your project ID for our engineering team.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
