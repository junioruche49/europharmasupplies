import React from "react";
import Navbar from "../Navbar/Navbar";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/img/logo.png";

function Header(props) {
  return (
    <div className="w-full flex flex-row justify-between px-20  sticky top-0 z-40 bg-white shadow-md">
      <Link href={"/"}>
        <Image src={logo} alt="logo" className="w-40 bg-[#12a19d] px-2" />
      </Link>
      <Navbar />
    </div>
  );
}

export default Header;
