import { Button } from "@/components/ui/button";
import { Smile } from "lucide-react";
import IconPicker from "@/components/icon-picker";
import TextareaAutosize from "react-textarea-autosize";
import { useState } from "react";
import { useDocsContext } from "@/contexts/DocumentContext";

type ToolbarProps = {
	id: string;
	value: string;
};

export default function Toolbar({ id, value }: ToolbarProps) {
	const [title, setTitle] = useState(value);
	const { setDocTitle } = useDocsContext();

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setTitle(e.target.value);

		// Save the title
		setDocTitle(id, e.target.value);
	};

	return (
		<div className="flex flex-col items-start gap-4 px-[54px] mb-6">
			<IconPicker onChange={(emoji) => console.log(emoji)}>
				<Button
					variant="outlineSecondary"
					className="text-muted-foreground text-xs"
				>
					<Smile className="h-4 w-4 mr-2" />
					Add icon
				</Button>
			</IconPicker>
			<TextareaAutosize
				className="w-full text-5xl bg-transparent font-bold break-words outline-none text-[#3F3F3F] dark:text-[#CFCFCF] resize-none"
				value={title}
				onChange={(e) => handleChange(e)}
			/>
		</div>
	);
}
