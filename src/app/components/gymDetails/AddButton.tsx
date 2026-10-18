"use client";

import { GymContext } from "@/context/GymContext";
// import { gymContext } from "@/context/GymContext";
import { IGym } from "@/types/gym.type";
import React, { useContext } from "react";
import { FiCalendar } from "react-icons/fi";

const AddButton = ({ gym }: { gym: IGym }) => {
  const { addGym, setAddGym } = useContext(GymContext);
console.log(addGym, "addGym")
  const handleAddButton = () => {
    console.log("Add button triggered:", gym);

    setAddGym([...addGym, gym]);

    alert(`You have added "${gym.name}"`);
  };

  return (
    <button
      type="button"
      onClick={handleAddButton}
      className="flex h-[56px] w-full items-center justify-center gap-3 rounded-2xl border-none bg-[#B6F500] px-7 text-[18px] font-medium text-black"
    >
      <FiCalendar className="text-[21px]" />

      <span>Add to today's plan</span>
    </button>
  );
};

export default AddButton;