import { Button } from "@/components/ui/button";
import { Smile } from "lucide-react";
import IconPicker from "@/components/icon-picker";
import TextareaAutosize from "react-textarea-autosize";
import { useState } from "react";
import { useDocsContext } from "@/contexts/DocumentContext";

type ToolbarProps = {
	id: string;
	icon: string;
	value: string;
};

export default function Toolbar({ id, icon, value }: ToolbarProps) {
	const [title, setTitle] = useState(value);
	const [_icon, setIcon] = useState(icon);
	const { setDocTitle, setDocIcon } = useDocsContext();

	const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setTitle(e.target.value);

		// Save the title
		setDocTitle(id, e.target.value);
	};

	const handleIconChange = (emoji: string) => {
		setIcon(emoji);

		// Save the icon
		setDocIcon(id, emoji);
	};

	return (
		<div className="flex flex-col items-start gap-4 px-[54px] mb-6">
			{!_icon ? (
				<IconPicker onChange={(emoji) => handleIconChange(emoji)}>
					<Button
						variant="outlineSecondary"
						className="text-muted-foreground text-xs"
					>
						<Smile className="h-4 w-4 mr-2" />
						Add icon
					</Button>
				</IconPicker>
			) : (
				<div className="flex">
					<IconPicker onChange={(emoji) => handleIconChange(emoji)}>
						<p className="text-6xl hover:opacity-75 transition group-first">
							{_icon}
						</p>
					</IconPicker>
				</div>
			)}
			<TextareaAutosize
				className="w-full text-5xl bg-transparent font-bold break-words outline-none text-[#3F3F3F] dark:text-[#CFCFCF] resize-none"
				value={title}
				onChange={(e) => handleTitleChange(e)}
			/>
		</div>
	);
}
