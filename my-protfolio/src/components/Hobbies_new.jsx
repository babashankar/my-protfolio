import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Film, Camera, Palette, Star, Play, Aperture, Brush, Heart, TrendingUp, Eye } from 'lucide-react';

const Hobbies = () => {
    const [activeHobby, setActiveHobby] = useState(null);
    const [hoveredCard, setHoveredCard] = useState(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
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

    const hobbies = [
        {
            id: 1,
            title: "Watching Movies",
            icon: <Film size={40} />,
            secondaryIcon: <Play size={24} />,
            description: "From Christopher Nolan's mind-bending narratives to Marvel's epic cinematography—I find inspiration in storytelling and visual excellence.",
            gradient: "from-red-500 to-pink-500",
            bgColor: "red",
            activities: [
                "Analyzing cinematography techniques",
                "Exploring sci-fi and thriller genres",
                "Studying character development",
                "Appreciating soundtrack compositions",
                "Understanding visual storytelling",
                "Learning narrative structure"
            ],
            connection: "Movies teach me about narrative structure and user journey—skills I apply in designing intuitive user experiences.",
            stats: {
                passion: "10/10",
                frequency: "Daily",
                genres: "15+",
                inspiration: "High"
            },
            quote: "Every frame tells a story, every story teaches design."
        },
        {
            id: 2,
            title: "Photography",
            icon: <Camera size={40} />,
            secondaryIcon: <Aperture size={24} />,
            description: "Capturing moments through the lens, focusing on composition, lighting, and the stories that unfold in a single frame.",
            gradient: "from-blue-500 to-cyan-500",
            bgColor: "blue",
            activities: [
                "Street photography expeditions",
                "Portrait and landscape shooting",
                "Digital photo editing and enhancement",
                "Experimenting with different perspectives",
                "Light and shadow composition",
                "Color theory in practice"
            ],
            connection: "Photography trains my eye for detail and composition—essential skills for creating visually appealing user interfaces.",
            stats: {
                passion: "9/10",
                frequency: "Weekly",
                shots: "1000+",
                style: "Street/Portrait"
            },
            quote: "In code and in frames, composition is everything."
        },
        {
            id: 3,
            title: "Graphic Designing",
            icon: <Palette size={40} />,
            secondaryIcon: <Brush size={24} />,
            description: "Creating visual solutions that communicate ideas effectively, blending creativity with technical precision.",
            gradient: "from-purple-500 to-indigo-500",
            bgColor: "purple",
            activities: [
                "Logo and brand identity design",
                "Digital illustration and artwork",
                "UI/UX design concepts",
                "Typography and color theory exploration",
                "Vector graphics creation",
                "Design system development"
            ],
            connection: "Design thinking enhances my ability to create user-centered solutions and communicate complex technical concepts visually.",
            stats: {
                passion: "10/10",
                frequency: "Regular",
                projects: "50+",
                tools: "Adobe Suite"
            },
            quote: "Design is not just what it looks like—design is how it works."
        }
    ];

    const creativeSkills = [
        {
            skill: "Visual Storytelling",
            icon: <Film size={20} />,
            description: "Crafting compelling narratives through visual elements",
            connection: "Applied in user journey design and product documentation"
        },
        {
            skill: "Composition & Layout",
            icon: <Camera size={20} />,
            description: "Understanding visual balance and hierarchy",
            connection: "Essential for clean, intuitive interface design"
        },
        {
            skill: "Color Theory",
            icon: <Palette size={20} />,
            description: "Using color to evoke emotion and guide attention",
            connection: "Critical for accessible and engaging user experiences"
        }
    ];

    return (
        <section id="hobbies" className="relative py-20 lg:py-32 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
            {/* Advanced Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-yellow-400/5 rounded-full blur-3xl"></div>
                </div>

                {/* Creative Elements */}
                <div className="absolute inset-0 opacity-10">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -40, 0],
                                opacity: [0.2, 0.8, 0.2],
                                rotate: [0, 180, 360],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 6 + Math.random() * 4,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        >
                            {i % 3 === 0 && <Film size={16} className="text-yellow-400" />}
                            {i % 3 === 1 && <Camera size={16} className="text-yellow-400" />}
                            {i % 3 === 2 && <Palette size={16} className="text-yellow-400" />}
                        </motion.div>
                    ))}
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
                            <span className="bat-text-glow relative z-10">Beyond the Code</span>
                            <div className="absolute -inset-2 bg-yellow-400/20 blur-xl rounded-full opacity-50"></div>
                        </motion.h2>
                        <motion.p
                            className="text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            When I'm not saving Gotham's digital realm, I explore the creative arts that fuel my imagination and enhance my problem-solving abilities
                        </motion.p>
                    </motion.div>

                    {/* Hobbies Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                        {hobbies.map((hobby, index) => (
                            <motion.div
                                key={hobby.id}
                                variants={itemVariants}
                                onHoverStart={() => setHoveredCard(hobby.id)}
                                onHoverEnd={() => setHoveredCard(null)}
                                className="group h-full"
                            >
                                <motion.div
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/10 h-full flex flex-col"
                                >
                                    {/* Header */}
                                    <div className="text-center mb-8">
                                        <motion.div
                                            className={`relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${hobby.gradient} mb-4`}
                                            whileHover={{ rotate: 10, scale: 1.1 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="text-white relative z-10">
                                                {hobby.icon}
                                            </div>
                                            <motion.div
                                                className="absolute top-2 right-2 text-white/60"
                                                animate={{
                                                    scale: hoveredCard === hobby.id ? 1.2 : 0.8,
                                                    opacity: hoveredCard === hobby.id ? 1 : 0.6
                                                }}
                                            >
                                                {hobby.secondaryIcon}
                                            </motion.div>
                                        </motion.div>
                                        <h3 className="text-2xl font-bold text-yellow-400 mb-3 group-hover:text-yellow-300 transition-colors">
                                            {hobby.title}
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                                            {hobby.description}
                                        </p>
                                    </div>

                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-2 gap-3 mb-6">
                                        {Object.entries(hobby.stats).map(([key, value]) => (
                                            <div key={key} className="bg-gray-700/30 rounded-lg p-3 text-center border border-gray-600/50">
                                                <div className="text-gray-400 text-xs uppercase tracking-wide mb-1">{key}</div>
                                                <div className="text-white font-semibold text-sm">{value}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Activities Preview */}
                                    <div className="mb-6">
                                        <h4 className="text-yellow-400 font-bold mb-3 text-sm lg:text-base flex items-center gap-2">
                                            <Star size={16} />
                                            Key Activities
                                        </h4>
                                        <div className="space-y-2">
                                            {hobby.activities.slice(0, 3).map((activity, activityIndex) => (
                                                <motion.div
                                                    key={activityIndex}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: activityIndex * 0.1 }}
                                                    className="flex items-start gap-3 p-3 bg-gray-700/30 rounded-lg border border-gray-600/30 hover:border-yellow-400/30 transition-all duration-300"
                                                >
                                                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 shrink-0"></div>
                                                    <p className="text-gray-400 text-sm">{activity}</p>
                                                </motion.div>
                                            ))}
                                            {hobby.activities.length > 3 && (
                                                <motion.button
                                                    onClick={() => setActiveHobby(activeHobby === hobby.id ? null : hobby.id)}
                                                    className="w-full text-center py-2 text-yellow-400 hover:text-yellow-300 transition-colors text-sm font-medium"
                                                >
                                                    {activeHobby === hobby.id ? 'Show Less' : `+${hobby.activities.length - 3} More`}
                                                </motion.button>
                                            )}
                                        </div>

                                        {/* Expanded Activities */}
                                        <AnimatePresence>
                                            {activeHobby === hobby.id && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="mt-3 space-y-2"
                                                >
                                                    {hobby.activities.slice(3).map((activity, activityIndex) => (
                                                        <motion.div
                                                            key={activityIndex}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: activityIndex * 0.1 }}
                                                            className="flex items-start gap-3 p-3 bg-gray-700/30 rounded-lg border border-gray-600/30"
                                                        >
                                                            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 shrink-0"></div>
                                                            <p className="text-gray-400 text-sm">{activity}</p>
                                                        </motion.div>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Connection Card */}
                                    <div className="bg-black/30 rounded-lg p-4 border-l-4 border-yellow-400 mt-auto">
                                        <div className="flex items-center gap-2 mb-2">
                                            <TrendingUp size={16} className="text-yellow-400" />
                                            <h5 className="text-yellow-400 font-bold text-sm">Development Connection</h5>
                                        </div>
                                        <p className="text-gray-400 text-sm italic leading-relaxed">
                                            {hobby.connection}
                                        </p>
                                    </div>

                                    {/* Quote */}
                                    <div className="mt-4 text-center">
                                        <p className="text-yellow-400 italic text-sm font-medium">
                                            "{hobby.quote}"
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Creative Skills Integration */}
                    <motion.div variants={itemVariants} className="mb-20">
                        <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-700/50">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-4">
                                    Creative Skills in Development
                                </h3>
                                <p className="text-gray-300 text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
                                    How my creative hobbies directly enhance my technical abilities and problem-solving approach
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {creativeSkills.map((skill, index) => (
                                    <motion.div
                                        key={skill.skill}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.2 }}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className="bg-gray-700/30 backdrop-blur-sm rounded-xl p-6 border border-gray-600/50 hover:border-yellow-400/50 transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="bg-yellow-400/20 p-2 rounded-lg">
                                                <div className="text-yellow-400">
                                                    {skill.icon}
                                                </div>
                                            </div>
                                            <h4 className="text-white font-bold text-lg">{skill.skill}</h4>
                                        </div>
                                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                            {skill.description}
                                        </p>
                                        <div className="bg-yellow-400/10 rounded-lg p-3 border border-yellow-400/20">
                                            <div className="flex items-center gap-2 mb-1">
                                                <Eye size={14} className="text-yellow-400" />
                                                <span className="text-yellow-400 font-medium text-xs">In Development:</span>
                                            </div>
                                            <p className="text-gray-300 text-xs italic">
                                                {skill.connection}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Creative Philosophy */}
                    <motion.div variants={itemVariants}>
                        <div className="bg-gray-800/40 backdrop-blur-sm border-l-4 border-yellow-400 rounded-r-2xl p-6 lg:p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-yellow-400/20 p-3 rounded-lg">
                                    <Heart size={24} className="text-yellow-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-yellow-400">Creative Philosophy</h3>
                            </div>
                            <blockquote className="text-gray-300 italic text-lg lg:text-xl leading-relaxed">
                                "Creativity isn't separate from logic—it's logic's most powerful ally.
                                In the same way Batman uses both analytical thinking and creative improvisation to solve problems,
                                I blend technical precision with creative insight to build solutions that are not just functional,
                                but truly exceptional. Every frame I capture, every design I create, and every story I analyze
                                becomes a tool in my developer's utility belt."
                            </blockquote>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hobbies;
