import { Inter, Poppins, Lato } from "next/font/google";

export const Inter_init = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-Inter",
  weight: "600",
});
export const poppins_init = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: "300",
});
export const Lato_init = Lato({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-Lato",
  weight: "300",
});

export const inter = Inter_init.variable;
export const lato = Lato_init.variable;
