import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "./components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Text Vault",
	description:
		"Text Vault is a application to store safely and share your documents.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<header className="fixed z-50 w-full border-b border-[--text-color]">
					<Navbar />
				</header>
				<main className="pt-60">{children}</main>
			</body>
		</html>
	);
}
