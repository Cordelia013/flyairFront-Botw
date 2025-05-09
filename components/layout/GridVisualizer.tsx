// components/layout/GridVisualizer.tsx
'use client'

import { useState, useEffect } from 'react';
import { useGrid } from '@/app/hooks/useGrid';

export default function GridVisualizer() {
  const [showGrid, setShowGrid] = useState(false);
  const { config, breakpoint } = useGrid();
  
  // Raccourci clavier Alt+G pour afficher/masquer la grille
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key.toLowerCase() === 'g') {
        setShowGrid(prev => !prev);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  if (!showGrid) return null;
  
  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      <div className="h-full mx-auto" style={{
        maxWidth: `${config.maxWidth}px`,
        paddingLeft: `${config.margin}px`,
        paddingRight: `${config.margin}px`,
      }}>
        <div 
          className="h-full grid"
          style={{ 
            gridTemplateColumns: `repeat(${config.columns}, 1fr)`,
            gap: `${config.gutter}px`,
          }}
        >
          {Array.from({ length: config.columns }).map((_, index) => (
            <div 
              key={index} 
              className="h-full bg-blue-500 bg-opacity-15"
            >
              <div className="text-center text-xs text-blue-500 pt-1">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bouton de contrôle */}
      <button 
        onClick={() => setShowGrid(false)}
        className="fixed bottom-4 right-4 bg-blue-500 text-white px-3 py-2 rounded-full shadow pointer-events-auto text-xs"
      >
        Masquer la grille (Alt+G)
      </button>
      
      {/* Informations sur la grille */}
      <div className="fixed top-4 left-4 bg-gray-800 text-white p-2 rounded text-xs pointer-events-auto">
        Breakpoint: {breakpoint} • Colonnes: {config.columns} • Gouttière: {config.gutter}px
      </div>
    </div>
  );
}