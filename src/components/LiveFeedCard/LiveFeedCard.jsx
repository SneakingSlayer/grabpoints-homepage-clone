import React from "react";
import { dateTimeFormat } from "../../utils/utils";
export const LiveFeedCard = (props) => {
  const { title, imgUrl, flag, userInitials, description, points, date } =
    props;
  return (
    <div className="max-w-sm bg-white rounded-lg  shadow-md ">
      <a href="#">
        <img
          className="rounded-t-lg w-full h-[99px] object-cover"
          src={`${imgUrl}`}
          alt=""
        />
      </a>
      <div className="py-3 px-2 space-y-1">
        <a href="#">
          <h5 className=" text-lg font-bold  truncate">{title}</h5>
        </a>
        <div className="flex items-center space-x-2.5">
          <img src={`${flag}`} className="h-[12px] w-[18px]" />
          <p className="text-sm text-gray-400">{userInitials}</p>
        </div>
        <div className="flex items-center space-x-1.5">
          <p className="text-xs text-gray-400">
            {(description.includes("redeem") ? "Redeemed $" : "Earned $") +
              parseFloat(points).toFixed(2).toString()}
          </p>
          <img src={"/media/icons/gp-icon.webp"} className="h-4 w-4" />
        </div>
        <p className="text-xs text-gray-400">{dateTimeFormat(date)}</p>
      </div>
    </div>
  );
};
