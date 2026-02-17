// ============================================
// CENTRALIZED DESIGN SYSTEM
// Use this to create new site themes quickly
// ============================================

export interface Theme {
  name: string;
  colors: {
    primary: string;
    primaryHover: string;
    secondary: string;
    accent: string;
    background: string;
    backgroundSecondary: string;
    card: string;
    cardHover: string;
    text: string;
    textSecondary: string;
    textMuted: string;
    border: string;
    borderLight: string;
    success: string;
    error: string;
    gradient: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  layout: {
    maxWidth: string;
    borderRadius: string;
    spacing: string;
  };
}

// ============================================
// PREBUILT THEMES
// ============================================

export const themes = {
  // Crypto/Gaming - Current site
  cryptoGaming: {
    name: 'Crypto Gaming',
    colors: {
      primary: '#8b5cf6',
      primaryHover: '#7c3aed',
      secondary: '#6366f1',
      accent: '#8b5cf6',
      background: '#0a0a0b',
      backgroundSecondary: '#141416',
      card: '#1c1c1f',
      cardHover: '#242428',
      text: '#fafafa',
      textSecondary: '#a1a1aa',
      textMuted: '#71717a',
      border: '#27272a',
      borderLight: '#3f3f46',
      success: '#22c55e',
      error: '#ef4444',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
    },
    fonts: {
      heading: "'Space Grotesk', sans-serif",
      body: "'Inter', -apple-system, sans-serif",
    },
    layout: {
      maxWidth: '1200px',
      borderRadius: '16px',
      spacing: '8px',
    },
  } as Theme,

  // Finance/Trading - For finance sites
  finance: {
    name: 'Finance',
    colors: {
      primary: '#0ea5e9',
      primaryHover: '#0284c7',
      secondary: '#06b6d4',
      accent: '#14b8a6',
      background: '#0a0f14',
      backgroundSecondary: '#0f172a',
      card: '#1e293b',
      cardHover: '#334155',
      text: '#f1f5f9',
      textSecondary: '#94a3b8',
      textMuted: '#64748b',
      border: '#334155',
      borderLight: '#475569',
      success: '#10b981',
      error: '#f43f5e',
      gradient: 'linear-gradient(135deg, #0ea5e9 0%, #14b8a6 100%)',
    },
    fonts: {
      heading: "'DM Sans', sans-serif",
      body: "'Inter', sans-serif",
    },
    layout: {
      maxWidth: '1100px',
      borderRadius: '12px',
      spacing: '6px',
    },
  } as Theme,

  // Sports - For sports betting
  sports: {
    name: 'Sports',
    colors: {
      primary: '#f59e0b',
      primaryHover: '#d97706',
      secondary: '#fbbf24',
      accent: '#ef4444',
      background: '#0c0c0c',
      backgroundSecondary: '#1a1a1a',
      card: '#252525',
      cardHover: '#333333',
      text: '#ffffff',
      textSecondary: '#d4d4d4',
      textMuted: '#a3a3a3',
      border: '#333333',
      borderLight: '#444444',
      success: '#22c55e',
      error: '#ef4444',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
    },
    fonts: {
      heading: "'Archivo Black', sans-serif",
      body: "'Roboto', sans-serif",
    },
    layout: {
      maxWidth: '1300px',
      borderRadius: '8px',
      spacing: '4px',
    },
  } as Theme,

  // Tech/Reviews - For tech gadget sites
  tech: {
    name: 'Tech',
    colors: {
      primary: '#3b82f6',
      primaryHover: '#2563eb',
      secondary: '#8b5cf6',
      accent: '#06b6d4',
      background: '#ffffff',
      backgroundSecondary: '#f8fafc',
      card: '#ffffff',
      cardHover: '#f1f5f9',
      text: '#0f172a',
      textSecondary: '#475569',
      textMuted: '#94a3b8',
      border: '#e2e8f0',
      borderLight: '#cbd5e1',
      success: '#10b981',
      error: '#ef4444',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
    },
    fonts: {
      heading: "'Poppins', sans-serif",
      body: "'Inter', sans-serif",
    },
    layout: {
      maxWidth: '1200px',
      borderRadius: '20px',
      spacing: '12px',
    },
  } as Theme,

  // Dark Minimal - Clean dark theme
  darkMinimal: {
    name: 'Dark Minimal',
    colors: {
      primary: '#ffffff',
      primaryHover: '#e5e5e5',
      secondary: '#a1a1aa',
      accent: '#ffffff',
      background: '#000000',
      backgroundSecondary: '#0a0a0a',
      card: '#0a0a0a',
      cardHover: '#141414',
      text: '#ffffff',
      textSecondary: '#a1a1aa',
      textMuted: '#525252',
      border: '#171717',
      borderLight: '#262626',
      success: '#22c55e',
      error: '#ef4444',
      gradient: 'linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%)',
    },
    fonts: {
      heading: "'Helvetica Neue', sans-serif",
      body: "'Helvetica Neue', sans-serif",
    },
    layout: {
      maxWidth: '1000px',
      borderRadius: '4px',
      spacing: '24px',
    },
  } as Theme,
};

// ============================================
// HOW TO USE
// ============================================
/*
// In any site, import this file:
// import { themes, type Theme } from '@/lib/themes';

// Use in your components:
// const theme = themes.cryptoGaming;
// <div style={{ background: theme.colors.background }}>
//   <h1 style={{ fontFamily: theme.fonts.heading }}>

// To create a NEW niche site:
// 1. Copy this file to new site's /lib/
// 2. Choose a theme or create new one
// 3. Update CSS variables
// 4. DONE - entire site has new look!
*/
