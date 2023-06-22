import React from "react";
import Sidebar from "./components/Sidebar/sidebar";
import Awesome from "./components/Awesome/awesome";
import Body from "./components/Body/body";
const LandingPage = () => {
  return (
    <>
    <Sidebar />
    <div class=" p-4 sm:ml-64 " >

    <Body />
    </div>
    </>
  );
};

export default LandingPage;
