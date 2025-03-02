import React from "react";
import like from "../../assets/img/like.png";
import pin from "../../assets/img/pin.png";
import mail from "../../assets/img/mail.png";
import telephone from "../../assets/img/telephone.png";
import Image from "next/image";

function Contact(props) {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full bg-[url(../assets/img/contact-us.avif)] bg-blend-normal bg-cover h-[30rem]"></div>
      <div className="w-4/6 flex flex-col p-10 justify-center items-center -mt-20 bg-white mb-32">
        <h1 className="text-[#12a19d] text-5xl font-extrabold pb-32">
          Contact Us
        </h1>
        <div>
          <form className="flex flex-row flex-wrap gap-10">
            <div className="flex flex-col w-[47%]">
              <label>First Name </label>
              <input className="border-b-2 border-[#12a19d] focus:outline-none" />
            </div>
            <div className="flex flex-col w-[47%]">
              <label>Last Name</label>
              <input className="border-b-2 border-[#12a19d] focus:outline-none" />
            </div>
            <div className="flex flex-col w-[47%]">
              <label>Email </label>
              <input className="border-b-2 border-[#12a19d] focus:outline-none" />
            </div>
            <div className="flex flex-col w-[47%]">
              <label>Phone </label>
              <input className="border-b-2 border-[#12a19d] focus:outline-none" />
            </div>
            <div className="flex flex-col w-full">
              <label>Your Message</label>
              <input className="border-b-2 border-[#12a19d] focus:outline-none" />
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-row w-full border-2 border-[#12a19d] -mb-24">
        <div
          className="flex flex-col flex-1 w-[25] justify-center items-center border-2 border-t-0 
            border-b-0 border-l-0
        border-[#12a19d] p-10"
        >
          <Image src={pin} alt="pin" className="w-8" />
          <h2 className="font-semibold text-lg text-[#12a19d]">Address</h2>
          <p className="text-sm text-[#12a19d] text-center">
            ARINZE LODGE, UMUNKWEJIM CLOSE, <br />
            URUOKWE, EGBEMA, OZUBULU, <br />
            ANAMBRA STATE, NIGERIA
          </p>
        </div>
        <div
          className="flex flex-col flex-1 w-[25] justify-center items-center border-2 border-t-0 
            border-b-0 border-l-0
        border-[#12a19d] p-10"
        >
          <Image src={telephone} alt="telephone" className="w-8" />
          <h2 className="font-semibold text-lg text-[#12a19d]">Phone</h2>
          <p className="text-sm text-[#12a19d] text-center">089349930432</p>
        </div>
        <div
          className="flex flex-col flex-1 w-[25] justify-center items-center border-2 border-t-0 
            border-b-0 border-l-0
        border-[#12a19d] p-10"
        >
          <Image src={mail} alt="mail" className="w-8" />
          <h2 className="font-semibold text-lg text-[#12a19d]">Email</h2>
          <p className="text-sm text-[#12a19d] text-center">
            info@EuroPharmaSupplies.com
          </p>
        </div>
        <div
          className="flex flex-col flex-1 w-[25] justify-center items-center 
        border-[#12a19d] p-10"
        >
          <Image src={like} alt="like" className="w-8" />
          <h2 className="font-semibold text-lg text-[#12a19d]">Connect</h2>
          <p className="text-sm text-[#12a19d] text-center">
            info@EuroPharmaSupplies.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
