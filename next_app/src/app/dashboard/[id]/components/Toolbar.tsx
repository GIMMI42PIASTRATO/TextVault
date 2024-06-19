import { Button } from "@/components/ui/button";
import { Smile } from "lucide-react";
import IconPicker from "@/components/icon-picker";

export default function Toolbar() {
	return (
		<div className="px-[54px]">
			<IconPicker onChange={(emoji) => console.log(emoji)}>
				<Button
					variant="outlineSecondary"
					className="text-muted-foreground text-xs"
				>
					<Smile className="h-4 w-4 mr-2" />
					Add icon
				</Button>
			</IconPicker>
			<h1 className="text-4xl font-bold">Title</h1>
		</div>
	);
}
