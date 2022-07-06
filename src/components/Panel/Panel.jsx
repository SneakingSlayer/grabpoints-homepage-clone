import React from "react";

export const Panel = (props) => {
  const { children, title } = props;
  return (
    <div className="pb-[35px] mb-[50px] border-b">
      <div className="flex items-center space-x-2 mb-[15px] flex-wrap">
        <h2 className="font-semibold text-2xl ">{props.title}</h2>
        <a href="#" className="underline font-semibold text-gray-500">
          View All {" >"}
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 flex flex-wrap ">
        {children}
      </div>
    </div>
  );
};
