"use client";

import Image from "next/image";
import React from "react";
import logo from "@/public/assets/logo.svg";
import discord from "@/public/assets/discord-icon.svg";
import { useRouter } from "next-nprogress-bar";
import { MenuSheet } from "./Menu";
import { Button } from "./ui/button";

const Navbar = () => {
  const Router = useRouter();
  return (
    <div className="fixed z-10 top-0 flex w-full px-8 lg:px-0 justify-between lg:justify-around items-center py-[25px] bg-black font-inter font-semibold">
      <Image className="w-[250px] xl:w-[368px] " src={logo} alt="Logo" />

      <div className="hidden lg:flex items-center justify-center gap-[20px] lg:gap-[40px]  uppercase text-sm">
        <h2 onClick={() => Router.push("/")}>Homepage</h2>
        <h2 onClick={() => Router.push("/about")}>About</h2>
        <h2 onClick={() => Router.push("/roadmap")}>Roadmap</h2>
        <h2 onClick={() => Router.push("/nft")}>NFT</h2>
        <h2 onClick={() => Router.push("/meme-builder")}>Meme Builder</h2>
        <h2 onClick={() => Router.push("/contact")}>contact</h2>
      </div>
      <MenuSheet />
      <Button className="hidden font-semibold w-fit lg:flex bg-custom-gradient gap-3 px-[16px] py-[10px] rounded-xl">
        Join Discord
        <Image className="bg-none" src={discord} alt="discord" />
      </Button>
    </div>
  );
};

export default Navbar;
