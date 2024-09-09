import React from "react";
import NFTCard from "./NFTCard";
import flame from "../public/assets/nft/aquaflame.svg";
import eathKeeper from "../public/assets/nft/eathKeeper.svg";
import cosmoFrost from "../public/assets/nft/cosmoFrost.svg";
import chillberg from "../public/assets/nft/chillberg.svg";
import seaFrost from "../public/assets/nft/seaFrost.svg";
import milkyway from "../public/assets/nft/milkyway.svg";
import glacierStorm from "../public/assets/nft/glacierStorm.svg";
import frostBite from "../public/assets/nft/frostBite.svg";
import aquabloom from "../public/assets/nft/aquabloom.svg";
import hurricaneHail from "../public/assets/nft/hurricaneHail.svg";

const NFTCollections = () => {
  const nft = [
    { image: flame, title: "Aquaflame", id: "#12345" },
    { image: eathKeeper, title: "earthKeepers", id: "#12345" },
    { image: cosmoFrost, title: "CosmoFrost", id: "#12345" },
    { image: chillberg, title: "Chillberg", id: "#12345" },
    { image: seaFrost, title: "seafrost", id: "#12345" },
    { image: milkyway, title: "major milkyway", id: "#12345" },
    { image: glacierStorm, title: "Glacier Storm", id: "#12345" },
    { image: frostBite, title: "Forest Frostbite", id: "#12345" },
    { image: aquabloom, title: "aquabloom", id: "#12345" },
    { image: hurricaneHail, title: "hurricane hail", id: "#12345" },
  ];
  return (
    <section className=" min-h-fit flex flex-col items-center space-y-2">
      <h4 className=" pt-[150px] lg:pt-0 uppercase blue-sub-head-600 text-h4 text-center">
        collection
      </h4>
      <h1 className="uppercase white-sub-head-800">ice Blox</h1>
      <p className="text-[18px] tracking-wider md:text-sm font-extralight text-center opacity-80 w-[90%] lg:w-[70%]">
        Iceblox NFTs aren&apos;t just digital collectibles – they&apos;re
        tickets to a universe of endless possibilities. Each Iceblox NFT is a
        unique masterpiece, crafted with care and bursting with personality.
        From sleek and sophisticated to bold and adventurous, there&apos;s an
        Iceblox NFT for every taste and style.
      </p>
      <div className="grid grid-cols-2 sm:flex flex-wrap justify-center items-center xl:grid xl:grid-cols-5 ">
        {nft.map((item) => (
          <NFTCard
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
};

export default NFTCollections;
