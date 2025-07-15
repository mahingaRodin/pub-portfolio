"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "IoT & Embedded",
    tile: "Smart Farming System",
    description:
      "An IoT-based solution using sensors to monitor soil and automate irrigation for better crop yield.",
    stack: [{ name: "Arduino" }, { name: "C++" }, { name: "NPK Sensor" }],
    image: "/assets/work/smart-farming.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "AI & Automation",
    tile: "Emotion Detection Bot",
    description:
      "An AI bot trained with Teachable Machine to detect and respond to human emotions in real time.",
    stack: [
      { name: "Teachable Machine" },
      { name: "TensorFlow.js" },
      { name: "JavaScript" },
    ],
    image: "/assets/work/emotion-bot.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Backend Development",
    tile: "ePortfolio Management API",
    description:
      "A Spring Boot REST API powering a student ePortfolio tracking their performances at school.",
    stack: [{ name: "Java" }, { name: "Spring Boot" }, { name: "MySQL" }],
    image: "/assets/work/eportfolio-api.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Backend Development",
    tile: "Hotel Services Management System",
    description:
      "A hotel backend system that manages bookings, services, and users with secure authentication and role-based access.",
    stack: [
      { name: "Spring Boot" },
      { name: "Spring Security" },
      { name: "JWT" },
      { name: "MySQL" },
    ],
    image: "/assets/work/hotel-management.png",
    live: "",
    github: "",
  },

  {
    num: "05",
    category: "Mobile & UI",
    tile: "Thunkable Learning App",
    description:
      "A mobile app built in Thunkable for teaching students basic AI and coding concepts interactively.",
    stack: [{ name: "Thunkable" }, { name: "Firebase" }],
    image: "/assets/work/thunkable-app.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project based on current index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl font-extrabold leading-none text-transparent text-outline">
                {project.num}
              </div>
              {/* pro_ect category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* pro_ect description */}
              <p className="text-white/6">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* removing the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex gap-4 items-center">
                {/* live proet buttons */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent className="text-black bg-white">
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github repo button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5  flex justify-center items-center group">
                        <BsGithub className="text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent className="text-black bg-white">
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 z-10 w-full h-full bg-black/10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
