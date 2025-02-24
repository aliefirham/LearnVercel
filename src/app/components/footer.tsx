'use client'

import Link from "next/link";
import { FaYoutube, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#F8F9F4] py-10">
            <div className="container mx-auto px-4 md:px-40">
                <div className="flex flex-col">
                    <div className="flex flex-col md:flex-row md:justify-between mb-8 md:mb-16">
                        {/* Newsletter Section */}
                        <div className="max-w-[280px] mb-8 md:mb-0">
                            <h3 className="text-lg font-normal text-black mb-3">
                                Subscribe to our newsletter.
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Want to stay up to date with news and updates about our services? Subscribe.
                            </p>
                            <div className="flex items-center gap-2 max-w-[220px]">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="flex-1 px-3 py-2 text-sm rounded-full border border-gray-200 focus:outline-none focus:border-gray-400"
                                />
                                <button className="p-2 rounded-full bg-black flex-shrink-0">
                                    <svg className="w-4 h-4 text-white transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </button>
                            </div>
                            {/* Social Links */}
                            <div className="flex gap-3 mt-6">
                                <Link href="#" className="p-2 bg-white rounded-full hover:bg-gray-50">
                                    <FaYoutube className="w-4 h-4" />
                                </Link>
                                <Link href="#" className="p-2 bg-white rounded-full hover:bg-gray-50">
                                    <FaFacebook className="w-4 h-4" />
                                </Link>
                                <Link href="#" className="p-2 bg-white rounded-full hover:bg-gray-50">
                                    <FaTwitter className="w-4 h-4" />
                                </Link>
                                <Link href="#" className="p-2 bg-white rounded-full hover:bg-gray-50">
                                    <FaLinkedin className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>

                        {/* Menu Links */}
                        <div className="grid grid-cols-2 md:flex md:gap-20 gap-8">
                            {/* Service Links */}
                            <div>
                                <h4 className="text-base font-normal text-black mb-2">Service</h4>
                                <ul className="space-y-1 text-sm">
                                    <li><Link href="#" className="text-gray-600 hover:text-gray-900">Consulting</Link></li>
                                    <li><Link href="#" className="text-gray-600 hover:text-gray-900">Engineering</Link></li>
                                    <li><Link href="#" className="text-gray-600 hover:text-gray-900">Maintenance</Link></li>
                                </ul>
                            </div>

                            {/* Product Links */}
                            <div>
                                <h4 className="text-base font-normal text-black mb-2">Product</h4>
                                <ul className="space-y-1 text-sm">
                                    <li><Link href="#" className="text-gray-600 hover:text-gray-900">Road lamp</Link></li>
                                    <li><Link href="#" className="text-gray-600 hover:text-gray-900">Solar Panel</Link></li>
                                    <li><Link href="#" className="text-gray-600 hover:text-gray-900">Surya off</Link></li>
                                </ul>
                            </div>

                            {/* Company Links */}
                            <div>
                                <h4 className="text-base font-normal text-black mb-2">Company</h4>
                                <ul className="space-y-1 text-sm">
                                    <li><Link href="#" className="text-gray-600 hover:text-gray-900">About Us</Link></li>
                                    <li><Link href="#" className="text-gray-600 hover:text-gray-900">Pricing</Link></li>
                                    <li><Link href="#" className="text-gray-600 hover:text-gray-900">Our team</Link></li>
                                </ul>
                            </div>

                            {/* Legal Links */}
                            <div>
                                <h4 className="text-base font-normal text-black mb-2">Legal</h4>
                                <ul className="space-y-1 text-sm">
                                    <li><Link href="#" className="text-gray-600 hover:text-gray-900">Projects</Link></li>
                                    <li><Link href="#" className="text-gray-600 hover:text-gray-900">Blog</Link></li>
                                    <li><Link href="#" className="text-gray-600 hover:text-gray-900">Content</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="text-center text-xs text-gray-600 mt-8 md:mt-0">
                        <p>©2024 Solar energy • all right reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 