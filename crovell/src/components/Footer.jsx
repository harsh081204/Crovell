import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#5e3023] text-white py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">CROVELL</h3>
                        <p className="text-[#f3e9dc]">Premium sliders for everyday comfort</p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <div className="space-y-2">
                            <a href="#home" className="block text-[#f3e9dc] hover:text-[#c08552] transition">Home</a>
                            <a href="#collections" className="block text-[#f3e9dc] hover:text-[#c08552] transition">Sliders</a>
                            <a href="#about" className="block text-[#f3e9dc] hover:text-[#c08552] transition">About</a>
                            <a href="#contact" className="block text-[#f3e9dc] hover:text-[#c08552] transition">Contact</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
                        <p className="text-[#f3e9dc] mb-4">Stay updated on new releases</p>
                        <div className="flex space-x-4">
                            <Instagram className="text-[#f3e9dc] hover:text-[#c08552] cursor-pointer transition" size={24} />
                            <Facebook className="text-[#f3e9dc] hover:text-[#c08552] cursor-pointer transition" size={24} />
                            <Twitter className="text-[#f3e9dc] hover:text-[#c08552] cursor-pointer transition" size={24} />
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#c08552] pt-8 text-center text-[#f3e9dc]">
                    <p>&copy; {new Date().getFullYear()} Crovell. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
