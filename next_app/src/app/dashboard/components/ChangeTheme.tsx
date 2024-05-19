import { useDarkMode } from "../context/DarkModeContext";

export default function ChangeTheme() {
	const { darkMode, setDarkMode } = useDarkMode();

	return (
		<div className="bg-neutral-100 dark:bg-neutral-900">
			<button
				className="w-16 h-16 text-xl rounded-full border-none bg-neutral-900 dark:bg-neutral-100"
				onClick={() => setDarkMode((prev) => !prev)}
			>
				{darkMode ? "🌞" : "🌙"}
			</button>
		</div>
	);
}
