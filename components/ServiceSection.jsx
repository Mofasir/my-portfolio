"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const service = [
    {
        num: "01",
        title: "Web Development",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.",
        href: ""
    },
    {
        num: "02",
        title: "UI/UX Design",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.",
        href: ""
    },
    {
        num: "03",
        title: "Data Analyst",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.",
        href: ""
    },
    {
        num: "04",
        title: "Data Science",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.",
        href: ""
    },
];

import { motion } from "framer-motion";

const ServiceSection = () => {
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
                        Services
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
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {service.map((service, index) => {
                        return (
                            <motion.div
                                key={index}
                                custom={index} // Kirimkan indeks elemen
                                initial={{
                                    opacity: 0,
                                    x: index % 2 === 0 ? -100 : 100, // Kiri keluar layar (negatif), kanan keluar layar (positif)
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0, // Masuk ke posisi normal
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.4,
                                    ease: "easeInOut",
                                }}
                                viewport={{ once: true }}
                                className="flex-1 flex flex-col justify-center gap-6 group"
                            >
                                {/* top */}
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-4xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                                    <Link
                                        href={service.href}
                                        className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                                    >
                                        <BsArrowDownRight className="text-primary text-2xl" />
                                    </Link>
                                </div>
                                {/* title */}
                                <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                                {/* description */}
                                <p className="text-white/60">{service.desc}</p>
                                {/* border */}
                                <div className="border-b border-white/20 w-full"></div>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    );
}

export default ServiceSection;