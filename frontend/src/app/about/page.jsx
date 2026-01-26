"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, BarChart3, Users, Target, Globe, Award, Rocket } from "lucide-react";
import Image from "next/image";

const stats = [
    { label: "Solar Panels Inspected", value: "2.5M+", icon: Zap },
    { label: "Efficiency Increase", value: "18%", icon: BarChart3 },
    { label: "Global Clients", value: "500+", icon: Globe },
    { label: "Fault Detection Accuracy", value: "99.9%", icon: ShieldCheck },
];

const values = [
    {
        title: "Precision Engineering",
        description: "We leverage military-grade thermal sensors and custom AI algorithms to identify faults invisible to the human eye.",
        icon: Target,
        color: "bg-blue-50 text-blue-600",
    },
    {
        title: "Sustainable Future",
        description: "Every kilowatt-hour saved is a step toward a greener planet. We're committed to maximizing renewable potential.",
        icon: Rocket,
        color: "bg-green-50 text-green-600",
    },
    {
        title: "Industry Excellence",
        description: "Setting the gold standard for thermographic inspections with certified pilots and world-class analysis.",
        icon: Award,
        color: "bg-orange-50 text-orange-600",
    },
    {
        title: "Global Reach",
        description: "Our distributed network of pilots ensures we can deploy to any solar farm on Earth within 48 hours.",
        icon: Globe,
        color: "bg-purple-50 text-purple-600",
    },
];

const team = [
    {
        name: "Dr. Adrian Thorne",
        role: "Chief Executive Officer",
        bio: "Former Renewable Energy Director with 20+ years in solar infrastructure.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
    },
    {
        name: "Elena Rodriguez",
        role: "Chief Technology Officer",
        bio: "AI & Computer Vision specialist, pioneer in thermal fault detection algorithms.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
    },
    {
        name: "Marcus Chen",
        role: "Head of Operations",
        bio: "Logistics expert managing a global fleet of 200+ specialized inspection drones.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop",
    },
    {
        name: "Sarah Williams",
        role: "Lead Thermal Engineer",
        bio: "Certified Level III Thermographer with a passion for renewable efficiency.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
    },
];

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-orange-50/50 to-transparent -z-10" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={stagger}
                        className="text-center max-w-4xl mx-auto mb-16"
                    >
                        <motion.span
                            variants={fadeIn}
                            className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-orange-600 uppercase bg-orange-100 rounded-full"
                        >
                            Our Story
                        </motion.span>
                        <motion.h1
                            variants={fadeIn}
                            className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight"
                        >
                            Pioneering the <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-500">Thermal Frontier</span>.
                        </motion.h1>
                        <motion.p
                            variants={fadeIn}
                            className="text-xl text-slate-600 leading-relaxed mb-10"
                        >
                            Founded with a vision to maximize the world's renewable energy yield, Solar Inspection combines aerospace technology with advanced artificial intelligence to protect the heart of the green revolution.
                        </motion.p>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 md:p-12 bg-white rounded-[3rem] shadow-2xl shadow-orange-100/50 border border-slate-100"
                    >
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center group">
                                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-2xl bg-slate-50 text-orange-500 transition-transform group-hover:scale-110 group-hover:bg-orange-50 duration-300">
                                    <stat.icon className="w-6 h-6" />
                                </div>
                                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">{stat.value}</div>
                                <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-orange-200/30 rounded-[3rem] blur-3xl -z-10" />
                            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl group">
                                <img
                                    src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1000&auto=format&fit=crop"
                                    alt="Solar Farm"
                                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <p className="text-lg font-medium opacity-90 italic">"Ensuring every sunbeam is converted into progress."</p>
                                </div>
                            </div>
                        </motion.div>

                        <div>
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4 block"
                            >
                                Why We Exist
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl font-bold text-slate-900 mb-8 leading-tight"
                            >
                                We're on a mission to secure the future of <span className="text-orange-600 font-serif italic text-5xl">clean energy</span>.
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-slate-600 text-lg mb-10 leading-relaxed"
                            >
                                As the world transitions to renewable energy, maintaining the health of solar assets becomes critical. Manual inspections are slow, dangerous, and often inaccurate. We solve this by bringing the latest in aerospace and AI to the field.
                            </motion.p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {values.map((v, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (i * 0.1) }}
                                        className="p-6 bg-white rounded-3xl border border-slate-100 hover:shadow-xl hover:shadow-orange-100/20 transition-all duration-300 group"
                                    >
                                        <div className={`w-12 h-12 rounded-2xl ${v.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                                            <v.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="font-bold text-slate-900 mb-2">{v.title}</h3>
                                        <p className="text-sm text-slate-500 leading-relaxed">{v.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-bold text-slate-900 mb-6"
                        >
                            The Minds Behind the Vision
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-600 text-lg italic"
                        >
                            A diverse team of engineers, pilots, and data scientists working together to redefine solar maintenance.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {team.map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group"
                            >
                                <div className="relative mb-6">
                                    <div className="absolute -inset-2 bg-gradient-to-br from-orange-400 to-amber-200 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                                    <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-slate-100 shadow-lg">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="absolute -bottom-4 right-4 bg-orange-500 text-white p-3 rounded-2xl shadow-xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-orange-600 cursor-pointer">
                                        <Rocket className="w-5 h-5" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-orange-600 transition-colors uppercase tracking-tight">{member.name}</h3>
                                <p className="text-orange-600 text-sm font-bold mb-3 italic tracking-wide">{member.role}</p>
                                <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto rounded-[4rem] bg-slate-900 p-12 md:p-24 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-orange-600/20 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                            Ready to maximize your <br />
                            <span className="text-orange-500 font-serif italic uppercase tracking-widest">energy yield?</span>
                        </h2>
                        <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-12">
                            Join the hundreds of solar farm operators who trust our thermal insights to maintain peak performance.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-orange-500/20 uppercase tracking-widest">
                                Book an Inspection
                            </button>
                            <button className="px-10 py-4 border border-slate-700 hover:border-slate-500 text-white rounded-full font-bold text-lg transition-all hover:bg-slate-800 uppercase tracking-widest">
                                Contact Sales
                            </button>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}

