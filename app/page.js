import Header from "../components/Header";
import Particles from "./particles";
import NFTInfo from "../components/NFT-Info";
import NFTCollections from "../components/NFTCollections";
import BuyNft from "../components/BuyNft";
import Roadmap from "../components/Roadmap";
import Partners from "../components/Partners";
import Merchandise from "../components/Merchandise";
import Team from "../components/Team";
import FAQ from "../components/FAQ";
import BlogsNews from "../components/Blogs-News";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="w-full text-red-600 relative">
      <div className="block w-full h-screen absolute left-0 top-0 z-[-1]">
        <Particles />
      </div>
      <Navbar />
      <Header />
      <NFTInfo />
      <NFTCollections />
      <BuyNft />
      <Roadmap />
      <Partners />
      <Merchandise />
      <Team />
      <FAQ />
      <BlogsNews />
      <ContactUs />
      <Footer />
    </div>
  );
}
