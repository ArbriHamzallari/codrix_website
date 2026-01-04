'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Code, Target } from 'lucide-react';

const projects = [
    {
        title: 'AutoZone Albania',
        category: 'Car Dealership',
        image: '/autostart.jpg',
        link: 'https://autostartgroup.master.al/',
        color: 'from-blue-600 to-indigo-600',
        description: 'A comprehensive automotive dealership platform designed to streamline vehicle sales, inventory management, and customer relations.',
        purpose: 'AutoZone Albania needed a robust digital solution to manage their entire dealership operations, from showcasing their premium vehicle inventory to handling customer inquiries, test drive bookings, and sales processes. The platform serves as both a customer-facing website and an internal management system, enabling seamless operations and enhanced customer experience.',
        techStack: [
            'ODOO',
            'Python',
            'PostgreSQL',
            'JavaScript',
            'XML',
            'QWeb Templates'
        ]
    },
    {
        title: 'Fafa Resort',
        category: 'Hospitality',
        image: '/fafa.jpg',
        link: 'https://fafa.al/',
        color: 'from-emerald-500 to-teal-500',
        description: 'An elegant luxury resort website featuring immersive visuals, real-time booking capabilities, and comprehensive amenity showcases.',
        purpose: 'Fafa Resort required a sophisticated online presence to attract international and local guests, showcase their premium accommodations and facilities, and provide a seamless booking experience. The website serves as the primary booking channel, reducing dependency on third-party platforms while maintaining a premium brand image.',
        techStack: [
            'Next.js',
            'React',
            'TypeScript',
            'Tailwind CSS',
            'Node.js',
            'MongoDB',
            'Stripe API'
        ]
    },
    {
        title: 'Klajdi Resort',
        category: 'Hospitality',
        image: '/klajdi.jpg',
        link: 'https://klajdiresort.al/',
        color: 'from-orange-500 to-red-500',
        description: 'A beautiful resort website designed to highlight natural surroundings, accommodations, and provide an intuitive reservation system.',
        purpose: 'Klajdi Resort needed a visually stunning website that captures the essence of their natural setting and hospitality. The platform enables guests to explore rooms, view amenities, check availability in real-time, and make direct bookings. It also serves as a marketing tool to showcase special packages, events, and seasonal offers.',
        techStack: [
            'Next.js',
            'React',
            'TypeScript',
            'Tailwind CSS',
            'Framer Motion',
            'Node.js',
            'PostgreSQL',
            'Resend API'
        ]
    },
    {
        title: 'RapsMedia',
        category: 'Music Platform',
        image: '/rapsmedia.png',
        link: 'https://rapsmedia.vercel.app/',
        color: 'from-purple-600 to-pink-600',
        description: 'A premium music promotion platform for hip-hop artists featuring curated content, transparent analytics, and artist growth tools.',
        purpose: 'RapsMedia was built to revolutionize music promotion by providing artists with a transparent, culture-first platform for promoting their music. The platform connects artists with real audiences, offers detailed analytics on campaign performance, and maintains editorial curation to ensure quality content. It serves as both a promotional service and a cultural hub for the hip-hop community.',
        techStack: [
            'Next.js',
            'React',
            'TypeScript',
            'Tailwind CSS',
            'Vercel',
            'Sanity CMS',
            'Stripe',
            'Resend API',
            'Framer Motion'
        ]
    }
];

export default function PortfolioPage() {
    return (
        <section className="min-h-screen pt-32 pb-20 bg-dark relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <Link 
                        href="/" 
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors mb-8"
                    >
                        <ArrowLeft size={20} />
                        Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                        Our <span className="text-gradient">Portfolio</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl">
                        A collection of our recent projects delivering tangible results and exceptional user experiences.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative rounded-2xl overflow-hidden bg-dark-lighter border border-white/5 hover:border-primary/50 transition-all duration-300"
                        >
                            <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="block"
                            >
                                {/* Image Container */}
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <span className="text-xs font-bold text-primary tracking-wider uppercase mb-2 block">
                                                {project.category}
                                            </span>
                                            <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors mb-3">
                                                {project.title}
                                            </h3>
                                        </div>
                                        <ExternalLink 
                                            size={20} 
                                            className="text-slate-400 group-hover:text-primary transition-colors flex-shrink-0 ml-4"
                                        />
                                    </div>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                        {project.description}
                                    </p>

                                    {/* Purpose Section */}
                                    <div className="mb-6">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Target size={16} className="text-primary" />
                                            <h4 className="text-sm font-semibold text-white">Purpose</h4>
                                        </div>
                                        <p className="text-slate-400 text-sm leading-relaxed">
                                            {project.purpose}
                                        </p>
                                    </div>

                                    {/* Tech Stack Section */}
                                    <div className="mb-6">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Code size={16} className="text-primary" />
                                            <h4 className="text-sm font-semibold text-white">Tech Stack</h4>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-white/5">
                                        <span className="text-primary text-sm font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                                            View Project
                                            <ExternalLink size={16} />
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-20 text-center"
                >
                    <div className="bg-gradient-to-br from-primary to-secondary p-12 rounded-2xl text-white">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                            Ready to start your project?
                        </h2>
                        <p className="mb-8 opacity-90 max-w-2xl mx-auto">
                            Let&apos;s work together to bring your vision to life. Get in touch and let&apos;s discuss how we can help.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-white/90 transition-colors"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
