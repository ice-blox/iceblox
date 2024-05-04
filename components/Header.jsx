"use client";
import React, { useRef } from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
import useMousePosition from "@/lib/MousePosition";
import cube from "@/public/assets/cube.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import Cube from "./cube";
const Header = () => {
  const headerRef = useRef();
  const { x, y } = useMousePosition(headerRef);
  return (
    <section
      ref={headerRef}
      className="overflow-hidden relative h-screen min-h-[700px] flex flex-col justify-center items-center bg-transparent space-y-6 md:space-y-8"
    >
      <Cube x={x} y={y} size="59px" position="left-[7%] top-[20%]" />
      <Cube x={x} y={y} size="52px" position="left-[55%] top-[15%]" />
      <Cube x={x} y={y} size="52px" position="right-[7%] top-[16%]" />

      {/* ----------------row-1----------- */}
      <Cube x={x} y={y} size="29px" position="left-[15%] top-[45%]" />
      <Cube x={x} y={y} size="60px" position="right-[15%] top-[40%]" />

      {/* ----------------row-2----------- */}

      <Cube x={x} y={y} size="60px" position="left-[4%] bottom-[15%]" />
      <Cube x={x} y={y} size="75px" position="left-[23%] bottom-[18%]" />
      <Cube x={x} y={y} size="29px" position="right-[27%] bottom-[20%]" />
      <Cube x={x} y={y} size="90px" position="right-[7%] bottom-[25%]" />

      <h1 className="font-lato font-bold text-[45px] md:text-[72.8px] leading-[55px] md:leading-[82px] text-center">
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
