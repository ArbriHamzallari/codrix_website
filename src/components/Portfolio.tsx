'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
    {
        title: 'AutoZone Albania',
        category: 'Car Dealership',
        image: '/autostart.jpg',
        link: 'https://autostartgroup.master.al/',
        color: 'from-blue-600 to-indigo-600',
        description: 'Custom website development that increased online inquiries by 180% and reduced page load time by 65%, transforming digital presence for Albania\'s premier car dealership network.'
    },
    {
        title: 'Fafa Resort',
        category: 'Hospitality',
        image: '/fafa.jpg',
        link: 'https://fafa.al/',
        color: 'from-emerald-500 to-teal-500',
        description: 'Premium hospitality website with seamless booking integration that boosted direct reservations by 240% and enhanced mobile user experience, driving significant revenue growth.'
    },
    {
        title: 'Klajdi Resort',
        category: 'Hospitality',
        image: '/klajdi.jpg',
        link: 'https://klajdiresort.al/',
        color: 'from-orange-500 to-red-500',
        description: 'High-performance website featuring advanced SEO optimization that tripled organic traffic and improved conversion rates by 150%, establishing a strong competitive advantage in the market.'
    },
    {
        title: 'RapsMedia',
        category: 'Music Platform',
        image: '/rapsmedia.png',
        link: 'https://rapsmedia.vercel.app/',
        color: 'from-purple-600 to-pink-600',
        description: 'Dynamic music streaming platform built with cutting-edge technology, delivering lightning-fast performance and seamless user experience that increased engagement by 200% and user retention.'
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
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6">
                            Featured <span className="text-gradient">Results</span>
                        </h2>
                        <p className="text-slate-400 text-lg max-w-xl">
                            Systems we built. Results they generated.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link href="/portfolio" className="text-primary hover:text-white font-medium transition-colors">
                            See All Projects →
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

                                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-dark/95 via-dark/60 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="text-xs font-bold text-primary tracking-wider uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        {project.category}
                                    </span>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-slate-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 delay-75">
                                        {project.description}
                                    </p>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
