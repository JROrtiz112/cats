module.exports = {
  theme: {
      zIndex: {
          "0": 0,
          "10": 10,
          "20": 20,
          "25": 25,
          "30": 30,
          "40": 40,
          "50": 50,
          "75": 75,
          "100": 100,
          auto: "auto",
      },
      inset: {
          "0": 0,
          "1": ".5rem",
          "2": "1rem",
          "3": "1.5rem",
          "4": "2rem",
          auto: "auto",
          "-2": "-1rem",
          "-3": "-1.5rem",
          "-4": "-2rem",
          "-8": "-3rem",
      },
      fontFamily: {
          roboto: ["Roboto", "sans-serif"],
          lato: ["Lato", "sans-serif"],
          frank: ["'FrankNew'", "sans-serif"],
          inter: ["'Inter'", "sans-serif"],
      },
      extend: {
          colors: {
              gray: {
                  50: "#FCFCFC",
                  100: "#F5F5F5",
                  200: "#EDEDED",
                  300: "#CECECE",
                  400: "#BABABA",
                  500: "#909090",
                  600: "#707070",
                  700: "#4E4E4E",
                  800: "#3E4246",
                  900: "#1a202c",
              },
              blue: {
                  50: "#F7FCFF",
                  100: "#EAF6FF",
                  200: "#EDF8FF",
                  300: "#C4DEF0",
                  400: "#A9C4D6",
                  500: "#3498DB",
                  600: "#217dbb",
                  700: "#186EA8",
                  800: "#105D91",
                  900: "#2A4365",
              },
              yellow: {
                  100: "#FFFDED",
                  200: "#F7EFB6",
                  300: "#9B6000",
              },
              red: {
                  100: "#FFF0ED",
                  200: "#FFCCCC",
                  300: "#EAD1CC",
                  500: "#E02B00",
                  600: "#DC2626", // tailwind default
                  700: "#B91C1C", // tailwind default
                  800: "#991B1B", // tailwind default
                  900: "#840007",
              },
              highlight: {
                  "base": "#3498DB",
                  "100": "#f3faff",
                  "200": "#EDF8FF",
                  "300": "#C4DEF0",
                  "400": "#87C3EB",
                  "500": "#3498DB",
                  "600": "#227AB5",
                  "700": "#1E6CA1",
                  "800": "#145887",
                  "900": "#094269",
                  "textLarge": "#3498DB",
                  "textSmall": "#227AB5"
              },
              modal: {
                  50: "#2C2C2C" // "bg-modal-50": modal overlay background
              },
              cms: {
                  100: "#D8B315",
              },
              dh: {
                  100: "#E561A3",
              }
          },
          fontSize: {
              "7xl": "6rem",
              "8xl": "8rem",
          },
          fontWeight: {
              "100": "100",
              "200": "200",
              "300": "300",
              "400": "400",
              "500": "500",
              "600": "600",
              "700": "700",
              "900": "900",
          },
          height: theme => ({
              "overlay": "calc(100vh - 4.7rem)",
              "modal": "calc(100vh - 4.7rem - 8vh)",
              "back-modal": "calc(100vh - 4.7rem - 20vh)",
          }),
          width: theme => ({
              "modal-small": "60vw",
              "modal-large": "80vw",
              "modal-normal": "70vw",
          }),
          inset: theme => ({
              "overlay": "4.7rem",

              "modal": "calc(4.7rem + 5vh)",
              "modal-small": "20vw",
              "modal-large": "10vw",
              "modal-normal": "15vw",

              "back-modal": "calc(4.7rem + 12vh )",
              "back-modal-small": "85vw",
              "back-modal-normal": "90vw",
              "back-modal-large": "95vw",
          })
      },
  },
  variants: {
      textColor: ["hover", "focus", "active"],
      margin: ["first", "last"],
      padding: ["first", "last"],
      backgroundColor: ["odd", "hover"],
      borderWidth: ["responsive", "first", "last", "hover", "focus"],
      borderColor: ["hover", "focus"],
  },
  plugins: [],
};
