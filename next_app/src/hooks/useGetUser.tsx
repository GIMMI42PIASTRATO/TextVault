import { useEffect, useState, useMemo } from "react";
import { Collections, UsersResponse } from "@/types/pocketbase-types";
import { createBrowserClient } from "@/lib/pocketbase";
import { v4 as uuidv4 } from "uuid";
import { faker } from "@faker-js/faker";

export default function useGetUser() {
	const pb = createBrowserClient();

	const defaultUser = useMemo(() => {
		return {
			email: "nulla@voidmail.com",
			emailVisibility: false,
			username: faker.internet.userName(),
			verified: false,
			name: "The Nulla Dev",
			avatar: "",
			id: uuidv4(),
			created: new Date().toISOString(),
			updated: new Date().toISOString(),
			collectionId: "some-collection-id",
			collectionName: Collections.Users,
		};
	}, []);

	const [user, setUser] = useState<UsersResponse>(defaultUser);
	const [userId, setUserId] = useState<string | null>(null);

	useEffect(() => {
		// Get the userId from localStorage
		const id = localStorage.getItem("userId");
		setUserId(id);
	}, []);

	useEffect(() => {
		const getUser = async () => {
			try {
				if (!userId) throw new Error("No userId found in localStorage");

				// Get the user from the userId
				const user = await pb
					.collection("users")
					.getOne<UsersResponse>(userId);
				setUser(user);
			} catch (error) {
				console.error(error);
				// Use default user
				setUser(defaultUser);
			}
		};

		getUser();
	}, [userId, pb, defaultUser]);

	return user;
}
