import Image from 'next/image';
import React from 'react';
import gym from '@/assets/banner.png'
const Banner = () => {
    return (
        <section className="bg-[#0C0D10] p-20">

            <div className="flex items-center justify-between bg-[#15171D] p-20 rounded-4xl">

                <div>
                    <h2 className="text-[#C2F800] text-xl font-bold">
                        WORKOUT LIBRARY
                    </h2>

                    <h2 className="my-5 text-7xl font-bold text-white">
                        TRAIN WITH INTENT. LOG <br />
                        EVERY SET.
                    </h2>

                    <p className="mb-8 text-xl text-white">
                        FitLog is a dark, no-nonsense gym companion: pick a lift,
                        <br />
                        lock it into today's plan, and watch the week's work add up
                    </p>

                    <button className="bg-[#C2F800] text-black px-6 py-3 rounded-xl font-bold">
                        BROWSE WORKOUTS
                    </button>
                </div>

                <Image
                    className="w-100 h-100 object-cover"
                    src={gym}
                    alt="gym"
                />

            </div>

        </section>
    );
};

export default Banner;