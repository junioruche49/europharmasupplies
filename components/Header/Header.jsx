import React from "react";
import Navbar from "../Navbar/Navbar";

function Header(props) {
  return (
    <div className="w-full flex flex-row justify-between px-20 py-12 sticky top-0 z-40 bg-white">
      <h5>Logo</h5>
      <Navbar />
    </div>
  );
}

export default Header;
