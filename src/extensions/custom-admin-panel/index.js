import CustomEditor from './wysiwyg';
import theme from './theme';
import navigation from './navigation';

export default {
  config: {
    wysiwyg: {
      component: CustomEditor,
    },
  },
  theme: {
    colors: {
      primary100: '#D3E4CD',
      primary200: '#ADC2A9',
      primary500: '#6B705C',
      neutral100: '#F5F5F5',
      neutral500: '#333333',
    },
    fonts: {
      body: 'Arial, sans-serif',
    },
  },
  config: {
    ...theme,
  },
    config: {
    ...navigation,
  },
  config: {
    locales: ['en', 'fr', 'de'], // Support for multiple languages
  },
  bootstrap(app) {
    console.log('Custom admin panel loaded!');
  },
};