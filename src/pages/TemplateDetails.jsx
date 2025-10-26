import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowLeft, ShoppingBag, Eye } from 'lucide-react';
import { templatesData } from '../data/templatesData';

const TemplateDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const template = templatesData.find(t => t.id === parseInt(id));

  if (!template) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 flex items-center justify-center py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center text-gray-600 bg-white rounded-2xl p-8 shadow-lg"
        >
          <ArrowLeft className="w-12 h-12 mx-auto mb-4 text-pink-400" />
          <h2 className="text-2xl font-bold mb-2">Template não encontrado</h2>
          <p>Ops, parece que esse docinho sumiu da prateleira. Volte pra lista!</p>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-xl font-semibold hover:bg-pink-600 transition-colors duration-300"
          >
            Voltar
          </button>
        </motion.div>
      </div>
    );
  }

  const handleCheckout = () => {
    navigate('/checkout', { state: { template } }); // envia dados do template para a página de checkout
  };

  return (
    <div className="px-4 sm:px-6 md:px-12 py-8 md:py-12 bg-gradient-to-br from-pink-50 via-white to-rose-50 min-h-screen mt-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-6 md:p-8 overflow-hidden border border-pink-100"
        >
          <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
            {/* Imagem */}
            <motion.div className="flex-1 w-full lg:w-1/2">
              <motion.img
                src={template.image}
                alt={template.title}
                className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ scale: 0.95, rotate: -2 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                whileHover={{ scale: 1.02, rotate: 1 }}
              />
            </motion.div>

            {/* Conteúdo */}
            <div className="flex-1 w-full lg:w-1/2 space-y-6">
              {/* Título */}
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 via-pink-600 to-rose-500 bg-clip-text text-transparent"
              >
                {template.title}
              </motion.h1>

              {/* Descrição */}
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-gray-600 leading-relaxed text-base md:text-lg"
              >
                {template.description}
              </motion.p>

              {/* Preço */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center space-x-2"
              >
                <ShoppingBag className="w-6 h-6 text-pink-500" />
                <span className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                  {template.price}
                </span>
              </motion.div>

              {/* Botões */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <button
                  onClick={() => navigate(-1)}
                  className="flex-1 px-6 py-3 bg-gray-100 text-gray-800 rounded-2xl font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Voltar</span>
                </button>

                <a
                  href={template.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-2xl font-semibold hover:from-pink-500 hover:to-rose-500 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Eye className="w-5 h-5" />
                  <span>Ver Site</span>
                </a>

                <button
                  onClick={handleCheckout} // navega para /checkout
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-2xl font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  <span>Comprar Agora</span>
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TemplateDetails;
