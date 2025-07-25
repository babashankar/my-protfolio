import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Film, Camera, Palette, Star } from 'lucide-react'

const Hobbies = () => {
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
        hidden: { opacity: 0, scale: 0.8, y: 30 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.8 }
        }
    }

    const hobbies = [
        {
            title: "Watching Movies",
            icon: <Film size={40} />,
            description: "From Christopher Nolan's mind-bending narratives to Marvel's epic cinematography—I find inspiration in storytelling and visual excellence.",
            gradient: "from-red-500 to-pink-500",
            activities: [
                "Analyzing cinematography techniques",
                "Exploring sci-fi and thriller genres",
                "Studying character development",
                "Appreciating soundtrack compositions"
            ],
            connection: "Movies teach me about narrative structure and user journey—skills I apply in designing intuitive user experiences."
        },
        {
            title: "Photography",
            icon: <Camera size={40} />,
            description: "Capturing moments through the lens, focusing on composition, lighting, and the stories that unfold in a single frame.",
            gradient: "from-blue-500 to-cyan-500",
            activities: [
                "Street photography expeditions",
                "Portrait and landscape shooting",
                "Digital photo editing and enhancement",
                "Experimenting with different perspectives"
            ],
            connection: "Photography trains my eye for detail and composition—essential skills for creating visually appealing user interfaces."
        },
        {
            title: "Graphic Designing",
            icon: <Palette size={40} />,
            description: "Creating visual solutions that communicate ideas effectively, blending creativity with technical precision.",
            gradient: "from-purple-500 to-indigo-500",
            activities: [
                "Logo and brand identity design",
                "Digital illustration and artwork",
                "UI/UX design concepts",
                "Typography and color theory exploration"
            ],
            connection: "Design thinking enhances my ability to create user-centered solutions and communicate complex technical concepts visually."
        }
    ]

    return (
        <section id="hobbies" className="py-20 bg-gradient-to-br from-batman-darkblue via-batman-dark to-batman-black relative">
            {/* Batcave-style background */}
            <div className="absolute inset-0 opacity-10">
                {/* Cave stalactites effect */}
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute top-0 bg-gradient-to-b from-batman-gray to-transparent"
                        style={{
                            left: `${10 + i * 12}%`,
                            width: '4px',
                            height: `${20 + Math.random() * 40}px`,
                            transform: `rotate(${-5 + Math.random() * 10}deg)`
                        }}
                    />
                ))}

                {/* Floating creative elements */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.8, 0.2],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 4,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    >
                        {i % 3 === 0 && <Film size={12} className="text-batman-gold" />}
                        {i % 3 === 1 && <Camera size={12} className="text-batman-gold" />}
                        {i % 3 === 2 && <Palette size={12} className="text-batman-gold" />}
                    </motion.div>
                ))}
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
                            <span className="gradient-text">Beyond</span> <span className="text-white">the Code</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            When I'm not saving Gotham's digital realm, I explore the creative arts that fuel my imagination
                            and enhance my problem-solving abilities.
                        </p>
                    </motion.div>

                    {/* Hobbies Grid */}
                    <div className="grid lg:grid-cols-3 gap-8 mb-16">
                        {hobbies.map((hobby, index) => (
                            <motion.div
                                key={hobby.title}
                                variants={itemVariants}
                                className="group"
                            >
                                <motion.div
                                    className="bg-batman-gray/30 backdrop-blur-sm rounded-2xl p-8 border border-batman-gold/20 hover:border-batman-gold/40 transition-all duration-500 h-full"
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Header */}
                                    <div className="text-center mb-8">
                                        <motion.div
                                            className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${hobby.gradient} mb-4`}
                                            whileHover={{ rotate: 10, scale: 1.1 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="text-white">
                                                {hobby.icon}
                                            </div>
                                        </motion.div>
                                        <h3 className="font-batman text-2xl font-bold text-batman-gold mb-3">
                                            {hobby.title}
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            {hobby.description}
                                        </p>
                                    </div>

                                    {/* Activities */}
                                    <div className="mb-8">
                                        <h4 className="text-batman-gold font-semibold mb-4 flex items-center gap-2">
                                            <Star size={16} />
                                            What I Do
                                        </h4>
                                        <div className="space-y-3">
                                            {hobby.activities.map((activity, activityIndex) => (
                                                <motion.div
                                                    key={activityIndex}
                                                    className="flex items-start gap-3 p-3 bg-batman-dark/30 rounded-lg border border-batman-gold/10 hover:border-batman-gold/30 transition-all duration-300"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                                    transition={{ delay: 0.5 + index * 0.2 + activityIndex * 0.1 }}
                                                    whileHover={{ x: 5, backgroundColor: 'rgba(255, 215, 0, 0.05)' }}
                                                >
                                                    <div className="w-2 h-2 bg-batman-gold rounded-full mt-2 flex-shrink-0"></div>
                                                    <p className="text-gray-400 text-sm">{activity}</p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Connection to Development */}
                                    <div className="bg-batman-black/50 rounded-lg p-4 border-l-4 border-batman-gold">
                                        <h5 className="text-batman-gold font-semibold text-sm mb-2">Development Connection</h5>
                                        <p className="text-gray-400 text-sm italic">
                                            {hobby.connection}
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Creative Process */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-batman-gray/20 rounded-2xl p-8 border border-batman-gold/20"
                    >
                        <div className="text-center mb-8">
                            <h3 className="font-batman text-3xl font-bold text-batman-gold mb-4">
                                The Creative Dark Knight
                            </h3>
                            <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
                                Just as Batman balances his analytical detective skills with creative problem-solving,
                                my hobbies complement my technical expertise. Each creative pursuit sharpens different
                                aspects of my development skills—from visual design and storytelling to attention to
                                detail and user experience thinking.
                            </p>
                        </div>

                        {/* Skills Integration */}
                        <div className="grid md:grid-cols-3 gap-6">
                            <motion.div
                                className="text-center p-6 bg-batman-dark/30 rounded-xl border border-batman-gold/20"
                                whileHover={{ y: -5, borderColor: 'rgba(255, 215, 0, 0.4)' }}
                            >
                                <Film size={32} className="text-batman-gold mx-auto mb-3" />
                                <h4 className="text-white font-semibold mb-2">Storytelling</h4>
                                <p className="text-gray-400 text-sm">
                                    Movies teach narrative flow, which I apply to user journey design and documentation.
                                </p>
                            </motion.div>

                            <motion.div
                                className="text-center p-6 bg-batman-dark/30 rounded-xl border border-batman-gold/20"
                                whileHover={{ y: -5, borderColor: 'rgba(255, 215, 0, 0.4)' }}
                            >
                                <Camera size={32} className="text-batman-gold mx-auto mb-3" />
                                <h4 className="text-white font-semibold mb-2">Composition</h4>
                                <p className="text-gray-400 text-sm">
                                    Photography develops my eye for layout, balance, and visual hierarchy in UI design.
                                </p>
                            </motion.div>

                            <motion.div
                                className="text-center p-6 bg-batman-dark/30 rounded-xl border border-batman-gold/20"
                                whileHover={{ y: -5, borderColor: 'rgba(255, 215, 0, 0.4)' }}
                            >
                                <Palette size={32} className="text-batman-gold mx-auto mb-3" />
                                <h4 className="text-white font-semibold mb-2">Visual Design</h4>
                                <p className="text-gray-400 text-sm">
                                    Graphic design enhances my ability to create intuitive interfaces and communicate ideas.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Philosophy */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-12 text-center"
                    >
                        <div className="bg-batman-black/50 rounded-xl p-8 border-l-4 border-batman-gold max-w-4xl mx-auto">
                            <h4 className="font-batman text-xl text-batman-gold mb-4">Creative Philosophy</h4>
                            <blockquote className="text-gray-300 italic text-lg leading-relaxed">
                                "Creativity isn't separate from logic—it's logic's most powerful ally.
                                In the same way Batman uses both analytical thinking and creative improvisation to solve problems,
                                I blend technical precision with creative insight to build solutions that are not just functional,
                                but truly exceptional."
                            </blockquote>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hobbies
