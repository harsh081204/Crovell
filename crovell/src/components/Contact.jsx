import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Validation
        if (!formData.name || !formData.email || !formData.message) {
            setError('Please fill in all fields');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            setError('Please enter a valid email address');
            return;
        }

        setIsSubmitting(true);

        try {
            // Assuming a valid fetch call to sending email here, or returning simulated success
            // ... simulating success since actual ids aren't known.
            setTimeout(() => {
                setFormSubmitted(true);
                setFormData({ name: '', email: '', message: '' });
                setIsSubmitting(false);

                setTimeout(() => {
                    setFormSubmitted(false);
                }, 5000);
            }, 1000);

        } catch (err) {
            setError('An error occurred. Please try again later.');
            console.error('Error:', err);
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 px-4 bg-[#f3e9dc]">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-[#5e3023] text-center mb-12">Get In Touch</h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold text-[#5e3023] mb-6">Contact Information</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <Mail className="text-[#c08552] mt-1" size={24} />
                                <div>
                                    <p className="font-semibold text-[#5e3023]">Email</p>
                                    <a href="mailto:mpecrovell@gmail.com" className="text-[#5e3023]/70 hover:text-[#c08552] transition">
                                        mpecrovell@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="text-[#c08552] mt-1" size={24} />
                                <div>
                                    <p className="font-semibold text-[#5e3023]">Phone</p>
                                    <a href="tel:+916386010462" className="text-[#5e3023]/70 hover:text-[#c08552] transition">
                                        +91 6386010462
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <MapPin className="text-[#c08552] mt-1" size={24} />
                                <div>
                                    <p className="font-semibold text-[#5e3023]">Address</p>
                                    <p className="text-[#5e3023]/70">Champatpur, Chaubepur, Uttar Pradesh-209203, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        {formSubmitted ? (
                            <div className="bg-[#c08552] text-white p-8 rounded-lg text-center">
                                <p className="text-xl font-semibold">Thank you for reaching out!</p>
                                <p className="mt-2">We'll get back to you soon.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {error && (
                                    <div className="bg-red-100 border-2 border-red-400 text-red-700 px-4 py-3 rounded-lg">
                                        {error}
                                    </div>
                                )}

                                <div>
                                    <label className="block text-[#5e3023] font-semibold mb-2">Name</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 border-2 border-[#c08552] rounded-lg focus:outline-none focus:border-[#5e3023] bg-white transition"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-[#5e3023] font-semibold mb-2">Email</label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 border-2 border-[#c08552] rounded-lg focus:outline-none focus:border-[#5e3023] bg-white transition"
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-[#5e3023] font-semibold mb-2">Message</label>
                                    <textarea
                                        rows="5"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 border-2 border-[#c08552] rounded-lg focus:outline-none focus:border-[#5e3023] bg-white transition"
                                        placeholder="Your message..."
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#c08552] text-white py-3 rounded-lg hover:bg-[#5e3023] transition font-semibold text-lg disabled:opacity-50 disabled:cursor-not-wait"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
