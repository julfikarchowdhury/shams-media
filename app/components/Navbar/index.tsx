"use client"
import Navbar from './Navbar';
import React from 'react';

const Navbarin: React.FC = () => {
    return (
        <div className="sticky top-0 z-50 w-full bg-navyblue/70 backdrop-blur-lg border-b border-white/5 transition-all duration-300">
            <Navbar />
        </div>
    );
}

export default Navbarin;
