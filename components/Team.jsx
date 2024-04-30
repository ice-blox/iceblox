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
      <TeamCard />
    </section>
  );
};

export default Team;

const TeamCard = () => {
  return (
    <div className="bg-mid-green">
      <h4>Dr. Arctic Avalanche Head of Community</h4>
      <p>
        Fostering connections and inclusivity, Dr. Arctic makes Iceblox feel
        like home for every user.
      </p>
      <div>
            
      </div>
    </div>
  );
};
