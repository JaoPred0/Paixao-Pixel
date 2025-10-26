import React from "react";
import { Heart, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 text-white py-12 px-6 md:px-20 mt-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
                {/* Logo + Texto */}
                <div className="flex flex-col items-center md:items-start gap-2">
                    <div className="flex items-center gap-2">
                        <div className="p-2 rounded-xl">
                            <img src="/logo.png" alt="LoveSites Logo" className="h-9 w-auto object-contain rounded-xl" />
                        </div>
                        <span className="text-2xl font-bold tracking-tight">Paixão Pixel</span>
                    </div>
                    <p className="text-sm md:text-base text-white/80 mt-2 text-center md:text-left">
                        Desenvolvendo sites com amor, criatividade e dedicação. Transformamos ideias em experiências digitais únicas!
                    </p>
                </div>

                {/* Links */}
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex flex-col gap-2 text-center md:text-left">
                        <h3 className="font-semibold text-lg">Links</h3>
                        <a href="/" className="hover:text-pink-200 transition-colors">Início</a>
                        <a href="/sobre" className="hover:text-pink-200 transition-colors">Sobre</a>
                        <a href="templates" className="hover:text-pink-200 transition-colors">Templates</a>
                        <a href="contato" className="hover:text-pink-200 transition-colors">Contato</a>
                    </div>

                    {/* Redes sociais */}
                    <div className="flex flex-col gap-2 text-center md:text-left">
                        <h3 className="font-semibold text-lg">Redes Sociais</h3>
                        <div className="flex gap-4 mt-1 justify-center md:justify-start">
                            <a href="https://www.instagram.com/paixao.pixel" className="hover:text-pink-200 transition-colors"><Instagram className="w-6 h-6" /></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copy */}
            <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-white/70">
                © {new Date().getFullYear()} Paixão Pixel. Todos os direitos reservados.
            </div>
        </footer>
    );
};

export default Footer;
