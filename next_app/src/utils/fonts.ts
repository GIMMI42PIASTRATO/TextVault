import { Inter, Libre_Baskerville } from "next/font/google";

export const inter = Inter({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
	variable: "--font-inter",
});

export const libreBaskerville = Libre_Baskerville({
	weight: ["400", "700"],
	subsets: ["latin"],
	variable: "--font-libre-baskerville",
});
