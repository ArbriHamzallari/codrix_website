'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "Codrix Solutions transformed our outdated website into a modern, high-performance platform that increased our online sales by 300% in just three months. Their team's communication was exceptional. They kept us informed every step of the way and delivered ahead of schedule. We couldn't be happier with the results.",
        author: "Sarah Chen",
        role: "CEO, TechStart Innovations",
        company: "Web Development"
    },
    {
        quote: "Working with Codrix on our mobile app was a game-changer for our business. They delivered a polished, feature-rich application in record time, and the quality exceeded our expectations. Our user base has grown by 250% since launch, and the app's performance has been flawless.",
        author: "Marcus Rodriguez",
        role: "Founder, FitLife App",
        company: "Mobile App Development"
    },
    {
        quote: "The custom software solution Codrix built for us streamlined our entire operations and reduced processing time by 60%. Their engineering team understood our complex requirements immediately and delivered a robust system that scales perfectly with our growth. Outstanding work from start to finish.",
        author: "Emily Thompson",
        role: "Operations Director, Global Logistics Co.",
        company: "Software Engineering"
    },
    {
        quote: "What impressed us most was Codrix's ability to turn our vision into reality faster than we imagined possible. Their responsive communication and attention to detail made the entire process seamless. The new platform has already generated a 40% increase in customer engagement and significantly improved our conversion rates.",
        author: "David Park",
        role: "Marketing Director, RetailPlus",
        company: "Full-Stack Development"
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-dark-lighter relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                        What Our <span className="text-gradient">Clients Say</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Businesses that built revenue systems with us. Real results from real clients.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300"
                        >
                            <Quote className="w-8 h-8 text-primary mb-4 opacity-50" />
                            <p className="text-slate-300 text-lg leading-relaxed mb-6">
                                "{testimonial.quote}"
                            </p>
                            <div className="border-t border-white/10 pt-6">
                                <p className="text-white font-semibold">{testimonial.author}</p>
                                <p className="text-slate-400 text-sm">{testimonial.role}</p>
                                <span className="inline-block mt-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                                    {testimonial.company}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
