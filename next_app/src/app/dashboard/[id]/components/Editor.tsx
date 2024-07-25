// blocknote imports
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { BlockNoteEditor } from "@blocknote/core";
import { useDarkMode } from "../../context/DarkModeContext";
import { DocumentModel } from "@/types/pocketbase-types";
import Toolbar from "./Toolbar";

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
	const { darkMode } = useDarkMode();

	// Creates a new editor instance
	const editor: BlockNoteEditor = useCreateBlockNote({
		initialContent: document.content,
	});

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
					theme={darkMode ? "dark" : "light"}
					onChange={() =>
						onChange(JSON.stringify(editor.document, null, 2))
					}
					data-theming-css-variables
				/>
			</div>
		</div>
	);
}
