import React from "react";
import { Link, useLocation } from "react-router";
import { IoHomeOutline } from "react-icons/io5";
import { RiTimeLine } from "react-icons/ri";
import { BiStats } from "react-icons/bi";

const Nav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getStyles = (path) => {
    const isActive = currentPath === path;
    const base =
      "font-medium transition-all duration-300 p-2 md:px-4 md:py-1.5 rounded-lg flex items-center gap-1 md:gap-2";
    const active = "text-white bg-[#244d44]";
    const inactive = "text-slate-500 hover:text-[#244d44] bg-transparent";

    return `${base} ${isActive ? active : inactive}`;
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 pt-5 pb-5">
        <div className="container mx-auto px-4 md:px-10">
          <div className="flex items-center justify-between h-14 md:h-16">
            <Link
              to="/"
              className="text-xl font-bold  tracking-tight text-slate-800"
            >
              Keen<span className="text-[#244d44]">Keeper</span>
            </Link>

            <div className=" flex items-center gap-6">
              <Link to="/home" className={getStyles("/home")}>
                <IoHomeOutline className="text-lg" />
                <span>Home</span>
              </Link>
              <Link to="/timeline" className={getStyles("/timeline")}>
                <RiTimeLine className="text-lg" />
                <span>Timeline</span>
              </Link>
              <Link to="/status" className={getStyles("/status")}>
                <BiStats className="text-lg" />
                <span>Stats</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className="h-14 md:h-16"></div>
      <div className="block md:hidden h-20"></div>
    </>
  );
};

export default Nav;