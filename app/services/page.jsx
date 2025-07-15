"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Backend Development",
    description:
      "I build fast, scalable APIs and server-side logic for modern applications.",
    href: "",
  },
  {
    num: "02",
    title: "Embedded Systems",
    description:
      "I build smart, efficient devices that interact with the physical world in real time.",
    href: "",
  },
  {
    num: "03",
    title: "Cyber Security",
    description:
      "I protect systems and data through secure coding, testing, and network defense.",
    href: "",
  },
  {
    num: "04",
    title: "AI Bots",
    description:
      "I design and deploy intelligent bots that learn, assist, and automate tasks.",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2.4,
            duration: 0.4,
            ease: "easeIn",
          },
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
      >
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className="flex flex-col flex-1 gap-6 justify-center group"
            >
              {/* top */}
              <div className="flex justify-between items-center w-full">
                <div className="text-5xl font-extrabold text-transparent text-outline group-hover:text-outline-hover">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-3xl text-primary" />
                </Link>
              </div>
              {/* title */}
              <h2 className="text-[43px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              {/* description */}
              <p className="text-white/60">{service.description}</p>
              {/* border */}
              <div className="w-full border-b border-white/20"></div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Services;
