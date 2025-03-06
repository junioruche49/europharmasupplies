"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

function Navbar(props) {
  const router = usePathname();

  const isActive = (path) => {
    console.log(router);
    return router === path ? "active" : "";
  };

  return (
    <ul className="list-none flex flex-row justify-center items-center gap-5">
      <li>
        <Link href={"/"} className={isActive("/")}>
          Home
        </Link>{" "}
      </li>
      <li>
        <Link href={"/about"} className={isActive("/about")}>
          About
        </Link>
      </li>
      <li>
        <Link href={"/services"} className={isActive("/services")}>
          Services
        </Link>
      </li>
      {/* <li>
        <Link href={"/"}>Vision & Mission</Link>
      </li> */}
      <li>
        <Link href={"/supplies"} className={isActive("/supplies")}>
          Supplies
        </Link>
      </li>
      <li>
        <Link href={"/contact"} className={isActive("/contact")}>
          Contact Us
        </Link>
      </li>
      <li>
        <Link href={"/contact#address"} className={isActive("/contact")}>
          AFROBIOTECH LTD
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
