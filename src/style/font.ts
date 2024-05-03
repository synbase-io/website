import { Inter, Orbitron } from "next/font/google";

export const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const orbitron = Orbitron({
    weight: ["400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
});
