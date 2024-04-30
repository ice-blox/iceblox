import Header from "@/components/Header";
import Particles from "./particles";
import NFTInfo from "@/components/NFT-Info";
import NFTCollections from "@/components/NFTCollections";

export default function Home() {
  return (
    <div className="w-full text-red-600 relative">
      <div className="block w-full h-screen absolute left-0 top-0 z-[-1]">
        <Particles />
      </div>
      <Header />
      <NFTInfo />
      <NFTCollections />
    </div>
  );
}
