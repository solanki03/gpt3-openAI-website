/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontSize:{
        esm:"0.75rem",
        sm:"0.875rem",
        base:"1rem",
        md:"1.125rem",
        lg:"1.25rem",
        xl:"1.5rem",
        "2xl":"2.125rem",
        "3xl":"3.875rem"
      }
    },
  },
  plugins: [],
}

