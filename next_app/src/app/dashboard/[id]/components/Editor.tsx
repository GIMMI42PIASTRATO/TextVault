// blocknote imports
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { useDarkMode } from "../../context/DarkModeContext";
import { Block } from "@blocknote/core";
import Toolbar from "./Toolbar";

type EditorProps = {
	onChange: (content: string) => void;
	initialContent?: PartialBlock[] | Block[];
	editable?: boolean;
	className?: string;
};

export default function Editor({
	onChange,
	initialContent,
	editable,
	className,
}: EditorProps) {
	const { darkMode } = useDarkMode();

	// Creates a new editor instance
	const editor: BlockNoteEditor = useCreateBlockNote({
		initialContent,
	});

	return (
		<div className={className}>
			<Toolbar />
			<BlockNoteView
				editor={editor}
				editable={editable}
				theme={darkMode ? "dark" : "light"}
				onChange={() =>
					onChange(JSON.stringify(editor.document, null, 2))
				}
				data-theming-css-variables
			/>
		</div>
	);
}
