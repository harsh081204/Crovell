import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { heroSlides } from '../data';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(nextSlide, 6000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <section id="home" className="relative h-screen pt-20 overflow-hidden bg-black">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10"></div>
                    <img
                        src={heroSlides[currentSlide].image}
                        alt={heroSlides[currentSlide].title}
                        className="w-full h-full object-cover scale-105"
                        loading="eager"
                        fetchPriority="high"
                    />
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="text-center text-white px-4 max-w-5xl">
                            <motion.h1
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-5xl md:text-8xl font-bold mb-6 tracking-tight"
                            >
                                {heroSlides[currentSlide].title}
                            </motion.h1>
                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="text-xl md:text-3xl mb-10 text-white/90 font-light"
                            >
                                {heroSlides[currentSlide].subtitle}
                            </motion.p>
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                            >
                                <a
                                    href="#collections"
                                    className="inline-flex items-center gap-3 bg-[#c08552] text-white px-10 py-5 rounded-full hover:bg-white hover:text-[#5e3023] transition-all text-xl font-bold group shadow-2xl hover:shadow-[#c08552]/40"
                                >
                                    {heroSlides[currentSlide].cta}
                                    <ArrowRight className="group-hover:translate-x-2 transition" size={24} />
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            <button
                onClick={prevSlide}
                className="absolute left-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white text-white hover:text-[#5e3023] backdrop-blur-md p-4 rounded-full transition-all border border-white/20 shadow-xl"
                aria-label="Previous slide"
            >
                <ChevronLeft size={32} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white text-white hover:text-[#5e3023] backdrop-blur-md p-4 rounded-full transition-all border border-white/20 shadow-xl"
                aria-label="Next slide"
            >
                <ChevronRight size={32} />
            </button>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex space-x-3 bg-black/20 backdrop-blur-sm p-3 rounded-full border border-white/10">
                {heroSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 rounded-full transition-all duration-500 ${index === currentSlide ? 'bg-[#c08552] w-10' : 'bg-white/40 w-2 hover:bg-white/60'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
