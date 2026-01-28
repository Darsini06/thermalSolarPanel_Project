"use client";

import React, { useState } from "react";
import {
    User, Mail, Phone, MapPin, Settings, Zap,
    MessageSquare, Send, CheckCircle
} from "lucide-react";
import { motion } from "framer-motion";

export default function BookingPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        location: "",
        systemSize: "",
        type: "Residential",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Thank you! Your inspection request has been received.");
    };

    return (
        <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
                    >
                        Book an <span className="text-orange-600">Inspection</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-600 max-w-2xl mx-auto"
                    >
                        Schedule your professional thermographic solar panel inspection today and ensure maximum efficiency.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-wider">Why Book With Us?</h2>
                            <div className="space-y-6">
                                {[
                                    {
                                        icon: CheckCircle,
                                        title: "Advanced Thermography",
                                        desc: "We use industrial-grade thermal cameras to spot hidden defects."
                                    },
                                    {
                                        icon: CheckCircle,
                                        title: "Detailed Reporting",
                                        desc: "Receive a comprehensive PDF report with ROI impact analysis."
                                    },
                                    {
                                        icon: CheckCircle,
                                        title: "Expert Technicians",
                                        desc: "Our certified inspectors have years of experience in solar health."
                                    },
                                    {
                                        icon: CheckCircle,
                                        title: "Fast Turnaround",
                                        desc: "Get your inspection scheduled within 48 hours of booking."
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start space-x-4">
                                        <item.icon className="text-orange-500 w-6 h-6 mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-bold text-slate-900">{item.title}</h3>
                                            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 p-6 bg-orange-50 rounded-2xl border border-orange-100">
                                <p className="text-orange-800 font-medium italic">
                                    "The most thorough inspection we've ever had. Found 3 hot spots that were significantly reducing our output."
                                </p>
                                <p className="text-orange-600 text-sm mt-2 font-bold">— Solar Synergy Inc.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white p-8 md:p-10 rounded-[3rem] shadow-2xl shadow-orange-100 border border-slate-100"
                    >
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Full Name"
                                        required
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all outline-none"
                                    />
                                </div>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        required
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all outline-none"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number"
                                        required
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all outline-none"
                                    />
                                </div>
                                <div className="relative">
                                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        name="location"
                                        placeholder="Site Location / Address"
                                        required
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all outline-none"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="relative">
                                    <Settings className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                    <select
                                        name="type"
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all outline-none appearance-none"
                                    >
                                        <option value="Residential">Residential</option>
                                        <option value="Commercial">Commercial</option>
                                        <option value="Industrial solar farm">Industrial solar farm</option>
                                    </select>
                                </div>
                                <div className="relative">
                                    <Zap className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        name="systemSize"
                                        placeholder="System Size (e.g. 10kW)"
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all outline-none"
                                    />
                                </div>
                            </div>

                            <div className="relative">
                                <MessageSquare className="absolute left-4 top-4 text-slate-400 w-5 h-5" />
                                <textarea
                                    name="message"
                                    rows="4"
                                    placeholder="Tell us about your requirements..."
                                    onChange={handleChange}
                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all outline-none resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-5 bg-orange-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-orange-200 hover:bg-orange-700 hover:-translate-y-1 transition-all flex items-center justify-center group uppercase tracking-widest"
                            >
                                Submit Inspection Request <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
