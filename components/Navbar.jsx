import Image from "next/image";
import React from "react";
import logo from "../public/assets/logo.svg";
import { MenuSheet } from "./Menu";
import PhantomWalletConnect from "./PhantomConnect";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="sticky z-10 top-0 flex w-full px-8 lg:px-0 justify-between lg:justify-around items-center py-[25px] bg-black font-inter font-semibold">
      <Image className="w-[250px] xl:w-[368px] " src={logo} alt="Logo" />
      <div className="hidden lg:flex items-center justify-center gap-[20px] lg:gap-[40px]  uppercase text-sm">
        <Link href="/">Homepage</Link>
        <Link href="/">About</Link>
        <Link href="/">Roadmap</Link>
        <Link href="/">NFT</Link>
        <Link href="/">Meme Builder</Link>
        <Link href="/">contact</Link>
      </div>
      <MenuSheet />
      {/* <Button className="hidden font-semibold w-fit lg:flex bg-custom-gradient gap-3 px-[16px] py-[10px] rounded-xl">
        Connect Wallet
      </Button> */}
      <PhantomWalletConnect hide={true} />
    </div>
  );
};

export default Navbar;
