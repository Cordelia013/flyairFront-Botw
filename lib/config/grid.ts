// config/grid.ts

interface GridConfig {
  [x: string]: any;
  columns: number;
  gutter: number;
  margin: number;
  mockupWidth: number;
  fontScalingMaxWidth?: number;
  screen?: string;
  getContainerClass: () => string;
  getGridClass: () => string;
}




const grid = {
  mobile: {
    columns: 6,
    gutter: 10,
    margin: 10,
    mockupWidth: 375, // Largeur maximum pour mobile
    // autres propriétés
  },
  tablet: {
    columns: 6,
    gutter: 14, 
    margin: 14,
    mockupWidth: 768, // Largeur maximum pour tablette
    // autres propriétés
  },
  desktop: {
    columns: 18,
    gutter: 8,
    margin: 8, 
    mockupWidth: 1440, // Largeur maximum pour desktop
    // autres propriétés
  },
  // autres méthodes et propriétés
};
export default grid;