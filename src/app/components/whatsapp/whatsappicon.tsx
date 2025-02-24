// components/WhatsappIcon.js
'use client'

import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

const WhatsappIcon = () => {
  return (
    <div className="fixed bottom-0 right-0 mb-4 mr-4 z-[9999]">
      <a
        href="https://wa.me/6282137213786"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-green-500 hover:bg-green-600 text-white rounded-full p-2 sm:p-3 shadow-lg transition-colors"
      >
        <FaWhatsapp className="w-4 h-4 sm:w-6 sm:h-6" />
      </a>
    </div>
  );
};

export default WhatsappIcon;
