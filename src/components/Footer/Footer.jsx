import React from "react";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
export const Footer = () => {
  return (
    <footer className="w-full  bg-gray-100 py-10">
      <div className="w-full max-w-[1200px] my-0 mx-auto flex flex-col px-[15px] lg:px-0">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 flex flex-wrap w-full">
          <div className="flex-grow">
            <h3 className="mb-2 pb-2  font-bold text-lg">Ways To Earn</h3>
            <div className="h-[1px] bg-gray-300 max-w-[124px]"></div>
            <div className="mt-2 pt-2">
              <ul>
                <li>Answer Surveys</li>
                <li>Watch Videos</li>
                <li>Complete Offers</li>
                <li>Invite Friends</li>
              </ul>
            </div>
          </div>
          <div className=" flex-grow">
            <h3 className="mb-2 pb-2  font-bold text-lg">Need Help?</h3>
            <div className="h-[1px] bg-gray-300 max-w-[124px]"></div>
            <div className="mt-2 pt-2">
              <ul>
                <li>F.A.Q.</li>
                <li>Support</li>
              </ul>
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="mb-2 pb-2  font-bold text-lg">About</h3>
            <div className="h-[1px] bg-gray-300 max-w-[124px]"></div>
            <div className="mt-2 pt-2">
              <ul>
                <li>Blog</li>
                <li>Privacy Policy</li>
                <li>Terms</li>
              </ul>
            </div>
          </div>
          <div className=" flex-grow">
            <h3 className="mb-2 pb-2  font-bold text-lg ">Our Network</h3>
            <div className="h-[1px] bg-gray-300 max-w-[124px]"></div>
            <div className="mt-2 pt-2">
              <ul>
                <li className="flex items-center space-x-1.5 mb-1.5">
                  <img
                    src={"/media/icons/zoombucks.webp"}
                    className="h-5 w-5"
                  />{" "}
                  <a href="https://zoombucks.com/" target="_blank">
                    ZoomBucks
                  </a>
                </li>
                <li className="flex items-center space-x-1.5 mb-1.5">
                  <img src={"/media/icons/gcloot.webp"} className="h-5 w-5" />{" "}
                  <a href="https://gcloot.com/" target="_blank">
                    GCloot
                  </a>
                </li>
                <li className="flex items-center space-x-1.5 mb-1.5">
                  <img
                    src={"/media/icons/free-crypto-icon.webp"}
                    className="h-5 w-5"
                  />{" "}
                  <a
                    className="break-all"
                    href="https://freecryptorewards.com/"
                    target="_blank"
                  >
                    FreeCryptoRewards
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className=" flex-grow">
            <h3 className="mb-2 pb-2 font-bold text-lg">Connect</h3>
            <div className="h-[1px] bg-gray-300 max-w-[124px]"></div>
            <div className="mt-2 pt-2">
              <ul className="flex items-center space-x-1.5">
                <li>
                  <a href="https://www.facebook.com/GrabPoints" target="_blank">
                    <FaFacebookSquare fontSize={36} className="text-blue-800" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/grabpoints" target="_blank">
                    <FaTwitterSquare fontSize={36} className="text-sky-500" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-12 ">
          <img
            src={`${"/media/icons/logo-rewardholdings.png"}`}
            className="mb-8"
          />
          <p className="text-sm">Copyright © Reward Holdings Limited</p>
        </div>
        <div className="mt-8 mb-2">
          <p className="text-center text-sm">
            GrabPoints®-related trademarks and the GrabPoints logo are the
            property of GrabPoints; all rights reserved. Other trademarks
            appearing on this site are property of their respective owners,
            which do not endorse and are not affiliated with GrabPoints or its
            promotions.
          </p>
        </div>
      </div>
    </footer>
  );
};
