"use client";

import {
  FaJava,
  FaPython,
  FaJs,
  FaDocker,
  FaNodeJs,
  FaMicrochip,
  FaMobileAlt,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiTypescript,
  SiArduino,
  SiKubernetes,
  SiJest,
  SiJenkins,
} from "react-icons/si";

const about = {
  title: "About Me",
  description:
    "I'm Rodin, a backend developer, embedded systems builder, and cybersecurity enthusiast. I solve real-world problems by combining software, hardware, and smart automation.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Mahinga Rodin",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+250) 794 415 318",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Discord",
      fieldValue: "mahinga_70311",
    },
    {
      fieldName: "Email",
      fieldValue: "mahingarodin@gmail.com",
    },
    {
      fieldName: "Work",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, French, Spanish",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I've worked on backend systems, IoT projects, and AI-powered tools, blending code and hardware to solve real problems. Every project helps me grow sharper, faster, and better.",
  items: [
    {
      company: "Rwanda Coding Academy",
      position: "Backend Developer",
      duration: "2023 - Present",
    },
    {
      company: "Rwanda Tvet Board",
      position: "Backend Developer",
      duration: "2025 - Present",
    },
    {
      company: "Mission Nova",
      position: "Sofware Programmer",
      duration: "2025 - Present",
    },
    {
      company: "ThinkCyber",
      position: "Cyber Engineer",
      duration: "2023 - 2024",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Here’s where my journey began. These are the schools and places with sites included which shaped my passion for tech and problem-solving.",

  items: [
    {
      institution: "ThinkCyber",
      degree: "Student - CyberSec Engineer",
      duration: "2023 - 2024",
    },
    {
      institution: "Kigali Pacific College",
      degree: "Student",
      duration: "2013 - 2019",
    },
    {
      institution: "Groupe Scolaire Officiel de Butare",
      degree: "Student",
      duration: "2020 - 2023",
    },
    {
      institution: "Rwanda Coding Academy",
      degree: "Student - Software Programmer",
      duration: "2023 - Present",
    },
    {
      institution: "Udemy",
      degree: "Student - CyberSec Engineer",
      duration: "Fulltime",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "These are the tools and technologies I use to build, secure, and scale real-world solutions—from backend systems to embedded tech.",
  skillList: [
    {
      icon: <FaJava />,
      name: "Core Java",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJs",
    },
    {
      icon: <SiJenkins />,
      name: "CI/CD - Jenkins",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <SiArduino />,
      name: "Arduino Systems",
    },
    {
      icon: <SiSpringboot />,
      name: "SpringBoot",
    },
    {
      icon: <FaMobileAlt />,
      name: "Mobile Dev - Thunkable",
    },
    {
      icon: <SiKubernetes />,
      name: "Kubernetes",
    },
    {
      icon: <SiJest />,
      name: "Jest",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
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
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-col-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          className="bg-[#232329] h-[184px] py-16 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          key={index}
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex gap-3 items-center">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-col-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          className="bg-[#232329] h-[184px] py-16 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          key={index}
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.institution}
                          </h3>
                          <div className="flex gap-3 items-center">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.degree}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl transition-all duration-300 group-hover:text-accent">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 gap-y-6 xl:grid-cols-2 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex gap-4 justify-center items-center xl:justify-start"
                      >
                        <span className="text-white/60">
                          {item.fieldName}
                        </span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
