import { useTheme } from "next-themes";

export default function ChangeTheme() {
	const { theme, setTheme } = useTheme();

	return (
		<div className="bg-neutral-100 dark:bg-neutral-900">
			<button
				className="w-16 h-16 text-xl rounded-full border-none bg-neutral-900 dark:bg-neutral-100"
				onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			>
				{theme === "dark" ? "🌞" : "🌜"}
			</button>
		</div>
	);
}
