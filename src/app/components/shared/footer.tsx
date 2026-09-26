import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-[#0C0D10] border-t border-gray-700">
            <div className="container mx-auto flex items-center justify-between p-10">
                
                <div className="flex items-center gap-3">
                    <Image
                        src={logo}
                        alt="FITLOG Logo"
                    />
                    <h2 className="font-bold text-white">
                        FITLOG
                    </h2>
                </div>

                <p className="text-gray-400">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>
        </footer>
    );
};

export default Footer;