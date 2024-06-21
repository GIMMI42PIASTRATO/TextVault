import { EllipsisVertical, FolderInput, Layers2, Trash } from "lucide-react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

export default function DropDown() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="outline"
					size="icon"
					className="border-[--dash-white-accent1] dark:border-[--dash-dark-accent1] bg-transparent dark:bg-transparent hover:bg-[--dash-white-accent1] dark:hover:bg-[--dash-dark-accent1]"
				>
					<EllipsisVertical size={16} />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className="dark:bg-[--dash-dark-bg2] dark:border-[--dash-dark-accent1]"
				align="end"
			>
				<DropdownMenuLabel>Actions</DropdownMenuLabel>
				<DropdownMenuSeparator className="dark:bg-[--dash-dark-accent1]" />
				<DropdownMenuGroup>
					<DropdownMenuItem className="dark:hover:bg-[--dash-dark-selected-hover]">
						<FolderInput className="mr-2 h-4 w-4" />
						<span>Move to folder</span>
					</DropdownMenuItem>
					<DropdownMenuItem className="dark:hover:bg-[--dash-dark-selected-hover]">
						<Layers2 className="mr-2 h-4 w-4" />
						<span>Duaplicate</span>
					</DropdownMenuItem>
					<DropdownMenuSeparator className="dark:bg-[--dash-dark-accent1]" />
					<DropdownMenuItem className="text-destructive duration-200 focus:bg-destructive focus:text-destructive-foreground">
						<Trash className="mr-2 h-4 w-4" />
						<span>Delete document</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
