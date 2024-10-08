import { useState } from "react";

import { UsersResponse } from "@/types/pocketbase-types";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuRadioGroup,
	DropdownMenuSub,
	DropdownMenuSubTrigger,
	DropdownMenuPortal,
	DropdownMenuSubContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
	DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";

import { Palette, Sun, Moon, Monitor, Cog, LogOut } from "lucide-react";

import { createBrowserClient } from "@/lib/pocketbase";

import { useTheme } from "next-themes";

type UserDropDownProps = {
	children: React.ReactNode;
	user: UsersResponse | null;
};

export default function UserDropDown({ children, user }: UserDropDownProps) {
	const handleLogout = () => {
		createBrowserClient().authStore.clear();
		window.location.href = "/";
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
			<DropdownMenuContent
				className="dark:bg-[--dash-dark-bg1] dark:border-[--dash-dark-accent1] w-56"
				align="center"
			>
				<DropdownMenuLabel className="font-normal">
					<p className="text-s font-semibold leading-none text-muted-foreground">
						{user?.email}
					</p>
				</DropdownMenuLabel>
				<DropdownMenuSeparator className="dark:bg-[--dash-dark-accent1]" />
				<DropdownMenuGroup>
					<ModeToggle />
					{/* <DropdownMenuItem className="dark:hover:bg-[--dash-dark-selected-hover]">
						<Cog className="mr-2 h-4 w-4" />
						<span>Settings</span>
					</DropdownMenuItem> */}
					<DropdownMenuItem
						className="dark:hover:bg-[--dash-dark-selected-hover]"
						onClick={handleLogout}
					>
						<LogOut className="mr-2 h-4 w-4" />
						<span>Logout</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export function ModeToggle() {
	const [position, setPosition] = useState<string>("system");
	const { setTheme } = useTheme();

	return (
		<DropdownMenuSub>
			<DropdownMenuSubTrigger className="dark:data-[state=open]:bg-[--dash-dark-accent2] dark:hover:bg-[--dash-dark-accent2]">
				<Palette className="mr-2 h-4 w-4" />
				<span>Theme</span>
			</DropdownMenuSubTrigger>
			<DropdownMenuPortal>
				<DropdownMenuSubContent className="dark:bg-[--dash-dark-bg1] dark:border-[--dash-dark-accent1]">
					<DropdownMenuItem
						className="dark:hover:bg-[--dash-dark-selected-hover]"
						onClick={() => setTheme("light")}
					>
						Light
					</DropdownMenuItem>
					<DropdownMenuItem
						className="dark:hover:bg-[--dash-dark-selected-hover]"
						onClick={() => setTheme("dark")}
					>
						Dark
					</DropdownMenuItem>
					<DropdownMenuItem
						className="dark:hover:bg-[--dash-dark-selected-hover]"
						onClick={() => setTheme("system")}
					>
						System
					</DropdownMenuItem>
				</DropdownMenuSubContent>
			</DropdownMenuPortal>
		</DropdownMenuSub>
	);
}
