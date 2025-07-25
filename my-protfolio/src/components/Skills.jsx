import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaGitAlt, FaDocker, FaAws, FaLinux, FaCode } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiRedis, SiGraphql, SiKubernetes, SiNextdotjs, SiTailwindcss, SiJavascript, SiExpress, SiDjango, SiMysql, SiFirebase, SiJenkins, SiTerraform, SiGo, SiEclipseide } from 'react-icons/si';

const skillCategories = [
    {
        name: 'All',
        icon: '🦇',
        color: '#FFD700'
    },
    {
        name: 'Programming',
        icon: '⚔️',
        color: '#61DAFB',
        skills: [
            { name: 'Go/Golang', icon: SiGo, level: 95, color: '#00ADD8', description: 'Concurrency, microservices & distributed systems' },
            { name: 'Python', icon: FaPython, level: 90, color: '#3776AB', description: 'Django, FastAPI & data processing' },
            { name: 'Java', icon: SiJavascript, level: 85, color: '#ED8B00', description: 'Enterprise applications & Spring Boot' },
            { name: 'JavaScript', icon: SiJavascript, level: 88, color: '#F7DF1E', description: 'ES6+, functional programming & async patterns' },
            { name: 'TypeScript', icon: SiTypescript, level: 85, color: '#3178C6', description: 'Type-safe development & advanced patterns' },
        ]
    },
    {
        name: 'Frontend',
        icon: '⚡',
        color: '#61DAFB',
        skills: [
            { name: 'React', icon: FaReact, level: 92, color: '#61DAFB', description: 'Advanced component architecture & hooks' },
            { name: 'Next.js', icon: SiNextdotjs, level: 88, color: '#000000', description: 'SSR, SSG, and performance optimization' },
            { name: 'Tailwind CSS', icon: SiTailwindcss, level: 95, color: '#06B6D4', description: 'Utility-first styling & responsive design' },
        ]
    },
    {
        name: 'Backend',
        icon: '🔧',
        color: '#339933',
        skills: [
            { name: 'Node.js', icon: FaNodeJs, level: 88, color: '#339933', description: 'Server-side JavaScript & microservices' },
            { name: 'Express', icon: SiExpress, level: 85, color: '#000000', description: 'RESTful APIs & middleware architecture' },
            { name: 'Django', icon: SiDjango, level: 82, color: '#092E20', description: 'Full-stack web applications' },
            { name: 'GraphQL', icon: SiGraphql, level: 80, color: '#E10098', description: 'Schema design & query optimization' },
        ]
    },
    {
        name: 'Database',
        icon: '💾',
        color: '#47A248',
        skills: [
            { name: 'MySQL', icon: SiMysql, level: 88, color: '#4479A1', description: 'Relational database design & optimization' },
            { name: 'MongoDB', icon: SiMongodb, level: 85, color: '#47A248', description: 'NoSQL design & aggregation pipelines' },
            { name: 'PostgreSQL', icon: SiPostgresql, level: 82, color: '#336791', description: 'Complex queries & optimization' },
            { name: 'Redis', icon: SiRedis, level: 78, color: '#DC382D', description: 'Caching & session management' },
            { name: 'Firebase', icon: SiFirebase, level: 80, color: '#FFCA28', description: 'Real-time databases & authentication' },
        ]
    },
    {
        name: 'DevOps',
        icon: '🚀',
        color: '#2496ED',
        skills: [
            { name: 'Docker', icon: FaDocker, level: 92, color: '#2496ED', description: 'Containerization & orchestration' },
            { name: 'Kubernetes', icon: SiKubernetes, level: 88, color: '#326CE5', description: 'Container orchestration & scaling' },
            { name: 'AWS', icon: FaAws, level: 85, color: '#FF9900', description: 'Cloud architecture & services' },
            { name: 'Git', icon: FaGitAlt, level: 90, color: '#F05032', description: 'Version control & collaboration' },
            { name: 'Jenkins', icon: SiJenkins, level: 78, color: '#D33833', description: 'CI/CD pipelines' },
            { name: 'Terraform', icon: SiTerraform, level: 75, color: '#7B42BC', description: 'Infrastructure as Code' },
            { name: 'Linux', icon: FaLinux, level: 88, color: '#FCC624', description: 'System administration & scripting' },
        ]
    },
    {
        name: 'Tools',
        icon: '🛠️',
        color: '#007ACC',
        skills: [
            { name: 'VS Code', icon: FaCode, level: 95, color: '#007ACC', description: 'Advanced IDE configuration & extensions' },
            { name: 'GoLand', icon: SiGo, level: 88, color: '#00ADD8', description: 'Professional Go development environment' },
            { name: 'Eclipse', icon: SiEclipseide, level: 80, color: '#2C2255', description: 'Java enterprise development' },
        ]
    }
];

