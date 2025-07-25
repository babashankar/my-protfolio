import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Code, Shield, Brain, Database, Globe, Car } from 'lucide-react'

const Projects = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

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

    const projects = [
        {
            title: "Origin WAAP",
            subtitle: "Web Application & API Protection",
            description: "Enterprise-level security solution for web applications and APIs. Built robust backend services with Go, implementing REST APIs and working with proprietary databases for large-scale data management.",
            icon: <Shield size={32} />,
            technologies: ["Go", "Gorilla Mux", "NoSQL", "Docker", "Kubernetes", "REST APIs"],
            features: [
                "Backend service registrations and configurations",
                "Metrics collection for WAAP instances",
                "DataBattery (Apache Cassandra) integration",
                "Deployment automation with Docker/Kubernetes",
                "Concurrency optimization with Goroutines"
            ],
            type: "Professional",
            status: "Active",
            gradient: "from-blue-600 to-purple-600"
        },
        {
            title: "Smart Driving Assistance",
            subtitle: "AI-Powered Automotive Safety",
            description: "Advanced driver assistance system using deep learning for real-time safety features. Implements lane detection, traffic sign recognition, and voice alerts to enhance driving safety.",
            icon: <Car size={32} />,
            technologies: ["Python", "Deep Learning", "Computer Vision", "TensorFlow", "OpenCV"],
            features: [
                "Real-time lane detection algorithms",
                "Traffic sign detection and recognition",
                "Voice alert system integration",
                "Dual model architecture with dataset training",
                "Performance optimization for real-time processing"
            ],
            type: "Academic",
            status: "Completed",
            gradient: "from-green-600 to-teal-600",
            conference: "International Conference on Computational Sciences and Sustainable Technologies"
        },
        {
            title: "Hospital Management System",
            subtitle: "Digital Healthcare Platform",
            description: "Comprehensive web application for healthcare management, enabling patients to book appointments and doctors to manage patient information efficiently.",
            icon: <Globe size={32} />,
            technologies: ["PostgreSQL", "Node.js", "HTML/CSS", "JavaScript", "Express"],
            features: [
                "Patient appointment booking system",
                "Doctor availability management",
                "Patient information and symptoms tracking",
                "Prescription management for doctors",
                "Secure database design with PostgreSQL"
            ],
            type: "Personal",
            status: "Completed",
            gradient: "from-red-600 to-pink-600"
        }
    ]

    return (
        <section id="projects" className="py-20 bg-batman-dark relative">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-20 w-64 h-64 bg-batman-gold rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-batman-blue rounded-full blur-3xl"></div>
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
                            <span className="gradient-text">Mission</span> <span className="text-white">Archives</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            A collection of digital missions where code meets purpose. Each project represents a challenge conquered
                            and a step forward in protecting the digital realm.
                        </p>
                    </motion.div>

                    {/* Projects Grid */}
                    <div className="space-y-12">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                variants={itemVariants}
                                className="group"
                            >
                                <motion.div
                                    className="bg-batman-gray/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-batman-gold/20 hover:border-batman-gold/40 transition-all duration-500"
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="grid lg:grid-cols-2 gap-0">
                                        {/* Project Info */}
                                        <div className="p-8 lg:p-12">
                                            {/* Header */}
                                            <div className="flex items-start justify-between mb-6">
                                                <div className="flex items-center gap-4">
                                                    <div className={`bg-gradient-to-r ${project.gradient} p-3 rounded-xl text-white`}>
                                                        {project.icon}
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center gap-3 mb-2">
                                                            <h3 className="font-batman text-2xl font-bold text-batman-gold">
                                                                {project.title}
                                                            </h3>
                                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.status === 'Active'
                                                                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                                                    : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                                                }`}>
                                                                {project.status}
                                                            </span>
                                                        </div>
                                                        <p className="text-gray-400 font-medium">{project.subtitle}</p>
                                                    </div>
                                                </div>

                                                <span className="bg-batman-gold/20 text-batman-gold px-3 py-1 rounded-full text-sm font-semibold">
                                                    {project.type}
                                                </span>
                                            </div>

                                            {/* Description */}
                                            <p className="text-gray-300 leading-relaxed mb-6">
                                                {project.description}
                                            </p>

                                            {/* Conference mention for Smart Driving */}
                                            {project.conference && (
                                                <div className="bg-batman-black/50 rounded-lg p-4 mb-6 border-l-4 border-batman-gold">
                                                    <p className="text-batman-gold text-sm font-semibold mb-1">Conference Presentation</p>
                                                    <p className="text-gray-400 text-sm">{project.conference}</p>
                                                </div>
                                            )}

                                            {/* Technologies */}
                                            <div className="mb-6">
                                                <h4 className="text-batman-gold font-semibold mb-3">Technologies Used</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.technologies.map((tech, techIndex) => (
                                                        <motion.span
                                                            key={tech}
                                                            className="bg-batman-dark/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-batman-gold/20 hover:border-batman-gold/40 transition-all duration-300"
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                                            transition={{ delay: 0.5 + index * 0.2 + techIndex * 0.05 }}
                                                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 215, 0, 0.1)' }}
                                                        >
                                                            {tech}
                                                        </motion.span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="flex gap-4">
                                                <motion.button
                                                    className="flex items-center gap-2 bg-batman-gold/20 text-batman-gold px-4 py-2 rounded-lg font-semibold hover:bg-batman-gold hover:text-batman-black transition-all duration-300"
                                                    whileHover={{ scale: 1.05, y: -2 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <ExternalLink size={16} />
                                                    View Details
                                                </motion.button>
                                                {project.type !== 'Professional' && (
                                                    <motion.button
                                                        className="flex items-center gap-2 border border-batman-gold/30 text-gray-300 px-4 py-2 rounded-lg font-semibold hover:border-batman-gold hover:text-batman-gold transition-all duration-300"
                                                        whileHover={{ scale: 1.05, y: -2 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        <Github size={16} />
                                                        Source Code
                                                    </motion.button>
                                                )}
                                            </div>
                                        </div>

                                        {/* Features List */}
                                        <div className="bg-batman-black/30 p-8 lg:p-12 border-l border-batman-gold/10">
                                            <h4 className="text-batman-gold font-semibold text-lg mb-6 flex items-center gap-2">
                                                <Code size={20} />
                                                Key Features
                                            </h4>

                                            <div className="space-y-4">
                                                {project.features.map((feature, featureIndex) => (
                                                    <motion.div
                                                        key={featureIndex}
                                                        className="flex items-start gap-3 p-3 bg-batman-gray/20 rounded-lg border border-batman-gold/10 hover:border-batman-gold/30 transition-all duration-300"
                                                        initial={{ opacity: 0, x: 20 }}
                                                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                                                        transition={{ delay: 0.8 + index * 0.2 + featureIndex * 0.1 }}
                                                        whileHover={{ x: 5, backgroundColor: 'rgba(255, 215, 0, 0.05)' }}
                                                    >
                                                        <div className="w-2 h-2 bg-batman-gold rounded-full mt-2 flex-shrink-0"></div>
                                                        <p className="text-gray-300 text-sm leading-relaxed">{feature}</p>
                                                    </motion.div>
                                                ))}
                                            </div>

                                            {/* Project Impact */}
                                            <div className="mt-8 p-4 bg-gradient-to-r from-batman-gold/10 to-batman-yellow/5 rounded-lg border border-batman-gold/20">
                                                <h5 className="text-batman-gold font-semibold text-sm mb-2">Impact</h5>
                                                <p className="text-gray-400 text-sm">
                                                    {project.type === 'Professional' && 'Enterprise-level security solution protecting web applications at scale.'}
                                                    {project.type === 'Academic' && 'Research contribution to automotive safety with international recognition.'}
                                                    {project.type === 'Personal' && 'Streamlined healthcare management improving patient-doctor interactions.'}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Projects Philosophy */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-16 text-center"
                    >
                        <div className="bg-batman-black/50 rounded-xl p-8 border-l-4 border-batman-gold max-w-4xl mx-auto">
                            <h4 className="font-batman text-xl text-batman-gold mb-4">Project Philosophy</h4>
                            <blockquote className="text-gray-300 italic text-lg leading-relaxed">
                                "Every project is a mission with a purpose. Whether it's protecting enterprise applications,
                                advancing automotive safety, or improving healthcare systems—I don't just build software,
                                I craft solutions that make a real difference in people's lives."
                            </blockquote>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects
