import { useEffect, useState } from "react";
import { UsersResponse } from "@/types/pocketbase-types";
import { createBrowserClient } from "@/lib/pocketbase";

export default function useGetUser() {
	const [user, setUser] = useState<UsersResponse | null>(null);
	const [userId, setUserId] = useState<string | null>(null);
	const pb = createBrowserClient();

	useEffect(() => {
		// Get the userId from localStorage
		const id = localStorage.getItem("userId");
		setUserId(id);
	}, []);

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

	return user;
}
