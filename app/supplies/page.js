import Image from "next/image";
import React from "react";
import image10 from "../../assets/img/image-10.avif";
import image11 from "../../assets/img/image-11.avif";
import image12 from "../../assets/img/image-12.avif";
import image13 from "../../assets/img/image-13.avif";
import image15 from "../../assets/img/image-15.avif";
import image16 from "../../assets/img/image-16.avif";
import image17 from "../../assets/img/image-17.avif";
import image18 from "../../assets/img/image-18.avif";
import image19 from "../../assets/img/image-19.avif";
import image20 from "../../assets/img/image-20.avif";

function Supplies(props) {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full bg-[url(../assets/img/image-14.avif)] bg-blend-normal bg-cover h-[30rem]"></div>
      <div className="w-5/6 flex flex-col p-10 justify-center items-center -mt-20 bg-[#a7ed4f] mb-10">
        <h1 className="text-[#12a19d] text-5xl font-extrabold pb-10">
          EuroPharma Supplies
        </h1>
      </div>
      <div className="w-5/6 flex flex-row flex-wrap p-10 justify-center items-center bg-white mb-32">
        {/* <div className="flex flex-row w-full gap-8 px-20 mt-20 flex-wrap"> */}
        <div className=" h-[22rem] w-64 flex flex-col items-center shadow-xl p-4">
          <Image src={image10} alt="image10" className="h-72" />
          <p>Wholesale 10L/20L PP Plastic Carboy Polypropylene Medical</p>
        </div>
        <div className="h-[22rem]  w-64 flex flex-col items-center shadow-xl p-4">
          <Image src={image11} alt="image11" className="h-72" />
          <p>
            6 Well Cell Culture Plate, Flat, Non-Treated, Sterile 1/pk, 50/cs
          </p>
        </div>
        <div className="h-[22rem]  w-64 flex flex-col items-center shadow-xl p-4">
          <Image src={image12} alt="image12" className=" h-72" />
          <p>GelNest Matrix Customizable OEM Support Without Phenol Red</p>
        </div>
        <div className=" h-[22rem]  w-64 flex flex-col items-center shadow-xl p-4">
          <Image src={image13} alt="image13" className="h-72" />
          {/* <div className="bg-[#12a19d] w-full h-full"></div> */}
          <p>Reversible Pen Injector 60IU Boxed and Reusable with Big</p>
        </div>
        <div className="h-[22rem] w-64 flex flex-col items-center shadow-xl p-4">
          <Image src={image15} alt="image10" className="h-72" />
          <p>Laboratory 1000mL Square Shape PET Storage Bottles</p>
        </div>
        <div className=" h-[22rem] w-64 flex flex-col items-center shadow-xl p-4">
          <Image src={image16} alt="image11" className="h-72" />
          <p>Plastic Lab 5.0 ml 2D Barcode External Thread Cryogenic Tubes</p>
        </div>
        <div className="h-[22rem] w-64 flex flex-col items-center shadow-xl p-4">
          <Image src={image17} alt="image12" className=" h-72" />
          <p>
            500mL Square Shape PETG Plastic Media Storage Bottles Polypropylene
          </p>
        </div>
        <div className="h-[22rem] w-64 flex flex-col items-center shadow-xl p-4">
          <Image src={image18} alt="image12" className=" h-72" />
          <p>
            24-Well Plate Compatible PC Membrane Transwell Cell Culture Inserts
            Laboratory Supplies
          </p>
        </div>
        <div className="h-[22rem] w-64 flex flex-col items-center shadow-xl p-4">
          <Image src={image19} alt="image12" className=" h-72" />
          <p>
            Reusable 80 IU Insulin Pen Injector with Non-Needle and
            Non-Cartridge
          </p>
        </div>
        <div className="h-[22rem] w-64 flex flex-col items-center shadow-xl p-4">
          <Image src={image20} alt="image12" className=" h-72" />
          <p>Lab Supplies 10-Layer Cellstack BioFactory High Quality</p>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Supplies;
