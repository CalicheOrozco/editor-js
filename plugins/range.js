const plugin = require("tailwindcss/plugin");

module.exports = plugin(({ addBase }) => {
  addBase({
    ".inputRange": {
      "-webkit-appearance": "none",
      width: "100%",
      maxWidth: "100%",
      marginLeft: 0,
    },
    ".inputRange::-moz-range-thumb": {
      "-webkit-appearance": "none",
      width: "12px",
      height: "12px",
      background: "white",
      borderRadius: "50%",
      border: "4px solid #ff5f29",
    },
    ".inputRange::-webkit-slider-thumb": {
      "-webkit-appearance": "none",
      width: "20px",
      height: "20px",
      background: "white",
      borderRadius: "50%",
      border: "4px solid #ff5f29",
    },
  });
});
