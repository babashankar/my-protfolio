import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code, Shield, Brain, Database, Globe, Car, Calendar, Award, Users, Zap } from 'lucide-react';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [filter, setFilter] = useState('All');

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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 }
        }
    };

    const projects = [
        {
            id: 1,
            title: "Origin WAAP",
            subtitle: "Web Application & API Protection",
            description: "Enterprise-level security solution for web applications and APIs. Built robust backend services with Go, implementing REST APIs and working with proprietary databases for large-scale data management.",
            icon: <Shield size={32} />,
            technologies: ["Go", "Gorilla Mux", "NoSQL", "Docker", "Kubernetes", "REST APIs", "Microservices"],
            features: [
                "Backend service registrations and configurations",
                "Metrics collection for WAAP instances",
                "DataBattery (Apache Cassandra) integration",
                "Deployment automation with Docker/Kubernetes",
                "Concurrency optimization with Goroutines",
                "Certificate authentication systems"
            ],
            type: "Professional",
            status: "Active",
            gradient: "from-blue-600 to-purple-600",
            stats: {
                scale: "Enterprise",
                team: "Team Project",
                duration: "6+ months",
                impact: "99.9% uptime"
            },
            highlights: [
                "Handles enterprise-level traffic",
                "Zero-downtime deployments",
                "Advanced threat protection",
                "Scalable microservices architecture"
            ]
        },
        {
            id: 2,
            title: "Smart Driving Assistance",
            subtitle: "AI-Powered Automotive Safety",
            description: "Advanced driver assistance system using deep learning for real-time safety features. Implements lane detection, traffic sign recognition, and voice alerts to enhance driving safety.",
            icon: <Car size={32} />,
            technologies: ["Python", "Deep Learning", "Computer Vision", "TensorFlow", "OpenCV", "Neural Networks"],
            features: [
                "Real-time lane detection algorithms",
                "Traffic sign detection and recognition",
                "Voice alert system integration",
                "Dual model architecture with dataset training",
                "Performance optimization for real-time processing",
                "Custom CNN implementation"
            ],
            type: "Academic",
            status: "Completed",
            gradient: "from-green-600 to-teal-600",
            conference: "International Conference on Computational Sciences and Sustainable Technologies",
            stats: {
                scale: "Research",
                team: "Solo Project",
                duration: "4 months",
                impact: "95% accuracy"
            },
            highlights: [
                "Published research paper",
                "International conference presentation",
                "Real-time processing capabilities",
                "Custom deep learning models"
            ]
        },
        {
            id: 3,
            title: "Hospital Management System",
            subtitle: "Digital Healthcare Platform",
            description: "Comprehensive web application for healthcare management, enabling patients to book appointments and doctors to manage patient information efficiently.",
            icon: <Globe size={32} />,
            technologies: ["PostgreSQL", "Node.js", "HTML/CSS", "JavaScript", "Express", "RESTful APIs"],
            features: [
                "Patient appointment booking system",
                "Doctor availability management",
                "Patient information and symptoms tracking",
                "Prescription management for doctors",
                "Secure database design with PostgreSQL",
                "Role-based access control"
            ],
            type: "Personal",
            status: "Completed",
            gradient: "from-red-600 to-pink-600",
            stats: {
                scale: "Full-stack",
                team: "Solo Project",
                duration: "3 months",
                impact: "Complete solution"
            },
            highlights: [
                "End-to-end healthcare solution",
                "Secure patient data management",
                "Intuitive user interface",
                "Scalable architecture"
            ]
        }
    ];

    const filters = ['All', 'Professional', 'Academic', 'Personal'];

    const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.type === filter);

    return (
        <section id="projects" className="relative py-20 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
            {/* Advanced Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-400/5 rounded-full blur-3xl"></div>
                </div>

                {/* Mission Grid Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="grid grid-cols-12 gap-6 h-full animate-grid-fade">
                        {Array.from({ length: 144 }).map((_, i) => (
                            <motion.div
                                key={i}
                                className="border border-yellow-400/20"
                                animate={{
                                    opacity: [0.1, 0.3, 0.1],
                                    scale: [1, 1.05, 1]
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    delay: i * 0.02
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto"
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <motion.h2
                            className="text-4xl sm:text-5xl lg:text-6xl font-black text-yellow-400 mb-6 relative"
                            initial={{ scale: 0.8 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.8, type: "spring" }}
                        >
                            <span className="bat-text-glow relative z-10">Mission Archives</span>
                            <div className="absolute -inset-2 bg-yellow-400/20 blur-xl rounded-full opacity-50"></div>
                        </motion.h2>
                        <motion.p
                            className="text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            A collection of digital missions where code meets purpose. Each project represents a challenge conquered and a step forward in protecting the digital realm.
                        </motion.p>
                    </motion.div>

                    {/* Project Filters */}
                    <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-16">
                        {filters.map((filterType) => (
                            <motion.button
                                key={filterType}
                                onClick={() => setFilter(filterType)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${filter === filterType
                                        ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/25'
                                        : 'bg-gray-800/50 backdrop-blur-sm text-gray-300 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600'
                                    }`}
                            >
                                <span className="text-sm sm:text-base">{filterType}</span>
                                {filter === filterType && (
                                    <motion.div
                                        layoutId="activeFilter"
                                        className="absolute inset-0 bg-yellow-400 rounded-xl -z-10"
                                        initial={false}
                                    />
                                )}
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Projects Grid */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={filter}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-8 lg:space-y-12"
                        >
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    variants={itemVariants}
                                    onHoverStart={() => setSelectedProject(project.id)}
                                    onHoverEnd={() => setSelectedProject(null)}
                                    className="group"
                                >
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="bg-gray-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/10"
                                    >
                                        <div className="grid lg:grid-cols-2 gap-0">
                                            {/* Project Info */}
                                            <div className="p-6 lg:p-8">
                                                {/* Header */}
                                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                                                    <div className="flex items-start gap-4">
                                                        <div className={`bg-gradient-to-r ${project.gradient} p-3 rounded-xl text-white shrink-0`}>
                                                            {project.icon}
                                                        </div>
                                                        <div className="min-w-0">
                                                            <div className="flex flex-wrap items-center gap-3 mb-2">
                                                                <h3 className="text-xl lg:text-2xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors">
                                                                    {project.title}
                                                                </h3>
                                                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${project.status === 'Active'
                                                                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                                                        : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                                                    }`}>
                                                                    {project.status}
                                                                </span>
                                                            </div>
                                                            <p className="text-gray-400 font-medium text-sm lg:text-base">{project.subtitle}</p>
                                                        </div>
                                                    </div>

                                                    <span className="bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-bold shrink-0 w-fit">
                                                        {project.type}
                                                    </span>
                                                </div>

                                                {/* Description */}
                                                <p className="text-gray-300 leading-relaxed mb-6 text-sm lg:text-base">
                                                    {project.description}
                                                </p>

                                                {/* Conference mention */}
                                                {project.conference && (
                                                    <div className="bg-black/30 rounded-lg p-4 mb-6 border-l-4 border-yellow-400">
                                                        <div className="flex items-center gap-2 mb-1">
                                                            <Award size={16} className="text-yellow-400" />
                                                            <p className="text-yellow-400 text-sm font-bold">Conference Presentation</p>
                                                        </div>
                                                        <p className="text-gray-400 text-sm">{project.conference}</p>
                                                    </div>
                                                )}

                                                {/* Project Stats */}
                                                <div className="grid grid-cols-2 gap-3 mb-6">
                                                    {Object.entries(project.stats).map(([key, value]) => (
                                                        <div key={key} className="bg-gray-700/30 rounded-lg p-3 border border-gray-600/50">
                                                            <div className="text-gray-400 text-xs uppercase tracking-wide">{key}</div>
                                                            <div className="text-white font-semibold text-sm">{value}</div>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Technologies */}
                                                <div className="mb-6">
                                                    <h4 className="text-yellow-400 font-bold mb-3 text-sm lg:text-base">Technologies Used</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.technologies.map((tech, techIndex) => (
                                                            <motion.span
                                                                key={tech}
                                                                initial={{ opacity: 0, scale: 0.8 }}
                                                                whileInView={{ opacity: 1, scale: 1 }}
                                                                transition={{ delay: techIndex * 0.05 }}
                                                                whileHover={{ scale: 1.05 }}
                                                                className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-xs border border-gray-600/50 hover:border-yellow-400/50 transition-all duration-300"
                                                            >
                                                                {tech}
                                                            </motion.span>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Action Buttons */}
                                                <div className="flex flex-wrap gap-3">
                                                    <motion.button
                                                        whileHover={{ scale: 1.05, y: -2 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        className="flex items-center gap-2 bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-lg font-bold hover:bg-yellow-400 hover:text-black transition-all duration-300 text-sm"
                                                    >
                                                        <ExternalLink size={16} />
                                                        View Details
                                                    </motion.button>
                                                    {project.type !== 'Professional' && (
                                                        <motion.button
                                                            whileHover={{ scale: 1.05, y: -2 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            className="flex items-center gap-2 border border-gray-600 text-gray-300 px-4 py-2 rounded-lg font-bold hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300 text-sm"
                                                        >
                                                            <Github size={16} />
                                                            Source Code
                                                        </motion.button>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Features & Highlights */}
                                            <div className="bg-black/20 p-6 lg:p-8 border-l border-gray-700/50">
                                                <div className="space-y-8">
                                                    {/* Key Features */}
                                                    <div>
                                                        <h4 className="text-yellow-400 font-bold text-lg mb-4 flex items-center gap-2">
                                                            <Code size={20} />
                                                            Key Features
                                                        </h4>
                                                        <div className="space-y-3">
                                                            {project.features.slice(0, 4).map((feature, featureIndex) => (
                                                                <motion.div
                                                                    key={featureIndex}
                                                                    initial={{ opacity: 0, x: 20 }}
                                                                    whileInView={{ opacity: 1, x: 0 }}
                                                                    transition={{ delay: featureIndex * 0.1 }}
                                                                    className="flex items-start gap-3 p-3 bg-gray-700/30 rounded-lg border border-gray-600/30 hover:border-yellow-400/30 transition-all duration-300"
                                                                >
                                                                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 shrink-0"></div>
                                                                    <p className="text-gray-300 text-sm leading-relaxed">{feature}</p>
                                                                </motion.div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Project Highlights */}
                                                    <div>
                                                        <h4 className="text-yellow-400 font-bold text-lg mb-4 flex items-center gap-2">
                                                            <Zap size={20} />
                                                            Highlights
                                                        </h4>
                                                        <div className="space-y-2">
                                                            {project.highlights.map((highlight, highlightIndex) => (
                                                                <motion.div
                                                                    key={highlightIndex}
                                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                                    transition={{ delay: highlightIndex * 0.1 }}
                                                                    className="bg-yellow-400/10 text-yellow-400 px-3 py-2 rounded-lg text-sm font-medium border border-yellow-400/20"
                                                                >
                                                                    {highlight}
                                                                </motion.div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* Projects Philosophy */}
                    <motion.div variants={itemVariants} className="mt-20">
                        <div className="bg-gray-800/40 backdrop-blur-sm border-l-4 border-yellow-400 rounded-r-2xl p-6 lg:p-8">
                            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Mission Philosophy</h3>
                            <blockquote className="text-gray-300 italic text-lg lg:text-xl leading-relaxed">
                                "Every project is a mission with a purpose. Whether it's protecting enterprise applications,
                                advancing automotive safety, or improving healthcare systems—I don't just build software,
                                I craft solutions that make a real difference in people's lives. Like Batman's unwavering
                                commitment to justice, my dedication to meaningful technology never wavers."
                            </blockquote>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
