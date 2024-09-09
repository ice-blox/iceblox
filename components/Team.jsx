import soldier from "../public/assets/soldier.svg";
import facebook from "../public/assets/facebook.jpg";
import twitter from "../public/assets/twitter.png";
import pinterest from "../public/assets/pinterest.png";
import Image from "next/image";

const Team = () => {
  return (
    <section className="min-h-fit py-[150px] flex flex-col items-center space-y-2">
      <h4 className=" pt-[150px] lg:pt-0 uppercase blue-sub-head-600 text-h4 text-center">
        MEET OUR TEAM
      </h4>
      <h1 className="uppercase white-sub-head-800 w-4/5 xl:min-w-3/5">
        Introducing the Iceblox Crew: The Faces Behind the Cool.
      </h1>
      <p className="text-[18px] tracking-wider md:text-sm font-extralight text-center opacity-80 w-[90%] lg:w-[70%] pb-[50px]">
        Discover the Iceblox Team: A Diverse Group of Innovators, Creators, and
        Cool Crusaders Leading the Charge in Redefining Social Media
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
        {Array.from({ length: 6 }).map((item, i) => (
          <TeamCard
            key={i}
            description="Fostering connections and inclusivity, Dr. Arctic makes Iceblox feel
        like home for every user."
            name="Dr. Arctic Avalanche Head of Community"
          />
        ))}
      </div>
    </section>
  );
};

export default Team;

const TeamCard = ({ image, name, description, socials }) => {
  return (
    <div className="bg-mid-green max-w-[350px] lg:w-full rounded-xl p-[30px] space-y-4">
      <div className="flex items-center justify-between">
        <Image src={soldier} alt="nft" />
        <h4 className="text-left font-inter font-semibold text-[15px]">
          {name}
        </h4>
      </div>
      <p>{description}</p>
      <div className="justify-center items-center flex gap-4">
        <Image src={pinterest} alt="pinterest" />
        <Image src={twitter} alt="twitter" />
        <Image className="mix-blend-color-burn" src={facebook} alt="facebook" />
      </div>
    </div>
  );
};
