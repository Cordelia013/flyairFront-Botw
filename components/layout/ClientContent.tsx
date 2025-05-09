// contexts/GridContext.tsx
'use client'

import React from 'react';
import { createContext, useState, useContext, ReactNode } from 'react';

type GridContextType = {
  showGrid: boolean;
  toggleGrid: (state?: boolean) => void;
};

const GridContext = createContext<GridContextType | undefined>(undefined);

export function GridProvider({ children }: { children: ReactNode }) {
  const [showGrid, setShowGrid] = useState(false);
  
  const toggleGrid = (state?: boolean) => {
    if (typeof state === 'boolean') {
      setShowGrid(state);
    } else {
      setShowGrid(prev => !prev);
    }
  };
  return (
    <>
      <GridContext.Provider value={{ showGrid, toggleGrid }}>
        {children}
      </GridContext.Provider>
    </>
  );
}

export function useGridContext() {
  const context = useContext(GridContext);
  
  if (context === undefined) {
    throw new Error('useGridContext must be used within a GridProvider');
  }
  
  return context;
}