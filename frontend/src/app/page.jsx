"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Zap, Shield, Globe, Sun, FileUp, Database, HardDrive, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const name = localStorage.getItem("user_name");
    const token = localStorage.getItem("auth_token");
    if (token && name) {
      setUser({ name, token });
    }
  }, []);

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
              <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-6 py-2 rounded-full font-bold text-lg mb-8 animate-in zoom-in duration-500 shadow-sm border border-emerald-200">
                <CheckCircle size={20} />
                <span>Welcome back, <span className="text-emerald-900 capitalize">{user.name}</span>!</span>
              </div>
            ) : (
              <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full font-medium text-sm mb-6 animate-bounce">
                <Sun size={16} />
                <span>Next-Gen Solar Technology</span>
              </div>
            )}

            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8">
              Harness the Power of <span className="text-orange-600">Solar Thermal</span> Energy
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Our advanced thermal solar panels convert sunlight into efficient heat for your home or business, reducing carbon footprint and energy costs simultaneously.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              {!user ? (
                <>
                  <Link
                    href="/register"
                    className="w-full sm:w-auto px-8 py-4 bg-orange-600 text-white rounded-xl font-semibold shadow-lg shadow-orange-200 hover:bg-orange-700 hover:-translate-y-1 transition-all flex items-center justify-center"
                  >
                    Get a Free Quote <ArrowRight className="ml-2" size={20} />
                  </Link>
                  <Link
                    href="/about"
                    className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-all flex items-center justify-center shadow-sm"
                  >
                    Learn More
                  </Link>
                </>
              ) : (
                <Link
                  href="/upload"
                  className="w-full sm:w-auto px-10 py-4 bg-slate-900 text-white rounded-xl font-bold shadow-xl hover:bg-slate-800 hover:-translate-y-1 transition-all flex items-center justify-center"
                >
                  Go to Drive Upload <FileUp className="ml-2" size={20} />
                </Link>
              )}
            </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-primary">Why Solar Thermal?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto italic font-medium">
              More than just electricity — we provide heat, efficiency, and sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="text-orange-500" />,
                title: "Maximum Efficiency",
                desc: "Solar thermal collectors are up to 70% more efficient at harvesting energy than traditional PV panels.",
              },
              {
                icon: <Shield className="text-blue-500" />,
                title: "Built to Last",
                desc: "Weather-resistant materials and robust design ensure your system operates flawlessly for over 25 years.",
              },
              {
                icon: <Globe className="text-emerald-500" />,
                title: "Eco-Friendly",
                desc: "Significantly reduce your residential CO2 emissions by switching to solar thermal water heating solutions.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-orange-100 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed italic">{feature.desc}</p>
              </div>
            ))}
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
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8">
              Ready to switch to cleaner, cheaper energy?
            </h2>
            <p className="text-orange-100 text-xl mb-10 font-medium italic">
              Join thousands of satisfied homeowners who have already made the switch.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-10 py-5 bg-white text-orange-600 rounded-2xl font-bold text-lg shadow-xl hover:scale-105 active:scale-95 transition-all"
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