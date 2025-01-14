"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "./WorkSliderBtns";

const projects = [
    {
        num: "01",
        category: "frontend",
        title: "project 1",
        desc: "A simple bookshelf application to input, delete, and edit book data, with functionality to separate books into 'read' and 'unread' categories.",
        stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
        image: "/assets/work/project1.png",
        live: "",
        github: "https://github.com/Mofasir/simple-web-my-bookshelf",
    },
    {
        num: "02",
        category: "frontend",
        title: "project 2",
        desc: "A real-time note-taking application connected to an API, featuring delete and archive functionalities.",
        stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
        image: "/assets/work/project2.png",
        live: "",
        github: "https://github.com/Mofasir/Advanced-Notes-App-Modular-Scalable-and-API-Driven",
    },
    {
        num: "03",
        category: "frontend",
        title: "project 3",
        desc: "A note-taking application built with React, similar to the real-time version but operates without an API connection.",
        stack: [{ name: "React.js" }, { name: "Css 3" }],
        image: "/assets/work/project3.png",
        live: "",
        github: "https://github.com/Mofasir/react-notes-app",
    },
    {
        num: "04",
        category: "fullstack",
        title: "project 4",
        desc: "An inventory management application for infrastructure, developed using PHP and MySQL.",
        stack: [{ name: "PHP" }, { name: "Css 3" }, { name: "Javascript" }, { name: "MySQL" }],
        image: "/assets/work/project4.png",
        live: "",
        github: "https://github.com/Mofasir/sarpras-apps-php",
    },
    {
        num: "05",
        category: "fullstack",
        title: "project 5",
        desc: "A simple car rental application built with PHP and MySQL for managing rental operations.",
        stack: [{ name: "PHP" }, { name: "Tailwind.css" }, { name: "MySQL" }],
        image: "/assets/work/project5.png",
        live: "",
        github: "https://github.com/Mofasir/car-rent-apps",
    },
];

const WorkSection = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        // get current slide index
        const currentIndex = swiper.activeIndex;
        // update project state based on current slide index
        setProject(projects[currentIndex]);
    };

    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12">
            <div className="container mx-auto">
                <div className="flex flex-col items-center pb-16 gap-3">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        className="text-4xl font-semibold"
                    >
                        Projects
                    </motion.h1>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '80px' }}
                        transition={{
                            delay: 0.4,
                            duration: 0.5,
                            ease: "easeInOut",
                        }}
                        viewport={{ once: true }}
                        className="border-b-4 border-accent mx-auto"
                    />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="flex flex-col xl:flex-row xl:gap-[20px]"
                >
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[20px] h-[50%]">
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/* project category */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
                            {/* project description */}
                            <p className="text-white/60">{project.desc}</p>
                            {/* stack */}
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    );
                                })}
                            </ul>
                            {/* border */}
                            <div className="border border-white/20"></div>
                            {/* buttons */}
                            <div className="flex items-center gap-4">
                                {/* live project button */}
                                <Link href={project.live} target="_blank">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/* github project button */}
                                <Link href={project.github} target="_blank">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
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
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
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
                </motion.div>
            </div>
        </section>
    );
};

export default WorkSection;