import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import sandbox from "@/public/assets/partners/sandbox.svg";
import decentraland from "@/public/assets/partners/decentraland.svg";
import pixels from "@/public/assets/partners/pixels.svg";
import matrix from "@/public/assets/partners/matrix.svg";
import spatial from "@/public/assets/partners/spatial.svg";

const Partners = () => {
  const partners = [sandbox, decentraland, pixels, matrix, spatial];
  return (
    <div className="w-[90%] max-w-[1700px] my-[100px] mx-auto">
      <Marquee
        className="flex items-center bg-matte-black w-[90%] py-10 rounded-lg"
        gradientColor="#212027"
        gradientWidth="20px"
      >
        {partners.map((item, i) => (
          <Image className="ml-[100px]" key={i} src={item} alt={item} />
        ))}
      </Marquee>
    </div>
  );
};

export default Partners;
