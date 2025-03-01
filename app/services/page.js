import Image from "next/image";
import React from "react";
import collaboration from "../../assets/img/collaboration.png";
import logistics from "../../assets/img/logistics.png";
import strategy from "../../assets/img/strategy.png";
import media from "../../assets/img/social-media.png";

function Services(props) {
  return (
    <div className="w-full">
      <div className="w-full bg-[#a7ed4f] h-96 flex justify-center items-center">
        <h1 className="text-[#12a19d] text-5xl font-extrabold">
          EuroPharma Supplies Services
        </h1>
      </div>
      <div className="w-full flex justify-center items-center mt-32">
        <div className="w-4/6 flex flex-col gap-20">
          <div className="flex flex-row gap-10">
            <div className="flex flex-col flex-1 ">
              <div className="flex flex-row">
                <Image
                  src={collaboration}
                  alt="collaboration"
                  className="w-12"
                />
                <h2 className="font-semibold text-xl text-[#12a19d] ml-4">
                  Pharmaceutical Sales
                </h2>
              </div>
              <p className="ml-16 mr-20">
                Supplying prescription and over- the-counter medications to
                healthcare providers
              </p>
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex flex-row">
                <Image src={logistics} alt="logistics" className="w-12" />
                <h2 className="font-semibold text-xl text-[#12a19d] ml-4">
                  Third-Party Logistics (3PL) Services
                </h2>
              </div>
              <p className="ml-16 mr-20">
                Offering specialized warehousing, inventory management, and
                order fulfillment.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-5">
            <div className="flex flex-col flex-1">
              <div className="flex flex-row">
                <Image src={strategy} alt="strategy" className="w-12" />
                <h2 className="font-semibold text-xl text-[#12a19d] ml-4">
                  Regulatory & Compliance Support.
                </h2>
              </div>
              <p className="ml-16 mr-20">
                Ensuring pharmaceutical products meet all necessary standards.
              </p>
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex flex-row">
                <Image src={media} alt="media" className="w-12" />
                <h2 className="font-semibold text-xl text-[#12a19d] ml-5">
                  Media & Marketing.
                </h2>
              </div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
