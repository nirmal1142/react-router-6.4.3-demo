import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer";

export const Header = () => {
  return (
    <div className="w-full top-0 h-14 ">
      <div className="flex bg-gray sticky">
        <div className="px-5">
          <h1 className="text-3xl font-[roboto] text-slate-100 font-bold">
            Space Travel.
          </h1>
        </div>
        {/* Header Menu List */}
        <div className="">
          {/*  menu list div */}
          <div className="flex flex-row w-full">
            <ul className="flex">
              <li className="px-5">
                <a href="/home">Home</a>
              </li>
              <li className="px-5">
                <a href="/about">About</a>
              </li>
              <li className="px-5">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          {/* <span className="">Home</span>
          <span className="px-5">About</span>
          <span className="px-5">Contact</span> */}
          {/* auth buttons */}
          <div className="flex content-end w-full">
            <button className="bg-slate-100 text-slate-500 rounded-md px-4 py-2">
              Login
            </button>
            <button className="bg-slate-100 text-slate-500 rounded-md px-4 py-2">
              Register
            </button>
          </div>
        </div>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};
