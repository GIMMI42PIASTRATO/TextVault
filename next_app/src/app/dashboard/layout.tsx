"use client";

import { inter } from "@/utils/fonts";
import Navbar from "./components/Navbar";
import "../globals.css";
import { useState } from "react";
import { DarkModeContext } from "./context/DarkModeContext";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [darkMode, setDarkMode] = useState<boolean>(true);

	return (
		<html lang="en">
			<body
				className={`${inter.className} ${
					darkMode && "dark"
				} text-[--dash-dark-text1]`}
			>
				<DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
					<Navbar />
				</DarkModeContext.Provider>
				{children}
			</body>
		</html>
	);
}
