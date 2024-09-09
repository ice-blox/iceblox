import React from "react";
import discord from "../public/assets/discord.svg";
import twitch from "../public/assets/twitch.svg";
import facebook from "../public/assets/facebook.svg";
import instagram from "../public/assets/instagram.svg";
import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { MoveRight } from "lucide-react";

const Footer = () => {
  const socials = [discord, twitch, facebook, instagram];
  return (
    <footer>
      <div className="border-b-2 w-full bg-matte-black mt-[100px] flex flex-col items-center py-[100px] space-y-5">
        <div className="flex justify-around sm:justify-center items-center sm:space-x-[70px] w-full">
          {socials.map((item, i) => (
            <Image src={item} alt={item} key={i} />
          ))}
        </div>

        <h2 className="blue-sub-head-800 font-lato w-full sm:w-5/6">
          🚀 Don&apos;t Miss Out on the Coolest Revolution of the Digital Age!
          🚀
        </h2>

        <p className="text-[18px] tracking-wider md:text-sm font-extralight text-center opacity-80 w-5/6 lg:w-3/4 max-w-[1500px] ">
          Ready to embark on an adventure unlike any other? Join us at Iceblox
          and be part of the Web3 revolution that&apos;s shaking up the social
          media landscape. With cutting-edge technology, exclusive rewards, and
          a vibrant community waiting to welcome you with open arms, now&apos;s
          your chance to be at the forefront of change. Don&apos;t let this
          opportunity slip away – sign up today and experience the future of
          social media with Iceblox! 🌐❄️
        </p>
        <form className="flex flex-col sm:flex-row w-5/6 lg:w-2/5 lg:min-w-[800px] gap-4">
          <Input
            className="bg-matte-black border placeholder:text-white placeholder:font-medium px-3"
            placeholder="Email"
          />
          <Button className="bg-custom-gradient text-black font-inter font-bold">
            SUBMIT BUTTON{" "}
            <span className="ml-2">
              <MoveRight color="#000" />
            </span>
          </Button>
        </form>
      </div>
      <div className="bg-black flex justify-around xl:justify-between xl:container flex-wrap p-4 ">
        <p className="text-center">
          Copyright © 2023 rozaly, All rights reserved. Present by Rometheme
        </p>
        <div className="flex flex-wrap justify-center  gap-5">
          <p>Privacy Policy</p>
          <p>Cookies</p>
          <p>Term & Condition</p>
          <p>Contact Us</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
