"use client";

import { useDarkMode } from "@/contexts/DarkModeContext";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import EmojiPicker from "emoji-picker-react";
import { Theme } from "emoji-picker-react";

type IconPickerProps = {
	children: React.ReactNode;
	onChange: (icon: string) => void;
};

export default function IconPicker({ children, onChange }: IconPickerProps) {
	const { darkMode } = useDarkMode();

	return (
		<Popover>
			<PopoverTrigger>{children}</PopoverTrigger>
			<PopoverContent className="p-0 w-full border-none shadow-none">
				<EmojiPicker
					theme={(darkMode ? "dark" : "light") as Theme}
					onEmojiClick={(data) => onChange(data.emoji)}
				/>
			</PopoverContent>
		</Popover>
	);
}
