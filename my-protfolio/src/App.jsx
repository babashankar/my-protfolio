import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BatmobileTransition from './components/BatmobileTransition'

const App = () => {
    return (
        <div className="bg-batman-black text-white overflow-x-hidden">
            <Navbar />
            <Hero />
            <BatmobileTransition />
            <About />
            <Education />
            <Experience />
            <Skills />
            <Projects />
            <Hobbies />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
