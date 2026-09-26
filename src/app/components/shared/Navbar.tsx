import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png'

const Navbar = () => {
    return (
        <section className="border-b border-gray-700 bg-[#0C0D10]">
            <div className="container mx-auto p-5 flex items-center justify-between">

                {/* Logo + Name */}
                <div className="flex items-center gap-3">
                    <Image src={logo} alt="FITLOG Logo" />
                    <h2 className="text-3xl font-bold">FITLOG</h2>
                </div>

                {/* Navigation */}
                <div>
                    <ul className="flex items-center justify-center gap-8 text-2xl">
                        <li>Workouts</li>
                        <li>My Plan</li>
                    </ul>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-5">
                    <h2>Plan 0</h2>
                    <h2>Saved 0</h2>
                </div>

            </div>
        </section>
    );
};

export default Navbar;