import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Divider } from "@mui/material";
import { motion } from "framer-motion";

import {
  aboutmeVariants,
  contactVariants,
  ExperienceVariants,
  logoVariants,
  portfolioVariants,
  ServicesVariants,
  testimonialsVariants,
} from "utils/motion";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div
      className="fixed top-0 left-0 right-0"
      style={{ backgroundColor: "#fffefe" }}
    >
      <motion.div
        className="lg:mx-[100px] md:mx-[10px] xxxs:mx-[5px] p-4 "
        style={{ backgroundColor: "#fffefe" }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="flex justify-between items-center">
          <span
            className={`flex   text-black font-serif text-[18px] animate-pulse space-x-1`}
          >
            <h2 className="font-serif">THE</h2>
            <h2 className="font-serif">PRODUCTIVE</h2>
            <h2 className=" font-serif">HINDU</h2>
          </span>
          <div className="flex items-center space-x-5 ">
            <div className="flex space-x-3 lg:flex md:flex xxxs:hidden">
              <a href="facebook.com" className="flex items-center space-x-2">
                <Image
                  src={"/icons/search.png"}
                  width={20}
                  height={20}
                  alt="image"
                  className="object-contain"
                />
                <h2 className="text-black font-serif">SEARCH</h2>
              </a>

              <a href="instagram.com">
                <h2 className="text-black font-serif">ADVERTISE</h2>
              </a>

              <a href="twitter.com">
                <h className="text-black font-serif">ABOUT</h>
              </a>

              <a href="whatsapp.com">
                <h className="text-black font-serif">CONTACT US</h>
              </a>
            </div>
            <div
              onClick={() => setMenu(!menu)}
              className="flex items-center space-x-3"
            >
              <Image
                src={"/icons/search.png"}
                width={20}
                height={20}
                alt="image"
                className="object-contain lg:hidden md:hidden xxxs:flex"
              />
              <Image
                src={"/icons/menu.png"}
                width={20}
                height={20}
                alt="image"
                className={`${
                  menu ? "hidden" : "visible xxxs:flex"
                } md:hidden lg:hidden `}
              />
              <Image
                src={"/icons/close.png"}
                width={20}
                height={20}
                alt="image"
                className={`${menu ? "visible" : "hidden"} `}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center md:space-x-3 lg:space-x-6 text-black font-serif justify-center p-2 text-[14px] lg:flex md:flex xxxs:hidden">
          <motion.div
            variants={portfolioVariants}
            initial={"hidden"}
            whileInView="show"
          >
            <Link href={"/"}>
              <h2>CAREER & FINANCE</h2>
            </Link>
          </motion.div>
          <motion.div
            variants={ServicesVariants}
            initial={"hidden"}
            whileInView="show"
          >
            <Link href={"/"}>
              <h2>FASHION</h2>
            </Link>
          </motion.div>

          <motion.div
            variants={ExperienceVariants}
            initial={"hidden"}
            whileInView="show"
          >
            <Link href={"/"}>
              <h2>BEAUTY</h2>
            </Link>
          </motion.div>

          <motion.div
            variants={testimonialsVariants}
            initial={"hidden"}
            whileInView="show"
          >
            <Link href={"/"}>
              <h2>LIVING</h2>
            </Link>
          </motion.div>

          <motion.div
            variants={aboutmeVariants}
            initial={"hidden"}
            whileInView="show"
          >
            <Link href={"/"}>
              <h2>WELLNESS</h2>
            </Link>
          </motion.div>
        </div>

        <div
          className={`absolute top-[80px] right-6  w-[170px] h-fit rounded-md ${
            menu ? "visible" : "hidden"
          } bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-orange-900 via-amber-100 to-orange-900 pulseCtm`}
        >
          <div className="text-black text-center text-[14px] font-serif flex flex-col space-y-1 lg:hidden md:hidden xxxs:flex-col">
            <h2 className="text-[25px] mt-[20px]">Read</h2>
            <Link href={"/"}>CAREER & FINANCE</Link>
            <Link href={"/"}>FASHION</Link>
            <Link href={"/"}>BEAUTY</Link>
            <Link href={"/"}>BEAUTY</Link>
            <Link href={"/"}>WELLNESS</Link>
          </div>

          <div className="text-black text-center text-[14px] font-serif flex flex-col space-y-1 pb-2">
            <h2 className="text-[25px] mt-[10px]">Learn</h2>
            <Link href={"/"}>ABOUT</Link>
            <Link href={"/"}>PODCAST</Link>
            <Link href={"/"}>ADVERTISE</Link>
            <Link href={"/"}>JOIN OUR TEAM</Link>
            <Link href={"/"}>CONTACT</Link>
          </div>
        </div>
      </motion.div>
      <Divider className="bg-gray-700" />
    </div>
  );
};

export default Header;
