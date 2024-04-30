import React from "react";
import Art from "@/public/assets/nft-art.svg";
import discord from "@/public/assets/discord.svg";
import twitch from "@/public/assets/twitch.svg";
import facebook from "@/public/assets/facebook.svg";
import instagram from "@/public/assets/instagram.svg";
import Image from "next/image";
const NFTInfo = () => {
  const socials = [discord, twitch, facebook, instagram];
  return (
    <div className="flex min-h-screen flex-col lg:flex-row justify-around items-start container gap-[100px] lg:gap-[30px] divide-y-[1px] lg:divide-y-0">
      <div className="flex flex-col justify-center  items-center w-full lg:w-fit space-y-6">
        <h2 className="blue-sub-head-600">Unique Digital Art</h2>
        <Image className="w-[500px] pt-[30px]" src={Art} alt="nft art" />
      </div>

      <div className="flex flex-col  items-center lg:items-start w-full lg:w-fit space-y-6 lg:space-y-4 pt-[50px] lg:pt-0">
        <h2 className="blue-sub-head-600">Solid Community</h2>

        <h4 className="text-light-green font-semibold font-inter text-h4 leading-6 pt-[30px]">
          INTRODUCE OURSELVES
        </h4>

        <h2 className="white-sub-head-800 leading-[57.6px]">
          Use Your NFTs As An <br /> AlternateAsset Class
        </h2>

        <p className="w-[450px] xl:w-[574px] text-center lg:text-left">
          Welcome to Iceblox: Where Innovation Meets Community in the Coolest
          Corner of the Web. Dive in and Discover a New Era of Social Media
        </p>

        <div className="flex w-full gap-10 justify-center lg:justify-between items-start">
          <div>
            <h2 className="blue-sub-head-600 ">7,744</h2>
            <p>Unique Assets</p>
          </div>
          <div>
            <h2 className="blue-sub-head-600">1.081</h2>
            <p>Floorprice(eth)</p>
          </div>
          <div>
            <h2 className="blue-sub-head-600 ">20,175</h2>
            <p>Volume Trade</p>
          </div>
        </div>

        <div className="flex justify-between sm:justify-center lg:justify-start items-center space-x-0 md:space-x-[70px] w-full">
          {socials.map((item) => (
            <Image src={item} alt={item} key={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NFTInfo;
