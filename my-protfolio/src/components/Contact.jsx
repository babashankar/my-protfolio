import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Github,
    Linkedin,
    MessageSquare,
    Clock,
    Globe,
    CheckCircle,
    AlertCircle,
    Sparkles,
    Zap
} from 'lucide-react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [errors, setErrors] = useState({})

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                type: "spring",
                damping: 20,
                stiffness: 100
            }
        }
    }

    const validateForm = () => {
        const newErrors = {}

        if (!formData.name.trim()) newErrors.name = 'Name is required'
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email'
        }
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
        if (!formData.message.trim()) newErrors.message = 'Message is required'

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validateForm()) return

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
        <section id="contact" className="py-16 md:py-24 bg-gotham-dark relative overflow-hidden">
            {/* Advanced Batman-themed background */}
            <div className="absolute inset-0">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gotham-dark via-gotham-darker to-black"></div>

                {/* Animated bat signals */}
                <div className="absolute inset-0 opacity-5">
                    <motion.div
                        className="absolute top-20 left-10 w-32 h-32 bg-bat-yellow rounded-full blur-3xl"
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.05, 0.15, 0.05],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute bottom-20 right-10 w-40 h-40 bg-bat-blue rounded-full blur-3xl"
                        animate={{
                            scale: [1.2, 1, 1.2],
                            opacity: [0.05, 0.1, 0.05],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2
                        }}
                    />
                    <motion.div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-bat-yellow rounded-full blur-3xl"
                        animate={{
                            rotate: 360,
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                            scale: { duration: 12, repeat: Infinity, ease: "easeInOut" }
                        }}
                    />
                </div>

                {/* Floating elements */}
                <div className="absolute inset-0 opacity-10">
                    {Array.from({ length: 15 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                opacity: [0.1, 0.3, 0.1],
                                rotate: [0, 180, 360],
                            }}
                            transition={{
                                duration: 8 + Math.random() * 4,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        >
                            <Zap size={12 + Math.random() * 8} className="text-bat-yellow" />
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="max-w-7xl mx-auto"
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
                        <div className="flex items-center justify-center mb-6">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="w-12 h-12 bg-gradient-to-r from-bat-yellow to-amber-400 rounded-full flex items-center justify-center mr-4"
                            >
                                <Sparkles className="w-6 h-6 text-gotham-dark" />
                            </motion.div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                                Light the <span className="text-transparent bg-clip-text bg-gradient-to-r from-bat-yellow to-amber-400">Bat-Signal</span>
                            </h2>
                        </div>
                        <p className="text-lg md:text-xl text-gotham-light max-w-3xl mx-auto leading-relaxed">
                            Ready to embark on a new digital mission? Let's connect and build something extraordinary together.
                            Every great partnership starts with a conversation.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
                        {/* Contact Information */}
                        <motion.div variants={itemVariants} className="space-y-6 md:space-y-8">
                            <div className="bg-gotham-gray/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-bat-yellow/20 hover:border-bat-yellow/40 transition-all duration-300">
                                <h3 className="text-2xl md:text-3xl font-bold text-bat-yellow mb-6 md:mb-8 flex items-center gap-3">
                                    <MessageSquare className="w-7 h-7" />
                                    Get In Touch
                                </h3>

                                <div className="space-y-4 md:space-y-6">
                                    {/* Email */}
                                    <motion.a
                                        href="mailto:babashankarsn@gmail.com"
                                        className="flex items-center gap-4 p-4 md:p-5 bg-gotham-dark/40 rounded-xl border border-bat-yellow/10 hover:border-bat-yellow/30 hover:bg-gotham-dark/60 transition-all duration-300 group"
                                        whileHover={{ x: 5, scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <div className="bg-bat-yellow/20 p-3 rounded-lg group-hover:bg-bat-yellow/30 transition-colors">
                                            <Mail className="w-6 h-6 text-bat-yellow" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h4 className="text-white font-semibold text-base md:text-lg">Email</h4>
                                            <p className="text-gotham-light group-hover:text-bat-yellow transition-colors text-sm md:text-base truncate">
                                                babashankarsn@gmail.com
                                            </p>
                                        </div>
                                    </motion.a>

                                    {/* Phone */}
                                    <motion.a
                                        href="tel:+918296189723"
                                        className="flex items-center gap-4 p-4 md:p-5 bg-gotham-dark/40 rounded-xl border border-bat-yellow/10 hover:border-bat-yellow/30 hover:bg-gotham-dark/60 transition-all duration-300 group"
                                        whileHover={{ x: 5, scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <div className="bg-bat-yellow/20 p-3 rounded-lg group-hover:bg-bat-yellow/30 transition-colors">
                                            <Phone className="w-6 h-6 text-bat-yellow" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold text-base md:text-lg">Phone</h4>
                                            <p className="text-gotham-light group-hover:text-bat-yellow transition-colors text-sm md:text-base">
                                                +91 8296189723
                                            </p>
                                        </div>
                                    </motion.a>

                                    {/* Location */}
                                    <motion.div
                                        className="flex items-center gap-4 p-4 md:p-5 bg-gotham-dark/40 rounded-xl border border-bat-yellow/10 hover:border-bat-yellow/30 transition-all duration-300 group"
                                        whileHover={{ x: 5, scale: 1.02 }}
                                    >
                                        <div className="bg-bat-yellow/20 p-3 rounded-lg group-hover:bg-bat-yellow/30 transition-colors">
                                            <MapPin className="w-6 h-6 text-bat-yellow" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold text-base md:text-lg">Location</h4>
                                            <p className="text-gotham-light text-sm md:text-base">Bengaluru, Karnataka, India</p>
                                        </div>
                                    </motion.div>

                                    {/* Timezone */}
                                    <motion.div
                                        className="flex items-center gap-4 p-4 md:p-5 bg-gotham-dark/40 rounded-xl border border-bat-yellow/10 hover:border-bat-yellow/30 transition-all duration-300 group"
                                        whileHover={{ x: 5, scale: 1.02 }}
                                    >
                                        <div className="bg-bat-yellow/20 p-3 rounded-lg group-hover:bg-bat-yellow/30 transition-colors">
                                            <Clock className="w-6 h-6 text-bat-yellow" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold text-base md:text-lg">Timezone</h4>
                                            <p className="text-gotham-light text-sm md:text-base">IST (GMT+5:30)</p>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Social Links */}
                                <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-bat-yellow/20">
                                    <h4 className="text-bat-yellow font-semibold mb-4 text-base md:text-lg flex items-center gap-2">
                                        <Globe className="w-5 h-5" />
                                        Connect on Social
                                    </h4>
                                    <div className="flex gap-3 md:gap-4">
                                        <motion.a
                                            href="https://github.com/yourusername"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-gotham-dark/50 p-3 md:p-4 rounded-xl border border-bat-yellow/20 hover:border-bat-yellow/40 hover:bg-bat-yellow/10 transition-all duration-300 group"
                                            whileHover={{ scale: 1.1, y: -3 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Github className="w-5 h-5 md:w-6 md:h-6 text-bat-yellow group-hover:text-white transition-colors" />
                                        </motion.a>
                                        <motion.a
                                            href="https://linkedin.com/in/yourprofile"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-gotham-dark/50 p-3 md:p-4 rounded-xl border border-bat-yellow/20 hover:border-bat-yellow/40 hover:bg-bat-yellow/10 transition-all duration-300 group"
                                            whileHover={{ scale: 1.1, y: -3 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-bat-yellow group-hover:text-white transition-colors" />
                                        </motion.a>
                                    </div>
                                </div>
                            </div>

                            {/* Availability Status */}
                            <motion.div
                                className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-xl p-6 border border-green-500/30 hover:border-green-500/50 transition-all duration-300"
                                whileHover={{ scale: 1.02, y: -2 }}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="relative">
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                                    </div>
                                    <h4 className="text-green-400 font-semibold text-base md:text-lg">Currently Available</h4>
                                </div>
                                <p className="text-gotham-light text-sm md:text-base leading-relaxed">
                                    Open to new opportunities and exciting projects.
                                    Let's discuss how we can bring your vision to life!
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div variants={itemVariants}>
                            <div className="bg-gotham-gray/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-bat-yellow/20 hover:border-bat-yellow/40 transition-all duration-300">
                                <h3 className="text-2xl md:text-3xl font-bold text-bat-yellow mb-6 md:mb-8 flex items-center gap-3">
                                    <Send className="w-7 h-7" />
                                    Send a Message
                                </h3>

                                {submitted && (
                                    <motion.div
                                        className="bg-green-500/10 border border-green-500/30 text-green-400 p-4 md:p-5 rounded-xl mb-6"
                                        initial={{ opacity: 0, y: -20, scale: 0.9 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{ type: "spring", damping: 15 }}
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <CheckCircle className="w-5 h-5" />
                                            <p className="font-semibold text-base">Message sent successfully!</p>
                                        </div>
                                        <p className="text-sm text-green-300">I'll get back to you as soon as possible.</p>
                                    </motion.div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                                    {/* Name */}
                                    <div>
                                        <label htmlFor="name" className="block text-bat-yellow font-semibold mb-2 text-sm md:text-base">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className={`w-full bg-gotham-dark/50 border rounded-xl px-4 py-3 md:py-4 text-white placeholder-gotham-light focus:outline-none focus:ring-2 transition-all duration-300 text-sm md:text-base ${errors.name
                                                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                                                    : 'border-bat-yellow/20 focus:border-bat-yellow focus:ring-bat-yellow/20'
                                                }`}
                                            placeholder="Your name"
                                            aria-describedby={errors.name ? "name-error" : undefined}
                                        />
                                        {errors.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="flex items-center gap-2 mt-2 text-red-400 text-sm"
                                                id="name-error"
                                            >
                                                <AlertCircle className="w-4 h-4" />
                                                {errors.name}
                                            </motion.div>
                                        )}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-bat-yellow font-semibold mb-2 text-sm md:text-base">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className={`w-full bg-gotham-dark/50 border rounded-xl px-4 py-3 md:py-4 text-white placeholder-gotham-light focus:outline-none focus:ring-2 transition-all duration-300 text-sm md:text-base ${errors.email
                                                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                                                    : 'border-bat-yellow/20 focus:border-bat-yellow focus:ring-bat-yellow/20'
                                                }`}
                                            placeholder="your@email.com"
                                            aria-describedby={errors.email ? "email-error" : undefined}
                                        />
                                        {errors.email && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="flex items-center gap-2 mt-2 text-red-400 text-sm"
                                                id="email-error"
                                            >
                                                <AlertCircle className="w-4 h-4" />
                                                {errors.email}
                                            </motion.div>
                                        )}
                                    </div>

                                    {/* Subject */}
                                    <div>
                                        <label htmlFor="subject" className="block text-bat-yellow font-semibold mb-2 text-sm md:text-base">
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            required
                                            className={`w-full bg-gotham-dark/50 border rounded-xl px-4 py-3 md:py-4 text-white placeholder-gotham-light focus:outline-none focus:ring-2 transition-all duration-300 text-sm md:text-base ${errors.subject
                                                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                                                    : 'border-bat-yellow/20 focus:border-bat-yellow focus:ring-bat-yellow/20'
                                                }`}
                                            placeholder="What's this about?"
                                            aria-describedby={errors.subject ? "subject-error" : undefined}
                                        />
                                        {errors.subject && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="flex items-center gap-2 mt-2 text-red-400 text-sm"
                                                id="subject-error"
                                            >
                                                <AlertCircle className="w-4 h-4" />
                                                {errors.subject}
                                            </motion.div>
                                        )}
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="block text-bat-yellow font-semibold mb-2 text-sm md:text-base">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={5}
                                            className={`w-full bg-gotham-dark/50 border rounded-xl px-4 py-3 md:py-4 text-white placeholder-gotham-light focus:outline-none focus:ring-2 transition-all duration-300 resize-none text-sm md:text-base ${errors.message
                                                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                                                    : 'border-bat-yellow/20 focus:border-bat-yellow focus:ring-bat-yellow/20'
                                                }`}
                                            placeholder="Tell me about your project or idea..."
                                            aria-describedby={errors.message ? "message-error" : undefined}
                                        />
                                        {errors.message && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="flex items-center gap-2 mt-2 text-red-400 text-sm"
                                                id="message-error"
                                            >
                                                <AlertCircle className="w-4 h-4" />
                                                {errors.message}
                                            </motion.div>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full flex items-center justify-center gap-3 px-6 md:px-8 py-4 md:py-5 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 ${isSubmitting
                                                ? 'bg-gotham-gray cursor-not-allowed opacity-50'
                                                : 'bg-gradient-to-r from-bat-yellow to-amber-400 text-gotham-dark hover:shadow-lg hover:shadow-bat-yellow/25 hover:scale-[1.02]'
                                            }`}
                                        whileHover={!isSubmitting ? { y: -2 } : {}}
                                        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <motion.div
                                                    className="w-5 h-5 border-2 border-gotham-dark border-t-transparent rounded-full"
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                />
                                                Sending Signal...
                                            </>
                                        ) : (
                                            <>
                                                <Zap className="w-5 h-5" />
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
                        className="mt-12 md:mt-16"
                    >
                        <div className="bg-gradient-to-r from-bat-yellow/10 to-amber-400/10 backdrop-blur-sm border border-bat-yellow/20 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto text-center">
                            <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Ready to Start Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-bat-yellow to-amber-400">Amazing?</span>
                            </h4>
                            <p className="text-gotham-light text-base md:text-lg leading-relaxed mb-6">
                                Whether you're looking to build a new application, optimize existing systems,
                                or discuss innovative solutions—I'm here to help bring your vision to life.
                                Let's create something that makes a difference.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                                <div className="flex items-center gap-2 text-green-400">
                                    <CheckCircle className="w-5 h-5" />
                                    <span className="text-sm md:text-base">Available for new projects</span>
                                </div>
                                <div className="flex items-center gap-2 text-bat-yellow">
                                    <Clock className="w-5 h-5" />
                                    <span className="text-sm md:text-base">Quick response time</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
