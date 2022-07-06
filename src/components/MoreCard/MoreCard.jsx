import React from "react";
import { FaTag } from "react-icons/fa";
import "./moreCard.css";
export const MoreCard = (props) => {
  const { icon, color, title, subtitle, bgColor } = props;

  return (
    <div className="more  min-h-[153px] lg:min-h-[204px] ">
      <div className="more-content ">
        <div
          className={
            "more-front  text-white rounded-lg shadow-md p-4 flex justify-center items-center flex-col " +
            bgColor
          }
        >
          <div className="flex justify-center">{props.icon}</div>
          <div className="px-2 lg:p-2">
            <h4
              className={
                "truncate font-bold text-lg text-center" + ` text-${color}`
              }
            >
              {title}
            </h4>
            <p className={" text-gray-400 text-center" + ` text-${color}`}>
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
