import React from "react";

function Team(props) {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full bg-[url(../assets/img/image-14.avif)] bg-blend-normal bg-cover h-[30rem]"></div>
      <div className="w-5/6 flex flex-col p-10 justify-center items-center -mt-20 bg-[#a7ed4f] mb-32">
        <h1 className="text-[#12a19d] text-5xl font-extrabold pb-10">
          Our Team
        </h1>
        <p>
          Our team at JuCE has one thing in common: we are passionate about
          making the welfare and future of the Nigerian child. Members of our
          team comprise of people who have worked in various capacities with
          children; either through tutoring, mentoring or advocacy. We bring
          this wealth of experience as well as our passion to making sure JuCE's
          mission is fulfilled.
        </p>
        <p>Get to know us!</p>
      </div>
      <div className="w-5/6 flex flex-col p-10 justify-center items-center bg-white mb-32">
        <h1 className="text-[#12a19d] text-5xl font-extrabold pb-32">
          Our Trustees
        </h1>
        <div className="flex flex-row w-full">
          <div className="flex flex-col w-[23%] h-32">
            <h2>PRINCE PROGRESS</h2>
            <p>Chief Executive Officer & Founder</p>
          </div>
          <div className="flex flex-col w-[23%] h-32">
            <h2>JOHNMARY T. ARINZE,MD PhD</h2>
            <p>President/Chief Medical Officer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
