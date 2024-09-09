"use client";

// import { Carousel, CarouselContent } from "../../components/ui/carousel";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
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
import { Verified } from "lucide-react";
// import useEmblaCarousel from "embla-carousel-react";
// import useEmblaCarousel from "embla-carousel-react/components/useEmblaCarousel";
// import useEmblaCarousel from "embla-carousel-react";
const NftCollections = [
  {
    rank: 1,
    name: "Aquaflame",
    icon: flame,
    floorPrice: "18.70 MATIC",
    volume: "19 ETH",
  },
  {
    rank: 2,
    name: "earthKeepers",
    icon: eathKeeper,
    floorPrice: "0.18 ETH",
    volume: "20 ETH",
  },
  {
    rank: 3,
    name: "CosmoFrost",
    icon: cosmoFrost,
    floorPrice: "0.89 ETH",
    volume: "111 ETH",
  },
  {
    rank: 4,
    name: "Chillberg",
    icon: chillberg,
    floorPrice: "0.11 ETH",
    volume: "11 ETH",
  },
  {
    rank: 5,
    name: "seafrost",
    icon: seaFrost,
    floorPrice: "0.14 ETH",
    volume: "11 ETH",
  },
  {
    rank: 6,
    name: "major milkyway",
    icon: milkyway,
    floorPrice: "2.03 ETH",
    volume: "95 ETH",
  },
  {
    rank: 7,
    name: "Glacier Storm",
    icon: glacierStorm,
    floorPrice: "0.02 ETH",
    volume: "6 ETH",
  },
  {
    rank: 8,
    name: "Forest Frostbite",
    icon: frostBite,
    floorPrice: "0.19 ETH",
    volume: "6 ETH",
  },
  {
    rank: 9,
    name: "aquabloom",
    icon: aquabloom,
    floorPrice: "1.45 ETH",
    volume: "32 ETH",
  },
  {
    rank: 10,
    name: "hurricane hail",
    icon: hurricaneHail,
    floorPrice: "0.86 ETH",
    volume: "26 ETH",
  },
];

export default function NFTCarousel() {
  // const [emblaRef] = useEmblaCarousel({
  //   align: "start",
  //   slidesToScroll: 4,
  //   containScroll: "trimSnaps",
  // });

  return (
    <div className="w-full max-w-7xl mx-auto px-0 h-fit scroll-py-5 min-h-fit">
      <Carousel
        // ref={emblaRef}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="">
          {NftCollections.map((nft) => (
            <CarouselItem
              key={nft.id}
              className=" basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0 aspect-square relative ">
                  <Image
                    className="hover:scale-125 transition-all duration-500"
                    src={nft.icon}
                    alt={nft.title}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="p-4 bg-black/40 absolute bottom-0 left-0 right-0">
                    <h3 className="flex items-center gap-2 text-white font-semibold truncate">
                      {nft.name}{" "}
                      <Badge variant="secondary" className="bg-blue text-white">
                        Verified
                      </Badge>
                    </h3>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-white text-sm font-semibold">
                        Floor: {nft.floorPrice}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
