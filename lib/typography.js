import Typography from 'typography';

const theme = {
  title: 'goodfries',
  googleFonts: [
    {name: 'Pacifico', styles: ['400']},
    {name: 'Dancing Script', styles: ['400']},
    {name: 'Roboto', styles: ['400']},
  ],
  headerFontFamily: ['Dancing Script', 'cursive', 'sans-serif'],
  bodyFontFamily: ['Roboto', 'serif'],
  scaleRatio: 2.4,
  bodyGray: 57,
  headerGray: 45,
};

const typography = new Typography(theme);

export default typography;