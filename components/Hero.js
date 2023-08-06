import { maqueeData, newandNow } from "@/utils/data";
import { Divider } from "@mui/material";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <div className="lg:mt-[100px] md:mt-[100px] xxxs:mt-[60px] lg:mx-[320px] md:mx-[20px] xxxs:mx-[5px]">
      <div className="lg:flex md:flex xxxs:block  lg:space-x-5 md:space-x-5 xxxs:space-x-0">
        <div className="flex flex-col lg:space-y-0 md:space-y-2 xxxs:space-y-2 md:p-4 lg:p-0 xxxs:p-2">
          <Image
            src={"/images/end-of-summer.jpg"}
            height={500}
            width={500}
            className="md:w-screen xxxs:w-screen lg:w-[600px] lg:h-[450px] md:h-[450px] xxxs:h-[250px] lg:object-contain md:object-cover xxxs:object-contain"
            alt="image"
          />
          <span className="lg:w-[600px]">
            <h5 className="text-[10px] text-black font-bold font-serif">
              HOBBIES
            </h5>
            <h2 className="text-[25px] text-black font-serif">
              Summer Activities to Check Off Your Bucket List before Fall Hits
            </h2>
            <h2 className="text-[17px] text-black font-serif lg:flex md:hidden xxxs:hidden">
              Tack these end-of-summer activities onto your to-do list to take
              advantage of what’s left of the season and head into fall with no
              regrets.
            </h2>
          </span>
        </div>

        <div>
          <span className="flex space-x-1 justify-center md:flex lg:flex xxxs:hidden">
            <h2 className="text-gray-600 font-bold font-serif text-[35px]">
              New
            </h2>
            <h2 className="text-gray-600 font-bold font-serif text-[35px] italic">
              and
            </h2>
            <h2 className="text-gray-600 font-bold font-serif text-[35px]">
              Now
            </h2>
          </span>
          <div className="flex flex-col space-y-4">
            {newandNow.map((item, index) => {
              return (
                <div className="flex border border-gray-500" key={index}>
                  <Image
                    src={item.image}
                    height={150}
                    width={130}
                    className="object-contain"
                    alt="image"
                  />
                  <div className="py-4 pl-4">
                    <h2 className="text-black font-serif text-[10px] font-bold">
                      {item.category}
                    </h2>
                    <h2 className="text-black font-serif text-[18px] font-semibold">
                      {item.description}
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="py-4">
        <Divider className="bg-black" />
        <Marquee
          speed={30}
          className="p-3"
          style={{ backgroundColor: "#ecf6e4" }}
        >
          {maqueeData.map((item, index) => {
            return (
              <div className="flex items-center" key={index}>
                <Image
                  src={"/icons/fullstop.png"}
                  height={20}
                  width={20}
                  alt="image"
                  className="object-contain w-[30px] h-[30px] px-3"
                />
                <h2 className="text-black font-serif text-[14px]">
                  {item.description}
                </h2>
              </div>
            );
          })}
        </Marquee>
        <Divider className="bg-black" />
      </div>
    </div>
  );
};

export default Hero;
