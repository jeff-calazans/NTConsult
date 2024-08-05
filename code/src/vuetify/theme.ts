import { themeConfig } from '@themeConfig'
import {ThemeDefinition} from 'vuetify'
export interface ThemeOptions{
  defaultTheme?: string;
  themes?:{
    [key:string]:ThemeDefinition
  } 
  
}
const theme: ThemeOptions = {

  defaultTheme: localStorage.getItem(`${themeConfig.app.title}-theme`) || themeConfig.app.theme.value,
  themes: {
    light: {
      dark: false,
      colors: {
        'primary': localStorage.getItem(`${themeConfig.app.title}-lightThemePrimaryColor`) || '#9155FD',
        'secondary': '#7207ef',
        'on-secondary': '#fff',
        'success': '#56CA00',
        'info': '#16B1FF',
        'warning': '#FFB400',
        'error': '#FF4C51',
        'on-primary': '#FFFFFF',
        'on-success': '#FFFFFF',
        'on-warning': '#FFFFFF',
        'background': '#F4F5FA',
        'on-background': '#000000',
        'on-surface': '#3A3541',
        'grey': '#FAFAFA',
        'grey-50': '#F4F4F4',
        'grey-100': '#F3F4F6',
        'grey-200': '#EEEEEE',
        'grey-300': '#E0E0E0',
        'grey-400': '#9CA3AF',
        'grey-500': '#6B7280',
        'grey-550': '#858585',
        'grey-600': '#757575',
        'grey-700': '#374151',
        'grey-800': '#1F2937',
        'grey-900': '#212121',
        'white' : "#FFFFFF",
        'on-white' : "#000000",
      },

      variables: {
        'border-color': '#3A3541',
        'medium-emphasis-opacity': 0.68,

        // Shadows
        'shadow-key-umbra-opacity': 'rgba(var(--v-theme-on-surface), 0.08)',
        'shadow-key-penumbra-opacity': 'rgba(var(--v-theme-on-surface), 0.12)',
        'shadow-key-ambient-opacity': 'rgba(var(--v-theme-on-surface), 0.04)',
      },
    },
    dark: {
      dark: true,
      colors: {
        'primary': localStorage.getItem(`${themeConfig.app.title}-darkThemePrimaryColor`) || '#7207ef',
        'on-primary': '#FFFFFF',
        'secondary': '#8A8D93',
        'on-secondary': '#fff',
        'success': '#56CA00',
        'info': '#16B1FF',
        'warning': '#FFB400',
        'error': '#FF4C51',
      
        'on-success': '#FFFFFF',
        'on-warning': '#FFFFFF',
        'background': '#28243D',
        'on-background': '#E7E3FC',
        'surface': '#312D4B',
        'on-surface': '#E7E3FC',
        'grey-50': '#2A2E42',
        'grey-100': '#F3F4F6',
        'grey-200': '#4A5072',
        'grey-300': '#5E6692',
        'grey-400': '#7983BB',
        'grey-500': '#8692D0',
        'grey-600': '#AAB3DE',
        'grey-700': '#B6BEE3',
        'grey-800': '#CFD3EC',
        'grey-900': '#E7E9F6',
        'white' : "#FFFFFF",
        'on-white' : "#000000",
      },
      variables: {
        'border-color': '#E7E3FC',
        'medium-emphasis-opacity': 0.68,

        // Shadows
        'shadow-key-umbra-opacity': 'rgba(20, 18, 33, 0.08)',
        'shadow-key-penumbra-opacity': 'rgba(20, 18, 33, 0.12)',
        'shadow-key-ambient-opacity': 'rgba(20, 18, 33, 0.04)',
      },
    },
  },
}

export default theme