const getAllSkills = () => {
    return skillCategories
        .filter(cat => cat.skills)
        .flatMap(cat => cat.skills);
};

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [displayedSkills, setDisplayedSkills] = useState([]);

    useEffect(() => {
        let skills = [];
        if (activeCategory === 'All') {
            skills = getAllSkills();
        } else {
            const category = skillCategories.find(cat => cat.name === activeCategory);
            skills = category?.skills || [];
        }

        if (searchTerm) {
            skills = skills.filter(skill =>
                skill.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setDisplayedSkills(skills);
    }, [activeCategory, searchTerm]);

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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section id="skills" className="relative py-20 lg:py-32 bg-gradient-to-b from-gray-900 via-gray-900 to-black overflow-hidden">
            {/* Advanced Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-30">
                    <div className="bat-signal-effect absolute top-10 right-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="bat-signal-effect absolute bottom-20 left-10 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
                </div>

                {/* Animated Grid */}
                <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-12 gap-4 h-full animate-grid-fade">
                        {Array.from({ length: 144 }).map((_, i) => (
                            <div
                                key={i}
                                className="border border-yellow-400/20 animate-grid-pulse"
                                style={{ animationDelay: `${i * 0.1}s` }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        className="text-4xl sm:text-5xl lg:text-6xl font-black text-yellow-400 mb-6 relative"
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.8, type: "spring" }}
                    >
                        <span className="bat-text-glow relative z-10">Arsenal</span>
                        <div className="absolute -inset-2 bg-yellow-400/20 blur-xl rounded-full opacity-50"></div>
                    </motion.h2>
                    <motion.p
                        className="text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        The technologies and tools in my utility belt, forged through countless hours in the digital cave
                    </motion.p>
                </motion.div>

                {/* Search Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-md mx-auto mb-12"
                >
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search skills..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-6 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-all duration-300"
                        />
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                            🔍
                        </div>
                    </div>
                </motion.div>

                {/* Category Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-16"
                >
                    {skillCategories.map((category) => (
                        <motion.button
                            key={category.name}
                            onClick={() => setActiveCategory(category.name)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`group relative px-6 py-3 rounded-xl font-bold transition-all duration-300 ${activeCategory === category.name
                                ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/25'
                                : 'bg-gray-800/50 backdrop-blur-sm text-gray-300 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600'
                                }`}
                        >
                            <span className="flex items-center gap-2">
                                <span className="text-lg">{category.icon}</span>
                                <span className="hidden sm:inline">{category.name}</span>
                                <span className="sm:hidden text-sm">{category.name}</span>
                            </span>

                            {activeCategory === category.name && (
                                <motion.div
                                    layoutId="activeCategory"
                                    className="absolute inset-0 bg-yellow-400 rounded-xl -z-10"
                                    initial={false}
                                />
                            )}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Skills Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory + searchTerm}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    >
                        {displayedSkills.map((skill, index) => {
                            const IconComponent = skill.icon;
                            return (
                                <motion.div
                                    key={`${skill.name}-${activeCategory}`}
                                    variants={itemVariants}
                                    onHoverStart={() => setHoveredSkill(skill.name)}
                                    onHoverEnd={() => setHoveredSkill(null)}
                                    className="group relative bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-yellow-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/10"
                                >
                                    {/* Hover Glow Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/5 to-yellow-400/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div className="relative z-10">
                                        {/* Skill Header */}
                                        <div className="flex items-center mb-4">
                                            <div className="relative">
                                                <IconComponent
                                                    size={48}
                                                    style={{ color: skill.color }}
                                                    className="group-hover:scale-110 transition-all duration-300 filter group-hover:drop-shadow-lg"
                                                />
                                                <div
                                                    className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                                                    style={{ backgroundColor: skill.color }}
                                                ></div>
                                            </div>
                                            <div className="ml-4 flex-1">
                                                <h3 className="text-white font-bold text-lg group-hover:text-yellow-400 transition-colors duration-300">
                                                    {skill.name}
                                                </h3>
                                                <p className="text-gray-400 text-sm mt-1 line-clamp-2">
                                                    {skill.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Progress Section */}
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-400 text-sm font-medium">Proficiency</span>
                                                <span className="text-yellow-400 font-bold text-sm">{skill.level}%</span>
                                            </div>

                                            {/* Enhanced Progress Bar */}
                                            <div className="relative">
                                                <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0, opacity: 0 }}
                                                        animate={{ width: `${skill.level}%`, opacity: 1 }}
                                                        transition={{
                                                            duration: 1.2,
                                                            delay: index * 0.1 + 0.5,
                                                            ease: "easeOut"
                                                        }}
                                                        className="h-full rounded-full relative overflow-hidden"
                                                        style={{ backgroundColor: skill.color }}
                                                    >
                                                        {/* Shimmer Effect */}
                                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-shimmer"></div>
                                                    </motion.div>
                                                </div>

                                                {/* Skill Level Indicator */}
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: index * 0.1 + 1, type: "spring" }}
                                                    className="absolute -top-1 right-0 w-2 h-2 bg-yellow-400 rounded-full shadow-lg"
                                                    style={{ right: `${100 - skill.level}%` }}
                                                />
                                            </div>
                                        </div>

                                        {/* Hover Details */}
                                        <AnimatePresence>
                                            {hoveredSkill === skill.name && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    className="mt-4 p-3 bg-black/30 rounded-lg border border-yellow-400/20"
                                                >
                                                    <p className="text-gray-300 text-sm leading-relaxed">
                                                        {skill.description}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>

                {/* No Results Message */}
                {displayedSkills.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-16"
                    >
                        <div className="text-6xl mb-4">🦇</div>
                        <h3 className="text-xl font-bold text-gray-400 mb-2">No skills found</h3>
                        <p className="text-gray-500">Try adjusting your search or category filter</p>
                    </motion.div>
                )}

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    <motion.div
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-gradient-to-br from-yellow-400/20 to-yellow-400/10 rounded-2xl p-6 text-center border border-yellow-400/30 backdrop-blur-sm"
                    >
                        <div className="text-3xl font-black text-yellow-400 mb-2">20+</div>
                        <div className="text-gray-400 text-sm">Technologies</div>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-gradient-to-br from-blue-400/20 to-blue-400/10 rounded-2xl p-6 text-center border border-blue-400/30 backdrop-blur-sm"
                    >
                        <div className="text-3xl font-black text-blue-400 mb-2">5+</div>
                        <div className="text-gray-400 text-sm">Languages</div>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-gradient-to-br from-green-400/20 to-green-400/10 rounded-2xl p-6 text-center border border-green-400/30 backdrop-blur-sm"
                    >
                        <div className="text-3xl font-black text-green-400 mb-2">∞</div>
                        <div className="text-gray-400 text-sm">Learning</div>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-gradient-to-br from-purple-400/20 to-purple-400/10 rounded-2xl p-6 text-center border border-purple-400/30 backdrop-blur-sm"
                    >
                        <div className="text-3xl font-black text-purple-400 mb-2">24/7</div>
                        <div className="text-gray-400 text-sm">Dedication</div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
