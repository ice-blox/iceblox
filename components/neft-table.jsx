import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from ".././components/ui/table";
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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { Button } from "./ui/button";

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

export default function NftCollectionsTable() {
  return (
    <div className="p-4 bg-gray-900 max-w-7xl mx-auto w-full text-gray-100 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          <Button className="bg-gray-800 px-3 py-1 rounded">Trending</Button>
          <Button className="px-3 py-1">Top</Button>
        </div>
        <div className="flex space-x-2">
          <Button className="px-3 py-1">1h</Button>
          <Button className="px-3 py-1">6h</Button>
          <Button className="bg-gray-800 px-3 py-1 rounded">24h</Button>
          <Button className="px-3 py-1">7d</Button>
          <Select>
            <SelectTrigger className="w-[180px] bg-gray-800 border-0">
              <SelectValue placeholder="All chains" />
            </SelectTrigger>
            <SelectContent className="w-full bg-gray-800 border-0">
              <SelectItem className="w-[180px] px-4" value="all">
                All chains
              </SelectItem>
              <SelectItem className="w-[180px] px-4" value="ethereum">
                Ethereum
              </SelectItem>
              <SelectItem className="w-[180px] px-4" value="polygon">
                Polygon
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="border-b border-zinc-700 ">
            <TableHead className="w-[100px] p-0 pb-2">Rank</TableHead>
            <TableHead className="text-left p-0 pb-2 w-1/2">
              Collection
            </TableHead>
            <TableHead className="text-left p-0 pb-2">Floor Price</TableHead>
            <TableHead className="text-left p-0 pb-2">Volume</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="pt-[20px]">
          {NftCollections.map((collection) => (
            <TableRow
              key={collection.rank}
              className="border-0 hover:bg-gray-700 w-full rounded-sm px-2 h-[100px]"
            >
              <TableCell className="font-medium w-[100px] px-4s">
                {collection.rank}
              </TableCell>
              <TableCell className="font-semibold flex items-center space-x-2 h-[100px]">
                <Image
                  src={collection.icon}
                  alt={collection.name}
                  className="size-[70px] rounded-full"
                />
                <span>{collection.name}</span>
              </TableCell>
              <TableCell>{collection.floorPrice}</TableCell>
              <TableCell>{collection.volume}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
