import React, { useState, useEffect, useCallback } from 'react';
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
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="relative h-screen pt-20">
            <div className="relative h-full overflow-hidden">
                {heroSlides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <div className="absolute inset-0 bg-linear-to-b from-black/30 to-black/50 z-10"></div>
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                            loading={index === 0 ? "eager" : "lazy"}
                        />
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <div className="text-center text-white px-4 max-w-4xl">
                                <h1 className="text-5xl md:text-7xl font-bold mb-4">{slide.title}</h1>
                                <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
                                <a
                                    href="#collections"
                                    className="inline-flex items-center gap-2 bg-[#c08552] text-white px-8 py-4 rounded-full hover:bg-[#5e3023] transition text-lg font-semibold group"
                                >
                                    {slide.cta}
                                    <ArrowRight className="group-hover:translate-x-1 transition" size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}

                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full transition"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="text-white" size={32} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full transition"
                    aria-label="Next slide"
                >
                    <ChevronRight className="text-white" size={32} />
                </button>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white w-8' : 'bg-white/50 w-3'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
