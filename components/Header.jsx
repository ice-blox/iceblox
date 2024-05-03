"use client";
import React, { useRef } from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
import useMousePosition from "@/lib/MousePosition";
import cube from "@/public/assets/cube.svg";
import Image from "next/image";
import { motion } from "framer-motion";
const Header = () => {
  const headerRef = useRef();
  const { x, y } = useMousePosition(headerRef);
  console.log(x / 100);
  return (
    <section
      ref={headerRef}
      className="border relative h-screen min-h-[700px]  flex flex-col justify-center items-center bg-transparent space-y-6 md:space-y-8"
    >
      <div
        // whileInView={{ x: x / 2, y: y / 2, transition: { x: 1, y: 1 } }}
        className={`absolute bottom-50 left-50 translate-x-[${
          x / 10
        }] transition-all`}
      >
        <Image src={cube} alt="cube" />
      </div>
      <h1 className="font-lato font-bold text-[60px] md:text-[92.8px] leading-[75px] md:leading-[112px] text-center">
        IceBlox NFT <br />
        Collection
      </h1>
      <p className="font-poppins text-[18px] tracking-wider md:text-sm font-extralight leading-8 md:leading-8 w-[90%] md:w-[70%] xl:w-[50%] text-center max-w-[950px] opacity-80">
        Welcome to Iceblox: Where the Web3 Revolution Begins! Dive into a world
        of innovation, creativity, and community-driven social media. Join us as
        we redefine the digital landscape one block at a time. Are you ready to
        unleash the power of Iceblox?
      </p>
      <Button className="uppercase bg-custom-gradient font-inter font-semibold text-sm leading-[20px] px-[40px] ">
        launch app{" "}
        <span>
          <MoveRight className="ml-5" />
        </span>
      </Button>
    </section>
  );
};

export default Header;
