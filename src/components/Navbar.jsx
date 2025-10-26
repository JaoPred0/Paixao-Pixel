import React, { useState, useEffect } from "react";
import { Heart, Menu, X, Mail } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { label: "Início", href: "inicio" },
        { label: "Templates", href: "templates" },
        { label: "Contato", href: "contato" }
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full transition-all duration-500 z-50 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="flex justify-between items-center py-4 md:py-3">
                    {/* === LOGO === */}
                    <div className="flex items-center gap-2 select-none cursor-pointer">
                        <div className="flex items-center justify-center p-2 rounded-xl shadow-md">
                            <img src="/logo.png" alt="LoveSites Logo" className="h-9 w-auto object-contain rounded-xl" />
                        </div>
                        <span className="text-xl font-bold text-gray-800 tracking-tight">
                            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                                Paixão Pixel
                            </span>
                        </span>
                    </div>

                    {/* === LINKS DESKTOP === */}
                    <div className="hidden md:flex items-center space-x-10 text-gray-700 font-medium">
                        {links.map((link, idx) => (
                            <ScrollLink
                                key={idx}
                                to={link.href}
                                smooth={true}
                                duration={700}
                                offset={-80} // Ajuste para navbar fixa
                                className="relative cursor-pointer group transition-all duration-300"
                            >
                                <span className="group-hover:text-pink-600 transition-colors duration-300">
                                    {link.label}
                                </span>
                                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-pink-400 to-rose-500 group-hover:w-full transition-all duration-300 rounded-full" />
                            </ScrollLink>
                        ))}
                    </div>

                    {/* === BOTÃO DESKTOP === */}
                    <div className="hidden md:block">
                        <ScrollLink
                            to="contato"
                            smooth={true}
                            duration={700}
                            offset={-80}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 hover:from-pink-600 hover:to-rose-600 transition-all duration-300 cursor-pointer"
                        >
                            <Mail className="w-5 h-5" />
                            Fale Conosco
                        </ScrollLink>
                    </div>

                    {/* === MENU MOBILE BUTTON === */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-gray-600 hover:text-pink-500 transition-colors duration-300"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* === MOBILE MENU === */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ${isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="flex flex-col bg-white/95 backdrop-blur-md border-t border-pink-100/50 shadow-lg">
                    {links.map((link, idx) => (
                        <ScrollLink
                            key={idx}
                            to={link.href}
                            smooth={true}
                            duration={700}
                            offset={-80}
                            onClick={() => setIsOpen(false)}
                            className="px-6 py-3 text-gray-700 font-medium hover:text-pink-600 border-b border-pink-100 transition-colors duration-300 cursor-pointer"
                        >
                            {link.label}
                        </ScrollLink>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
