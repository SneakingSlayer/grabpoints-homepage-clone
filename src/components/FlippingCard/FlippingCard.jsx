import React from "react";
import "./flippingCard.css";
export const FlippingCard = (props) => {
  const { title, description, img, backColor, subtitle, subtitleIcon } = props;
  return (
    <div className="flip min-h-[153px] lg:min-h-[204px]">
      <div className="flip-content ">
        <div className="flip-front bg-white rounded-lg  shadow-md ">
          <img
            className="rounded-t-lg w-full h-[100px] lg:h-[130px] object-cover "
            src={`${img}`}
            alt=""
          />
          <div className="px-2 lg:p-2">
            <h4 className="text-black truncate text-start font-bold text-lg ">
              {title}
            </h4>
            <div className="flex items-center space-x-1">
              <p className="truncate text-gray-400 text-start">{subtitle}</p>
              {subtitleIcon ? (
                <img src={subtitleIcon} className="h-4 w-4" />
              ) : null}
            </div>
          </div>
        </div>
        <div
          className={
            "flip-back  rounded-lg  shadow-md text-start py-3 px-4 relative" +
            ` ${backColor}`
          }
        >
          <h6 className="font-bold text-sm">Offer Details</h6>
          <p className="text-sm line-clamp-2 lg:line-clamp-5">{description}</p>
          <div className="flex items-center absolute bottom-2 w-full left-0 my-0 mx-auto">
            <a className="underline text-white flex-grow text-sm text-center truncate ml-2">
              More info
            </a>
            <button className="border-white font-bold border py-1.5 mr-4 text-sm flex-grow">
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
