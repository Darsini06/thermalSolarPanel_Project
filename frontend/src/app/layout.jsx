import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "SolarThermal | Clean Energy Solutions",
  description: "Advanced Thermal Solar Panel Solutions for a Sustainable Future",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased font-sans bg-slate-50 text-slate-900">
        <Navbar />
        <main>{children}</main>
        <footer className="bg-slate-900 text-slate-400 py-12 px-4 shadow-inner">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-xl font-bold text-white">
                Solar<span className="text-orange-500">Thermal</span>
              </span>
              <p className="mt-2 text-sm">Empowering the world with solar thermal energy.</p>
            </div>
            <div className="flex space-x-6">
              <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
              <span className="hover:text-white transition-colors cursor-pointer">Cookies Settings</span>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-slate-800 text-center text-sm">
            © {new Date().getFullYear()} SolarThermal Inc. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
