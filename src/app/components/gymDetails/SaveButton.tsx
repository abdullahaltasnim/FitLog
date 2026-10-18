"use client";

import { GymContext } from "@/context/GymContext";
// import { gymContext } from "@/context/GymContext";
import { IGym } from "@/types/gym.type";
import React, { useContext } from "react";
import { FiBookmark } from "react-icons/fi";

const SaveButton = ({ gym }: { gym: IGym }) => {
  const { savedGym, setSavedGym } = useContext(GymContext);

  const handleSaveButton = () => {
    console.log("Save button triggered:", gym);

    setSavedGym([...savedGym, gym]);

    alert(`You have saved "${gym.name}" for later`);
  };

  return (
    <button
      type="button"
      onClick={handleSaveButton}
      className="flex h-[56px] w-full items-center justify-center gap-3 rounded-2xl border border-[#3A4657] bg-transparent px-7 text-[18px] font-medium text-[#E5E7EB]"
    >
      <FiBookmark className="text-[21px]" />

      <span>Save for later</span>
    </button>
  );
};

export default SaveButton;