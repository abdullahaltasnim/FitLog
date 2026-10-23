
"use client";

import {
  createContext,
  useState,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from "react";

import type { IGym } from "@/types/gym.type";

interface GymContextType {
  addGym: IGym[];
  setAddGym: Dispatch<SetStateAction<IGym[]>>;
  savedGym: IGym[];
  setSavedGym: Dispatch<SetStateAction<IGym[]>>;
}

export const GymContext = createContext<GymContextType>({
  addGym: [],
  setAddGym: () => {},
  savedGym: [],
  setSavedGym: () => {},
});

const GymProvider = ({ children }: { children: ReactNode }) => {
  const [addGym, setAddGym] = useState<IGym[]>([]);
  const [savedGym, setSavedGym] = useState<IGym[]>([]);

  return (
    <GymContext.Provider
      value={{
        addGym,
        setAddGym,
        savedGym,
        setSavedGym,
      }}
    >
      {children}
    </GymContext.Provider>
  );
};

export default GymProvider;
