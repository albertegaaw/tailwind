/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#74C69D',
        headerBg: '#10B981',
        darkBg: '#212529',
      },
      fontFamily: {
        workSans: ['Work Sans', 'sans-serif'],
        crimson: ['Crimson Text', 'serif'],
      },
      spacing: {
        'header-gap': '10.6875rem',    // 171px
        'section-gap': '1.875rem',      // 30px
        'logo-gap':    '2.5rem',        // 40px
        'container-gap':'3.4375rem',    // 55px
      },
      fontSize: {
        base:   ['1rem',   '1.25'],   // 16px / 125%
        lg:     ['1.25rem','1.25'],   // 20px / 125%
        xl:     ['1.5rem', '1.25'],   // 24px / 125%
        '2xl':  ['1.875rem','1.25'],  // 30px / 125%
        '4xl':  ['2.5rem', '1.25'],   // 40px / 125%
      },
      letterSpacing: {
        widest: '0.3125rem', // 5px
      },
      borderRadius: {
        sm: '0.3125rem',     // 5px
      },
    },
  },
  plugins: [],
}
