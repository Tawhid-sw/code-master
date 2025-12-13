import localFont from "next/font/local";

export const NeueMachina = localFont({
  src: [
    {
      path: "../../public/fonts/NeueMachina/NeueMachina-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueMachina/NeueMachina-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueMachina/NeueMachina-Ultrabold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-neue-machina",
  display: "swap",
});
