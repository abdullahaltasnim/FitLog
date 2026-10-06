import { IGym } from "@/types/gym.type";
import Image from "next/image";
import React from "react";
import Link from "next/link";

interface IGymCardProps {
  gym: IGym
}
const GymCard = ({ gym }: IGymCardProps) => {
  return (
    <div className="w-full max-w-[440px] overflow-hidden rounded-[20px] border border-[#2a2f37] bg-[#17191e] shadow-[0_10px_35px_rgba(0,0,0,0.25)]">


      <Link href={`/gym/${gym.id}`}>


        {/* Image */}
        <div className="relative h-[212px] w-full overflow-hidden">
          <Image
            src={gym.image}
            alt={gym.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="px-7 pb-7 pt-7">

          {/* Muscle Groups */}
          <div className="mb-5 flex flex-wrap gap-2">
            {gym.muscleGroups.map((muscle: string) => (
              <span
                key={muscle}
                className="rounded-full bg-[#b9ff00] px-3.5 py-1 text-[13px] font-extrabold uppercase leading-none tracking-[0.3px] text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Name */}
          <h2 className="mb-2 text-[22px] font-black uppercase leading-tight tracking-[0.5px] text-white">
            {gym.name}
          </h2>

          {/* Equipment */}
          <p className="text-[14px] text-[#9297a1]">
            {gym.equipment}
          </p>

          {/* Divider */}
          <div className="my-5 h-px w-full bg-[#2b2f36]" />

          {/* Bottom Info */}
          <div className="flex items-center gap-6 text-[#979ca6]">

            {/* Duration */}
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />

                <path
                  d="M12 7V12L15 14"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>

              <span className="text-[14px]">
                {gym.duration} min
              </span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.5 2.5C13.5 2.5 14.5 6.5 11.5 9C10.2 10.1 10 11.5 10.5 12.5C9.5 12 8.5 10.5 8.7 8.5C5.9 10.4 4 13 4 16C4 20.1 7.6 22 12 22C16.4 22 20 19.7 20 15.5C20 10.8 16.8 6.5 13.5 2.5Z" />
              </svg>

              <span className="text-[14px]">
                {gym.caloriesBurned} kcal
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3.5L14.6 8.7L20.4 9.5L16.2 13.6L17.2 19.4L12 16.7L6.8 19.4L7.8 13.6L3.6 9.5L9.4 8.7L12 3.5Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="text-[14px]">
                {gym.rating}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GymCard;