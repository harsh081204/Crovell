import React from 'react';
import { sliderProducts } from '../data';

const Collections = () => {
    return (
        <section id="collections" className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#5e3023] mb-4">Premium Sliders Collection</h2>
                    <p className="text-lg text-[#5e3023]/70 max-w-2xl mx-auto mb-8">
                        Discover our curated collection of premium sliders, designed for ultimate comfort and style
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sliderProducts.map((product) => (
                        <div key={product.id} className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-lg mb-4 bg-[#f3e9dc]">
                                {product.badge && (
                                    <div className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-sm font-bold ${product.badge === 'New' ? 'bg-[#c08552] text-white' :
                                        product.badge === 'Best Seller' ? 'bg-[#5e3023] text-white' :
                                            'bg-[#f3e9dc] text-[#5e3023] border-2 border-[#5e3023]'
                                        }`}>
                                        {product.badge}
                                    </div>
                                )}
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300"></div>
                            </div>
                            <h3 className="text-xl font-semibold text-[#5e3023] mb-1">{product.name}</h3>
                            <p className="text-[#c08552] mb-2">{product.category}</p>
                            {/* <div className="flex items-center gap-2">
                                <div className="flex gap-1">
                                    {[...Array(product.colors)].map((_, i) => (
                                        <div key={i} className="w-4 h-4 rounded-full border-2 border-[#5e3023]" style={{ backgroundColor: i === 0 ? '#5e3023' : i === 1 ? '#c08552' : '#f3e9dc' }}></div>
                                    ))}
                                </div>
                                <span className="text-sm text-[#5e3023]/70">{product.colors} colors</span>
                            </div> */}
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <div className="inline-block bg-[#c08552] text-white px-8 py-4 rounded-lg">
                        <h3 className="text-2xl font-bold mb-2">More Collections Coming Soon</h3>
                        <p className="text-lg">Stay tuned for exciting new products</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Collections;
