import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Edit from "./Edit";
import Credit from "./Credit";

const About = () => {
  // to start page from top
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <>
      <h1>ABOUT</h1>

      {/* Nested Routes  */}
      <Routes>
        <Route path="edit" element={<Edit Profile />} />
        <Route path="credit" element={<Credit Profile />} />
      </Routes>
    </>
  );
};

export default About;
