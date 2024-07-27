import { createAvatar } from "@dicebear/core";
import { loreleiNeutral } from "@dicebear/collection";
import { useUserContext } from "../context/UserContext";
import { Skeleton } from "@/components/ui/skeleton";
import UserDropDown from "./UserDropDown";

export default function ShowUser() {
	const user = useUserContext();

	const svgAvatar = createAvatar(loreleiNeutral, {
		seed: user?.name === "Nulla The Dev" ? "g" : user?.name,
		backgroundColor: ["b6e3f4", "c0aede"],
		backgroundType: ["gradientLinear"],
		size: 48,
		radius: 50,
	}).toString();

	return (
		<UserDropDown user={user}>
			<div className="grid grid-cols-[1fr_9.8rem] gap-3 items-center cursor-pointer transition-colors duration-200 ease-in-out hover:bg-[--dash-white-bg-hover2] dark:hover:bg-[--dash-dark-bg-hover2] px-2 py-2 rounded-md overflow-hidden">
				{user ? (
					<div dangerouslySetInnerHTML={{ __html: svgAvatar }}></div>
				) : (
					// if user is not available, dysplay the skeleton loader
					// add a color for the dark mode
					<Skeleton className="w-12 h-12 rounded-full bg-[--dash-white-accent1] dark:bg-[--dash-dark-accent1]" />
				)}
				<div className="w-full flex flex-col">
					{user ? (
						<span className="text-sm font-semibold overflow-hidden text-ellipsis text-nowrap">
							{user?.name}
						</span>
					) : (
						<Skeleton className="w-24 h-4 rounded-lg bg-[--dash-white-accent1] dark:bg-[--dash-dark-accent1] mb-2" />
						// <span className="text-center mb-1 rounded-lg text-sm font-semibold overflow-hidden text-ellipsis bg-gray-200 animate-pulse dark:bg-zinc-700">
						// 	...
						// </span>
					)}
					{user ? (
						<span className="text-xs text-gray-500 overflow-hidden text-ellipsis text-nowrap">
							{user?.email}
						</span>
					) : (
						<Skeleton className="w-24 h-3 rounded-lg bg-[--dash-white-accent1] dark:bg-[--dash-dark-accent1]" />
						// <span className="text-xs text-center rounded-lg bg-gray-200 animate-pulse dark:bg-zinc-700">
						// 	...
						// </span>
					)}
				</div>
			</div>
		</UserDropDown>
	);
}
