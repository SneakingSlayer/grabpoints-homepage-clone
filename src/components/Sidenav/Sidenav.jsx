import React, { useState } from "react";
import { FaHome, FaFileAlt, FaPlayCircle, FaTag, FaGift } from "react-icons/fa";

export const Sidenav = () => {
  const [selected, setSelected] = useState("");
  return (
    <div className="hidden lg:block w-full max-w-[165px] mr-[50px]">
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
          <a className={selected === "activity" ? "font-bold" : ""} href="#">
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
          <a className={selected === "leaderboard" ? "font-bold" : ""} href="#">
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
          <img src={`/media/icons/free-crypto-icon.webp`} className="h-5 w-5" />{" "}
          <a href="https://freecryptorewards.com/" target="_blank">
            FreeCryptoRewards
          </a>
        </li>
      </ul>
    </div>
  );
};
