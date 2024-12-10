"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Github, Twitter, Linkedin } from 'lucide-react';
import Me from "../../assets/me.png";
import Navbar from '@/components/NavBar';

const roles = [
    "A Web3 Frontend Developer",
    "A Blockchain Developer",
    "A Social Media Manager",
    "A Software Engineer"
];

const FloatingGradient = ({ delay = 0, duration = 20 }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
        }}
        transition={{
            duration: duration,
            delay: delay,
            repeat: Infinity,
            ease: "linear"
        }}
        className="absolute w-[600px] h-[600px] rounded-full"
    >
        <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 via-red-400/10 to-yellow-500/20 rounded-full blur-[100px]" />
    </motion.div>
);

const FloatingOrb = ({ index }) => {
    const size = Math.random() * 4 + 2;
    return (
        <motion.div
            className="absolute bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500 rounded-full opacity-20"
            style={{
                width: size,
                height: size,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
            }}
            animate={{
                y: [0, -30, 0],
                x: [0, 30, 0],
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
                duration: 5 + Math.random() * 3,
                delay: Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse",
            }}
        />
    );
};

const SocialButton = ({ icon: Icon, href, label }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="p-2 rounded-lg hover:bg-gradient-to-t from-pink-500/10 via-red-400/10 to-yellow-500/10 transition-all duration-300"
        aria-label={label}
    >
        <Icon className="w-5 h-5" />
    </motion.a>
);


const LandingPage = ({ userName }) => {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const messageTemplate = `Hello Vishal,\n\nI would like to get in touch with you.\n\nRegards,\n[Your Name]`;

    const handleGetInTouch = () => {
        const linkedInUrl = `https://www.linkedin.com/messaging/compose/?recipient=vishal-aakash&body=${encodeURIComponent(messageTemplate)}`;
        window.open(linkedInUrl, '_blank');
    };

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <FloatingGradient delay={0} duration={25} />
                <FloatingGradient delay={5} duration={30} />
                <FloatingGradient delay={10} duration={20} />

                <div className="absolute inset-0">
                    {[...Array(50)].map((_, i) => (
                        <FloatingOrb key={i} index={i} />
                    ))}
                </div>

                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}
                />
            </div>
            {/* Main Content */}
            <main className="relative pt-24 pb-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-16">
                        {/* Right Content - Hero Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="relative">
                                {/* Main Image Container */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative z-10 rounded-2xl overflow-hidden border border-white/10"
                                >
                                    <Image
                                        src={Me}
                                        alt="Vishal Aakash"
                                        className="rounded-2xl"
                                        priority
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </motion.div>

                                {/* Background Decorative Elements */}
                                <motion.div
                                    animate={{
                                        rotate: [0, 360]
                                    }}
                                    transition={{
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    className="absolute -inset-2 border border-white/10 rounded-2xl"
                                />
                                <motion.div
                                    animate={{
                                        rotate: [360, 0]
                                    }}
                                    transition={{
                                        duration: 25,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    className="absolute -inset-6 border border-white/5 rounded-2xl"
                                />

                                {/* Floating Accent Elements */}
                                {[...Array(2)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-16 h-16 rounded-xl bg-gradient-to-t from-pink-500/5 via-red-400/5 to-yellow-500/5 
                      backdrop-blur-sm border border-white/10"
                                        style={{
                                            top: `${30 + i * 40}%`,
                                            right: `${-5 + i * 3}%`,
                                        }}
                                        animate={{
                                            y: [-10, 10, -10],
                                            rotate: [0, 5, 0],
                                        }}
                                        transition={{
                                            duration: 4,
                                            delay: i * 0.5,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                        }}
                                    />
                                ))}
                            </div>
                        </motion.div>

                        {/* Left Content */}
                        <div className="lg:w-1/2 space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-block rounded-full px-4 py-1 border border-white/10 bg-white/5 text-xl backdrop-blur-sm"
                            >
                                Welcome to my portfolio, {userName}
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-bold"
                            >
                                I&apos;m{" "}
                                <motion.span
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500 text-transparent bg-clip-text inline-block"
                                >
                                    Vishal Aakash
                                </motion.span>
                            </motion.h1>

                            <div className="">
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={currentRoleIndex}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="text-xl text-gray-300"
                                    >
                                        {roles[currentRoleIndex]}
                                    </motion.p>
                                </AnimatePresence>
                            </div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-gray-400 max-w-lg"
                            >
                                Crafting seamless web experiences and exploring the frontiers of web3 technology
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex items-center gap-6 pt-4"
                            >
                                <motion.button
                                    onClick={handleGetInTouch}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-6 py-3 bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500 rounded-lg 
                        font-medium hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
                                >
                                    Get in touch
                                </motion.button>
                                <div className="flex items-center gap-4">
                                    <SocialButton icon={Github}
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://github.com/vishalmet" label="GitHub" />
                                    <SocialButton icon={Twitter}
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://x.com/VishalAakash18" label="Twitter" />
                                    <SocialButton icon={Linkedin}
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://www.linkedin.com/in/vishal-aakash/" label="LinkedIn" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default LandingPage;