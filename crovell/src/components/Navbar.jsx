import React, { useState, useEffect } from 'react';
import { Menu, X, Search, User } from 'lucide-react';
import { menuStructure } from '../data';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hoveredMenu, setHoveredMenu] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        let timeoutId;
        const handleScroll = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setIsScrolled(window.scrollY > 50);
            }, 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <nav className={`fixed w-full bg-white z-40 border-b-2 border-[#c08552] transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-md'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="text-3xl font-bold text-[#5e3023] tracking-wider">CROVELL</div>

                    <div className="hidden lg:flex items-center space-x-1">
                        <a href="#home" className="px-4 py-2 text-[#5e3023] hover:text-[#c08552] font-semibold transition">
                            HOME
                        </a>

                        <div
                            className="relative"
                            onMouseEnter={() => setHoveredMenu('men')}
                            onMouseLeave={() => setHoveredMenu(null)}
                        >
                            <button className="px-4 py-2 text-[#5e3023] hover:text-[#c08552] font-semibold transition">
                                COLLECTIONS
                            </button>
                            {hoveredMenu === 'men' && (
                                <div className="absolute top-full left-0 w-64 bg-white shadow-xl mt-0 border-t-2 border-[#c08552]">
                                    <div className="p-6">
                                        <div className="mb-6">
                                            <h3 className="text-sm font-bold text-[#5e3023] mb-3 tracking-wide">SLIDERS</h3>
                                            <div className="space-y-2">
                                                <a href="#collections" className="block text-[#5e3023] hover:text-[#c08552] transition py-1">
                                                    All Sliders
                                                </a>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold text-[#5e3023] mb-3 tracking-wide">FEATURED</h3>
                                            <div className="space-y-2">
                                                {menuStructure.men.featured.map((feat, idx) => (
                                                    <a key={idx} href="#collections" className="block text-[#c08552] hover:text-[#5e3023] transition py-1 font-medium">
                                                        {feat}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div
                            className="relative"
                            onMouseEnter={() => setHoveredMenu('women')}
                            onMouseLeave={() => setHoveredMenu(null)}
                        >
                            <button className="px-4 py-2 text-[#5e3023] hover:text-[#c08552] font-semibold transition">
                                COMING SOON
                            </button>
                            {hoveredMenu === 'women' && (
                                <div className="absolute top-full left-0 w-64 bg-white shadow-xl mt-0 border-t-2 border-[#c08552]">
                                    <div className="p-6">
                                        <p className="text-[#c08552] font-semibold text-center py-4">New Collections Launching Soon</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        <a href="#about" className="px-4 py-2 text-[#5e3023] hover:text-[#c08552] font-semibold transition">
                            ABOUT
                        </a>
                        <a href="#contact" className="px-4 py-2 text-[#5e3023] hover:text-[#c08552] font-semibold transition">
                            CONTACT
                        </a>
                    </div>

                    <div className="hidden lg:flex items-center space-x-4">
                        <button className="text-[#5e3023] hover:text-[#c08552] transition">
                            <Search size={22} />
                        </button>
                        <button className="text-[#5e3023] hover:text-[#c08552] transition">
                            <User size={22} />
                        </button>
                    </div>

                    <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-[#5e3023]">
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {menuOpen && (
                    <div className="lg:hidden pb-4 border-t border-[#c08552] mt-2">
                        <a href="#home" className="block py-3 text-[#5e3023] hover:text-[#c08552] font-semibold">HOME</a>
                        <div className="py-3">
                            <p className="text-[#5e3023] font-bold mb-2">COLLECTIONS</p>
                            <div className="pl-4 space-y-2">
                                <a href="#collections" className="block text-[#5e3023] hover:text-[#c08552] py-1">
                                    Sliders
                                </a>
                            </div>
                        </div>
                        <div className="py-3">
                            <p className="text-[#5e3023] font-bold mb-2">COMING SOON</p>
                            <p className="pl-4 text-[#c08552]">New Collections</p>
                        </div>
                        <a href="#about" className="block py-3 text-[#5e3023] hover:text-[#c08552] font-semibold">ABOUT</a>
                        <a href="#contact" className="block py-3 text-[#5e3023] hover:text-[#c08552] font-semibold">CONTACT</a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
