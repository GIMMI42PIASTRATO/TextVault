import { createContext, useContext } from "react";

interface DarkModecontextType {
	darkMode: boolean;
	setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DarkModeContext = createContext<DarkModecontextType | undefined>(
	undefined
);

export const useDarkMode = () => {
	const context = useContext(DarkModeContext);
	if (!context) {
		throw new Error("useDarkMode must be used within a DarkModeProvider");
	}

	return context;
};
