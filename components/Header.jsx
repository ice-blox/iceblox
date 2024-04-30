import React from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

const Header = () => {
  return (
    <section className="h-screen min-h-[700px]  flex flex-col justify-center items-center bg-transparent space-y-6 md:space-y-8">
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
