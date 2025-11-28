/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gbc: {
          green: '#2DAA60', // Green Banana (Primary)
          blue: '#1C6DD0',  // Blue Energy (Primary)
          yellow: '#F5C542', // Yellow Innovation (Secondary)
          brown: '#7A4A1F', // Earth Brown (Secondary)
          black: '#0A0A0A', // Neutral Black
          white: '#FFFFFF', // Neutral White
          gray: '#F4F4F4',  // Neutral Light Gray
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], // Body
        display: ['Montserrat', 'sans-serif'],      // Headings
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)',
      }
    },
  },
  plugins: [],
}
