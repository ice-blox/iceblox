import React from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faq = [
    {
      question: "What is Iceblox? How do I get started?",
      answer:
        "Iceblox is the ultimate destination for exploring the cutting-edge world of Web3 social media. It's a vibrant platform where creativity thrives, and users are empowered to take control of their digital experiences. To get started, simply sign up for an account, set up your profile, and dive into the exciting world of Iceblox. Connect with fellow users, explore unique content, and unlock exclusive rewards as you embark on your journey through the coolest corner of the internet. Welcome to Iceblox – where the future happens.",
    },
    {
      question: "What are Iceblox NFTs and how can I get them?",
      answer: "",
    },
    {
      question: "How do I purchase IBX tokens and stake them?",
      answer: "",
    },
    {
      question: "How can I connect with the Iceblox community?",
      answer: "",
    },
  ];

  return (
    <section className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 justify-start lg:justify-center px-5 gap-[5%] items-start lg:items-center">
      <div className="w-full md:max-w-[570px] space-y-4">
        <h4 className=" uppercase blue-sub-head-600 text-h4 lg:text-left">
          faq
        </h4>
        <h1 className="uppercase white-sub-head-800 text-left">
          popular questions
        </h1>
        <p className="text-[18px] tracking-wide md:text-sm font-extralight text-left opacity-80 ">
          Iceblox NFTs aren&apos;t just digital collectibles – they&apos;re
          tickets to a universe of endless possibilities. Each Iceblox NFT is a
          unique masterpiece, crafted with care and bursting with personality.
          From sleek and sophisticated to bold and adventurous, there&apos;s an
          Iceblox NFT for every taste and style.
        </p>
        <Button className="uppercase bg-custom-gradient rounded-xl font-semibold w-[150px] text-black font-poppins">
          Learn More <MoveRight size={20} color="#000" className="ml-3" />
        </Button>
      </div>

      <div className=" w-full lg:max-w-[500px] space-y-4 ">
        {faq.map((item, i) => (
          <FaqAccordion key={i} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;

const FaqAccordion = ({ question, answer }) => {
  return (
    <Accordion
      type="single"
      disabled={answer.length == 0}
      collapsible
      className={`w-full ${
        answer.length == 0 && "opacity-[0.8] cursor-not-allowed"
      }`}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger
          className={`text-black data-[state=open]:bg-blue data-[state=closed]:bg-white px-5 rounded-lg h-[40px] data-[state=open]:h-[60px] ${
            answer.length == 0 && "line-through"
          }`}
        >
          {question}
        </AccordionTrigger>
        <AccordionContent className="bg-matte-black p-4 rounded-lg text-center">
          <p className="text-[18px] border-b-none tracking-wide md:text-sm font-extralight text-center opacity-80 ">
            {" "}
            {answer}
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
