'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
    {
        title: 'Auto Start Group',
        category: 'Car Dealership',
        image: '/autostart.jpg',
        link: 'https://autostartgroup.master.al/',
        color: 'from-blue-600 to-indigo-600'
    },
    {
        title: 'Fafa Resort',
        category: 'Hospitality',
        image: '/fafa.jpg',
        link: 'https://fafa.al/',
        color: 'from-emerald-500 to-teal-500'
    },
    {
        title: 'Klajdi Resort',
        category: 'Hospitality',
        image: '/klajdi.jpg',
        link: 'https://klajdiresort.al/',
        color: 'from-orange-500 to-red-500'
    },
    {
        title: 'RapsMedia',
        category: 'Music Platform',
        image: '/rapsmedia.png',
        link: 'https://rapsmedia.vercel.app/',
        color: 'from-purple-600 to-pink-600'
    }
];

export default function Portfolio() {
    return (
        <section id="work" className="py-24 bg-dark relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                            Featured <span className="text-gradient">Work</span>
                        </h2>
                        <p className="text-slate-400 text-lg max-w-xl">
                            A selection of our recent projects delivering tangible results.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link href="/portfolio" className="text-primary hover:text-white font-medium transition-colors">
                            View All Projects &rarr;
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-dark-lighter border border-white/5"
                        >
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative">
                                {/* Fallback gradient if no image */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`} />

                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="text-xs font-bold text-primary tracking-wider uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        {project.category}
                                    </span>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
