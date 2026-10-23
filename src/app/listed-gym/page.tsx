
"use client";

import { GymContext } from "@/context/GymContext";
import { useContext } from "react";

const ListedGym = () => {
  const { addGym } = useContext(GymContext);

  console.log(addGym, "addGym");

  return <div>Listed Gym</div>;
};

export default ListedGym;
