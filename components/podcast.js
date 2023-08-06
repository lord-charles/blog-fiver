import Image from "next/image";
import React from "react";

const Podcast = () => {
  return (
    <div className="pt-4 flex items-center lg:mx-[320px] md:mx-[20px] xxxs:mx-[5px] border border-black lg:h-[250px] md:h-[220px] xxxs:h-fit overflow-hidden lg:flx-row md:flex-row xxxs:flex-col relative">
      <div className="relative z-[999] lg:left-5 md:left-0 xxxs:left-0 xxxs:top-[-70px] lg:top-0 md:top-0">
        <Image
          src={"/images/productivehindu.png"}
          height={300}
          width={300}
          className="w-[300px] h-[300px]"
          alt="image"
        />
      </div>
      <div className="relative md:right-[100px] lg:right-3 xxxs:top-[-280px] md:top-0 lg:top-0">
        <Image
          src={"/images/podcast.gif"}
          height={300}
          width={300}
          className="md:w-[400px] md:h-[400px] lg:w-[400px] lg:h-[400px] xxxs:w-[700px] xxxs:h-[500px] xxxs:object-cover relatively "
          alt="image"
        />
      </div>

      <div className="absolute md:right-[-60px] lg:right-[80px]  md:w-[400px] lg:w-[490px] flex  items-center xxxs:bottom-[50px] md:bottom-[-30px] lg:bottom-[-30px] xxxs:pl-8 md:pl-0 lg:pl-0">
        <div className="flex xxxs:block lg:flex space-x-9">
          <div className="xxxs:pb-10">
            <h2 className="text-black text-[30px] font-bold font-sans ">
              All-New:The Productive Hindu Podcast
            </h2>
            <Image
              src={"/icons/glasses.png"}
              height={50}
              width={50}
              className="w-[40px] h-[40px] object-contain "
              alt="image"
            />

            <div className="border rounded-full p-1 border-black flex justify-around w-[200px] mt-2">
              <h2 className="text-black font-serif">subscribe</h2>
              <Image
                src={"/icons/arrowright.png"}
                width={20}
                height={20}
                alt="image"
              />
            </div>
          </div>
          <h2 className="text-black text-[20px] font-bold font-serif md:hidden xxxs:flex-col lg:flex relative xxxs:right-10 lg:right-0">
            Psst... The Productive Hindu Podcast has a brand new look! Subscribe
            today so you don&apos;t miss a thing.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Podcast;
