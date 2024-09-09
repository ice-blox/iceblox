import NftCollectionsTable from "../../components/neft-table";
import Navbar from "../../components/Navbar";
import NFTCarousel from "../../components/nft-carousel";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <NFTCarousel />
      {/* <NftCollectionsTable /> */}
    </div>
  );
};

export default page;
