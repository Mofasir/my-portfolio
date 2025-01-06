"use client"

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
    FaPhp
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiPython } from "react-icons/si";

// about data
const about = {
    title: "About me",
    desc: "A brief introduction to my background, personal details, and professional journey.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Mohammad Faikar Natsir"
        },
        {
            fieldName: "Phone",
            fieldValue: "+62 821 2001 9800"
        },
        {
            fieldName: "Experience",
            fieldValue: "2+ Years"
        },
        {
            fieldName: "Email",
            fieldValue: "misteralfikri@gmail.com"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Indonesian"
        },
        {
            fieldName: "Languages",
            fieldValue: "Indonesian, English, Arabic"
        },
    ],
};

// experience data
const experience = {
    icon: "assets/resume/badge.svg",
    title: "My experience",
    desc: "A comprehensive overview of my internship, work, and organizational experiences that showcase my professional growth and achievements.",
    items: [
        {
            company: "UI/UX, FE Dev",
            position: "Freelancer",
            duration: "Sep 2024 - Present",
        },
        {
            company: "BPS Tasikmalaya",
            position: "Data Management Intern",
            duration: "Aug 2024 - Sep 2024",
        },
        {
            company: "SMP Plus Muhammadiyah",
            position: "ICT Teacher (Part-time)",
            duration: "Jul 2023 - Jun 2024",
        },
        {
            company: "PD IPM Kab. Tasik (Org)",
            position: "Ketua Bidang KDI",
            duration: "2023 - Present",
        },
        {
            company: "HMIF Unsil (Org)",
            position: "Anggota Divisi Pengabdian Masyarakat",
            duration: "2023",
        },
    ],
};

// education data
const education = {
    icon: "assets/resume/cap.svg",
    title: "My education",
    desc: "Highlights of my formal education and additional courses that have enhanced my skills and knowledge in various fields.",
    items: [
        {
            institution: "Universitas Siliwangi",
            degree: "Informatika",
            duration: "2021 - Present",
        },
        {
            institution: "GreatEdu - MSIB 6",
            degree: "Data Science Bootcamp",
            duration: "Feb 2024 - Jun 2024",
        },
        {
            institution: "Dicoding Indonesia",
            degree: "Web Development, Data Science",
            duration: "2022 - Present",
        },
        {
            institution: "SMA At-Tajdid Boarding School",
            degree: "IPA Terpadu",
            duration: "2017 - 2020",
        },

    ],
};

// skills data
const skills = {
    title: "My skills",
    desc: "A detailed list of my technical expertise and tools, including the tech stack I use to deliver high-quality solutions.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <FaCss3 />,
            name: "css 3",
        },
        {
            icon: <FaJs />,
            name: "javascript",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js",
        },
        {
            icon: <FaPhp />,
            name: "php",
        },
        {
            icon: <SiPython />,
            name: "python",
        },
        {
            icon: <FaFigma />,
            name: "figma",
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

const ResumeSection = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center py-12">
            <div className="container mx-auto">
                <div className="flex flex-col items-center pb-16 gap-3">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        className="text-4xl font-semibold"
                    >
                        Resume
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
                >
                    <Tabs
                        defaultValue="experience"
                        className="flex flex-col xl:flex-row gap-[40px]"
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
                                <div className="flex flex-col gap-[20px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{experience.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {experience.desc}
                                    </p>
                                    <ScrollArea className="h-[360px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                                            {experience.items.map((item, index) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        className="bg-[#232329] h-[164px] py-4 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                    >
                                                        <span className="text-accent">{item.duration}</span>
                                                        <h3 className="text-xl max-w-[260px] min-h[60px] text-center lg:text-left">{item.position}</h3>
                                                        <div className="flex items-center gap-3">
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
                                <div className="flex flex-col gap-[20px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{education.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {education.desc}
                                    </p>
                                    <ScrollArea className="h-[360px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                                            {education.items.map((item, index) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        className="bg-[#232329] h-[164px] py-4 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                    >
                                                        <span className="text-accent">{item.duration}</span>
                                                        <h3 className="text-xl max-w-[260px] min-h[60px] text-center lg:text-left">{item.degree}</h3>
                                                        <div className="flex items-center gap-3">
                                                            {/* dot */}
                                                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                            <p className="text-white/60">{item.institution}</p>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>

                            {/* skills */}
                            <TabsContent value="skills" className="w-full h-full">
                                <div className="flex flex-col gap-[20px]">
                                    <div className="flex flex-col gap-[20px] text-center xl:text-left">
                                        <h3 className="text-4xl font-bold">{skills.title}</h3>
                                        <p className="mx-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.desc}</p>
                                    </div>
                                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[20px]">
                                        {skills.skillList.map((skill, index) => {
                                            return <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        })}
                                    </ul>
                                </div>
                            </TabsContent>

                            {/* about */}
                            <TabsContent value="about" className="w-full text-center xl:text-left">
                                <div className="flex flex-col gap-[20px]">
                                    <h3 className="text-4xl font-bold">{about.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.desc}</p>
                                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-4 max-w-[620px] mx-auto xl:mx-0">
                                        {about.info.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="flex items-center justify-center xl:justify-start gap-4"
                                                >
                                                    <span className="text-white/60">{item.fieldName}</span>
                                                    <span className="text-xl">{item.fieldValue}</span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>
                </motion.div>
            </div>
        </div>
    );
}

export default ResumeSection;