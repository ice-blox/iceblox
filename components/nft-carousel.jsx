"use client";

// import { Carousel, CarouselContent } from "@/components/ui/carousel";
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
// import useEmblaCarousel from "embla-carousel-react/components/useEmblaCarousel";
// import useEmblaCarousel from "embla-carousel-react";

const nfts = [
  {
    id: 1,
    title: "Geoffroy de Crecy Editions",
    image: "/placeholder.svg?height=400&width=400",
    floor: "0.05 ETH",
    verified: false,
  },
  {
    id: 2,
    title: "Factura by Mathias Isaksen",
    image: "/placeholder.svg?height=400&width=400",
    floor: "0.13 ETH",
    verified: true,
  },
  {
    id: 3,
    title: "SALT V4",
    image: "/placeholder.svg?height=400&width=400",
    floor: "1.24 ETH",
    verified: true,
  },
  {
    id: 4,
    title: "Maschine",
    image: "/placeholder.svg?height=400&width=400",
    floor: "0.11 ETH",
    verified: true,
  },
  // Add more NFTs here if needed
];

export default function NFTCarousel() {
  // const [emblaRef] = useEmblaCarousel({
  //   align: "start",
  //   slidesToScroll: 4,
  //   containScroll: "trimSnaps",
  // });

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {nfts.map((nft) => (
            <CarouselItem
              key={nft.id}
              className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0 aspect-square relative">
                  <Image
                    src={nft.image}
                    alt={nft.title}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="p-4 bg-black bg-opacity-50 absolute bottom-0 left-0 right-0">
                    <h3 className="text-white font-semibold truncate">
                      {nft.title}
                    </h3>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-white text-sm">Floor: {nft.floor}</p>
                      {nft.verified && (
                        <Badge
                          variant="secondary"
                          className="bg-blue-500 text-white"
                        >
                          Verified
                        </Badge>
                      )}
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
