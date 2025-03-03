import React from "react";

function About(props) {
  return (
    <div className="w-full">
      <div className="w-full bg-[#a7ed4f] h-96 flex justify-center items-center">
        <h1 className="text-[#12a19d] text-5xl font-extrabold">
          EuroPharma Supplies
        </h1>
      </div>
      <div className="w-full flex justify-center items-center mt-32">
        <div className="w-4/6">
          <h2 className="text-[#12a19d] text-center font-extrabold text-4xl mb-7">
            About EuroPharma Supplies
          </h2>
          <p className="leading-8 text-lg">
            “EuroPharma Supplies is an innovative startup based in Rotterdam,
            Netherlands, specializing in the pharmaceutical sector.“
          </p>
          <p className="leading-8 text-lg">
            The company is dedicated to the distribution of a wide range of
            pharmaceutical products. It also serves as a vital intermediary
            between pharmaceutical manufacturers, various commercial
            enterprises, and leading logistics service providers such as DHL,
            FedEx, and UPS.
          </p>
        </div>
      </div>
      <div className="w-full mt-32 flex flex-col gap-5">
        <div className="flex flex-row gap-14 w-full h-72">
          <div className="w-[34rem] bg-[#a7ed4f] flex items-center justify-center">
            <h2 className="leading-8 text-5xl font-extrabold text-[#12a19d]">
              Our Vision
            </h2>
          </div>
          <div className="flex flex-1">
            <p className="flex flex-1 items-center justify-center h-full leading-8 text-lg px-10">
              Our vision is become the leading to pharmaceutical sales and
              logistics partner in the w orld, recognized for our innovative
              solutions and exceptional service. We aim to enhance the
              healthcare landscape by providing efficient access to medications
              and contributing to the overall improvement of public health.
            </p>
          </div>
        </div>
        <div className="flex gap-14 w-full h-72">
          <div className="w-[34rem] bg-[#12a19d] flex items-center justify-center">
            <h2 className="leading-8 text-5xl font-extrabold text-[#a7ed4f]">
              Our Mission
            </h2>
          </div>
          <div className="flex flex-1">
            <p className="flex items-center justify-center h-full leading-8 text-lg px-10">
              EuroPharma Supplies is dedicated to enhancing the efficiency of
              the pharmaceutical supply chain, ensuring that healthcare
              providers and patients have seamless access to essential
              medications. We commit to delivering superior products and
              logistics solutions, promoting better health outcomes through
              reliability and excellence
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-14 w-full h-72">
          <div className="w-[34rem] bg-[#a7ed4f] flex items-center justify-center">
            <h2 className="leading-8 text-5xl font-extrabold text-[#12a19d]">
              Our Objectives
            </h2>
          </div>
          <div className="flex flex-1 items-center justify-center  flex-col leading-8 px-10">
            <p className="text-lg">
              Establish EuroPharma Supplies as a trusted supplier of
              pharmaceutical products in the Netherlands within the first year.
            </p>
            <p className=" text-lg ">
              Develop partnerships with at least five pharmaceutical
              manufacturers in the first 18 months.
            </p>
            <p className=" text-lg ">
              Achieve a 20% market share in the local pharmaceutical
              distribution market within five years & Generate sustainable
              revenue streams through our logistics services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
