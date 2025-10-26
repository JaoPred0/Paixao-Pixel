import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingBag, Percent, Tag, User } from 'lucide-react';

const Checkout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const template = location.state?.template;
    const [couponCode, setCouponCode] = useState('');
    const [discountMultiplier, setDiscountMultiplier] = useState(1);
    const [couponMessage, setCouponMessage] = useState('');
    const [originalPrice, setOriginalPrice] = useState(0);
    const [fullName, setFullName] = useState('');
    const [nameError, setNameError] = useState('');

    useEffect(() => {
        if (template && originalPrice === 0) {
            const price = parseFloat(template.price.replace('R$ ', '')) || 0;
            setOriginalPrice(price);
        }
    }, [template, originalPrice]);

    if (!template) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center text-gray-600 bg-white rounded-2xl p-8 shadow-lg"
                >
                    <ArrowLeft className="w-12 h-12 mx-auto mb-4 text-pink-400" />
                    <h2 className="text-2xl font-bold mb-2">Nenhum produto selecionado</h2>
                    <p>Escolha um template antes de acessar o checkout.</p>
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

    // Aplicar cupom  
    const applyCoupon = () => {
        if (couponCode.toUpperCase() === 'LOVE') {
            setDiscountMultiplier(0.9);
            setCouponMessage('10% OFF aplicado! 😎');
        } else {
            setDiscountMultiplier(1);
            setCouponMessage('Cupom inválido.');
        }
    };

    const finalPrice = originalPrice * discountMultiplier;
    const discount = originalPrice * (1 - discountMultiplier);

    // Validação de nome  
    const validateName = (name) => {
        if (!name || name.trim().length < 2) {
            setNameError('Ei, me diz seu nome completo aí! É obrigatório.');
            return false;
        }
        setNameError('');
        return true;
    };

    // Texto pré-pronto para WhatsApp com preço final e nome  
    const whatsappText = `Olá! 👋  
Meu nome completo é: ${fullName}  

Gostaria de adquirir o template:  
- Nome: ${template.title}  
- ID do Produto: ${template.id}  
- Preço Final: R$ ${finalPrice.toFixed(2)} ${(discount > 0 ? ` (Economizou R$ ${discount.toFixed(2)} com cupom!)` : '')}  

Por favor, me envie mais informações sobre o pagamento e entrega. 💖`;

    const isFormValid = fullName.trim().length >= 2 && !nameError;

    const whatsappLink = `https://api.whatsapp.com/send?phone=5567996610494&text=${encodeURIComponent(whatsappText)}`;

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 py-8 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-6 lg:p-8 border border-pink-100"
                >
                    <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                        Checkout
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* === LADO ESQUERDO: DETALHES DO PRODUTO === */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-6"
                        >
                            <div className="flex justify-center">
                                <img
                                    src={template.image}
                                    alt={template.title}
                                    className="w-full max-w-md h-auto object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                                />
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-gray-800">{template.title}</h2>
                                <p className="text-gray-600"><span className="font-semibold">ID:</span> {template.id}</p>
                                <p className="text-gray-600">Pronto para você usar e impressionar todo mundo com esse template incrível!</p>
                            </div>
                        </motion.div>

                        {/* === LADO DIREITO: NOME, PREÇO, CUPOM E TOTAL === */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-6 bg-gradient-to-b from-pink-50/50 to-rose-50/50 rounded-2xl p-6"
                        >
                            {/* Campo de Nome Completo - Obrigatório */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                                    <User className="w-4 h-4" />
                                    Nome Completo * (obrigatório)
                                </label>
                                <input
                                    type="text"
                                    value={fullName}
                                    onChange={(e) => {
                                        setFullName(e.target.value);
                                        if (nameError) validateName(e.target.value);
                                    }}
                                    onBlur={() => validateName(fullName)}
                                    placeholder="Digite seu nome completo aqui..."
                                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 ${nameError ? 'border-red-300 bg-red-50' : 'border-gray-300'
                                        }`}
                                    required
                                />
                                {nameError && (
                                    <p className="text-sm text-red-600 flex items-center gap-1">
                                        <Tag className="w-4 h-4" /> {nameError}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-semibold text-gray-700">Subtotal</span>
                                    <span className="text-xl font-bold text-pink-600">R$ {originalPrice.toFixed(2)}</span>
                                </div>

                                {/* Campo de Cupom */}
                                <div className="space-y-3">
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            value={couponCode}
                                            onChange={(e) => setCouponCode(e.target.value)}
                                            placeholder="Digite o código do cupom..."
                                            className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                                        />
                                        <button
                                            onClick={applyCoupon}
                                            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
                                        >
                                            <Percent className="w-4 h-4" />
                                            Aplicar
                                        </button>
                                    </div>
                                    {couponMessage && (
                                        <p className={`text-sm ${discount > 0 ? 'text-green-600' : 'text-yellow-600'} flex items-center gap-2`}>
                                            <Tag className="w-4 h-4" />
                                            {couponMessage}
                                        </p>
                                    )}
                                </div>

                                {discount > 0 && (
                                    <div className="flex items-center justify-between py-2 border-t border-gray-200">
                                        <span className="text-sm text-gray-500">Desconto</span>
                                        <span className="text-sm text-green-600">- R$ {discount.toFixed(2)}</span>
                                    </div>
                                )}

                                <div className="border-t border-gray-200 pt-4">
                                    <div className="flex items-center justify-between text-xl font-bold">
                                        <span>Total</span>
                                        <span className="text-pink-600">R$ {finalPrice.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-sm text-gray-600 text-center">
                                Clique abaixo para enviar os detalhes via WhatsApp e finalizar sua compra rapidinho!
                            </p>

                            {/* === BOTÕES === */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => navigate(-1)}
                                    className="flex-1 px-6 py-3 bg-gray-100 text-gray-800 rounded-2xl font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
                                >
                                    <ArrowLeft className="w-5 h-5" />
                                    Voltar
                                </button>

                                <a
                                    href={isFormValid ? whatsappLink : '#'}
                                    target={isFormValid ? '_blank' : ''}
                                    rel={isFormValid ? 'noopener noreferrer' : ''}
                                    onClick={(e) => {
                                        if (!isFormValid) {
                                            e.preventDefault();
                                            validateName(fullName);
                                        }
                                    }}
                                    className={`flex-1 px-6 py-3 rounded-2xl font-semibold flex items-center justify-center space-x-2 shadow-lg transition-all duration-300 ${isFormValid
                                            ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600 hover:shadow-xl'
                                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        }`}
                                >
                                    <ShoppingBag className="w-5 h-5" />
                                    Finalizar via WhatsApp
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Checkout;