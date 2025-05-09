// components/layout/ClientContent.tsx
'use client'

import { useGrid } from '@/app/hooks/useGrid';
import gridConfig from '@/lib/config/grid';

type ClientContentProps = {
  showInfo?: boolean;
  colHeight?: string;
  colColor?: string;
};

export default function ClientContent({
  showInfo = false,
  colHeight = 'h-full',
  colColor = 'bg-blue-500'
}: ClientContentProps) {
  const { config, breakpoint } = useGrid();
  
  return (
    <div className="pointer-events-none fixed top-0 left-0 right-0 bottom-0 z-[5] overflow-hidden">
      {/* Afficher les informations de grille conditionnellement */}
      {showInfo && (
        <div className="absolute top-4 left-4 p-4 bg-gray-800/90 text-white rounded shadow-lg pointer-events-auto z-10">
          <h2 className="font-bold text-sm">Informations sur la grille</h2>
          <p className="text-xs">Breakpoint: <span className="font-mono text-blue-300">{breakpoint}</span></p>
          <p className="text-xs">Colonnes: <span className="font-mono text-blue-300">{config.columns}</span></p>
          <p className="text-xs">Gouttière: <span className="font-mono text-blue-300">{config.gutter}px</span></p>
          <p className="text-xs">Marge: <span className="font-mono text-blue-300">{config.margin}px</span></p>
        </div>
      )}
      
      {/* Grille qui occupe tout le body */}
      <div className="absolute inset-0 mx-auto" style={{ 
        maxWidth: gridConfig[breakpoint]?.maxWidth ? `${gridConfig[breakpoint].maxWidth}px` : '100%',
        paddingLeft: `${config.margin}px`,
        paddingRight: `${config.margin}px`
      }}>
        <div 
          className="h-full grid"
          style={{ 
            gridTemplateColumns: `repeat(${config.columns}, 1fr)`,
            gap: `${config.gutter}px`
          }}
        >
          {/* Générer des colonnes avec les styles personnalisés */}
          {Array.from({ length: config.columns }).map((_, index) => (
            <div 
              key={index} 
              className={`${colColor} bg-opacity-15 border-current border-opacity-20`}
              style={{ 
                height: colHeight === 'h-full' ? '100%' : colHeight,
                minHeight: colHeight === 'h-full' ? '100%' : 'auto'
              }}
            >
              {showInfo && (
                <div className="flex justify-center pt-1 text-xs text-current opacity-50">
                  {index + 1}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}