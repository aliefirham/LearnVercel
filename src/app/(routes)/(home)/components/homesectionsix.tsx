'use client'

import Image from "next/image";
import { FaGear } from "react-icons/fa6";
import { motion } from 'framer-motion'

const HomeSectionSix = () => {
    const teamMembers = [
        {
            name: "Leslie Alexander",
            image: "/images/home/team/team (1).jpg"
        },
        {
            name: "Ronald Richards",
            image: "/images/home/team/team (2).jpg"
        },
        {
            name: "Brooklyn Simmons",
            image: "/images/home/team/team (3).jpg"
        },
        {
            name: "Wade Warren",
            image: "/images/home/team/team (4).jpg"
        }
    ];

    return (
        <section className="py-16 md:py-32 bg-[#F8F9F4] relative overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#F7E733]/5"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#F7E733]/5"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.5, 0.3, 0.5],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className="container mx-auto px-4 md:px-16 relative">
                <motion.div 
                    className="text-center max-w-4xl mx-auto mb-10 md:mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl md:text-5xl font-normal mb-4 md:mb-6 flex flex-row items-center justify-center gap-2 md:gap-4 text-black">
                        Our teams the 
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                            <FaGear className="text-[#F7E733] w-6 h-6 md:w-12 md:h-12 mx-1" />
                        </motion.div> 
                        driving force
                    </h2>
                    <h2 className="text-2xl md:text-5xl font-normal text-black">
                        behind our mission to create a more sustainable world.
                    </h2>
                </motion.div>

                {/* Team Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            className="relative group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="relative aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 group-hover:to-black/80 transition-all duration-300" />
                                
                                {/* Name */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                    <h3 className="text-sm md:text-2xl font-medium text-white text-center">
                                        {member.name}
                                    </h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeSectionSix;