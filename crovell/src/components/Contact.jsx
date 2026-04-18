import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error

    const sanitizeInput = (text) => {
        return text.replace(/[<>]/g, ''); // Simple sanitization to remove brackets
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('submitting');

        const sanitizedData = {
            name: sanitizeInput(formData.name),
            email: formData.email, // Email is already validated by browser type="email"
            message: sanitizeInput(formData.message)
        };

        console.log('Sending sanitized data:', sanitizedData);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        setTimeout(() => setFormStatus('idle'), 5000);
    };

    return (
        <section id="contact" className="py-24 bg-[#f3e9dc] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#5e3023] mb-4">Connect With Us</h2>
                    <p className="text-lg text-[#5e3023]/70 max-w-2xl mx-auto">
                        Have questions about our collections? We're here to help you find your perfect pair.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-12">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1 space-y-8"
                    >
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-black/5 hover:shadow-md transition">
                            <h3 className="text-2xl font-bold text-[#5e3023] mb-8">Contact Info</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-[#f3e9dc] rounded-lg text-[#c08552]">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-[#5e3023]">Email</p>
                                        <a href="mailto:mpecrovell@gmail.com" className="text-[#5e3023]/70 hover:text-[#c08552] transition">
                                            mpecrovell@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-[#f3e9dc] rounded-lg text-[#c08552]">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-[#5e3023]">Phone</p>
                                        <a href="tel:+916386010462" className="text-[#5e3023]/70 hover:text-[#c08552] transition">
                                            +91 6386010462
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-[#f3e9dc] rounded-lg text-[#c08552]">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-[#5e3023]">Location</p>
                                        <p className="text-[#5e3023]/70">Uttar Pradesh, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#5e3023] p-8 rounded-2xl text-white">
                            <h4 className="text-xl font-bold mb-4">Join the Club</h4>
                            <p className="text-white/80 mb-6 text-sm">Subscribe to get special offers and first look at new arrivals.</p>
                            <form className="flex gap-2">
                                <input 
                                    type="email" 
                                    placeholder="Your email" 
                                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 flex-1 focus:outline-none focus:bg-white/20"
                                />
                                <button className="bg-[#c08552] p-2 rounded-lg hover:bg-white hover:text-[#5e3023] transition">
                                    <Send size={20} />
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-black/5"
                    >
                        {formStatus === 'success' ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-12">
                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle size={48} />
                                </div>
                                <h3 className="text-3xl font-bold text-[#5e3023] mb-4">Message Sent!</h3>
                                <p className="text-lg text-gray-500 max-w-md">
                                    Thank you for reaching out. A Crovell representative will get back to you within 24 hours.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-[#5e3023] uppercase tracking-wider">Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-[#f3e9dc]/30 border-b-2 border-[#5e3023]/10 px-0 py-3 focus:outline-none focus:border-[#c08552] transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-[#5e3023] uppercase tracking-wider">Email Address</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-[#f3e9dc]/30 border-b-2 border-[#5e3023]/10 px-0 py-3 focus:outline-none focus:border-[#c08552] transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#5e3023] uppercase tracking-wider">Your Message</label>
                                    <textarea
                                        rows="4"
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full bg-[#f3e9dc]/30 border-b-2 border-[#5e3023]/10 px-0 py-3 focus:outline-none focus:border-[#c08552] transition-colors resize-none"
                                        placeholder="Tell us what's on your mind..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={formStatus === 'submitting'}
                                    className="w-full md:w-auto bg-[#5e3023] text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-[#c08552] transition-all transform active:scale-95 disabled:opacity-70 flex items-center justify-center gap-3 shadow-xl shadow-[#5e3023]/10"
                                >
                                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                                    <Send size={20} />
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
