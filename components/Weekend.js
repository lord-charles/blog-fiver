import { weekendp1 } from "@/utils/data";
import { Divider } from "@mui/material";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import { fadeIn, slideIn, staggerContainer } from "utils/motion";

const Weekend = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="lg:mx-[320px] md:mx-[20px] xxxs:mx-[5px]"
    >
      <div className="flex space-x-1 justify-center items-center">
        <h2 className="text-black font-serif md:text-[35px] lg:text-[35px] xxxs:text-[20px]">
          Cheers to the weekend
        </h2>
        <Image src={"/icons/cheers.png"} height={50} width={50} alt="image" />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 xxxs:grid-cols-1 place-items-center gap-4">
        {weekendp1.map((item, index) => {
          return (
            <motion.div
              key={index}
              className="relative border border-black"
              variants={fadeIn("bottom", "tween", 0.3, 1.5)}
            >
              <Image
                src={item.image}
                height={600}
                width={600}
                alt="image"
                className="object-cover w-full h-[400px]"
              />
              <Divider className="bg-black" />
              <h2 className="text-black font-serif px-1 py-4 lg:text-[16px] md:text-[16px] xxxs:text-[14px] h-[80px] text-center">
                {item.description}
              </h2>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Weekend;
