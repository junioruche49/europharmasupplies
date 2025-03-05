import { Carousel } from "antd";
import DHL from "../assets/img/DHL-Logo.wine.svg";
import FedEx from "../assets/img/FedEx-Logo.wine.png";
import United_Parcel_Service from "../assets/img/United_Parcel_Service-Logo.wine.svg";
import image8 from "../assets/img/image-8.png";
import image9 from "../assets/img/image-9.jpeg";
import image10 from "../assets/img/image-10.avif";
import image11 from "../assets/img/image-11.avif";
import image12 from "../assets/img/image-12.avif";
import image13 from "../assets/img/image-13.avif";
import NextLogo from "../assets/img/Next-logo.svg";
import Image from "next/image";
import Link from "next/link";

const contentStyle = {
  height: "760px",
  color: "#12a19d",
  textAlign: "center",
  // background: "#12a19d",
};

export default function Home() {
  return (
    <main className="flex flex-col">
      <Carousel
        autoplay={{ dotDuration: true }}
        autoplaySpeed={5000}
        className=" px-20"
      >
        <div>
          <h1
            style={contentStyle}
            className="font-extrabold grayscale-25 drop-shadow-2xl text-6xl flex justify-center items-center bg-[url(../assets/img/image-4.png)] bg-blend-normal bg-cover bg-no-repeat"
          >
            Welcome to <br /> EuroPharma Supplies
          </h1>
        </div>
        <div>
          <h1
            style={contentStyle}
            className="font-extrabold  text-6xl flex justify-center drop-shadow-2xl
             items-center bg-[url(../assets/img/image-5.png)] bg-blend-normal bg-cover"
          >
            Pharmaceutical Sales
          </h1>
        </div>
        <div>
          <h1
            style={contentStyle}
            className="font-extrabold drop-shadow-2xl text-6xl flex bg-[url(../assets/img/image-6.png)] bg-blend-normal bg-cover justify-center items-center"
          >
            Third-Party Logistics (3PL) Services
          </h1>
        </div>
        <div>
          <h1
            style={contentStyle}
            className="font-extrabold drop-shadow-2xl text-6xl flex bg-[url(../assets/img/image-7.png)] bg-blend-normal bg-cover justify-center items-center"
          >
            Regulatory & Compliance Support
          </h1>
        </div>
      </Carousel>
      <h2 className="font-bold text-5xl py-5 text-[#12a19d] flex items-center justify-center mt-20">
        Supplies
      </h2>
      <div className="flex w-full gap-8 px-20 ">
        <div className="flex-1 h-[22rem] flex flex-col items-center shadow-xl p-4">
          <Image src={image10} alt="image10" className="h-72" />
          <p>Wholesale 10L/20L PP Plastic Carboy Polypropylene Medical</p>
        </div>
        <div className="flex-1 h-[22rem] flex flex-col items-center shadow-xl p-4">
          <Image src={image11} alt="image11" className="h-72" />
          <p>
            6 Well Cell Culture Plate, Flat, Non-Treated, Sterile 1/pk, 50/cs
          </p>
        </div>
        <div className="flex-1 h-[22rem] flex flex-col items-center shadow-xl p-4">
          <Image src={image12} alt="image12" className=" h-72" />
          <p>GelNest Matrix Customizable OEM Support Without Phenol Red</p>
        </div>
        <div className="flex-1 h-[22rem] flex flex-col items-center shadow-xl p-4">
          <Image src={image13} alt="image13" className="h-72" />
          {/* <div className="bg-[#12a19d] w-full h-full"></div> */}
          <p>Reversible Pen Injector 60IU Boxed and Reusable with Big</p>
        </div>
      </div>
      <div className="flex w-full items-center justify-center mt-5 mb-10">
        <Link
          href={"/supplies"}
          className="bg-[#12a19d] px-4 py-3 text-lg w-fit mt-5 text-white font-bold"
        >
          View All
        </Link>
      </div>

      <div className="flex flex-row gap-8 w-full px-20 mt-20">
        <div className="flex flex-col w-[42%] bg-[url(../assets/img/image-7.png)] bg-cover pl-10 pt-3 pb-10">
          <div className="flex w-[55%] flex-col bg-[#a7ed4f] p-5 border-b-[5px] border-t-[5px] border-[#12a19d]">
            <h2 className="font-bold text-2xl py-5 text-[#12a19d]">
              About EuroPharma
            </h2>
            <p className="mb-16">
              “EuroPharma Supplies is an innovative startup based in Rotterdam,
              Netherlands, specializing in the pharmaceutical sector.“ The
              company is dedicated to the distribution of a wide range of
              pharmaceutical products. It also serves as a vital intermediary
              between pharmaceutical manufacturers, various commercial
              enterprises, and leading logistics service providers such as DHL,
              FedEx, and UPS.
            </p>
            <Link
              href={"/about"}
              className="bg-[#12a19d] px-4 py-3 text-lg w-fit mt-5 text-white font-bold"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-[58%] bg-[url(../assets/img/image-21.png)] bg-cover pl-5 pt-3 pb-5">
          <div className="flex w-[40%] flex-col bg-[#a7ed4f] p-5 border-b-[5px] border-t-[5px] border-[#12a19d]">
            <h2 className="font-bold text-2xl py-5 text-[#12a19d]">
              Our core Value
            </h2>
            <p>
              Quality: We prioritize quality in our products and services,
              striving for excellence to meet the needs of our partners and
              customers.
            </p>
            <p>
              Customer-Centricity: Our customers needs are at the forefront of
              our business. We actively listen to their feedback and work to
              exceed their expectations.
            </p>
            <p>
              Innovation: We embrace change and continually seek innovative
              solutions that enhance our services and improve supply chain
              efficiency.
            </p>
            <p className="mb-16">
              Collaboration: We believe in the power of partnerships and
              teamwork, working closely with clients, suppliers, and
              stakeholders to achieve common goals.
            </p>
            <Link
              href={"/about"}
              className="bg-[#12a19d] px-4 py-3 text-lg w-fit mt-5 text-white font-bold"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <section className="w-full flex flex-row  px-20 mt-48">
        <div className="w-full bg-[#12a19d] pb-10 flex flex-row">
          <div className="w-full px-5 flex flex-col items-center ">
            <div className="w-[70%] text-white">
              <h2 className="font-bold text-2xl py-10 text-white mt-10">
                Our Business Objectives
              </h2>
              <ol className="list-disc ml-10">
                <li className="mb-6 font-medium text-lg">
                  Establish EuroPharma Supplies as a trusted supplier of
                  pharmaceutical products in the Netherlands within the first
                  year.
                </li>
                <li className="mb-6 font-medium text-lg">
                  Establish EuroPharma Supplies as a trusted supplier of
                  pharmaceutical products in the Netherlands within the first
                  year.
                </li>
                <li className="mb-6 font-medium text-lg">
                  Establish EuroPharma Supplies as a trusted supplier of
                  pharmaceutical products in the Netherlands within the first
                  year.
                </li>
              </ol>
            </div>
          </div>
          <Image src={image9} alt="image8" className="pr-10 pb-2" />
        </div>
      </section>
      <section className="w-full mt-16 px-20">
        <h2 className="font-bold text-5xl py-5 mb-20 text-[#12a19d] flex items-center justify-center">
          Our Achievements
        </h2>
        <div className="flex flex-row gap-16 w-full">
          <div className="flex flex-1 flex-col leading-none">
            <div className="flex w-fit flex-col">
              <h2 className="text-[#a7ed4f] text-[10rem] font-bold">54</h2>
              <div className="w-full flex flex-row-reverse mt-5">
                <p className="text-[#12a19d] w-fit text-right text-3xl font-bold border-t-[5px] border-[#a7ed4f]">
                  Customers
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col leading-none">
            <div className="flex w-fit flex-col">
              <h2 className="text-[#a7ed4f] text-[10rem] font-bold">125</h2>
              <div className="w-full flex flex-row-reverse mt-5">
                <p className="text-[#12a19d] w-fit text-right text-3xl font-bold border-t-[5px] border-[#a7ed4f]">
                  Supplies
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col leading-none">
            <div className="flex w-fit flex-col">
              <h2 className="text-[#a7ed4f] text-[10rem] font-bold">100+</h2>
              <div className="w-full flex flex-row-reverse mt-5">
                <p className="text-[#12a19d] w-fit text-right text-3xl font-bold border-t-[5px] border-[#a7ed4f]">
                  Deliveries
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col leading-none">
            <div className="flex w-fit flex-col">
              <h2 className="text-[#a7ed4f] text-[10rem] font-bold">50</h2>
              <div className="w-full flex flex-row-reverse mt-5">
                <p className="text-[#12a19d] w-fit text-right text-3xl font-bold border-t-[5px] border-[#a7ed4f]">
                  Cities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="w-full flex  flex-row  px-20 mt-48">
        <div className="w-full px-5 bg-[#12a19d] flex flex-row items-center ">
          <div className="w-[30%] text-white"></div>
          <div className="w-[40%] text-white text-center pb-16">
            <h2 className="font-bold text-3xl py-10 text-white mt-10">
              Testimonials
            </h2>
            <p className="font-bold text-xl">
              “EuroPharma Supplies is a great initiative. That helps in sales
              and delivery of pharmaceutical products. I studied computer
              science, and I am currently in Sales and Marketing. Supporting
              access to essential medicines in underserved regions. Partnering
              with healthcare organizations to enhance patient care outcomes.”
            </p>
            <p className="font-light text-base">PRINCE PROGRESS, CEO</p>
          </div>
          <div className="w-[30%] text-white"></div>
        </div>
      </section> */}

      <section className="w-full mt-48 px-20">
        <h2 className="font-bold text-5xl py-5 text-[#12a19d] flex items-center justify-center">
          Our Partners
        </h2>
        <div className="flex flex-row gap-5 w-full">
          <Image src={DHL} alt="DHL" className="w-[300px] h-[300px]" />
          <Image src={FedEx} alt="FedEx" className="w-[300px] h-[300px]" />
          <Image
            src={United_Parcel_Service}
            className="w-[300px] h-[300px]"
            alt="United_Parcel_Service"
          />
          <Image src={NextLogo} alt="NextLogo" />
        </div>
      </section>
    </main>
  );
}
