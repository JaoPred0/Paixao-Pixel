import React, { useState } from "react";
import { FaHeart, FaStar as FaStarIcon, FaCommentDots } from "react-icons/fa";
import { motion } from "framer-motion";
import { Heart, Star, MessageCircle } from "lucide-react";
import testimonials from "../data/testimonialsData"; // Importando depoimentos diretamente
const Sobre = () => {
    const [visibleCount, setVisibleCount] = useState(4); // Começa mostrando 4

    const handleShowMore = () => {
        setVisibleCount((prev) => Math.min(prev + 4, testimonials.length)); // Mostra mais 4 a cada clique
    };

    return (
        <div className="min-h-screen bg-white pt-40">
            <div className="max-w-7xl mx-auto">
                <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-rose-600 tracking-wide"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Sobre o Paixão Pixel: Seu Portal de Amor Digital
                </motion.h1>

                {/* Seção 1: Imagem à esquerda, texto à direita - O que é o site */}
                <motion.section
                    className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-20 lg:mb-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div className="lg:w-1/2 w-full flex justify-center">
                        <motion.img
                            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                            alt="Casal apaixonado descobrindo o amor online"
                            className="rounded-2xl sm:rounded-3xl shadow-xl lg:shadow-2xl w-full max-w-sm sm:max-w-md lg:max-w-md object-cover hover:lg:scale-105 transition-transform duration-500 lg:hover:scale-105"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>

                    <article className="lg:w-1/2 w-full space-y-6 sm:space-y-8 pr-0 lg:pr-4 text-center lg:text-left">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-rose-600 mb-4 sm:mb-6 flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mx-auto lg:mx-0">
                            <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 flex-shrink-0" />
                            O Que É o Paixão Pixel?
                        </h2>
                        <p className="text-base sm:text-lg lg:text-lg text-gray-700 leading-relaxed px-4 lg:px-0">
                            O Paixão Pixel é o seu assistente pessoal de Cupido na internet! Somos uma plataforma super especial dedicada a criar websites inteiros dedicados ao amor em todas as suas formas deliciosas.
                            Pense nisso: se você sonha em montar um site de namoro onde solteiros encontram o match perfeito com perfis cheios de fotos sorridentes e mensagens flertantes, ou um espaço exclusivo pros casados compartilharem fotos de lua de mel,
                            aniversários de casamento e recadinhos carinhosos diários – é aqui que a mágica acontece. Nosso tema é puro romance, com corações, rosas e designs que derretem qualquer coração gelado.
                            Não importa se é pra namorar, casar, reviver paixões antigas ou só curtir um flerte casual: o Paixão Pixel transforma suas ideias de amor em páginas web bonitas, seguras e cheias de emoção.
                            É como um ateliê de corações digitais, onde cada site vira uma história de "felizes para sempre" online!
                        </p>
                    </article>
                </motion.section>

                {/* Seção 2: Texto à esquerda, imagem à direita - Pra que serve */}
                <motion.section
                    className="flex flex-col lg:flex-row-reverse items-center gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-20 lg:mb-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.div className="lg:w-1/2 w-full flex justify-center">
                        <motion.img
                            src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                            alt="Casal casado celebrando amor eterno"
                            className="rounded-2xl sm:rounded-3xl shadow-xl lg:shadow-2xl w-full max-w-sm sm:max-w-md lg:max-w-md object-cover hover:lg:scale-105 transition-transform duration-500 lg:hover:scale-105"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>

                    <article className="lg:w-1/2 w-full space-y-6 sm:space-y-8 pl-0 lg:pl-4 text-center lg:text-right lg:text-left">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-rose-600 mb-4 sm:mb-6 flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mx-auto lg:mx-0">
                            <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500 flex-shrink-0" />
                            Pra Que Serve o Paixão Pixel?
                        </h2>
                        <p className="text-base sm:text-lg lg:text-lg text-gray-700 leading-relaxed px-4 lg:px-0">
                            Nosso site serve pra tornar o amor acessível a um clique! Imagine criar um espaço online pra quem quer namorar: perfis personalizados, buscas por almas gêmeas baseadas em gostos românticos,
                            chats com emojis de beijo e notificações de "alguém gostou de você". Pros casados, é perfeito pra guardar memórias afetivas – álbuns de fotos de viagens a dois, calendários de datas especiais,
                            fóruns pra trocar dicas de como manter a chama acesa no casamento. E não para por aí: se você precisa de algo mais leve, como conexões casuais pra flertes rápidos e seguros,
                            fazemos sites com filtros de interesses amorosos, mensagens anônimas iniciais e proteções que evitam corações partidos. Em resumo, o Paixão Pixel existe pra ajudar qualquer um a construir,
                            nutrir ou reacender o amor através da web – seja pra encontrar o par ideal, celebrar um casamento duradouro ou só espalhar um pouquinho de romance no dia a dia.
                            É o seu atalho pro "e eles viveram felizes" no mundo digital!
                        </p>
                    </article>
                </motion.section>

                {/* Seção 3: Imagem à esquerda, texto à direita - Mais detalhes */}
                <motion.section
                    className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-20 lg:mb-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <motion.div className="lg:w-1/2 w-full flex justify-center">
                        <motion.img
                            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                            alt="Mãos dadas simbolizando conexões de amor"
                            className="rounded-2xl sm:rounded-3xl shadow-xl lg:shadow-2xl w-full max-w-sm sm:max-w-md lg:max-w-md object-cover hover:lg:scale-105 transition-transform duration-500 lg:hover:scale-105"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>

                    <article className="lg:w-1/2 w-full space-y-6 sm:space-y-8 pr-0 lg:pr-4 text-center lg:text-left">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-rose-600 mb-4 sm:mb-6 flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mx-auto lg:mx-0">
                            <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 flex-shrink-0" />
                            Como Tudo Começou e Por Que Funciona
                        </h2>
                        <p className="text-base sm:text-lg lg:text-lg text-gray-700 leading-relaxed px-4 lg:px-0 mb-6 sm:mb-8">
                            Tudo começou com a ideia simples: o amor não para na vida real, por que pararia na web? No Paixão Pixel, criamos ferramentas fáceis pra você montar sites que capturam a essência do romance –
                            de namoros virtuais cheios de surpresas a portais pros casados onde cada clique é uma declaração de amor. Serve pra todo mundo: solteiros tímidos precisando de um empurrão digital,
                            casais querendo eternizar momentos ou até grupos de amigos planejando festas de solteiro românticas. Com temas de corações, estrelas e mensagens doces, nossos sites não são só funcionais,
                            são emocionantes, ajudando a conectar pessoas de verdade através de telas. É pra isso que existimos: fazer o amor brilhar online, um site de cada vez!
                        </p>
                        <ul className="space-y-3 sm:space-y-4 mt-6 px-4 lg:px-0">
                            <li className="flex items-center justify-center lg:justify-start gap-3 text-base sm:text-lg"><FaHeart className="text-red-500 flex-shrink-0" /> Fácil de usar, mesmo pra quem não entende de internet</li>
                            <li className="flex items-center justify-center lg:justify-start gap-3 text-base sm:text-lg"><FaStarIcon className="text-yellow-400 flex-shrink-0" /> Seguro pra proteger seus segredos românticos</li>
                            <li className="flex items-center justify-center lg:justify-start gap-3 text-base sm:text-lg"><FaCommentDots className="text-blue-400 flex-shrink-0" /> Rápido pra você focar no amor, não na técnica</li>
                        </ul>
                    </article>
                </motion.section>

                {/* Botão chamativo */}
                <motion.div
                    className="text-center mb-16 sm:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <button className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white text-base sm:text-lg lg:text-xl rounded-2xl lg:rounded-3xl shadow-xl hover:shadow-2xl transition-all font-semibold flex items-center gap-2 sm:gap-3 justify-center mx-auto w-full sm:w-auto max-w-xs sm:max-w-none">
                        <Heart className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                        Descubra Seu Amor Digital Agora
                    </button>
                </motion.div>

                {/* Seção de depoimentos com linhas rolantes - CONSERTADO PARA 50 ITENS */}
                <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-10">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-rose-600 mb-8 text-center flex items-center justify-center gap-2">
                            <FaCommentDots className="w-8 h-8 text-rose-500" /> Depoimentos
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                            {testimonials.slice(0, visibleCount).map((depoimento, idx) => (
                                <motion.article
                                    key={idx}
                                    className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl shadow-md p-4 border border-rose-200"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                >
                                    <p className="text-gray-700 italic mb-2">{`"${depoimento.text}"`}</p>
                                    <div className="flex items-center justify-start gap-2 mb-1">
                                        <FaHeart className="text-red-500 w-4 h-4" />
                                        <span className="font-bold text-rose-600">{depoimento.user}</span>
                                    </div>
                                    <div className="flex items-center gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStarIcon key={i} className="w-3 h-3 text-yellow-400" />
                                        ))}
                                    </div>
                                </motion.article>
                            ))}
                        </div>

                        {visibleCount < testimonials.length && (
                            <div className="text-center mt-6">
                                <button
                                    onClick={handleShowMore}
                                    className="px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all font-semibold"
                                >
                                    Mostrar Mais
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sobre;