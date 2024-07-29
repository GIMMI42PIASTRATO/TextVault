"use client";

import { useTheme } from "next-themes";
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
	const { theme } = useTheme();

	return (
		<Popover>
			<PopoverTrigger>{children}</PopoverTrigger>
			<PopoverContent className="p-0 w-full border-none shadow-none">
				<EmojiPicker
					theme={theme as Theme}
					onEmojiClick={(data) => onChange(data.emoji)}
				/>
			</PopoverContent>
		</Popover>
	);
}
