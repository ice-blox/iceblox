import NftCollectionsTable from "../../components/neft-table";
import Navbar from "../../components/Navbar";
import NFTCarousel from "../../components/nft-carousel";
import React from "react";

const page = () => (
  <div>
    <Navbar />
    <main className="space-y-14 pb-3">
      <NFTCarousel />
      <NftCollectionsTable />
    </main>
  </div>
);

export default page;
