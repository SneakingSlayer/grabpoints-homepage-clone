import React, { useState } from "react";
import {
  FaRegQuestionCircle,
  FaSearch,
  FaRegWindowMinimize,
} from "react-icons/fa";
import { BsDash } from "react-icons/bs";
export const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="fixed  z-50  bottom-5 right-5">
        <button
          onClick={() => setOpen(true)}
          className={
            "text-white bg-black rounded-full flex items-center space-x-2 lg:py-3 lg:px-6 px-3 py-3  flex-wrap " +
            `${open ? " hidden" : ""}`
          }
        >
          <FaRegQuestionCircle fontSize={21} />{" "}
          <span className="lg:block hidden font-bold">Support</span>
        </button>
        <div
          className={
            "bg-white w-[330px] h-[540px] shadow-md rounded-lg relative hidden " +
            `${open ? "lg:block" : " hidden"}`
          }
        >
          <div className="bg-black flex justify-center items-center flex-col rounded-t-lg pb-4 pt-2 px-6 space-y-2">
            <div className="flex justify-between items-center w-full">
              <div></div>
              <h5 className="text-white font-semibold">Support</h5>
              <button onClick={() => setOpen(false)} className="text-white">
                <BsDash fontSize={24} />
              </button>
            </div>
            <div className="w-full relative">
              <input
                placeholder="How can we help?"
                className="w-full px-8 py-1.5 rounded-md"
              />
              <FaSearch className="absolute text-gray-400 top-3 left-2" />
            </div>
          </div>
          <div className="overflow-y-auto p-4">
            <div>
              <h6 className="font-bold">Top Suggestions</h6>
              <ol className="list-decimal px-4">
                <li>Self learning</li>
                <li>Contribute at Open Source</li>
                <li>Gain Stack overflow respect</li>
              </ol>
            </div>
          </div>
          <div className="z-25 shadow-[-3px_-6px_32px_-8px_rgba(0,0,0,.1)] border-t bg-white absolute bottom-0 w-full rounded-b-lg">
            <p className="text-center text-gray-500 text-sm py-1.5 font-semibold ">
              zendesk
            </p>
          </div>
        </div>
      </div>

      <div
        className={
          "bg-white bg-white h-full w-full fixed z-40 overflow-auto  lg:hidden " +
          `${open ? "block" : " hidden"}`
        }
      >
        <div className="bg-black flex justify-center items-center flex-col  pb-4 pt-2 px-6 space-y-2">
          <div className="flex justify-between items-center w-full">
            <div></div>
            <h5 className="text-white font-semibold">Support</h5>
            <button onClick={() => setOpen(false)} className="text-white">
              <BsDash fontSize={24} />
            </button>
          </div>
          <div className="w-full relative">
            <input
              placeholder="How can we help?"
              className="w-full px-8 py-1.5 rounded-md"
            />
            <FaSearch className="absolute text-gray-400 top-3 left-2" />
          </div>
        </div>
        <div className="overflow-y-auto p-4">
          <div>
            <h6 className="font-bold">Top Suggestions</h6>
            <ol className="list-decimal px-4">
              <li>Self learning</li>
              <li>Contribute at Open Source</li>
              <li>Gain Stack overflow respect</li>
            </ol>
          </div>
        </div>
        <div className="z-25 shadow-[-3px_-6px_32px_-8px_rgba(0,0,0,.1)] border-t bg-white absolute bottom-0 w-full rounded-b-lg">
          <p className="text-center text-gray-500 text-sm py-1.5 font-semibold ">
            zendesk
          </p>
        </div>
      </div>
    </>
  );
};
