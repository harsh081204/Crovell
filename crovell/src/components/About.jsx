import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-[#5e3023] mb-8 leading-tight">
                            The Story Behind <span className="text-[#c08552]">Crovell</span> Comfort
                        </h2>
                        <div className="space-y-6 text-lg text-[#5e3023]/80 leading-relaxed">
                            <p>
                                Born from a passion for relaxed elegance, Crovell was founded to bridge the gap between high-fashion aesthetics and home-essential comfort.
                            </p>
                            <p>
                                Every pair of our sliders is a masterpiece of design, utilizing premium materials that mold to your feet while making a bold style statement. We believe that true luxury begins with the feeling of stepping into something extraordinary.
                            </p>
                            <div className="pt-6 grid grid-cols-2 gap-8">
                                <div>
                                    <p className="text-3xl font-bold text-[#c08552]">10k+</p>
                                    <p className="text-sm font-semibold uppercase tracking-wider">Happy Customers</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-[#c08552]">100%</p>
                                    <p className="text-sm font-semibold uppercase tracking-wider">Premium Quality</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-[#f3e9dc] rounded-2xl rotate-3 -z-10"></div>
                        <img
                            src="/images/heroSection/hero103%20PM.jpeg"
                            alt="Crovell Craftsmanship"
                            className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
