"use client";

import { motion } from "framer-motion";

const ContactSection = () => {
    return (
        <div className="container mx-auto border-t border-white/20 py-4 my-12 xl:my-0 xl:mb-12">
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="my-8 text-center text-4xl"
            >
                Get in Touch
            </motion.h2>
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="text-center tracking-tighter"
            >
                <p className="my-4">Sindanggalih, Sukagalih, Sukaratu, Tasikmalaya Regency, West Java, 46415.</p>
                <p className="my-4">+62 821 2001 9800</p>
                <a href="#" className="border-b">
                    misteralfikri@gmail.com
                </a>
            </motion.div>
        </div>
    );
};

export default ContactSection;