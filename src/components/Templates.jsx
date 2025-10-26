import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { templatesData } from '../data/templatesData'

const Templates = () => {
    const navigate = useNavigate()
    const [visibleCount, setVisibleCount] = useState(3) // mostrar 3 inicialmente

    const handleCardClick = (id) => {
        navigate(`/template/${id}`)
    }

    const handleShowMore = () => {
        setVisibleCount((prev) => prev + 6)
    }

    return (
        <div  id="templates" className="px-6 md:px-12 py-10 bg-gray-50 min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Templates</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {templatesData.slice(0, visibleCount).map((template, index) => (
                    <motion.div
                        key={template.id}
                        onClick={() => handleCardClick(template.id)}
                        className="cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white flex flex-col"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <img
                            src={template.image}
                            alt={template.title}
                            className="w-full h-48 object-cover"
                        />

                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <h2 className="text-2xl font-semibold mb-2 text-gray-800">{template.title}</h2>
                            <p className="text-gray-600 flex-1">{template.description}</p>

                            <div className="mt-4 flex justify-between items-center">
                                <span className="text-pink-500 font-bold text-lg">{template.price}</span>

                                <motion.a
                                    href={`/template/${template.id}`}
                                    className="relative text-pink-500 font-bold cursor-pointer"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    Ver Detalhes →
                                    <motion.span
                                        className="absolute left-0 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-pink-400 to-rose-500"
                                        initial={{ width: 0, backgroundColor: "#ec4899" }}
                                        whileHover={{ width: "100%", backgroundColor: "#f43f5e" }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Botão Mostrar Mais */}
            {visibleCount < templatesData.length && (
                <div className="flex justify-center mt-10">
                    <button
                        onClick={handleShowMore}
                        className="px-8 py-4 bg-pink-500 text-white font-bold rounded-2xl shadow-lg hover:bg-pink-600 transition-colors duration-300"
                    >
                        Mostrar Mais
                    </button>
                </div>
            )}
        </div>
    )
}

export default Templates
