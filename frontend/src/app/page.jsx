"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight, Zap, Shield, Globe, Sun, FileUp, Database,
  HardDrive, CheckCircle, User, Mail, Phone, MapPin,
  Settings, MessageSquare, Send
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    systemSize: "",
    type: "Residential",
    message: ""
  });

  useEffect(() => {
    const name = localStorage.getItem("user_name");
    const token = localStorage.getItem("auth_token");
    if (token && name) {
      setUser({ name, token });
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add submission logic here
    alert("Thank you! Your inspection request has been received.");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-tr from-orange-50 to-blue-50"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {user ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-6 py-2 rounded-full font-bold text-lg mb-8 shadow-sm border border-emerald-200"
              >
                <CheckCircle size={20} />
                <span>Welcome back, <span className="text-emerald-900 capitalize">{user.name}</span>!</span>
              </motion.div>
            ) : (
              <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full font-medium text-sm mb-6 animate-bounce">
                <Sun size={16} />
                <span>Next-Gen Solar Technology</span>
              </div>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8"
            >
              Expert <span className="text-orange-600">Solar Inspection</span> Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600 mb-10 leading-relaxed"
            >
              Ensure your solar infrastructure is operating at peak performance with our professional drone-based and thermographic inspection solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              {!user ? (
                <>
                  <Link
                    href="#inspection-form"
                    className="w-full sm:w-auto px-8 py-4 bg-orange-600 text-white rounded-xl font-semibold shadow-lg shadow-orange-200 hover:bg-orange-700 hover:-translate-y-1 transition-all flex items-center justify-center uppercase tracking-wider"
                  >
                    Book Inspection <ArrowRight className="ml-2" size={20} />
                  </Link>
                  <Link
                    href="/about"
                    className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-all flex items-center justify-center shadow-sm uppercase tracking-wider"
                  >
                    Learn More
                  </Link>
                </>
              ) : (
                <Link
                  href="/upload"
                  className="w-full sm:w-auto px-10 py-4 bg-slate-900 text-white rounded-xl font-bold shadow-xl hover:bg-slate-800 hover:-translate-y-1 transition-all flex items-center justify-center uppercase tracking-widest"
                >
                  Go to Drive Upload <FileUp className="ml-2" size={20} />
                </Link>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conditional Drive Upload Section */}
      {user && (
        <section id="drive-section" className="py-24 bg-slate-50 border-y border-slate-100 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-[3rem] p-12 shadow-2xl shadow-orange-100 border border-orange-100/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full translate-x-1/2 -translate-y-1/2 -z-0"></div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                    <HardDrive className="text-orange-600" size={32} />
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900 mb-6 font-primary italic">Secure Document Cloud</h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    As a registered user, you can now upload your installation plans, energy bills, and site photos directly to our secure Google Drive folder for faster processing.
                  </p>
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-3 text-slate-700 font-bold bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                      <Database className="text-blue-500" size={24} />
                      <span>Status: Connected to Google Cloud</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Link
                    href="/upload"
                    className="group p-8 bg-orange-600 rounded-[2rem] text-white hover:scale-[1.02] transition-all shadow-xl shadow-orange-200 flex flex-col items-center text-center"
                  >
                    <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                      <FileUp size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 uppercase">Upload File 1</h3>
                    <p className="text-orange-100 text-sm">Upload installation blueprints</p>
                  </Link>

                  <Link
                    href="/upload"
                    className="group p-8 bg-white border-2 border-orange-100 rounded-[2rem] text-slate-900 hover:border-orange-500 transition-all shadow-lg flex flex-col items-center text-center"
                  >
                    <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mb-6 group-hover:-rotate-12 transition-transform">
                      <FileUp className="text-orange-600" size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 uppercase text-orange-600">Upload File 2</h3>
                    <p className="text-slate-500 text-sm italic font-medium">Upload site photographs</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-primary">Our Inspection Excellence</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto italic font-medium">
              Precision auditing to maximize your solar asset's lifespan and output.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="text-orange-500" />,
                title: "Thermographic Analysis",
                desc: "Identify micro-cracks and hot spots within cells that are invisible to the naked eye using high-res thermal imaging.",
              },
              {
                icon: <Shield className="text-blue-500" />,
                title: "Drone-Based Surveys",
                desc: "Rapid, safe, and cost-effective aerial inspections for large-scale solar farms and hard-to-reach rooftop installations.",
              },
              {
                icon: <Globe className="text-emerald-500" />,
                title: "Performance Audits",
                desc: "Comprehensive diagnostic reports that provide actionable insights to improve overall system efficiency.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-orange-100 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed italic">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspection Form Section */}
      <section id="inspection-form" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-orange-200/20 rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4 block">Request Service</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Get Your Solar Panels <br />
                <span className="text-orange-600 italic font-serif">Inspected Today.</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Fill out the form to schedule a professional thermographic inspection. Our team will get back to you within 24 hours with a customized quote and deployment plan.
              </p>

              <div className="space-y-6">
                {[
                  { icon: CheckCircle, text: "High-Resolution Thermal Imaging" },
                  { icon: CheckCircle, text: "AI-Powered Fault Analysis" },
                  { icon: CheckCircle, text: "Detailed ROI Impact Reports" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 text-slate-700 font-medium">
                    <item.icon className="text-orange-500 w-5 h-5" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>Industrial solar farm</option>
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
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <Sun className="absolute -top-20 -right-20 w-80 h-80 text-orange-400" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { label: "Installations", value: "2,500+" },
              { label: "CO2 Saved", value: "15k Tons" },
              { label: "Customer Rating", value: "4.9/5" },
              { label: "Maintenance", value: "24/7" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-2">{stat.value}</div>
                <div className="text-slate-400 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {!user && (
        <section className="py-24 bg-orange-600 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 uppercase tracking-tight">
              Ready to switch to cleaner, cheaper energy?
            </h2>
            <p className="text-orange-100 text-xl mb-10 font-medium italic">
              Join thousands of satisfied homeowners who have already made the switch.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-10 py-5 bg-white text-orange-600 rounded-2xl font-bold text-lg shadow-xl hover:scale-105 active:scale-95 transition-all uppercase tracking-widest"
            >
              Start Your Journey <ArrowRight className="ml-2" />
            </Link>
          </div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 translate-y-1/3"></div>
        </section>
      )}
    </div>
  );
}
