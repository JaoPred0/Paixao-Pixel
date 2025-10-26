import React, { useState } from 'react';
import { motion } from 'framer-motion';

const WhatsAppContact = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!name.trim()) {
      alert('Por favor, insira seu nome antes de enviar a mensagem!');
      return;
    }

    const phone = '5567996610494';
    const nameText = `Olá! Estou entrando em contato pelo site *Paixão Pixel*. Meu nome é ${name}. `;
    const text = encodeURIComponent(`${nameText}${message}`);
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <div id="contato" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-100 via-rose-200 to-purple-200 p-6">
      <motion.div
        className="bg-white rounded-3xl shadow-3xl p-10 w-full max-w-5xl flex flex-col gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center text-pink-600">Entre em Contato</h2>
        <p className="text-gray-600 text-center text-lg">
          Envie uma mensagem pelo WhatsApp e fale diretamente conosco!
        </p>

        {/* Inputs em row */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <input
            type="text"
            placeholder="Seu nome (obrigatório)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 px-6 py-4 border border-gray-300 rounded-3xl focus:outline-none focus:ring-4 focus:ring-pink-400 transition-all duration-300 text-lg"
          />
          <textarea
            placeholder="Sua mensagem (opcional)..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-2 px-6 py-4 border border-gray-300 rounded-3xl focus:outline-none focus:ring-4 focus:ring-pink-400 transition-all duration-300 text-lg resize-none h-32 md:h-auto"
          />
        </div>

        {/* Botão WhatsApp */}
        <motion.button
          onClick={handleSubmit}
          whileHover={{ scale: 1.05, boxShadow: '0px 10px 25px rgba(236, 72, 153, 0.5)' }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center gap-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold rounded-3xl px-8 py-5 text-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.52 3.48A11.88 11.88 0 0 0 12 .08C5.37.08.08 5.37.08 12c0 2.12.55 4.14 1.6 5.9L.1 24l6.24-1.65a11.94 11.94 0 0 0 5.66 1.48h.02c6.63 0 11.92-5.38 11.92-12 0-3.18-1.24-6.17-3.5-8.35zM12 21.88h-.02a10.06 10.06 0 0 1-5.18-1.45l-.37-.22-3.7.97.98-3.63-.24-.38A9.95 9.95 0 0 1 2.12 12c0-5.45 4.44-9.88 9.88-9.88 2.64 0 5.12 1.03 6.97 2.88a9.84 9.84 0 0 1 2.9 6.97c0 5.45-4.44 9.88-9.88 9.88z" />
            <path d="M17.47 14.84c-.3-.15-1.78-.88-2.05-.98s-.47-.15-.67.15-.77.98-.95 1.18-.35.22-.65.07a8.68 8.68 0 0 1-2.57-1.58 9.25 9.25 0 0 1-1.7-2.1c-.18-.3 0-.46.13-.61.13-.15.3-.35.45-.52.15-.15.2-.25.3-.42.1-.15.05-.28-.03-.42-.08-.15-.67-1.6-.92-2.2-.24-.57-.48-.5-.67-.5s-.35 0-.53 0a1.2 1.2 0 0 0-.9.42c-.3.3-1.14 1.12-1.14 2.73 0 1.6 1.17 3.15 1.34 3.37.18.22 2.32 3.55 5.63 4.98 3.3 1.43 3.3 0 3.9-.28.6-.28 1.78-1.45 2.03-2.85.25-1.4.18-1.28-.12-1.43z" />
          </svg>
          Enviar pelo WhatsApp
        </motion.button>
      </motion.div>
    </div>
  );
};

export default WhatsAppContact;
