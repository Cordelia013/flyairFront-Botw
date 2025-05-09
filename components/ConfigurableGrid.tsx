// components/ConfigurableGrid.tsx
'use client'

import { useState, useEffect } from 'react';

// Configuration par défaut
const defaultConfig = {
  mobile: {
    columns: 4,
    gutter: 16,
    margin: 16,
  },
  tablet: {
    columns: 8,
    gutter: 24,
    margin: 24,
  },
  desktop: {
    columns: 12,
    gutter: 32,
    margin: 32,
  }
};

export default function ConfigurableGrid() {
  const [showGrid, setShowGrid] = useState(false);
  const [breakpoint, setBreakpoint] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [config, setConfig] = useState(defaultConfig.desktop);
  
  // Détection du breakpoint
  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      
      if (width >= 1024) {
        setBreakpoint('desktop');
        setConfig(defaultConfig.desktop);
      } else if (width >= 768) {
        setBreakpoint('tablet');
        setConfig(defaultConfig.tablet);
      } else {
        setBreakpoint('mobile');
        setConfig(defaultConfig.mobile);
      }
    };
    
    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);
  
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
      
      {/* Informations sur la grille */}
      {showGrid && (
        <div style={{
          position: 'fixed',
          top: '16px',
          left: '16px',
          backgroundColor: 'rgba(17, 24, 39, 0.9)',
          color: 'white',
          padding: '12px',
          borderRadius: '4px',
          zIndex: 9999,
          fontSize: '12px',
        }}>
          <div>Breakpoint: <strong>{breakpoint}</strong></div>
          <div>Colonnes: <strong>{config.columns}</strong></div>
          <div>Gouttière: <strong>{config.gutter}px</strong></div>
          <div>Marge: <strong>{config.margin}px</strong></div>
        </div>
      )}
      
      {/* Grille plein écran */}
      {showGrid && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 999,
          pointerEvents: 'none',
          display: 'grid',
          gridTemplateColumns: `repeat(${config.columns}, 1fr)`,
          gap: `${config.gutter}px`,
          paddingLeft: `${config.margin}px`,
          paddingRight: `${config.margin}px`,
        }}>
          {Array.from({ length: config.columns }).map((_, index) => (
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