import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
                        Get in <span className="text-orange-600">Touch</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto italic font-medium">
                        Have questions about our inspection technology or need a drone survey consultation? Our team is here to help you audit your solar infrastructure.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="lg:col-span-1 space-y-8">
                        {[
                            {
                                icon: <Mail className="text-orange-500" />,
                                title: "Email Us",
                                detail: "info@solarinspection.com",
                                sub: "Response within 24 hours"
                            },
                            {
                                icon: <Phone className="text-orange-500" />,
                                title: "Call Us",
                                detail: "+1 (555) 123-4567",
                                sub: "Mon-Fri, 9am - 6pm EST"
                            },
                            {
                                icon: <MapPin className="text-orange-500" />,
                                title: "Our Office",
                                detail: "123 Solar Way, Energy District",
                                sub: "Clean City, CA 90210"
                            }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start space-x-5 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                                    <p className="text-slate-800 font-medium">{item.detail}</p>
                                    <p className="text-slate-500 text-sm">{item.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                            placeholder="Jane"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                        placeholder="jane@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                                    <textarea
                                        rows="4"
                                        className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>
                                <button className="w-full py-4 bg-orange-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-orange-200 hover:bg-orange-700 hover:-translate-y-1 active:scale-[0.98] transition-all flex items-center justify-center space-x-2">
                                    <span>Send Message</span>
                                    <Send size={20} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
