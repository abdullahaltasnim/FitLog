
"use client";

import React, { useContext, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GymContext } from "@/context/GymContext";
import { IGym } from "@/types/gym.type";
import {
  FiClock,
  FiStar,
  FiCheck,
  FiX,
  FiChevronDown,
  FiPlus,
} from "react-icons/fi";
import { FaFire } from "react-icons/fa";

type TabType = "plan" | "saved";
type SortType = "duration" | "calories" | "name" | "rating";

const Page = () => {
  const { addGym, setAddGym, savedGym, setSavedGym } =
    useContext(GymContext);

  const [activeTab, setActiveTab] = useState<TabType>("plan");
  const [sortBy, setSortBy] = useState<SortType>("duration");

  // Total statistics
  const totalExercises = addGym.length;

  const totalMinutes = addGym.reduce(
    (total, gym) => total + Number(gym.duration || 0),
    0
  );

  const totalCalories = addGym.reduce(
    (total, gym) => total + Number(gym.caloriesBurned || 0),
    0
  );

  // Get workouts based on selected tab
  const currentGym = activeTab === "plan" ? addGym : savedGym;

  // Sort workouts
  const sortedGym = useMemo(() => {
    return [...currentGym].sort((a, b) => {
      if (sortBy === "duration") {
        return Number(a.duration) - Number(b.duration);
      }

      if (sortBy === "calories") {
        return Number(b.caloriesBurned) - Number(a.caloriesBurned);
      }

      if (sortBy === "rating") {
        return Number(b.rating) - Number(a.rating);
      }

      return a.name.localeCompare(b.name);
    });
  }, [currentGym, sortBy]);

  // Remove workout
  const handleRemove = (gym: IGym) => {
    if (activeTab === "plan") {
      setAddGym(addGym.filter((item) => item.id !== gym.id));
    } else {
      setSavedGym(savedGym.filter((item) => item.id !== gym.id));
    }
  };

  // Mark workout as completed
  const handleMarkDone = (gym: IGym) => {
    setAddGym(addGym.filter((item) => item.id !== gym.id));

    console.log("Workout completed:", gym);
  };

  // Add saved workout to today's plan
  const handleAddToPlan = (gym: IGym) => {
    if (addGym.some((item) => item.id === gym.id)) {
      alert("This workout is already in your plan.");
      return;
    }

    if (addGym.length >= 5) {
      alert("You can only add 5 workouts to today's plan.");
      return;
    }

    setAddGym([...addGym, gym]);
    alert(`"${gym.name}" added to today's plan.`);
  };

  return (
    <main className="min-h-[calc(100vh-140px)] bg-[#101116] text-white">
      <div className="container mx-auto px-5 py-10 md:px-10">

        {/* PAGE HEADING */}
        <div>
          <h1 className="text-[28px] font-black uppercase tracking-tight">
            MY PLAN
          </h1>

          <p className="mt-1 text-[14px] text-[#858B98]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* STATISTICS SECTION */}
        <div className="mt-6 grid grid-cols-3 rounded-2xl border border-[#252934] bg-[#16181F] px-5 py-7">

          {/* Exercises */}
          <div className="border-r border-[#252934] pr-4">
            <p className="text-[12px] text-[#858B98]">
              Exercises
            </p>

            <h2 className="mt-1 text-[34px] font-black leading-tight text-[#C2F800]">
              {totalExercises}
            </h2>
          </div>

          {/* Minutes */}
          <div className="border-r border-[#252934] px-6">
            <p className="text-[12px] text-[#858B98]">
              Minutes
            </p>

            <h2 className="mt-1 text-[34px] font-black leading-tight">
              {totalMinutes}
            </h2>
          </div>

          {/* Calories */}
          <div className="pl-6">
            <p className="text-[12px] text-[#858B98]">
              Calories
            </p>

            <h2 className="mt-1 text-[34px] font-black leading-tight">
              {totalCalories}
            </h2>
          </div>
        </div>

        {/* TABS AND SORTING */}
        <div className="mt-7 flex flex-wrap items-center justify-between gap-4">

          {/* Tab Buttons */}
          <div className="flex items-center rounded-xl border border-[#252934] bg-[#171A22] p-1">

            <button
              type="button"
              onClick={() => setActiveTab("plan")}
              className={`rounded-lg px-5 py-2 text-[13px] font-medium transition-all duration-300 ${
                activeTab === "plan"
                  ? "bg-[#252A34] text-white shadow-sm"
                  : "text-[#858B98] hover:text-white"
              }`}
            >
              Today's Plan
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("saved")}
              className={`rounded-lg px-5 py-2 text-[13px] font-medium transition-all duration-300 ${
                activeTab === "saved"
                  ? "bg-[#252A34] text-white shadow-sm"
                  : "text-[#858B98] hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] text-[#858B98]">
              Sort By
            </span>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value as SortType)
                }
                className="appearance-none rounded-lg border border-[#252934] bg-[#171A22] py-2 pl-4 pr-9 text-[13px] text-white outline-none focus:border-[#C2F800]"
              >
                <option value="duration">Duration</option>
                <option value="calories">Calories</option>
                <option value="name">Name</option>
                <option value="rating">Rating</option>
              </select>

              <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#858B98]" />
            </div>
          </div>
        </div>

        {/* WORKOUT LIST */}
        <div className="mt-5">

          {sortedGym.length === 0 ? (

            // EMPTY STATE
            <div className="flex min-h-[255px] flex-col items-center justify-center rounded-xl border border-dashed border-[#292D36] px-5 py-10 text-center">

              <h2 className="text-[20px] font-black uppercase tracking-tight">
                NOTHING HERE YET
              </h2>

              <p className="mt-1 text-[13px] text-[#858B98]">
                {activeTab === "plan"
                  ? "Browse the library and add a lift to get today moving."
                  : "Browse the library and save workouts for later."}
              </p>

              <Link
                href="/"
                className="mt-5 rounded-full bg-[#C2F800] px-7 py-2.5 text-[13px] font-bold text-black transition-all duration-300 hover:bg-[#D4FF35]"
              >
                Go to workouts
              </Link>
            </div>

          ) : (

            // HORIZONTAL WORKOUT CARDS
            <div className="flex flex-col gap-4">

              {sortedGym.map((gym) => (
                <div
                  key={gym.id}
                  className="flex flex-col gap-4 rounded-xl border border-[#252934] bg-[#16181F] p-4 transition-all duration-300 hover:border-[#39404D] md:flex-row md:items-center md:justify-between"
                >

                  {/* LEFT SIDE: IMAGE + INFORMATION */}
                  <div className="flex min-w-0 items-center gap-4">

                    {/* Workout Image */}
                    <div className="relative h-[70px] w-[120px] shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={gym.image}
                        alt={gym.name}
                        fill
                        sizes="120px"
                        className="object-cover"
                      />
                    </div>

                    {/* Workout Details */}
                    <div className="min-w-0">

                      {/* Workout Name */}
                      <h3 className="text-[16px] font-black uppercase leading-tight text-white">
                        {gym.name}
                      </h3>

                      {/* Equipment */}
                      <p className="mt-1 text-[12px] text-[#858B98]">
                        {gym.equipment}
                      </p>

                      {/* Duration, Calories, Rating */}
                      <div className="mt-2 flex flex-wrap items-center gap-3">

                        {/* Duration */}
                        <div className="flex items-center gap-1.5">
                          <FiClock className="text-[13px] text-[#C2F800]" />

                          <span className="text-[12px] text-[#B8BCC5]">
                            {gym.duration} min
                          </span>
                        </div>

                        {/* Calories */}
                        <div className="flex items-center gap-1.5">
                          <FaFire className="text-[12px] text-[#C2F800]" />

                          <span className="text-[12px] text-[#B8BCC5]">
                            {gym.caloriesBurned} kcal
                          </span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1.5">
                          <FiStar className="text-[13px] text-[#C2F800]" />

                          <span className="text-[12px] text-[#B8BCC5]">
                            {gym.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT SIDE: ACTION BUTTONS */}
                  <div className="flex shrink-0 flex-wrap items-center justify-end gap-3">

                    {/* View Details */}
                    <Link
                      href={`/gym/${gym.id}`}
                      className="flex h-[36px] items-center justify-center rounded-full border border-[#39404D] bg-transparent px-5 text-[12px] font-medium text-[#E5E7EB] transition-all duration-300 hover:border-[#C2F800] hover:text-[#C2F800]"
                    >
                      View Details
                    </Link>

                    {/* Mark Done / Add to Plan */}
                    {activeTab === "plan" ? (

                      <button
                        type="button"
                        onClick={() => handleMarkDone(gym)}
                        className="flex h-[36px] items-center justify-center gap-2 rounded-full bg-[#C2F800] px-5 text-[12px] font-bold text-black transition-all duration-300 hover:bg-[#D4FF35]"
                      >
                        <FiCheck className="text-[14px]" />
                        Mark as Done
                      </button>

                    ) : (

                      <button
                        type="button"
                        onClick={() => handleAddToPlan(gym)}
                        disabled={addGym.some(
                          (item) => item.id === gym.id
                        )}
                        className="flex h-[36px] items-center justify-center gap-2 rounded-full bg-[#C2F800] px-5 text-[12px] font-bold text-black transition-all duration-300 hover:bg-[#D4FF35] disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <FiPlus className="text-[14px]" />
                        {addGym.some(
                          (item) => item.id === gym.id
                        )
                          ? "In Plan"
                          : "Add to Plan"}
                      </button>
                    )}

                    {/* Remove Button */}
                    <button
                      type="button"
                      onClick={() => handleRemove(gym)}
                      aria-label={`Remove ${gym.name}`}
                      title="Remove workout"
                      className="flex h-[36px] w-[28px] items-center justify-center text-[#6B7280] transition-colors duration-300 hover:text-red-400"
                    >
                      <FiX className="text-[17px]" />
                    </button>

                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Page;
