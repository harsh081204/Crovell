import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Plus } from 'lucide-react';
import { sliderProducts } from '../data';
import { useCart } from '../context/CartContext';

const Collections = () => {
    const { addToCart } = useCart();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <section id="collections" className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-[#5e3023] mb-4">Premium Sliders Collection</h2>
                    <p className="text-lg text-[#5e3023]/70 max-w-2xl mx-auto mb-8">
                        Discover our curated collection of premium sliders, designed for ultimate comfort and style
                    </p>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {sliderProducts.map((product) => (
                        <motion.div 
                            key={product.id} 
                            variants={itemVariants}
                            className="group"
                        >
                            <div className="relative overflow-hidden rounded-lg mb-4 bg-gray-200 animate-pulse-slow">
                                {product.badge && (
                                    <div className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-sm font-bold shadow-sm ${product.badge === 'New' ? 'bg-[#c08552] text-white' :
                                        product.badge === 'Best Seller' ? 'bg-[#5e3023] text-white' :
                                            'bg-[#f3e9dc] text-[#5e3023] border-2 border-[#5e3023]'
                                        }`}>
                                        {product.badge}
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <button 
                                        onClick={() => addToCart(product)}
                                        className="bg-white text-[#5e3023] p-3 rounded-full hover:bg-[#c08552] hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 shadow-lg"
                                        title="Add to Cart"
                                    >
                                        <ShoppingCart size={24} />
                                    </button>
                                </div>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-80 object-cover group-hover:scale-105 transition duration-700 ease-in-out"
                                    loading="lazy"
                                    decoding="async"
                                    onLoad={(e) => e.currentTarget.parentElement.classList.remove('animate-pulse-slow', 'bg-gray-200')}
                                />
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-semibold text-[#5e3023] mb-1">{product.name}</h3>
                                    <p className="text-[#c08552] mb-2">{product.category}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-bold text-[#5e3023]">₹1,999</p>
                                    <button 
                                        onClick={() => addToCart(product)}
                                        className="text-sm font-semibold text-[#c08552] hover:text-[#5e3023] flex items-center gap-1 mt-1 transition"
                                    >
                                        <Plus size={16} /> Quick Add
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <div className="inline-block bg-[#c08552] text-white px-8 py-4 rounded-lg shadow-xl shadow-[#c08552]/20">
                        <h3 className="text-2xl font-bold mb-2">More Collections Coming Soon</h3>
                        <p className="text-lg">Stay tuned for exciting new products</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Collections;
