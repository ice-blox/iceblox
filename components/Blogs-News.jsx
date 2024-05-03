import { ArrowRight, Calendar, MessageSquare } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const BlogsNews = () => {
  return (
    <section className="min-h-fit py-[150px] flex flex-col items-center space-y-2">
      <h4 className=" pt-[150px] lg:pt-0 uppercase blue-sub-head-600 text-h4 text-center">
        BLOG & NEWS
      </h4>
      <h1 className="uppercase white-sub-head-800 max-w-[1400px]">
        Explore the Chill Zone: Your Gateway to Engaging Content and
        Thought-Provoking Insights.
      </h1>
      <h1 className="uppercase white-sub-head-800 w-4/5 xl:min-w-3/5">
        Join us as we Dive Deep into the World of Iceblox and Beyond
      </h1>
      <p className="text-[18px] tracking-wider md:text-sm font-extralight text-center opacity-80 w-[90%] lg:w-[70%] pb-[50px]">
        Uncover Cool Stories, Tips, and Trends to Keep You Ahead of the Curve
      </p>
      <div className="flex justify-center gap-6 flex-wrap px-4">
        <BlogsNewsCard />
        <BlogsNewsCard />
        <BlogsNewsCard />
      </div>
    </section>
  );
};

export default BlogsNews;

const BlogsNewsCard = () => {
  return (
    <div className="bg-matte-black w-5/6 sm:w-[350px]  p-5 rounded-xl space-y-2">
      {/* <Image src={ } alt="" /> */}
      <div className="bg-grey w-full h-[200px] rounded-xl"></div>

      <h4 className="uppercase blue-sub-head-600 text-h4 text-left">
        THE FUTURE OF DIGITAL ART BECAME REALITY
      </h4>

      <div className="flex items-center gap-5">
        <Calendar color="#0094FF" className="text-blue" size={15} />
        <p>September 30, 2022</p>
        <MessageSquare color="#0094FF" className="text-blue" size={15} />
      </div>

      <p className="text-ellipsis overflow-hidden max-h-[120px] text-[16px] tracking-wider font-extralight text-left opacity-80">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
        hendrerit massa. Vestibulum sit amet tortor quam. Integer eget facilisis
        enim, pellentesque dignissim enim.… enim, pellentesque dignissim enim.…
      </p>

      <Button className="p-0 bg-transparent uppercase hover:underline hover:bg-transparent">
        Learn More{" "}
        <span className="ml-3">
          <ArrowRight />
        </span>
      </Button>
    </div>
  );
};
