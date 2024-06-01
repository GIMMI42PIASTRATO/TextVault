"use client";

import { inter } from "@/utils/fonts";
import Navbar from "./components/Navbar";
import "../globals.css";
import { useState } from "react";
import { DarkModeContext } from "./context/DarkModeContext";
import { UserContext } from "./context/UserContext";
import { DocsProvider } from "@/contexts/DocumentContext";
import useGetUser from "@/hooks/useGetUser";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [darkMode, setDarkMode] = useState<boolean>(true);
	const user = useGetUser();

	console.log("useGetUser:", user);

	return (
		<html lang="en">
			<body
				className={`${inter.className} ${
					darkMode
						? "dark text-[--dash-dark-text1] bg-[--dash-dark-bg1]"
						: "text-[--dash-white-text1] bg-[--dash-white-bg1]"
				}`}
			>
				<UserContext.Provider value={user}>
					<DocsProvider>
						<DarkModeContext.Provider
							value={{ darkMode, setDarkMode }}
						>
							<Navbar />
						</DarkModeContext.Provider>

						{children}
					</DocsProvider>
				</UserContext.Provider>
			</body>
		</html>
	);
}
