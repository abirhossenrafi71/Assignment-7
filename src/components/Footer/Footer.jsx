import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1e3d33] text-white py-10 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        {/* Top Section: Branding & Slogan */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            KeenKeeper
          </h2>
          <p className="text-xs md:text-sm text-gray-300 max-w-md mx-auto opacity-80 leading-relaxed">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>

        {/* Middle Section: Social Icons */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold">
            Connect With Us
          </span>
          <div className="flex gap-5">
            <SocialButton d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            <SocialButton d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            <SocialButton d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" />
          </div>
        </div>

        {/* Bottom Section: Copyright & Policy */}
        <div className="w-full pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs text-gray-500">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialButton = ({ d }) => (
  <a
    href="#"
    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white group transition-all"
  >
    <svg
      className="w-5 h-5 text-white group-hover:text-[#1e3d33]"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d={d} />
    </svg>
  </a>
);

export default Footer;
