import React from 'react';
import { features } from '../data';

const Features = () => {
    return (
        <section className="py-12 bg-white border-y-2 border-[#c08552]">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, idx) => (
                        <div key={idx} className="text-center">
                            <div className="text-4xl mb-2">{feature.icon}</div>
                            <h3 className="font-bold text-[#5e3023] mb-1">{feature.title}</h3>
                            <p className="text-sm text-[#5e3023]/70">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
