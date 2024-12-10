// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
import flowbite from "flowbite-react/tailwind";

{import('tailwindcss').Config} 
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  plugins: [
    flowbite.plugin(),
  ],
}


