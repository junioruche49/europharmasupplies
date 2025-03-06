import React from "react";
import linkedin_1 from "../../assets/img/linkedin_1.png";
import Link from "next/link";
import Image from "next/image";

function Footer(props) {
  return (
    <footer className="w-full bg-[#12a19d] mt-24 p-10 flex flex-col text-white items-center justify-center">
      <p>&copy; {new Date().getFullYear()} EuroPharma Supplies</p>
      <div className="flex flex-row ">
        <Link
          href={"https://www.linkedin.com/company/europharma-supplies/"}
          target="_"
        >
          <Image src={linkedin_1} alt="linkedin_1" className="w-6" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
