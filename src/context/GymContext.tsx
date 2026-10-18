"use client"

import React, { createContext, ReactNode, useState } from 'react';

// export const gymContext = createContext({});

export const GymContext = createContext({});


const GymProvider = ({children}: { children: ReactNode }) => {
 const [addGym, setAddGym] = useState([]);
 const [savedGym, setSavedGym] = useState([]);

 const sharedData = {
   addGym,
   setAddGym,
   savedGym,
   setSavedGym,
 };
return <GymContext.Provider value={sharedData}>
{children}

</GymContext.Provider>

};

export default GymProvider;