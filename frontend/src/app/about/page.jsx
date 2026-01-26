export default function AboutPage() {
    return (
        <div className="pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8">
                        Precision through <span className="text-orange-600">Sunshine</span>.
                    </h1>
                    <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                        Founded in 2024, Solar Inspection is dedicated to providing high-fidelity diagnostic data for solar infrastructure. We utilize cutting-edge thermographic drones to ensure your energy yields remain at their theoretical maximum.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-orange-100 rounded-3xl -z-10 transition-transform group-hover:scale-105"></div>
                        <div className="aspect-video bg-slate-200 rounded-2xl overflow-hidden flex items-center justify-center text-slate-400">
                            <div className="text-center">
                                <p className="font-medium text-slate-600">Thermographic Precision</p>
                                <p className="text-sm italic font-primary mt-1">Aerial Drone Inspection Preview</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-primary italic">Our Mission</h2>
                        <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                            Our mission is to standardize excellence in solar maintenance. As solar adoption grows, the need for rapid, non-destructive, and accurate auditing is paramount to maintaining grid stability and investor ROI.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "AI-Powered Fault Detection",
                                "High-Res Thermal Imaging (LWIR)",
                                "Comprehensive ROI Reports",
                                "Certified Drone Pilot Network"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center space-x-3 text-slate-700 font-bold italic">
                                    <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs">✓</div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="bg-slate-50 rounded-[3rem] p-12 md:p-20 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 font-primary">Our Experts</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto mb-16 italic font-medium">
                        Meet the team of engineers and pilots redefining solar performance management.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { name: "John Doe", role: "CEO & Founder" },
                            { name: "Sarah Smith", role: "CTO" },
                            { name: "Mike Johnson", role: "Head of Operations" },
                            { name: "Emily Brown", role: "Lead Engineer" }
                        ].map((person, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className="w-32 h-32 bg-slate-200 rounded-full mb-4 shadow-lg"></div>
                                <h3 className="font-bold text-lg text-slate-900">{person.name}</h3>
                                <p className="text-orange-600 text-sm font-medium">{person.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
