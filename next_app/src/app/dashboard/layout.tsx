import { inter } from "@/utils/fonts";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="h-full">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
