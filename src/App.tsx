import { useEffect, useState } from "react";
import {
    Phone, MapPin, Clock, Calendar, Star, ChevronRight,
    CheckCircle2, Shield, HeartHandshake, Smile, Users, Award,
    Stethoscope, Menu, X, ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Tooth = ({ size = 24, className = "" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M10 21.5V16" />
        <path d="M14 21.5V16" />
        <path d="M14.5 22a2.5 2.5 0 0 1-2.5-2.5V16a1 1 0 0 0-1-1h0a1 1 0 0 0-1 1v3.5A2.5 2.5 0 0 1 7.5 22 2.5 2.5 0 0 1 5 19.5V8a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v11.5A2.5 2.5 0 0 1 14.5 22z" />
    </svg>
);
function SmileUpDentalWebsite() {
    const clinic = {
        name: "Dr Ratnika's - Smile Up Dental",
        tagline: "World-class care at affordable rates.",
        rating: "4.8",
        ratingCount: 978,
        address: "Shop No 109, Upper Ground Floor, OPG & Implant Center, Gera's Park View, near Eon Free Zone Road, EON Free Zone, Kharadi, Pune, Maharashtra 411014",
        phone: "+91 91585 85081",
        hours: "Mon-Sat: 10AM - 9PM | Sun: 10AM - 2PM"
    };

    const services = [
        "Digital Dental X-Ray",
        "Dental Laser treatments",
        "Teeth Cleaning and Polishing",
        "Root Canal Treatment (RCT)",
        "Prosthesis / Crown Placement",
        "Gum Treatment / Periodontics",
        "Tooth Colored Fillings",
        "Fixed / Removable Dentures",
        "Extractions / Wisdom Tooth Removal",
        "Special Care for Children",
        "Full Mouth Rehabilitation",
        "Orthodontics (Braces)",
        "Dental Implants",
        "Smile Makeover",
        "Teeth Whitening",
        "Oral Cancer Treatment",
    ];

    const testimonials = [
        {
            quote: "The doctor was very kind and gentle in her work, which made me feel comfortable.",
            author: "Rahul S.",
            type: "Satisfied Patient"
        },
        {
            quote: "Went for teeth cleaning and root canal treatment for my kid. Good experience.",
            author: "Priya M.",
            type: "Parent"
        },
        {
            quote: "Quality service given, Cost is reasonable too. Highly recommend them.",
            author: "Amit K.",
            type: "Happy Patient"
        },
        {
            quote: "Got my wisdom tooth extracted here. Zero pain and great follow-up care.",
            author: "Sneha R.",
            type: "Recent Patient"
        },
        {
            quote: "Best dental clinic in Kharadi. The clinic is extremely hygienic and staff is polite.",
            author: "Vikram D.",
            type: "Regular Patient"
        }
    ];

    const faqs = [
        {
            q: "Do you accept dental insurance?",
            a: "Yes, we work with most major dental insurance providers. Please contact our front desk with your insurance details before your visit for specific coverage information."
        },
        {
            q: "How often should I get a routine dental checkup?",
            a: "We recommend a comprehensive dental checkup and professional cleaning every 6 months to maintain optimal oral health and catch potential issues early."
        },
        {
            q: "Is teeth whitening safe?",
            a: "Absolutely. Professional teeth whitening done at our clinic is completely safe and much more effective (and less damaging to enamel) than over-the-counter kits."
        },
        {
            q: "Do you treat children?",
            a: "Yes! We have specialized pediatric dentistry services. We strive to make dental visits fun and fear-free for our youngest patients."
        },
        {
            q: "What should I do in a dental emergency?",
            a: "Call our clinic immediately. We keep slots open for emergencies like severe toothaches, knocked-out teeth, or broken restorations and will see you as soon as possible."
        }
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [tIndex, setTIndex] = useState(0);
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    // Scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Testimonial auto-rotate
    useEffect(() => {
        const id = setInterval(() => {
            setTIndex((i) => (i + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(id);
    }, [testimonials.length]);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const payload = Object.fromEntries(form.entries());
        console.log("Enquiry submitted:", payload);
        alert("Thanks! Your appointment request has been submitted. Our team will contact you shortly to confirm the timing.");
        e.currentTarget.reset();
    }

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="min-h-screen font-sans text-slate-800 bg-slate-50 selection:bg-teal-500 selection:text-white">
            {/* Schema.org JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Dentist",
                        name: clinic.name,
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "Shop No 109, Upper Ground Floor, OPG & Implant Center, Gera's Park View",
                            addressLocality: "Kharadi, Pune",
                            addressRegion: "Maharashtra",
                            postalCode: "411014",
                            addressCountry: "IN",
                        },
                        telephone: clinic.phone,
                        aggregateRating: {
                            "@type": "AggregateRating",
                            ratingValue: clinic.rating,
                            reviewCount: clinic.ratingCount,
                        },
                    }),
                }}
            />

            {/* Top Bar (Contact Info) */}
            <div className="bg-teal-900 text-teal-50 py-2 px-6 hidden md:block text-sm">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex gap-6">
                        <span className="flex items-center gap-2"><Clock size={14} className="text-teal-400" /> {clinic.hours}</span>
                        <span className="flex items-center gap-2"><MapPin size={14} className="text-teal-400" /> Kharadi, Pune</span>
                    </div>
                    <div className="flex gap-4">
                        <a href="tel:+919158585081" className="flex items-center gap-2 hover:text-white transition-colors font-medium">
                            <Phone size={14} className="text-teal-400" /> {clinic.phone}
                        </a>
                    </div>
                </div>
            </div>

            {/* Navbar */}
            <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3 top-0' : 'bg-white py-4 md:py-5 md:top-[36px] top-0'}`}>
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <a href="#" className="flex items-center gap-3 group">
                        <div className="h-10 w-10 bg-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/20">
                            S
                        </div>
                        <div>
                            <h1 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight leading-none">
                                Smile Up <span className="text-teal-600">Dental</span>
                            </h1>
                            <p className="text-[10px] md:text-xs text-slate-500 font-medium tracking-wider uppercase mt-0.5">
                                Multispeciality Clinic
                            </p>
                        </div>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
                        <a href="#about" className="hover:text-teal-600 transition-colors">About</a>
                        <a href="#services" className="hover:text-teal-600 transition-colors">Services</a>
                        <a href="#testimonials" className="hover:text-teal-600 transition-colors">Reviews</a>
                        <a href="#faq" className="hover:text-teal-600 transition-colors">FAQ</a>
                        <a href="#contact" className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-full transition-all shadow-md shadow-teal-600/20 hover:shadow-lg hover:shadow-teal-600/30 flex items-center gap-2">
                            <Calendar size={16} /> Book Visit
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-slate-800 p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Nav */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-4 shadow-xl absolute w-full left-0 top-full"
                        >
                            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 font-medium py-2">About</a>
                            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 font-medium py-2">Services</a>
                            <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 font-medium py-2">Reviews</a>
                            <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 font-medium py-2">FAQ</a>
                            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-teal-600 text-white px-6 py-3 rounded-xl font-medium text-center mt-2 flex items-center justify-center gap-2">
                                <Calendar size={18} /> Book Appointment
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Hero Section */}
            <header className="relative pt-24 md:pt-[104px] pb-20 md:pb-32 overflow-hidden">
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop"
                        alt="Modern Dental Clinic"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-12 gap-12 items-center mt-12 md:mt-20">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="md:col-span-7 text-white"
                    >
                        <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-400/30 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium text-teal-100 mb-6">
                            <Star size={14} className="text-yellow-400 fill-yellow-400" />
                            Pune's Highest Rated Multispeciality Clinic
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-serif">
                            Healthy Smiles,<br />
                            <span className="text-teal-400">Confident You.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-xl leading-relaxed">
                            Experience world-class dental care with advanced technology and expert specialists. Providing pain-free treatments for your entire family.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#contact" className="bg-teal-600 hover:bg-teal-500 text-white px-8 py-4 rounded-full font-semibold transition-all text-center flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-teal-600/30">
                                Book Appointment <ArrowRight size={18} />
                            </a>
                            <a href="#services" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all text-center flex items-center justify-center gap-2">
                                Explore Services
                            </a>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex items-center gap-6 mt-12 pt-8 border-t border-white/10">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-300 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 40}`} alt="Patient" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="flex items-center gap-1 text-yellow-400 mb-1">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} className="fill-yellow-400" />)}
                                </div>
                                <p className="text-sm text-slate-300"><span className="font-bold text-white">{clinic.rating}</span> from {clinic.ratingCount}+ reviews</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Hero Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                        className="md:col-span-5 relative hidden md:block"
                    >
                        <div className="bg-white p-8 rounded-3xl shadow-2xl relative">
                            <div className="absolute -top-6 -right-6 bg-teal-100 w-24 h-24 rounded-full -z-10 blur-2xl opacity-70"></div>
                            <div className="absolute -bottom-6 -left-6 bg-blue-100 w-32 h-32 rounded-full -z-10 blur-2xl opacity-70"></div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Request a Call Back</h3>
                            <p className="text-slate-500 mb-6 text-sm">Fill details below and we'll get right back to you.</p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                                    <input name="name" required placeholder="John Doe" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                                    <input name="phone" required type="tel" placeholder="+91 00000 00000" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">How can we help?</label>
                                    <select name="service" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all text-slate-600">
                                        <option>General Checkup</option>
                                        <option>Toothache/Pain</option>
                                        <option>Teeth Whitening</option>
                                        <option>Dental Implants</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-semibold transition-colors mt-2">
                                    Submit Request
                                </button>
                                <p className="text-xs text-center text-slate-400 mt-4 flex items-center justify-center gap-1">
                                    <Shield size={12} /> Your information is 100% secure
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Stats Bar */}
            <div className="relative z-20 max-w-7xl mx-auto px-6 -mt-10 md:-mt-16 mb-20">
                <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-slate-100">
                    <div className="text-center px-4">
                        <div className="flex justify-center mb-3"><Users className="text-teal-500 w-8 h-8" /></div>
                        <h4 className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">10k+</h4>
                        <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Happy Patients</p>
                    </div>
                    <div className="text-center px-4">
                        <div className="flex justify-center mb-3"><Award className="text-teal-500 w-8 h-8" /></div>
                        <h4 className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">12+</h4>
                        <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Years Experience</p>
                    </div>
                    <div className="text-center px-4">
                        <div className="flex justify-center mb-3"><Star className="text-teal-500 w-8 h-8" /></div>
                        <h4 className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">4.8</h4>
                        <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Google Rating</p>
                    </div>
                    <div className="text-center px-4">
                        <div className="flex justify-center mb-3"><Stethoscope className="text-teal-500 w-8 h-8" /></div>
                        <h4 className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">15+</h4>
                        <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Specialists</p>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <section id="about" className="py-20 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-teal-100 rounded-[3rem] transform -rotate-3 scale-105 -z-10"></div>
                        <img
                            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop"
                            alt="Dr. Ratnika at Smile Up Dental"
                            className="rounded-[3rem] w-full h-[500px] object-cover shadow-lg"
                        />
                        <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-xl hidden md:block">
                            <div className="flex items-center gap-4">
                                <div className="bg-teal-100 p-3 rounded-full text-teal-600">
                                    <HeartHandshake size={28} />
                                </div>
                                <div>
                                    <p className="font-bold text-xl text-slate-900">Dr. Ratnika</p>
                                    <p className="text-sm text-slate-500">Chief Dental Surgeon</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <h4 className="text-teal-600 font-bold tracking-wider uppercase text-sm mb-3">About The Clinic</h4>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-serif leading-tight">
                            Redefining Dental Care in Pune with Advanced Technology
                        </h3>
                        <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                            {clinic.name} is one of Pune's highest rated multispeciality dental clinics. We offer complete dental care under one roof with a patient-first approach.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-8">
                            Our team of highly qualified specialists uses strictly sterilized equipment and state-of-the-art tech to provide painless, effective treatments. From routine cleanings to complex full-mouth rehabilitations, your smile is safe with us.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 mb-10">
                            {[
                                "State of the art equipment",
                                "Strict sterilization protocols",
                                "Affordable treatment plans",
                                "Zero-pain dentistry approach"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-teal-500 w-5 h-5 flex-shrink-0" />
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <a href="#about-more" className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors group">
                            Learn more about our team
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-900/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h4 className="text-teal-400 font-bold tracking-wider uppercase text-sm mb-3">Why Choose Us</h4>
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 font-serif">A Better Dental Experience</h3>
                        <p className="text-slate-400 text-lg">We've designed our practice around your comfort, convenience, and health.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { icon: <Shield size={32} />, title: "Safety First", desc: "Rigorous 4-step sterilization protocols for your complete safety." },
                            { icon: <Smile size={32} />, title: "Pain-Free", desc: "Advanced anesthesia techniques ensuring a comfortable procedure." },
                            { icon: <Clock size={32} />, title: "No Waiting", desc: "Respecting your time with strictly scheduled zero-wait appointments." },
                            { icon: <Stethoscope size={32} />, title: "Expert Care", desc: "Specialists for every branch of dentistry under one single roof." }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial="hidden" whileInView="visible" viewport={{ once: true }}
                                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } } }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
                            >
                                <div className="text-teal-400 mb-6 bg-teal-900/50 w-16 h-16 rounded-2xl flex items-center justify-center">
                                    {feature.icon}
                                </div>
                                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section id="services" className="py-24 px-6 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h4 className="text-teal-600 font-bold tracking-wider uppercase text-sm mb-3">Treatments</h4>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-serif">Comprehensive Dental Services</h3>
                        <p className="text-slate-600 text-lg">From basic cleanings to full mouth reconstructions, we've got your smile covered.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: (i % 8) * 0.05, duration: 0.4 }}
                                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                            >
                                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 mb-5 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                                    <Tooth size={24} />
                                </div>
                                <h4 className="font-bold text-slate-800 text-lg mb-2">{service}</h4>
                                <p className="text-sm text-slate-500 line-clamp-2">High-quality care tailored specifically to your exact dental needs.</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <a href="#contact" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-semibold transition-all">
                            View Full Pricing & Details <ChevronRight size={18} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="py-24 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-4 mb-8 md:mb-0">
                        <h4 className="text-teal-600 font-bold tracking-wider uppercase text-sm mb-3">Testimonials</h4>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-serif">What Our Patients Say</h3>
                        <p className="text-slate-600 mb-8">Don't just take our word for it. Read what hundreds of satisfied patients have to say about their experience.</p>

                        <div className="flex items-center gap-2">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map(i => <img key={i} src={`https://i.pravatar.cc/100?img=${i + 20}`} className="w-10 h-10 rounded-full border-2 border-white" alt="Avatar" />)}
                            </div>
                            <div className="ml-2">
                                <div className="flex text-yellow-400 text-sm"><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /></div>
                                <span className="text-xs font-bold">{clinic.rating} on Google</span>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-8 relative">
                        <div className="absolute top-0 right-0 text-9xl text-slate-50 font-serif leading-none -z-10 -mt-8 mr-8">"</div>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={tIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="bg-slate-50 border border-slate-100 p-8 md:p-12 rounded-3xl shadow-lg relative z-10"
                            >
                                <div className="flex text-yellow-400 mb-6">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="currentColor" size={20} />)}
                                </div>
                                <p className="text-xl md:text-2xl text-slate-700 italic mb-8 leading-relaxed font-serif">
                                    "{testimonials[tIndex].quote}"
                                </p>
                                <div className="flex items-center justify-between border-t border-slate-200 pt-6">
                                    <div>
                                        <p className="font-bold text-lg text-slate-900">{testimonials[tIndex].author}</p>
                                        <p className="text-sm text-slate-500">{testimonials[tIndex].type}</p>
                                    </div>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png" alt="Google Review" className="h-6 opacity-80" />
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Dots */}
                        <div className="flex justify-center gap-2 mt-8">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setTIndex(i)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all ${i === tIndex ? 'bg-teal-600 w-8' : 'bg-slate-300'}`}
                                    aria-label={`Go to slide ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="py-24 px-6 bg-slate-900">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div>
                            <h4 className="text-teal-400 font-bold tracking-wider uppercase text-sm mb-3">Gallery</h4>
                            <h3 className="text-3xl md:text-4xl font-bold text-white font-serif">Step Inside Our Clinic</h3>
                        </div>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-teal-400 hover:text-teal-300 font-medium flex items-center gap-2">
                            Follow us on Instagram <ArrowRight size={16} />
                        </a>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                        <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden group">
                            <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Clinic Interior" />
                        </div>
                        <div className="rounded-2xl overflow-hidden group">
                            <img src="https://images.unsplash.com/photo-1598256989410-bce51af6dce7?q=80&w=500&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Dental Equipment" />
                        </div>
                        <div className="rounded-2xl overflow-hidden group">
                            <img src="https://images.unsplash.com/photo-1609840113887-29007e24699f?q=80&w=500&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Waiting Area" />
                        </div>
                        <div className="col-span-2 rounded-2xl overflow-hidden group">
                            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Doctor Consultation" />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="py-24 px-6 bg-slate-50">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h4 className="text-teal-600 font-bold tracking-wider uppercase text-sm mb-3">Got Questions?</h4>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif">Frequently Asked Questions</h3>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-slate-800 focus:outline-none"
                                >
                                    {faq.q}
                                    <ChevronRight className={`w-5 h-5 text-teal-600 transition-transform ${openFaq === i ? 'rotate-90' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-5 pt-0 text-slate-600 leading-relaxed border-t border-slate-50 mt-2">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact / Appt */}
            <section id="contact" className="py-24 px-6 bg-white relative overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-50 rounded-full blur-3xl -z-10 pointer-events-none"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-50 rounded-full blur-3xl -z-10 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Info & Map */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <h4 className="text-teal-600 font-bold tracking-wider uppercase text-sm mb-3">Get in Touch</h4>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-serif">Visit Our Clinic</h3>
                        <p className="text-slate-600 text-lg mb-10">We're located in the heart of Kharadi, easily accessible with ample parking available.</p>

                        <div className="space-y-8 mb-10">
                            <div className="flex gap-4">
                                <div className="bg-teal-50 w-12 h-12 rounded-full flex items-center justify-center text-teal-600 flex-shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h5 className="font-bold text-slate-900 text-lg mb-1">Clinic Address</h5>
                                    <p className="text-slate-600 leading-relaxed">{clinic.address}</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="bg-teal-50 w-12 h-12 rounded-full flex items-center justify-center text-teal-600 flex-shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h5 className="font-bold text-slate-900 text-lg mb-1">Clinic Hours</h5>
                                    <p className="text-slate-600 leading-relaxed">
                                        Monday - Saturday: 10:00 AM - 9:00 PM<br />
                                        Sunday: 10:00 AM - 2:00 PM
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="bg-teal-50 w-12 h-12 rounded-full flex items-center justify-center text-teal-600 flex-shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h5 className="font-bold text-slate-900 text-lg mb-1">Contact Us</h5>
                                    <p className="text-slate-600 leading-relaxed">
                                        Phone: {clinic.phone}<br />
                                        Email: smileupdental.kharadi@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="h-[300px] rounded-3xl overflow-hidden shadow-lg border border-slate-100">
                            <iframe
                                title="clinic-map"
                                src={`https://www.google.com/maps?q=${encodeURIComponent(
                                    clinic.address
                                )}&output=embed`}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                allowFullScreen
                            />
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }}
                        variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }}
                        className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative"
                    >
                        <h3 className="text-3xl font-bold mb-2">Book an Appointment</h3>
                        <p className="text-slate-400 mb-8">Scheduling is easy. Choose your preferred time and we'll confirm via call or text.</p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">First Name</label>
                                    <input name="fname" required className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all placeholder:text-slate-600" placeholder="Jane" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">Last Name</label>
                                    <input name="lname" required className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all placeholder:text-slate-600" placeholder="Doe" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Phone Number</label>
                                <input name="phone" required type="tel" className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all placeholder:text-slate-600" placeholder="+91 00000 00000" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Service Required</label>
                                <select name="service" defaultValue="" className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all text-white appearance-none">
                                    <option value="" disabled className="text-slate-900">Select a service...</option>
                                    <option className="text-slate-900">General Consultation</option>
                                    <option className="text-slate-900">Root Canal</option>
                                    <option className="text-slate-900">Teeth Cleaning</option>
                                    <option className="text-slate-900">Orthodontics (Braces)</option>
                                    <option className="text-slate-900">Dental Implants</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Preferred Date (Optional)</label>
                                <input type="date" name="date" className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all text-white" style={{ colorScheme: 'dark' }} />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                                <textarea name="message" rows={3} className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all placeholder:text-slate-600 resize-none" placeholder="Any specific concerns or pain?" />
                            </div>

                            <button className="w-full bg-teal-600 hover:bg-teal-500 text-white py-4 rounded-xl font-bold text-lg transition-colors mt-4">
                                Schedule Appointment
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-950 text-slate-400 py-16 px-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-10 w-10 bg-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                                S
                            </div>
                            <div>
                                <h1 className="text-lg font-bold text-white tracking-tight leading-none">
                                    Smile Up
                                </h1>
                                <p className="text-[10px] text-teal-400 font-medium tracking-wider uppercase mt-0.5">
                                    Dental Clinic
                                </p>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed mb-6">
                            Pune's highly rated multispeciality dental clinic delivering world-class care, advanced technology, and beautiful smiles.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#about" className="hover:text-teal-400 transition-colors">About Clinic</a></li>
                            <li><a href="#services" className="hover:text-teal-400 transition-colors">Our Services</a></li>
                            <li><a href="#testimonials" className="hover:text-teal-400 transition-colors">Patient Reviews</a></li>
                            <li><a href="#faq" className="hover:text-teal-400 transition-colors">FAQs</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Treatments</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#services" className="hover:text-teal-400 transition-colors">Root Canal Treatment</a></li>
                            <li><a href="#services" className="hover:text-teal-400 transition-colors">Dental Implants</a></li>
                            <li><a href="#services" className="hover:text-teal-400 transition-colors">Orthodontics</a></li>
                            <li><a href="#services" className="hover:text-teal-400 transition-colors">Teeth Whitening</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Visit Us</h4>
                        <p className="text-sm leading-relaxed mb-4">{clinic.address}</p>
                        <a href="#contact" className="text-teal-400 hover:text-white font-medium text-sm transition-colors flex items-center gap-2">
                            Get Directions &rarr;
                        </a>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm">
                    <p>&copy; {new Date().getFullYear()} {clinic.name}. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}


function App() {
    return (
        <SmileUpDentalWebsite />
    );
}

export default App;
