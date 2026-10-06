// "use client";

// import {
//   createContext,
//   ReactNode,
//   useState,
// } from "react";

// type Gym = {
//   id: number;
//   name: string;
// };

// type GymContextType = {
//   readGym: Gym[];
//   setReadGym: React.Dispatch<React.SetStateAction<Gym[]>>;
//   wishlist: Gym[];
//   setWishlist: React.Dispatch<React.SetStateAction<Gym[]>>;
// };

// export const GymContext = createContext<GymContextType | null>(null);

// const GymProvider = ({ children }: { children: ReactNode }) => {
//   const [readGym, setReadGym] = useState<Gym[]>([]);
//   const [wishlist, setWishlist] = useState<Gym[]>([]);

//   const sharedData = {
//     readGym,
//     setReadGym,
//     wishlist,
//     setWishlist,
//   };

//   return (
//     <GymContext.Provider value={sharedData}>
//       {children}
//     </GymContext.Provider>
//   );
// };

// export default GymProvider;




import React, { createContext, useState } from 'react';


const GymContext = createContext(null);

const GymProvider = () => {
 const [addGym, setAddGym] = useState([]);
 const 



const GymProvider = () => {
  return (
    <div>
      
    </div>
  );
};

export default GymProvider;