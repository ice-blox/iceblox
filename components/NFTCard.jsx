import Image from "next/image";
import React from "react";
const NFTCard = ({ image, title, id }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <div className="bg-grey w-5/6">
        <Image src={image} alt="title" />
      </div>
      <h5 className="text-sm blue-sub-head-600 capitalize text-center">
        {title}
      </h5>
      <h5 className="text-[14px] font-normal blue-sub-head-600 text-white capitalize text-center">
        {id}
      </h5>
    </div>
  );
};

export default NFTCard;
