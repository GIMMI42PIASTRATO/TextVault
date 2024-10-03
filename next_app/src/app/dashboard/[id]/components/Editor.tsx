// blocknote imports
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { BlockNoteEditor } from "@blocknote/core";
import { schema } from "@/editor/schema";

import { DocumentModel } from "@/types/pocketbase-types";

import Toolbar from "./Toolbar";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

type EditorProps = {
	onChange: (content: string) => void;
	document: DocumentModel;
	editable?: boolean;
	className?: string;
};

export default function Editor({
	onChange,
	document,
	editable,
	className,
}: EditorProps) {
	// const { darkMode } = useDarkMode();
	const [mounted, setMounted] = useState(false);
	const { theme } = useTheme();
	const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light");

	useEffect(() => {
		setMounted(true);

		// Check system theme and update the state
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		setSystemTheme(mediaQuery.matches ? "dark" : "light");

		// Listen for system theme changes
		const handleSystemThemeChange = (e: MediaQueryListEvent) => {
			setSystemTheme(e.matches ? "dark" : "light");
		};

		mediaQuery.addEventListener("change", handleSystemThemeChange);

		// Cleanup listener
		return () =>
			mediaQuery.removeEventListener("change", handleSystemThemeChange);
	}, []);

	const getEditorTheme = (theme: string | undefined): "light" | "dark" => {
		if (theme === "system") {
			return systemTheme;
		}

		return theme === "dark" ? "dark" : "light";
	};

	// Creates a new editor instance
	const editor: BlockNoteEditor = useCreateBlockNote({
		schema,
		initialContent: document.content,
	});

	if (!mounted) return null;

	return (
		<div className={className}>
			<div className="col-start-2">
				<Toolbar
					id={document.id}
					icon={document.icon}
					value={document.title}
				/>
				<BlockNoteView
					editor={editor}
					editable={editable}
					theme={getEditorTheme(theme)}
					onChange={() =>
						onChange(JSON.stringify(editor.document, null, 2))
					}
					data-theming-css-variables
				>
					<SuggestionMenuController
						triggerCharacter={"/"}
						getItems={async (query) =>
							// Gets all default slash menu items and `insertAlert` item.
							filterSuggestionItems(
								[
									...getDefaultReactSlashMenuItems(editor),
									insertAlert(editor),
								],
								query
							)
						}
					/>
				</BlockNoteView>
			</div>
		</div>
	);
}
