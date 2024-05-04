import React from "react";
import MemeTemplate from "./memeTemplate";

const page = () => {
  return (
    <section className="pt-[200px] w-full ">
      <h1 className="text-center font-extrabold font-inter text-[60px]">
        Meme Builder
      </h1>
      <MemeTemplate />
    </section>
  );
};

export default page;
