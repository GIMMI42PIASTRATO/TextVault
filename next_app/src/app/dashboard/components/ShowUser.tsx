import { createAvatar } from "@dicebear/core";
import { loreleiNeutral } from "@dicebear/collection";
import useGetUser from "@/hooks/useGetUser";
import { UsersResponse } from "@/types/pocketbase-types";

// components
import Settings from "./Settings";

export default function ShowUser() {
	const user: UsersResponse | null = useGetUser();

	const svgAvatar = createAvatar(loreleiNeutral, {
		seed: user?.name ?? "null",
		size: 48,
		radius: 50,
	}).toString();

	return (
		<div className="grid grid-cols-[1fr_2fr_1fr] gap-3 items-center cursor-pointer transition-colors duration-200 ease-in-out hover:bg-[--dash-white-bg-hover2] dark:hover:bg-[--dash-dark-bg-hover2] px-2 py-2 rounded-md overflow-hidden">
			{user ? (
				<div dangerouslySetInnerHTML={{ __html: svgAvatar }}></div>
			) : (
				// if user is not available, dysplay the skeleton loader
				// add a color for the dark mode
				<div className="w-12 h-12 bg-gray-200 animate-pulse rounded-full dark:bg-zinc-700 "></div>
			)}
			<div className="flex flex-col">
				{user ? (
					<span className="text-sm font-semibold overflow-hidden text-ellipsis">
						{user?.name}
					</span>
				) : (
					<span className="text-center mb-1 rounded-lg text-sm font-semibold overflow-hidden text-ellipsis bg-gray-200 animate-pulse dark:bg-zinc-700">
						...
					</span>
				)}
				{user ? (
					<span className="text-xs text-gray-500 overflow-hidden text-ellipsis">
						{user?.email}
					</span>
				) : (
					<span className="text-xs text-center rounded-lg bg-gray-200 animate-pulse dark:bg-zinc-700">
						...
					</span>
				)}
			</div>
			<Settings />
		</div>
	);
}
