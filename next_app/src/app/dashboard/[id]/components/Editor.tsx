// blocknote imports
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { BlockNoteEditor } from "@blocknote/core";
// import { useDarkMode } from "@/contexts/DarkModeContext";
import { useTheme } from "next-themes";
import { DocumentModel } from "@/types/pocketbase-types";
import Toolbar from "./Toolbar";

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

	useEffect(() => setMounted(true), []);

	// Creates a new editor instance
	const editor: BlockNoteEditor = useCreateBlockNote({
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
					theme={theme}
					onChange={() =>
						onChange(JSON.stringify(editor.document, null, 2))
					}
					data-theming-css-variables
				/>
			</div>
		</div>
	);
}
