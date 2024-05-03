import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import discord from "@/public/assets/discord.svg";
import { useRouter } from "next-nprogress-bar";

export function MenuSheet() {
  const Router = useRouter();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="cursor-pointer block lg:hidden" size={30} />
      </SheetTrigger>
      <SheetContent className="bg-black border-none">
        <SheetClose asChild>
          <div className="flex flex-col h-screen items-center justify-center gap-[40px] text-white uppercase text-sm">
            <h2 onClick={() => Router.push("/")}>Homepage</h2>
            <h2 onClick={() => Router.push("/about")}>About</h2>
            <h2 onClick={() => Router.push("/roadmap")}>Roadmap</h2>
            <h2 onClick={() => Router.push("/nft")}>NFT</h2>
            <h2 onClick={() => Router.push("/")}>page</h2>
            <h2 onClick={() => Router.push("/contact")}>contact</h2>
            <button className="flex font-lato items-center font-semibold bg-custom-gradient gap-3 px-[16px] py-[10px] rounded-xl">
              Join Discord
              <Image className="bg-none w-[25px]" src={discord} alt="discord" />
            </button>
          </div>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
