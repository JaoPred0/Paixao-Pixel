import React, { useState } from "react";
import SplitText from "./tools/SplitText";
import AnimatedContent from "./tools/AnimatedContent";
import { motion } from "framer-motion";
import TextType from "./tools/TextType";

const HeroSection = () => {
    const [value, setValue] = useState("");
    const placeholders = [
        "Site com fotos nossas...",
        "Comemoração de namoro...",
        "Nosso diário de viagens...",
        "Portfólio de momentos juntos...",
        "Site de lembranças especiais...",
        "Aniversário de namoro...",
        "Mensagens de amor...",
        "Histórias do nosso casal...",
        "Galeria de fotos românticas...",
        "Agenda de encontros...",
        "Presentes e surpresas...",
        "Nossas conquistas juntos...",
        "Playlist do casal...",
        "Cartas de amor online...",
        "Nosso álbum digital..."
    ];

    const handleSubmit = () => {
        // Texto digitado ou, se vazio, o primeiro placeholder
        const textMessage = value || placeholders[0]
        // Concatena com a mensagem fixa
        const textToSend = `Quero gerar um site: ${textMessage}`;

        // Link do WhatsApp
        const whatsappUrl = `https://wa.me/5567996610494?text=${encodeURIComponent(textToSend)}`;

        // Abre o WhatsApp
        window.open(whatsappUrl, "_blank");
    };


    return (
        <section id="inicio" className="mt-34 px-4 md:px-0 flex flex-col items-center text-center">
            {/* ===== TÍTULO PRINCIPAL ===== */}
            <SplitText
                text="Desenvolvendo Sites com Paixão"
                className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-snug md:leading-tight"
                delay={50}
                duration={0.08}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 50 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
            />

            {/* ===== SUBTÍTULO ===== */}
            <SplitText
                text="Crie experiências de amor online, de namoro a memórias e conexões casuais."
                className="mt-6 text-lg md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
                delay={50}
                duration={0.08}
                ease="power3.out"
                splitType="words"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
            />
            <button className="mt-4 px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-all">
                <a href="/sobre">Saber Mais</a>
            </button>

            <div className="mt-16 w-full max-w-3xl">
                <AnimatedContent
                    distance={120}
                    direction="vertical"
                    reverse={false}
                    duration={0.9}
                    ease="power3.out"
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1.05}
                    threshold={0.2}
                    delay={0.3}
                >
                    <div className="flex flex-col gap-4 p-6 bg-gradient-to-br rounded-3xl border border-pink-300 shadow-2xl h-100"
                        style={{
                            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
                            WebkitMaskRepeat: "no-repeat",
                            WebkitMaskSize: "100% 100%",
                            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)",
                            maskRepeat: "no-repeat",
                            maskSize: "100% 100%"
                        }}>
                        {/* Input */}
                        <div className="w-full relative">
                            <input
                                type="text"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                placeholder=""
                                className="w-full px-6 py-5 text-gray-800 text-lg md:text-xl rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-transparent transition-all duration-300 shadow-sm"
                            />
                            {value === "" && (
                                <div className="absolute top-1/2 left-6 transform -translate-y-1/2 pointer-events-none text-gray-800 text-lg md:text-xl">
                                    <TextType
                                        text={placeholders}
                                        typingSpeed={40}
                                        pauseDuration={1500}
                                        showCursor={true}
                                        cursorCharacter="|"
                                    />
                                </div>
                            )}
                        </div>

                        {/* Botão */}
                        <motion.button
                            onClick={handleSubmit}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-2xl hover:from-pink-600 hover:to-rose-600 transition-all duration-300"
                        >
                            Gerar Site
                        </motion.button>
                    </div>
                </AnimatedContent>
            </div>
        </section >
    );
};

export default HeroSection;
