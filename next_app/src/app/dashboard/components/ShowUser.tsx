import { createAvatar } from "@dicebear/core";
import { loreleiNeutral } from "@dicebear/collection";
import { createBrowserClient } from "@/lib/pocketbase";
import { UsersResponse } from "@/types/pocketbase-types";
import { useState, useEffect } from "react";

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
		<div className="hover:bg-[--dash-white-bg-hover2] dark:hover:bg-[--dash-dark-bg-hover2]">
			<div dangerouslySetInnerHTML={{ __html: svgAvatar }}></div>
		</div>
	);
}
