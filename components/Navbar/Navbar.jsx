import Link from "next/link";
import React from "react";

function Navbar(props) {
  return (
    <ul className="list-none flex flex-row gap-5">
      <li>
        <Link href={"/"}>Home</Link>{" "}
      </li>
      <li>
        <Link href={"/about"}>About</Link>
      </li>
      <li>
        <Link href={"/services"}>Services</Link>
      </li>
      {/* <li>
        <Link href={"/"}>Vision & Mission</Link>
      </li> */}
      <li>
        <Link href={"/supplies"}>Supplies</Link>
      </li>
      <li>
        <Link href={"/contact"}>Contact Us</Link>
      </li>
    </ul>
  );
}

export default Navbar;
