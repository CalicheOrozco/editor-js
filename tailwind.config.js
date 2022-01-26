module.exports = {
  presets: [require("@exponentialeducation/tailwind-base").default],
  purge: {
    content: [
      "./src/**/*.{js,ts,tsx}",
      "./components/**/*.{js,ts,tsx}",
      "./layouts/**/*.{js,ts,tsx}",
      "./node_modules/@exponentialeducation/betomic/**/*.{js,jsx,ts,tsx}",
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
