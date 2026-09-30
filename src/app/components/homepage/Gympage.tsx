import React from "react";
import GymCard from "../shared/GymCard";
import { IGym } from "@/types/gym.type";

const getGympage = async () => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await response.json();

  return data;
};

const Gympage = async () => {
  const gymData = await getGympage();

  console.log(gymData, "gymData");

  return (
    <section className="container mx-auto my-[70px]">
      <h1 className="text-3xl font-bold text-white">THE LIBRARY</h1>
      <p className="mb-8 text-[#9CA3AF]">Twelve lifts covering every major muscle group</p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {gymData.map((gym: IGym, ind: number) => {
          return <GymCard key={ind} gym={gym} />;
        })}
      </div>
    </section>
  );
};

export default Gympage;