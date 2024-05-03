import React from "react";
import tees1 from "@/public/assets/merchandise/tees1.svg";
import tees2 from "@/public/assets/merchandise/tees2.svg";
import tees3 from "@/public/assets/merchandise/tees3.svg";
import tees4 from "@/public/assets/merchandise/tees4.svg";
import tees5 from "@/public/assets/merchandise/tees5.svg";
import Image from "next/image";
import { Button } from "./ui/button";
const Merchandise = () => {
  const merchandise = [tees1, tees2, tees3, tees4, tees5];
  return (
    <section className=" min-h-fit flex flex-col items-center space-y-2">
      <h4 className=" pt-[150px] lg:pt-0 uppercase blue-sub-head-600 text-h4 text-center">
        MERCHANDISE
      </h4>
      <h1 className="uppercase white-sub-head-800 w-4/5 xl:min-w-3/5">
        Elevate your style with Iceblox: Where Cool Meets Comfort in Every
        Stitch.
      </h1>
      <p className="text-[18px] tracking-wider md:text-sm font-extralight text-center opacity-80 w-[90%] lg:w-[70%] pb-[50px]">
        Get ready to level up your style game at the Iceblox merch shop – your
        go-to destination for all things cool. With a curated collection of
        trendy apparel and stylish accessories, we&apos;ve got everything you
        need to rock the Iceblox look and show off your icy style.
      </p>
      <div className="flex justify-center scroll-px-2 gap-6 flex-wrap">
        {merchandise.map((item, i) => (
          <MerchandiseCard
            key={i}
            image={item}
            item={`ITEM#${i + 1}`}
            id="12345"
          />
        ))}
      </div>
    </section>
  );
};

export default Merchandise;

const MerchandiseCard = ({ image, item, id }) => {
  return (
    <div className="w-[70%] sm:w-fit flex flex-col h-[350px] items-center bg-matte-black rounded-md py-4 px-5">
      <Image src={image} alt="merchandise" />
      <h4 className="uppercase blue-sub-head-600 text-h4 text-center mt-2">
        {item}
      </h4>
      <p>#{id}</p>
      <Button className="bg-custom-gradient font-semibold text-black w-3/4 font-poppins">
        Grab now!
      </Button>
    </div>
  );
};
