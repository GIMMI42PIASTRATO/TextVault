import { createAvatar } from "@dicebear/core";
import { loreleiNeutral } from "@dicebear/collection";
import { createBrowserClient } from "@/lib/pocketbase";
import { UsersResponse } from "@/types/pocketbase-types";
import { useState, useEffect } from "react";

// components
import Settings from "./Settings";

export default function ShowUser() {
	const [user, setUser] = useState<UsersResponse | null>(null);

	// Get the userId from localStorage
	const userId = localStorage.getItem("userId");
	const pb = createBrowserClient();

	useEffect(() => {
		console.log("i'm here");
		if (!userId) return;

		const getUser = async () => {
			// Get the user from the userId
			const user = await pb.collection("users").getOne(userId);
			setUser(user);
		};

		getUser();
	}, [userId, pb]);

	if (!userId) return;

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
