import { phase1, phase2, phase3, phase4 } from "../phase";
import React from "react";

const Roadmap = () => {
  return (
    <section className=" min-h-fit flex flex-col items-center space-y-2">
      <h4 className=" pt-[150px] lg:pt-0 uppercase blue-sub-head-600 text-h4 text-center">
        Roadmap
      </h4>
      <h1 className="uppercase white-sub-head-800">Roadmap Launch Timeline</h1>
      <p className="text-[18px] tracking-wider md:text-sm font-extralight text-center opacity-80 w-[90%] lg:w-[70%] pb-[50px]">
        At Iceblox, we&apos;re dedicated to building the future of social media
        through Web3 technology. Our development roadmap outlines the key phases
        of our journey towards creating a vibrant, decentralized community where
        users have ownership and control over their digital experiences.
      </p>
      <div className="w-full space-y-10">
        <RoadmapCard
          number="01"
          phase="Phase 1: Platform Development (0-6 Months)"
          title=" During this phase, our focus is on laying the foundation for the Iceblox
        platform"
          listData={phase1}
        />
        <RoadmapCard
          number="02"
          phase="Phase 2: Public Launch (6-12 Months)"
          title="Once our platform is ready, we'll be ready to share it with the world:"
          listData={phase2}
        />
        <RoadmapCard
          number="03"
          phase="Phase 3: Community Growth (12-18 Months)"
          title="As our community grows, we'll focus on further enhancing the Iceblox experience:"
          listData={phase3}
        />
        <RoadmapCard
          number="04"
          phase="Phase 4: Integration and Expansion (18+ Months)"
          title="Looking towards the future, we'll focus on expanding Iceblox's reach and functionality:"
          listData={phase4}
        />
      </div>
    </section>
  );
};

export default Roadmap;

const RoadmapCard = ({ phase, title, listData, number }) => {
  return (
    <div className="mx-auto bg-matte-black w-[90%] max-w-[1400px] p-0 px-[20px] lg:px-[100px] rounded-xl py-[25px] lg:py-[50px]">
      <h1 className="text-stroke font-lato font-bold text-left text-h1 text-transparent">
        {number}
      </h1>
      <h4 className="mt-[-10px] font-inter font-medium text-[20px] leading-8">
        {phase}
      </h4>
      <p className="text-left leading-8">{title}</p>

      <ul className="list-disc pl-5">
        {listData.map((list, i) => (
          <li
            key={i}
            className="text-left font-poppins font-normal leading-8 text-white text-sm opacity-90 min-w-5/6"
          >
            {list.item}
          </li>
        ))}
      </ul>
    </div>
  );
};
