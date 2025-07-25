import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare } from 'lucide-react'

const Contact = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 }
        }
    }

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000))

        setIsSubmitting(false)
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000)
    }

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-batman-black via-batman-dark to-batman-darkblue relative">
            {/* Bat Signal Background */}
            <div className="absolute inset-0 overflow-hidden opacity-5">
                <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 360],
                        opacity: [0.05, 0.1, 0.05],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <div className="w-full h-full bg-batman-gold rounded-full blur-3xl"></div>
                </motion.div>
            </div>

            <div className="container mx-auto px-6 relative z-10" ref={ref}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="max-w-7xl mx-auto"
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="font-batman text-5xl font-bold mb-6">
                            <span className="gradient-text">Light the</span> <span className="text-white">Bat-Signal</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Ready to embark on a new digital mission? Let's connect and build something extraordinary together.
                            Every great partnership starts with a conversation.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <motion.div variants={itemVariants} className="space-y-8">
                            <div className="bg-batman-gray/30 backdrop-blur-sm rounded-2xl p-8 border border-batman-gold/20">
                                <h3 className="font-batman text-2xl font-bold text-batman-gold mb-8">
                                    Get In Touch
                                </h3>

                                <div className="space-y-6">
                                    {/* Email */}
                                    <motion.div
                                        className="flex items-center gap-4 p-4 bg-batman-dark/30 rounded-xl border border-batman-gold/10 hover:border-batman-gold/30 transition-all duration-300"
                                        whileHover={{ x: 5 }}
                                    >
                                        <div className="bg-batman-gold/20 p-3 rounded-lg">
                                            <Mail size={24} className="text-batman-gold" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold">Email</h4>
                                            <a href="mailto:babashankarsn@gmail.com" className="text-gray-400 hover:text-batman-gold transition-colors">
                                                babashankarsn@gmail.com
                                            </a>
                                        </div>
                                    </motion.div>

                                    {/* Phone */}
                                    <motion.div
                                        className="flex items-center gap-4 p-4 bg-batman-dark/30 rounded-xl border border-batman-gold/10 hover:border-batman-gold/30 transition-all duration-300"
                                        whileHover={{ x: 5 }}
                                    >
                                        <div className="bg-batman-gold/20 p-3 rounded-lg">
                                            <Phone size={24} className="text-batman-gold" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold">Phone</h4>
                                            <a href="tel:+918296189723" className="text-gray-400 hover:text-batman-gold transition-colors">
                                                +91 8296189723
                                            </a>
                                        </div>
                                    </motion.div>

                                    {/* Location */}
                                    <motion.div
                                        className="flex items-center gap-4 p-4 bg-batman-dark/30 rounded-xl border border-batman-gold/10 hover:border-batman-gold/30 transition-all duration-300"
                                        whileHover={{ x: 5 }}
                                    >
                                        <div className="bg-batman-gold/20 p-3 rounded-lg">
                                            <MapPin size={24} className="text-batman-gold" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold">Location</h4>
                                            <p className="text-gray-400">Bengaluru, Karnataka, India</p>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Social Links */}
                                <div className="mt-8 pt-8 border-t border-batman-gold/20">
                                    <h4 className="text-batman-gold font-semibold mb-4">Connect on Social</h4>
                                    <div className="flex gap-4">
                                        <motion.a
                                            href="#"
                                            className="bg-batman-dark/50 p-3 rounded-lg border border-batman-gold/20 hover:border-batman-gold/40 hover:bg-batman-gold/10 transition-all duration-300"
                                            whileHover={{ scale: 1.1, y: -3 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Github size={24} className="text-batman-gold" />
                                        </motion.a>
                                        <motion.a
                                            href="#"
                                            className="bg-batman-dark/50 p-3 rounded-lg border border-batman-gold/20 hover:border-batman-gold/40 hover:bg-batman-gold/10 transition-all duration-300"
                                            whileHover={{ scale: 1.1, y: -3 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Linkedin size={24} className="text-batman-gold" />
                                        </motion.a>
                                    </div>
                                </div>
                            </div>

                            {/* Availability */}
                            <motion.div
                                className="bg-gradient-to-r from-batman-gold/10 to-batman-yellow/5 rounded-xl p-6 border border-batman-gold/30"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <h4 className="text-batman-gold font-semibold">Currently Available</h4>
                                </div>
                                <p className="text-gray-300 text-sm">
                                    Open to new opportunities and exciting projects.
                                    Let's discuss how we can bring your vision to life!
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div variants={itemVariants}>
                            <div className="bg-batman-gray/30 backdrop-blur-sm rounded-2xl p-8 border border-batman-gold/20">
                                <h3 className="font-batman text-2xl font-bold text-batman-gold mb-8 flex items-center gap-3">
                                    <MessageSquare size={28} />
                                    Send a Message
                                </h3>

                                {submitted && (
                                    <motion.div
                                        className="bg-green-500/20 border border-green-500/30 text-green-400 p-4 rounded-lg mb-6"
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        <p className="font-semibold">Message sent successfully!</p>
                                        <p className="text-sm">I'll get back to you as soon as possible.</p>
                                    </motion.div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name */}
                                    <div>
                                        <label htmlFor="name" className="block text-batman-gold font-semibold mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full bg-batman-dark/50 border border-batman-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-batman-gold focus:outline-none focus:ring-2 focus:ring-batman-gold/20 transition-all duration-300"
                                            placeholder="Your name"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-batman-gold font-semibold mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full bg-batman-dark/50 border border-batman-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-batman-gold focus:outline-none focus:ring-2 focus:ring-batman-gold/20 transition-all duration-300"
                                            placeholder="your@email.com"
                                        />
                                    </div>

                                    {/* Subject */}
                                    <div>
                                        <label htmlFor="subject" className="block text-batman-gold font-semibold mb-2">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full bg-batman-dark/50 border border-batman-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-batman-gold focus:outline-none focus:ring-2 focus:ring-batman-gold/20 transition-all duration-300"
                                            placeholder="What's this about?"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="block text-batman-gold font-semibold mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={5}
                                            className="w-full bg-batman-dark/50 border border-batman-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-batman-gold focus:outline-none focus:ring-2 focus:ring-batman-gold/20 transition-all duration-300 resize-none"
                                            placeholder="Tell me about your project or idea..."
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${isSubmitting
                                                ? 'bg-batman-gray cursor-not-allowed'
                                                : 'bg-gradient-to-r from-batman-gold to-batman-yellow text-batman-black hover:shadow-lg hover:shadow-batman-gold/25'
                                            }`}
                                        whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                                        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <motion.div
                                                    className="w-5 h-5 border-2 border-batman-black border-t-transparent rounded-full"
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                />
                                                Sending Signal...
                                            </>
                                        ) : (
                                            <>
                                                <Send size={20} />
                                                Light the Bat-Signal
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            </div>
                        </motion.div>
                    </div>

                    {/* Call to Action */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-16 text-center"
                    >
                        <div className="bg-batman-black/50 rounded-xl p-8 border-l-4 border-batman-gold max-w-4xl mx-auto">
                            <h4 className="font-batman text-xl text-batman-gold mb-4">Ready to Start Something Amazing?</h4>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Whether you're looking to build a new application, optimize existing systems,
                                or discuss innovative solutions—I'm here to help bring your vision to life.
                                Let's create something that makes a difference.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
