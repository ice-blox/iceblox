"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
// import discord from "../public/assets/discord.svg";
import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import PhantomWalletConnect from "./PhantomConnect";

export function MenuSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="cursor-pointer block lg:hidden" size={30} />
      </SheetTrigger>
      <SheetContent className="bg-black border-none">
        <SheetClose asChild>
          <div className="flex flex-col h-screen items-center justify-center gap-[40px] text-white uppercase text-sm">
            <Link href="/">Homepage</Link>
            <Link href="/">About</Link>
            <Link href="/">Roadmap</Link>
            <Link href="/">NFT</Link>
            <Link href="/">page</Link>
            <Link href="/">contact</Link>
            <PhantomWalletConnect hide={false} />
          </div>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
