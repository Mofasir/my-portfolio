"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 2, duration: 0.4, ease: "easeIn" },
                }}
            >
                {/* image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
                    }}
                    className="w-[200px] h-[200px] xl:w-[400px] xl:h-[400px] mix-blend-lighten absolute">
                    <Image
                        src="/assets/photo.png"
                        priority
                        quality={100}
                        fill
                        sizes="(max-width: 1120px) 200px, 400px"
                        alt="profile photo"
                        className="object-contain"
                    />
                </motion.div>

                {/* circle */}
                <motion.svg
                    className="w-[200px] xl:w-[400px] h-[200px] xl:h-[400px] transform origin-center"
                    fill="transparent"
                    viewBox="0 0 400 400"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="200"
                        cy="200"
                        r="198"
                        stroke="#00FFFD"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    );
}

export default Photo;