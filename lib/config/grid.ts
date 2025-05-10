// lib/config/grid.ts

// Type pour la configuration de grille
export interface GridConfig {
  columns: number;
  gutter: number;
  margin: number;
  mockupWidth: number;
  fontScalingMaxWidth: number;
  screen?: string;
}

// Type pour les breakpoints
export type Breakpoint = 'mobile' | 'tablet' | 'desktop';

// Configuration complète de la grille
export const gridConfig: Record<Breakpoint, GridConfig> = {
  mobile: {
    columns: 6,
    gutter: 10,
    margin: 10,
    mockupWidth: 375,
    fontScalingMaxWidth: 475,
    screen: 'sm',
  },
  tablet: {
    columns: 8,
    gutter: 16,
    margin: 12,
    mockupWidth: 768,
    fontScalingMaxWidth: 1024,
    screen: 'md',
  },
  desktop: {
    columns: 18,
    gutter: 8,
    margin: 8,
    mockupWidth: 1440,
    fontScalingMaxWidth: 1680,
  }
};

/**
 * Calculer la largeur utilisable de la grille
 * (largeur totale moins les marges)
 */
export const getUsableWidth = (config: GridConfig): number => {
  return config.mockupWidth - (2 * config.margin);
};

/**
 * Calculer la largeur d'une colonne
 * (largeur utilisable divisée par le nombre de colonnes, moins la gouttière)
 */
export const getColumnWidth = (config: GridConfig): number => {
  const usableWidth = getUsableWidth(config);
  const totalGutterWidth = (config.columns - 1) * config.gutter;
  return (usableWidth - totalGutterWidth) / config.columns;
};

/**
 * Utilitaires pour les médias queries
 */
export const breakpoints = {
  mobile: `(min-width: 0px)`,
  tablet: `(min-width: ${gridConfig.tablet.mockupWidth}px)`,
  desktop: `(min-width: ${gridConfig.desktop.mockupWidth}px)`,
};

// Exporter la configuration par défaut
export default gridConfig;
/**
 * Calculer la largeur utilisable de la grille
 * (largeur totale moins les marges)
 */
export const getUsableWidth = (config: GridConfig): number => {
  return config.mockupWidth - (2 * config.margin);
};

/**
 * Calculer la largeur d'une colonne
 * (largeur utilisable divisée par le nombre de colonnes, moins la gouttière)
 */
export const getColumnWidth = (config: GridConfig): number => {
  const usableWidth = getUsableWidth(config);
  const totalGutterWidth = (config.columns - 1) * config.gutter;
  return (usableWidth - totalGutterWidth) / config.columns;
};

/**
 * Utilitaires pour les médias queries
 */
export const breakpoints = {
  mobile: `(min-width: 0px)`,
  tablet: `(min-width: ${gridConfig.tablet.mockupWidth}px)`,
  desktop: `(min-width: ${gridConfig.desktop.mockupWidth}px)`,
};

// Exporter la configuration par défaut
export default gridConfig;