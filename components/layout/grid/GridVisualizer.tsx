// components/layout/GridVisualizer.tsx (version bordure) 
'use client'

import { useGridContext } from '@/components/layout/grid/GridContext';
import { useGrid } from '@/app/hooks/useGrid';

export default function GridVisualizer() {
  const { showGrid } = useGridContext();
  const { config } = useGrid();
  
  if (!showGrid) return null;
  
  return (
    <div className="pointer-events-none fixed inset-0 z-[5]">
      <div className="h-full mx-auto" style={{
        maxWidth: `${config.mockupWidth}px`,
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
              className="h-full border-r border-blue-300 border-opacity-10 last:border-r-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
}