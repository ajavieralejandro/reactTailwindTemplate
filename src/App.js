import React from "react";
import Sidebar from "./components/Sidebar/sidebar";
import Awesome from "./components/Awesome/awesome";
import Body from "./components/Body/body";
import Body2 from "./components/Body/body2";
import Team from "./components/Team/team";
import Contact from "./components/Contact/contact";

const LandingPage = () => {
  return (
    <>
    <Sidebar />
    <div class=" p-4 sm:ml-64 " >

    <Body />
    <Body2 />
    <Team />
    <Contact />
    </div>
    </>
  );
};

export default LandingPage;
