"use client";

import { MailIcon, MailPlus, MapPinIcon, Phone } from "lucide-react";
import Image from "next/image";
import React, { useTransition } from "react";
import alien1 from "../public/assets/alien1.svg";
import alien2 from "../public/assets/alien2.svg";
import alien3 from "../public/assets/alien3.svg";
import alien4 from "../public/assets/alien4.svg";
import { useRouter } from "next/navigation";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const ContactUs = () => {
  const router = useRouter();
  const [name, setName] = useState("");

  let contactOptions = [
    {
      eventFor: "Mail",
      icon: <MailPlus color="#0094FF" size={20} />,
      placeholder: "awesomesite@mail.com",
      event: () => router.push("mailto:awesomesite@mail.com"),
      image: alien1,
    },
    {
      eventFor: "Phone",
      icon: <Phone color="#0094FF" size={20} />,
      placeholder: "+123 456 789",
      event: () => router.push("tel:+1800229933"),
      image: alien2,
    },
    {
      eventFor: "Address",
      icon: <MapPinIcon color="#0094FF" size={20} />,
      placeholder: "Jl. Srikandi. Pekanbaru-Riau",
      event: () =>
        router.push(
          "https://www.google.com/maps/place/Jl.+Srikandi,+Delima,+Kec.+Tampan,+Kota+Pekanbaru,+Riau,+Indonesia/@0.4892218,101.4033337,17z/data=!3m1!4b1!4m6!3m5!1s0x31d5a91e69a34f3d:0xcd2926c829791a98!8m2!3d0.4892164!4d101.4059086!16s%2Fg%2F1jkxtd8kd?entry=ttu"
        ),
      image: alien3,
    },
    {
      eventFor: "market name",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="0.62em"
          height="1em"
          viewBox="0 0 256 417"
        >
          <path
            fill="#0094FF"
            d="m127.961 0l-2.795 9.5v275.668l2.795 2.79l127.962-75.638z"
          />
          <path
            fill="#0094FF"
            d="M127.962 0L0 212.32l127.962 75.639V154.158z"
          />
          <path
            fill="#0094FF"
            d="m127.961 312.187l-1.575 1.92v98.199l1.575 4.601l128.038-180.32z"
          />
          <path fill="#0094FF" d="M127.962 416.905v-104.72L0 236.585z" />
          <path
            fill="#0094FF"
            d="m127.961 287.958l127.96-75.637l-127.96-58.162z"
          />
          <path fill="#0094FF" d="m.001 212.321l127.96 75.637V154.159z" />
        </svg>
      ),
      placeholder: "Spacebeast",
      event: () => console.log("hello"),
      image: alien4,
    },
  ];

  return (
    <section className="w-full flex justify-center gap-5 px-5 flex-wrap">
      <div className="w-full lg:w-[650px]  space-y-4">
        <h4 className=" uppercase blue-sub-head-600 text-h4 lg:text-left">
          CONTACT US
        </h4>
        <h1 className="uppercase white-sub-head-800 text-left">
          Contact Information
        </h1>
        <div className="grid gap-5 lg:gap-x-[40px] lg:gap-y-[40px] items-start grid-cols-1 sm:grid-cols-2 sm:w-fit">
          {contactOptions.map((item, i) => (
            <ContactCard
              key={i}
              eventFor={item.eventFor}
              icon={item.icon}
              placeholder={item.placeholder}
              image={item.image}
              event={item.event}
            />
          ))}
        </div>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full lg:max-w-[650px] flex flex-col justify-between  space-y-6"
      >
        <p className="text-[18px] tracking-wide md:text-sm font-extralight text-left opacity-80 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in arcu
          sagittis, posuere nibh non, pellentesque mauris.
        </p>
        <p className="text-[18px] tracking-wide md:text-sm pt-4 font-extralight text-left opacity-80 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in arcu
          sagittis, posuere nibh non, pellentesque mauris.
        </p>
        <Input
          className="bg-matte-black border-2 placeholder:text-white placeholder:font-medium px-7"
          placeholder="Your Name"
        />
        <div className="flex justify-between items-center gap-6">
          <Input
            className="bg-matte-black border-2 placeholder:text-white placeholder:font-medium px-7"
            placeholder="Email"
          />
          <Input
            className="bg-matte-black border-2 placeholder:text-white placeholder:font-medium px-7"
            placeholder="Telephone"
          />
        </div>
        <Textarea
          className="bg-matte-black border-2 placeholder:text-white placeholder:font-medium px-7"
          placeholder="Message"
        />
        <Button
          onClick={SendMail}
          className="text-black font-poppins font-semibold bg-custom-gradient uppercase w-full"
        >
          Send mail{" "}
          <span className="ml-2">
            <MailIcon size={20} color="#000" />
          </span>
        </Button>
      </form>
    </section>
  );
};

export default ContactUs;

const ContactCard = ({ event, image, eventFor, icon, placeholder }) => {
  return (
    <div
      className=" hover:cursor-pointer hover:border w-full sm:w-[300px] h-[160px] flex flex-col justify-center py-auto rounded-md space-y-1 p-4 bg-matte-black relative"
      onClick={event}
    >
      <h4>{icon}</h4>
      <h4 className="uppercase blue-sub-head-600 text-h4 text-left">
        {eventFor}
      </h4>
      <p className="text-[18px] tracking-wide md:text-sm font-extralight text-left opacity-80 ">
        {placeholder}
      </p>
      <Image src={image} alt="mail" className="absolute right-0 bottom-0 z-0" />
    </div>
  );
};
