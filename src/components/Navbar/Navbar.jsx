import React, { useState, useEffect } from "react";
import { FaUserFriends, FaEnvelope, FaTimes } from "react-icons/fa";

import { FaHome, FaFileAlt, FaPlayCircle, FaTag, FaGift } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const navigate = useNavigate();
  const [navbar, setNavbar] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [selected, setSelected] = useState("");
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  }, [window.scrollY]);

  useEffect(() => {
    if (mobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobile]);

  return mobile ? (
    <nav className={"bg-white h-full w-full fixed z-40 overflow-auto"}>
      <div className="flex justify-between items-center bg-black py-3 px-4">
        <button onClick={() => navigate("/")} className="flex items-center ">
          <img
            src={"/media/icons/logo-xl.webp"}
            className="w-full max-w-[125px] h-auto"
            alt="GrabPoints logo"
          />
        </button>
        <button onClick={() => setMobile(false)} className="text-white">
          <FaTimes fontSize={26} />
        </button>
      </div>
      <div className="px-[15px] lg:px-4 flex flex-wrap justify-between items-center my-0 mx-auto py-3">
        <div className="block w-full ">
          <ul className="mb-[44px]">
            <li className="text-lg font-bold border-b pb-[8px] mb-[8px]">
              Earn Points
            </li>
            <li
              onClick={() => setSelected("home")}
              className="flex items-center space-x-1.5 mb-1.5"
            >
              <FaHome className="text-orange-400" />
              <a className={selected === "home" ? "font-bold" : ""} href="#">
                Home
              </a>
            </li>
            <li
              onClick={() => setSelected("surveys")}
              className="flex items-center space-x-1.5 mb-1.5"
            >
              <FaFileAlt className="text-emerald-500" />
              <a className={selected === "surveys" ? "font-bold" : ""} href="#">
                Surveys
              </a>
            </li>
            <li
              onClick={() => setSelected("watch")}
              className="flex items-center space-x-1.5 mb-1.5"
            >
              <FaPlayCircle className="text-red-500" />
              <a className={selected === "watch" ? "font-bold" : ""} href="#">
                Watch
              </a>
            </li>
            <li
              onClick={() => setSelected("offers")}
              className="flex items-center space-x-1.5 mb-1.5"
            >
              <FaTag className="text-blue-500" />
              <a className={selected === "offers" ? "font-bold" : ""} href="#">
                Offers
              </a>
            </li>
          </ul>
          <ul className="mb-[44px]">
            <li className="text-lg font-bold border-b pb-[8px] mb-[8px]">
              Rewards
            </li>
            <li
              onClick={() => setSelected("gifts")}
              className="flex items-center space-x-1.5 mb-1.5"
            >
              <FaGift className="text-orange-500" />
              <a className={selected === "gifts" ? "font-bold" : ""} href="#">
                Gift Cards & Cash
              </a>
            </li>
          </ul>
          <ul className="mb-[44px]">
            <li className="text-lg font-bold border-b pb-[8px] mb-[8px]">
              Earn Points
            </li>
            <li onClick={() => setSelected("inbox")} className=" mb-1.5">
              <a className={selected === "inbox" ? "font-bold" : ""} href="#">
                Inbox
              </a>
            </li>
            <li onClick={() => setSelected("profile")} className=" mb-1.5">
              <a className={selected === "profile" ? "font-bold" : ""} href="#">
                Profile
              </a>
            </li>
            <li onClick={() => setSelected("about")} className=" mb-1.5">
              <a className={selected === "about" ? "font-bold" : ""} href="#">
                About Me
              </a>
            </li>
            <li onClick={() => setSelected("activity")} className=" mb-1.5">
              <a
                className={selected === "activity" ? "font-bold" : ""}
                href="#"
              >
                Activity
              </a>
            </li>
            <li onClick={() => setSelected("invite")} className=" mb-1.5">
              <a className={selected === "invite" ? "font-bold" : ""} href="#">
                Invite Friends
              </a>
            </li>
            <li onClick={() => setSelected("logout")} className=" mb-1.5">
              <a className={selected === "logout" ? "font-bold" : ""} href="#">
                Logout
              </a>
            </li>
          </ul>
          <ul className="mb-[44px]">
            <li className="text-lg font-bold border-b pb-[8px] mb-[8px]">
              Quick Links
            </li>
            <li onClick={() => setSelected("how")} className=" mb-1.5">
              <a className={selected === "how" ? "font-bold" : ""} href="#">
                How It Works
              </a>
            </li>
            <li onClick={() => setSelected("live")} className=" mb-1.5">
              <a className={selected === "live" ? "font-bold" : ""} href="#">
                Live Feeds
              </a>
            </li>
            <li onClick={() => setSelected("leaderboard")} className=" mb-1.5">
              <a
                className={selected === "leaderboard" ? "font-bold" : ""}
                href="#"
              >
                Leaderboard
              </a>
            </li>
          </ul>
          <ul className="mb-[44px]">
            <li className="text-lg font-bold border-b pb-[8px] mb-[8px]">
              Our Network
            </li>
            <li className="flex items-center space-x-1.5 mb-1.5">
              <img src={`/media/icons/zoombucks.webp`} className="h-5 w-5" />{" "}
              <a href="https://zoombucks.com/" target="_blank">
                ZoomBucks
              </a>
            </li>
            <li className="flex items-center space-x-1.5 mb-1.5">
              <img src={`/media/icons/gcloot.webp`} className="h-5 w-5" />{" "}
              <a href="https://gcloot.com/" target="_blank">
                GCloot
              </a>
            </li>
            <li className="flex items-center space-x-1.5 mb-1.5">
              <img
                src={`/media/icons/free-crypto-icon.webp`}
                className="h-5 w-5"
              />{" "}
              <a href="https://freecryptorewards.com/" target="_blank">
                FreeCryptoRewards
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  ) : (
    <nav
      className={
        navbar
          ? "bg-black w-full fixed z-40 opacity-[.90]"
          : "bg-black w-full fixed z-40"
      }
    >
      <div className="container px-[15px] lg:px-0 flex flex-wrap justify-between items-center my-0 mx-auto max-w-[1200px] py-3">
        <button
          onClick={() => setMobile(true)}
          className="flex items-center block lg:hidden space-x-1"
        >
          <img src={"/media/icons/icon-hamburg.webp"} />
          <h1 className="text-white font-semibold text-xl">Menu</h1>
        </button>

        <button
          onClick={() => navigate("/")}
          className="flex items-center hidden lg:block"
        >
          <img
            src={"/media/icons/logo-xl.webp"}
            className="w-[208px] max-w-auto h-auto"
            alt="GrabPoints logo"
          />
        </button>

        <div className="">
          <ul className="flex items-center space-x-8">
            <li className="hidden md:block">
              <a
                href="#"
                className="flex flex-wrap items-center text-white"
                aria-current="page"
              >
                <FaUserFriends className="mr-[10px]" fontSize={18} />{" "}
                <span className="text-center font-semibold max-w-[120px] leading-none">
                  Refer and Earn 500 points
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="text-white relative">
                <div className="font-bold absolute border-black border z-50 h-2 w-2 top-[-5px] right-[-8px] rounded-full bg-yellow-300 text-black flex justify-center items-center text-xs p-1.5">
                  0
                </div>
                <FaEnvelope className="" fontSize={21} />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-2xl flex items-center space-x-3"
              >
                <span className="font-semibold">0</span>
                <img
                  src={"/media/icons/gp-icon.webp"}
                  className="w-[24px] h-[24px]"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
