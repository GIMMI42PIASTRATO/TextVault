// blocknote imports
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { BlockNoteEditor, contentNodeToInlineContent } from "@blocknote/core";
import { useDarkMode } from "../../context/DarkModeContext";
import { use } from "react";
import { on } from "events";

type EditorProps = {
	onChange: (content: string) => void;
	initialContent?: string;
	editable?: boolean;
};

export default function Editor({
	onChange,
	initialContent,
	editable,
}: EditorProps) {
	const { darkMode } = useDarkMode();

	// Creates a new editor instance
	const editor: BlockNoteEditor = useCreateBlockNote({
		initialContent: [
			{
				type: "heading",
				content: initialContent || "",
			},
		],
	});

	return (
		<BlockNoteView
			editor={editor}
			editable={editable}
			theme={darkMode ? "dark" : "light"}
			onChange={() => onChange(JSON.stringify(editor.document, null, 2))}
		/>
	);
}
