import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, ChevronLeft, ChevronRight, Instagram, Facebook, Twitter, Search, User, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const CrovellWebsite = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [emailPopup, setEmailPopup] = useState(false);
  const [emailSignup, setEmailSignup] = useState('');
  const [activeCategory] = useState('sliders'); // Only one category

  const heroSlides = [
    {
      title: "Premium Sliders for Everyday Comfort",
      subtitle: "Where design meets relaxation",
      cta: "Explore Collection",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&h=600&fit=crop"
    },
    {
      title: "Slide Into Style",
      subtitle: "Crafted for comfort, designed for you",
      cta: "Shop New Arrivals",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=1200&h=600&fit=crop"
    },
    {
      title: "Comfort Redefined",
      subtitle: "Premium quality sliders at affordable prices",
      cta: "Discover More",
      image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=1200&h=600&fit=crop"
    }
  ];

  // Products from public/images/products folder
  const sliderProducts = [
    {
      id: 1,
      name: "Urban Slide Pro",
      category: "Sliders",
      image: "/images/products/slider1.jpeg",
      badge: "New",
      colors: 3
    },
    {
      id: 2,
      name: "Comfort Classic",
      category: "Sliders",
      image: "/images/products/slider2.jpeg",
      badge: "Best Seller",
      colors: 2
    },
    {
      id: 3,
      name: "Beach Walker",
      category: "Sliders",
      image: "/images/products/slider3.jpeg",
      colors: 4
    },
    {
      id: 4,
      name: "City Slide",
      category: "Sliders",
      image: "/images/products/slider4.jpeg",
      badge: "New",
      colors: 2
    },
    {
      id: 5,
      name: "Daily Slide",
      category: "Sliders",
      image: "/images/products/slider5.jpeg",
      colors: 3
    },
    {
      id: 6,
      name: "Premium Slide",
      category: "Sliders",
      image: "/images/products/slider6.jpeg",
      badge: "Limited",
      colors: 1
    }
  ];

  // Simplified menu structure with only Sliders
  const menuStructure = {
    men: {
      categories: ['Sliders'],
      featured: ['New Arrivals', 'Best Sellers', 'Limited Edition']
    },
    women: {
      categories: ['Coming Soon'],
      featured: []
    }
  };

  const features = [
    { icon: "🚚", title: "Free Shipping", desc: "On orders over ₹1999" },
    { icon: "↩️", title: "Easy Returns", desc: "30-day return policy" },
    { icon: "✓", title: "Quality Assured", desc: "Premium materials" },
    { icon: "💳", title: "Secure Payment", desc: "Multiple payment options" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolled(window.scrollY > 50);
      }, 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const shown = sessionStorage.getItem('emailPopupShown');
      if (!shown) {
        setEmailPopup(true);
        sessionStorage.setItem('emailPopupShown', 'true');
      }
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, [heroSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, [heroSlides.length]);

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }
  };

  const handleEmailSignup = () => {
    if (emailSignup) {
      setEmailPopup(false);
      setEmailSignup('');
    }
  };

  return (
    <div className="min-h-screen bg-[#f3e9dc]">
      {/* Email Popup */}
      {emailPopup && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
            <button
              onClick={() => setEmailPopup(false)}
              className="absolute top-4 right-4 text-[#5e3023] hover:text-[#c08552]"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold text-[#5e3023] mb-4">Join Our Community</h3>
            <p className="text-[#5e3023] mb-6">Get 10% off your first purchase and stay updated on new arrivals!</p>
            <div className="space-y-4">
              <input
                type="email"
                value={emailSignup}
                onChange={(e) => setEmailSignup(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border-2 border-[#c08552] rounded-lg focus:outline-none focus:border-[#5e3023]"
              />
              <button
                onClick={handleEmailSignup}
                className="w-full bg-[#c08552] text-white py-3 rounded-lg hover:bg-[#5e3023] transition font-semibold"
              >
                Get 10% Off
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className={`fixed w-full bg-white z-40 border-b-2 border-[#c08552] transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-md'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-3xl font-bold text-[#5e3023] tracking-wider">CROVELL</div>
            
            <div className="hidden lg:flex items-center space-x-1">
              <a href="#home" className="px-4 py-2 text-[#5e3023] hover:text-[#c08552] font-semibold transition">
                HOME
              </a>
              
              <div 
                className="relative"
                onMouseEnter={() => setHoveredMenu('men')}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <button className="px-4 py-2 text-[#5e3023] hover:text-[#c08552] font-semibold transition">
                  COLLECTIONS
                </button>
                {hoveredMenu === 'men' && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-xl mt-0 border-t-2 border-[#c08552]">
                    <div className="p-6">
                      <div className="mb-6">
                        <h3 className="text-sm font-bold text-[#5e3023] mb-3 tracking-wide">SLIDERS</h3>
                        <div className="space-y-2">
                          <a href="#collections" className="block text-[#5e3023] hover:text-[#c08552] transition py-1">
                            All Sliders
                          </a>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-[#5e3023] mb-3 tracking-wide">FEATURED</h3>
                        <div className="space-y-2">
                          {menuStructure.men.featured.map((feat, idx) => (
                            <a key={idx} href="#collections" className="block text-[#c08552] hover:text-[#5e3023] transition py-1 font-medium">
                              {feat}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div 
                className="relative"
                onMouseEnter={() => setHoveredMenu('women')}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <button className="px-4 py-2 text-[#5e3023] hover:text-[#c08552] font-semibold transition">
                  COMING SOON
                </button>
                {hoveredMenu === 'women' && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-xl mt-0 border-t-2 border-[#c08552]">
                    <div className="p-6">
                      <p className="text-[#c08552] font-semibold text-center py-4">New Collections Launching Soon</p>
                    </div>
                  </div>
                )}
              </div>

              <a href="#about" className="px-4 py-2 text-[#5e3023] hover:text-[#c08552] font-semibold transition">
                ABOUT
              </a>
              <a href="#contact" className="px-4 py-2 text-[#5e3023] hover:text-[#c08552] font-semibold transition">
                CONTACT
              </a>
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <button className="text-[#5e3023] hover:text-[#c08552] transition">
                <Search size={22} />
              </button>
              <button className="text-[#5e3023] hover:text-[#c08552] transition">
                <User size={22} />
              </button>
            </div>

            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-[#5e3023]">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {menuOpen && (
            <div className="lg:hidden pb-4 border-t border-[#c08552] mt-2">
              <a href="#home" className="block py-3 text-[#5e3023] hover:text-[#c08552] font-semibold">HOME</a>
              <div className="py-3">
                <p className="text-[#5e3023] font-bold mb-2">COLLECTIONS</p>
                <div className="pl-4 space-y-2">
                  <a href="#collections" className="block text-[#5e3023] hover:text-[#c08552] py-1">
                    Sliders
                  </a>
                </div>
              </div>
              <div className="py-3">
                <p className="text-[#5e3023] font-bold mb-2">COMING SOON</p>
                <p className="pl-4 text-[#c08552]">New Collections</p>
              </div>
              <a href="#about" className="block py-3 text-[#5e3023] hover:text-[#c08552] font-semibold">ABOUT</a>
              <a href="#contact" className="block py-3 text-[#5e3023] hover:text-[#c08552] font-semibold">CONTACT</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Carousel */}
      <section id="home" className="relative h-screen pt-20">
        <div className="relative h-full overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="absolute inset-0 bg-linear-to-b from-black/30 to-black/50 z-10"></div>
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="text-center text-white px-4 max-w-4xl">
                  <h1 className="text-5xl md:text-7xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
                  <a
                    href="#collections"
                    className="inline-flex items-center gap-2 bg-[#c08552] text-white px-8 py-4 rounded-full hover:bg-[#5e3023] transition text-lg font-semibold group"
                  >
                    {slide.cta}
                    <ArrowRight className="group-hover:translate-x-1 transition" size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full transition"
            aria-label="Previous slide"
          >
            <ChevronLeft className="text-white" size={32} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full transition"
            aria-label="Next slide"
          >
            <ChevronRight className="text-white" size={32} />
          </button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-white w-8' : 'bg-white/50 w-3'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#5e3023] mb-6">Our Story</h2>
          <p className="text-lg text-[#5e3023] mb-6 leading-relaxed">
            Crovell was born from a simple belief: great sliders shouldn't break the bank. We're redefining comfort by crafting sliders that blend contemporary design with everyday relaxation, all at prices that make sense for real people living real lives.
          </p>
          <p className="text-lg text-[#5e3023] mb-6 leading-relaxed">
            Every pair of Crovell sliders is designed with the modern urbanite in mind—whether you're at home, on the beach, or making quick errands. We focus on quality materials, comfort-first design, and the kind of versatility that fits seamlessly into your daily routine.
          </p>
          <p className="text-lg text-[#5e3023] leading-relaxed">
            For those who refuse to compromise on comfort or style, Crovell is your everyday slider companion. Slide into comfort.
          </p>
        </div>
      </section>

      {/* Collections Section */}
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
                    <div className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-sm font-bold ${
                      product.badge === 'New' ? 'bg-[#c08552] text-white' :
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
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(product.colors)].map((_, i) => (
                      <div key={i} className="w-4 h-4 rounded-full border-2 border-[#5e3023]" style={{backgroundColor: i === 0 ? '#5e3023' : i === 1 ? '#c08552' : '#f3e9dc'}}></div>
                    ))}
                  </div>
                  <span className="text-sm text-[#5e3023]/70">{product.colors} colors</span>
                </div>
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

      {/* Contact Section */}
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
                    <p className="text-[#5e3023]/70">mpecrovell@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-[#c08552] mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-[#5e3023]">Phone</p>
                    <p className="text-[#5e3023]/70">+91 6386010462</p>
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
                <div className="space-y-6">
                  <div>
                    <label className="block text-[#5e3023] font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-[#c08552] rounded-lg focus:outline-none focus:border-[#5e3023] bg-white transition"
                      placeholder="Your name"
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
                    ></textarea>
                  </div>
                  
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-[#c08552] text-white py-3 rounded-lg hover:bg-[#5e3023] transition font-semibold text-lg"
                  >
                    Send Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#5e3023] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">CROVELL</h3>
              <p className="text-[#f3e9dc]">Premium sliders for everyday comfort</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-[#f3e9dc] hover:text-[#c08552] transition">Home</a>
                <a href="#collections" className="block text-[#f3e9dc] hover:text-[#c08552] transition">Sliders</a>
                <a href="#about" className="block text-[#f3e9dc] hover:text-[#c08552] transition">About</a>
                <a href="#contact" className="block text-[#f3e9dc] hover:text-[#c08552] transition">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <p className="text-[#f3e9dc] mb-4">Stay updated on new releases</p>
              <div className="flex space-x-4">
                <Instagram className="text-[#f3e9dc] hover:text-[#c08552] cursor-pointer transition" size={24} />
                <Facebook className="text-[#f3e9dc] hover:text-[#c08552] cursor-pointer transition" size={24} />
                <Twitter className="text-[#f3e9dc] hover:text-[#c08552] cursor-pointer transition" size={24} />
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#c08552] pt-8 text-center text-[#f3e9dc]">
            <p>&copy; 2026 Crovell. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CrovellWebsite;