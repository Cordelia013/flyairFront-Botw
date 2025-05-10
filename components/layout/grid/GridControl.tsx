// components/layout/GridControl.tsx (extension)
'use client'
import React from 'react';
import { useState } from 'react';
import { useGridContext } from '@/components/layout/ClientContent';


type GridControlProps = {
  shortcutKey?: string;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
};

export default function GridControl({
  shortcutKey = 'g',
  position = 'bottom-right',
}: GridControlProps) {
  const { showGrid, toggleGrid } = useGridContext();
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState({
    opacity: 5, // De 1 à 20
    color: 'blue'
  });
  
  // ... reste du code pour les raccourcis clavier ...  
  
  
  // Classes pour positionner le bouton
  const positionClasses = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
  };
  
  return (
    <div className={`fixed ${positionClasses[position]} z-[1000]`}>
      <div className="flex flex-col items-end space-y-2">
        {/* Panneau de paramètres - visible seulement quand showSettings est true */}
        {showSettings && showGrid && (
          <div className="bg-gray-800/90 p-3 rounded-lg shadow-lg text-white mb-2 w-64">
            <h3 className="font-bold text-xs mb-2">Paramètres de la grille</h3>
            
            {/* Contrôle d'opacité */}
            <div className="mb-3">
              <label className="block text-xs mb-1">Opacité ({settings.opacity}%)</label>
              <input 
                type="range" 
                min="1" 
                max="20" 
                value={settings.opacity} 
                onChange={(e) => setSettings({...settings, opacity: parseInt(e.target.value)})}
                className="w-full h-1 bg-gray-700 rounded appearance-none"
              />
            </div>
            
            {/* Sélecteur de couleur */}
            <div className="mb-2">
              <label className="block text-xs mb-1">Couleur</label>
              <div className="flex space-x-2">
                {['blue', 'red', 'green', 'purple', 'gray'].map(color => (
                  <button
                    key={color}
                    className={`w-5 h-5 rounded-full bg-${color}-500 ${settings.color === color ? 'ring-2 ring-white' : ''}`}
                    onClick={() => setSettings({...settings, color})}
                    aria-label={`Couleur ${color}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Boutons d'action */}
        <div className="flex space-x-2">
          {showGrid && (
            <button
              onClick={() => setShowSettings(prev => !prev)}
              className="bg-gray-700/90 hover:bg-gray-600 text-white p-2 rounded-full shadow-lg"
              aria-label="Paramètres de la grille"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </button>
          )}
          
          <button
            onClick={() => toggleGrid()}
            className="flex items-center space-x-2 bg-gray-800/90 hover:bg-gray-700 text-white px-3 py-2 rounded-full shadow-lg"
            aria-label={showGrid ? "Masquer la grille" : "Afficher la grille"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 4a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1H5zm5 12h5V8h-5v8zm0-10h5V6h-5v2zm-5 2h3V6H5v2zm0 2h3v6H5V8z" clipRule="evenodd" />
            </svg>
            <span className="text-xs">{showGrid ? 'Masquer' : 'Afficher'}</span>
            <span className="text-xs opacity-60">(Alt+{shortcutKey})</span>
          </button>
        </div>
      </div>
    </div>
  );
}