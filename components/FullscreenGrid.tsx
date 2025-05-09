// components/FullscreenGrid.tsx
'use client'

import { useState, useEffect } from 'react';

export default function FullscreenGrid() {
  const [showGrid, setShowGrid] = useState(false);
  
  // Configuration
  const columns = 12; // Nombre de colonnes
  
  // Raccourci clavier Alt+G
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key.toLowerCase() === 'g') {
        setShowGrid(prev => !prev);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  return (
    <>
      {/* Bouton toujours visible */}
      <button 
        style={{
          position: 'fixed',
          bottom: '16px',
          right: '16px',
          backgroundColor: 'blue',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '4px',
          zIndex: 9999,
          cursor: 'pointer',
        }}
        onClick={() => setShowGrid(!showGrid)}
      >
        {showGrid ? 'Masquer' : 'Afficher'} la grille
      </button>
      
      {/* Grille plein écran */}
      {showGrid && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',  // Utilise 100vw pour couvrir toute la largeur de la fenêtre
          height: '100vh', // Utilise 100vh pour couvrir toute la hauteur de la fenêtre
          zIndex: 999,
          pointerEvents: 'none',
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: '16px',
          padding: '0 16px',
        }}>
          {Array.from({ length: columns }).map((_, index) => (
            <div 
              key={index} 
              style={{
                height: '100%',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                border: '1px dashed rgba(59, 130, 246, 0.4)',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div style={{
                fontSize: '12px',
                color: 'rgb(59, 130, 246)',
                marginTop: '16px',
                fontWeight: 'bold',
              }}>
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}