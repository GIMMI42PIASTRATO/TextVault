import type { Metadata } from "next";
import { inter } from "@/utils/fonts";
import style from "./style/layout.module.css";
import "../globals.css";

export const metadata: Metadata = {
	title: "Welcome back to Text Vault!",
	description: "Log in to your account to access your documents.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="h-full">
			<body
				className={`${inter.className} ${style.body} relative h-full w-full m-0`}
			>
				{children}
			</body>
		</html>
	);
}
