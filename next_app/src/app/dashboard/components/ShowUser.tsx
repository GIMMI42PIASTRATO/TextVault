import { createAvatar } from "@dicebear/core";
import { loreleiNeutral } from "@dicebear/collection";
import useGetUser from "@/hooks/useGetUser";

// components
import Settings from "./Settings";

export default function ShowUser() {
	const user = useGetUser();

	if (!user) return null;

	const svgAvatar = createAvatar(loreleiNeutral, {
		seed: user?.name ?? "John Doe",
		size: 48,
		radius: 50,
	}).toString();

	return (
		<div className="grid grid-cols-[1fr_2fr_1fr] gap-3 items-center hover:bg-[--dash-white-bg-hover2] dark:hover:bg-[--dash-dark-bg-hover2] px-3 py-2 rounded-md overflow-hidden">
			<div dangerouslySetInnerHTML={{ __html: svgAvatar }}></div>
			<div className="flex flex-col max-w-28">
				<span className="text-sm font-semibold overflow-hidden text-ellipsis">
					{user?.name}
				</span>
				<span className="text-xs text-gray-500 overflow-hidden text-ellipsis">
					{user?.email}
				</span>
			</div>
			<Settings />
		</div>
	);
}
