import React from "react";
import { Sidenav } from "../Sidenav/Sidenav";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { ChatWidget } from "../ChatWidget/ChatWidget";
export const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      <ChatWidget />
      <div className="w-full max-w-[1200px] pt-24 my-0 mx-auto pb-[50px] ">
        <div className="w-full flex px-[15px] lg:px-0">
          <Sidenav />

          <div>{children}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};
