import React from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

const BuyNft = () => {
  return (
    <div className="flex justify-center items-center h-fit my-[100px]">
      <div className="container w-[90%] lg:w-[80%] max-w-[1400px] gap-y-8 grid grid-cols-1 md:grid-cols-2 bg-matte-black px-[30px] md:px-[50px] py-[30px] rounded-md">
        <BuyCard
          title="Buy IBX"
          description="Join the Cool Crowd! Get Your IBX Coin Today and Dive into the Iceblox
        Revolution. Buy Now and Unlock a World of Rewards!"
          eventName="BUY IBX"
        />
        <BuyCard
          title="Buy IceBlox NFT On Open Sea"
          description="Ready to Dive into a Frozen World of Possibilities? Purchase Your Iceblox NFT Today and Start Exploring Exclusive Benefits and Rewards!"
          eventName="open sea"
        />
        <BuyCard
          title="Stake IBX"
          description="Ready to Freeze Your Tokens and Unlock Exclusive Benefits? Stake Your Iceblox NFT Today!"
          eventName="state IBX"
        />
        <BuyCard
          title="Stake IceBlox NFT"
          description="Ready to Freeze Your Tokens and Unlock Exclusive Benefits? Stake Your Iceblox NFT Today!"
          eventName="Stake NFT"
        />
      </div>
    </div>
  );
};

export default BuyNft;

const BuyCard = ({ title, event, description, eventName }) => {
  return (
    <div className="w-full md:w-5/6 space-y-7">
      <h1 className="white-sub-head-800 text-left">{title}</h1>
      <p className="text-left w-full">{description}</p>
      <Button
        onClick={event}
        className="bg-custom-gradient text-white uppercase px-5"
      >
        {eventName} <MoveRight className="ml-5" size={20} />
      </Button>
    </div>
  );
};
