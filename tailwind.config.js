/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.jsx",

    "./src/ITEMS/Item.jsx",
    "./src/ITEMS/BUTTONS/AddButton.jsx",
    "./src/ITEMS/BUTTONS/CounterButton.jsx",

    "./src/CART/Empty.jsx",

    "./src/CART/ACTIVATED CART/Info.jsx",
    "./src/CART/ACTIVATED CART/PeesInfo.jsx",

    "./src/CART/ACTIVATED CART/INFO/BottomSection.jsx",
    "./src/CART/ACTIVATED CART/INFO/SelectedItem.jsx",

    "./src/CART/ACTIVATED CART/CONFIRM ORDER/FinishOrder.jsx",
    "./src/CART/ACTIVATED CART/CONFIRM ORDER/PeesFinish.jsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        redHat: ['Red Hat Text']
      },
      colors: {
        'red': 'hsl(14, 86%, 42%)',
        'hover-red': 'hsl(14 86% 30%)',
        'green': 'hsl(159, 69%, 38%)',
        'dark-pink': '#87635a',
        'x-pink': '#d0aca4',
        'black-filter': '#00000063'
      }
    },
    plugins: [],
    screens: { // this sets the minimum widths of the screen, like it's a breakpoint
      'desktop': '1500px', // newer desktop screens, HD or FHD
      'smallDesk': '1024px', // small desktop screens or laptops
      'tablet': '600px', // average/small tablet size. Beyond this it's smallDesk territory
      'mobile': '360px' // optimized better for cellphones
    }
  },

}