/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily :{ 
        PxGrotesk: ["PxGrotesk","screen"],
        poppins: ['Poppins', 'sans-serif'],
        NeueHaas: ["NeueHaas", 'roman'],
      } 
    },
  },
  plugins: [],
};
