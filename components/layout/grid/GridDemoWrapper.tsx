// components/GridDemoWrapper.tsx
'use client'

import { useState, useEffect } from 'react';
import ClientContent from '@/components/layout/ClientContent';

type GridDemoWrapperProps = {
  initiallyVisible?: boolean;
  shortcutKey?: string;
  colHeight?: string;
  colColor?: string;
};

export default function GridDemoWrapper({
  initiallyVisible = false,
  shortcutKey = 'g',
  colHeight = 'h-full',
  colColor = 'bg-blue-500',
}: GridDemoWrapperProps) {
  const [showGrid, setShowGrid] = useState(initiallyVisible);
  const [showSettings, setShowSettings] = useState(false);
  const [customSettings, setCustomSettings] = useState({
    colColor,
    colHeight,
    showInfo: false,
  });
  
  // Effet pour gérer le raccourci clavier
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key.toLowerCase() === shortcutKey.toLowerCase()) {
        setShowGrid(prev => !prev);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [shortcutKey]);
  
  return (
    <>
      {/* Visualisation de la grille */}
      {showGrid && (
        <ClientContent 
          colHeight={customSettings.colHeight}
          colColor={customSettings.colColor}
          showInfo={customSettings.showInfo}
        />
      )}
      
      {/* Bouton de contrôle flottant */}
      <div className="fixed bottom-4 right-4 z-[10000]">
        <div className="flex flex-col items-end space-y-2">
          {/* Panneau de paramètres */}
          {showSettings && showGrid && (
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-white mb-2 w-64">
              <h3 className="font-bold text-sm mb-3">Paramètres de la grille</h3>
              
              {/* Sélecteur de couleur */}
              <div className="mb-3">
                <label className="block text-xs mb-1">Couleur des colonnes</label>
                <div className="flex space-x-2">
                  {['bg-blue-500', 'bg-red-500', 'bg-green-500', 'bg-purple-500'].map(color => (
                    <button
                      key={color}
                      className={`w-6 h-6 rounded-full ${color} ${customSettings.colColor === color ? 'ring-2 ring-white' : ''}`}
                      onClick={() => setCustomSettings(prev => ({ ...prev, colColor: color }))}
                    />
                  ))}
                </div>
              </div>
              
              {/* Sélecteur de hauteur */}
              <div className="mb-3">
                <label className="block text-xs mb-1">Hauteur des colonnes</label>
                <select 
                  value={customSettings.colHeight}
                  onChange={(e) => setCustomSettings(prev => ({ ...prev, colHeight: e.target.value }))}
                  className="w-full bg-gray-700 text-white text-xs p-1 rounded"
                >
                  <option value="h-full">Pleine hauteur</option>
                  <option value="h-1">1px</option>
                  <option value="h-4">16px</option>
                  <option value="h-12">48px</option>
                  <option value="h-24">96px</option>
                </select>
              </div>
              
              {/* Toggle d'informations */}
              <div className="flex items-center mb-3">
                <input
                  type="checkbox"
                  id="show-info"
                  checked={customSettings.showInfo}
                  onChange={(e) => setCustomSettings(prev => ({ ...prev, showInfo: e.target.checked }))}
                  className="mr-2"
                />
                <label htmlFor="show-info" className="text-xs">Afficher les informations</label>
              </div>
            </div>
          )}
          
          {/* Boutons d'action */}
          <div className="flex space-x-2">
            {showGrid && (
              <button
                onClick={() => setShowSettings(prev => !prev)}
                className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </button>
            )}
            
            <button
              onClick={() => setShowGrid(prev => !prev)}
              className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 rounded-full shadow-lg"
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
    </>
  );
}