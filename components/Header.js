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
        <div className="flex justify-between">
          <span className={`flex space-x-1 text-black font-serif text-[20px]`}>
            <h2 className="">The</h2>
            <h2 className="">Productive</h2>
            <h2 className="">Hindu</h2>
          </span>
          <div className="flex items-center space-x-5">
            <div className="flex space-x-2">
              <a href="facebook.com">
                <Image
                  src={"/icons/facebook.png"}
                  width={20}
                  height={20}
                  alt="image"
                  className="object-contain"
                />
              </a>

              <a href="instagram.com">
                <Image
                  src={"/icons/instagram.png"}
                  width={20}
                  height={20}
                  alt="image"
                  className="object-contain"
                />
              </a>

              <a href="twitter.com">
                <Image
                  src={"/icons/twitter.png"}
                  width={20}
                  height={20}
                  alt="image"
                  className="object-contain"
                />
              </a>

              <a href="whatsapp.com">
                <Image
                  src={"/icons/whatsapp.png"}
                  width={20}
                  height={20}
                  alt="image"
                  className="object-contain"
                />
              </a>
            </div>
            <div onClick={() => setMenu(!menu)}>
              <Image
                src={"/icons/menu.png"}
                width={20}
                height={20}
                alt="image"
                className={`${menu ? "hidden" : "visible"} `}
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
          className={`absolute top-[50px] right-6  w-[170px] h-fit rounded-md ${
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
