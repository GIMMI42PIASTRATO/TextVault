// blocknote imports
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { useDarkMode } from "../../context/DarkModeContext";
import { Block } from "@blocknote/core";
import { Button } from "@/components/ui/button";
import { Smile } from "lucide-react";
import EmojiPicker, { Emoji } from "emoji-picker-react";
import IconPicker from "@/components/icon-picker";

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
			<div className="px-[54px]">
				<IconPicker onChange={(emoji) => console.log(emoji)}>
					<Button
						variant="outline"
						className="text-muted-foreground text-xs"
					>
						<Smile className="h-4 w-4 mr-2" />
						Add icon
					</Button>
				</IconPicker>
				<h1 className="text-4xl font-bold">Title</h1>
			</div>
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
