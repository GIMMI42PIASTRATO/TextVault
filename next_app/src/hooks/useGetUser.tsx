import { useEffect, useState, useMemo } from "react";
import { Collections, UsersResponse } from "@/types/pocketbase-types";
import { createBrowserClient } from "@/lib/pocketbase";
import { v4 as uuidv4 } from "uuid";
import { faker } from "@faker-js/faker";
import { ClientResponseError } from "pocketbase";

export default function useGetUser() {
	const pb = createBrowserClient();

	const [user, setUser] = useState<UsersResponse | null>(null);
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
				console.log("Fetching user with userId:", userId);

				const user = await pb
					.collection("users")
					.getOne<UsersResponse>(userId);
				setUser(user);
			} catch (error) {
				if (error instanceof ClientResponseError) {
					console.error("Details of ClientResponseError: ", error);
				} else {
					console.error("Details of Error: ", error);
				}

				// Use default user
				const defaultUser: UsersResponse = {
					email: "nulla@voidmail.com",
					emailVisibility: false,
					username: faker.internet.userName(),
					verified: false,
					name: "Nulla The Dev",
					avatar: "",
					id: uuidv4(),
					created: new Date().toISOString(),
					updated: new Date().toISOString(),
					collectionId: "some-collection-id",
					collectionName: Collections.Users,
				};
				setUser(defaultUser);
			}
		};

		getUser();
	}, [userId, pb]);

	return user;
}
