import React from "react";

function Services(props) {
  return (
    <div className="w-full">
      <div className="w-full bg-[#a7ed4f] h-96 flex justify-center items-center">
        <h1 className="text-[#12a19d] text-5xl font-extrabold">
          EuroPharma Supplies Services
        </h1>
      </div>
      <div className="w-full flex justify-center items-center mt-32">
        <div className="w-4/6 flex flex-col gap-5">
          <div className="flex flex-row gap-5">
            <div className="flex flex-col flex-1 ">
              <h2 className="font-semibold text-xl text-[#12a19d]">
                Pharmaceutical Sales
              </h2>
              <p>
                Supplying prescription and over- the-counter medications to
                healthcare providers
              </p>
            </div>
            <div className="flex flex-col flex-1">
              <h2 className="font-semibold text-xl text-[#12a19d]">
                Third-Party Logistics (3PL) Services
              </h2>
              <p>
                Offering specialized warehousing, inventory management, and
                order fulfillment.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-5">
            <div className="flex flex-col flex-1">
              <h2 className="font-semibold text-xl text-[#12a19d]">
                Regulatory & Compliance Support .
              </h2>
              <p>
                Ensuring pharmaceutical products meet all necessary standards.
              </p>
            </div>
            <div className="flex flex-col flex-1">
              <h2 className="font-semibold text-xl text-[#12a19d]">
                Media & Marketing
              </h2>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
