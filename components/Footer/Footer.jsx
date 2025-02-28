import React from "react";

function Footer(props) {
  return (
    <footer className="w-full bg-[#12a19d] mt-24 p-10 flex flex-col text-white items-center justify-center">
      <p>EuroPharma Supplies</p>
      <p>&copy; {new Date().getFullYear()} EuroPharma Supplies</p>
    </footer>
  );
}

export default Footer;
