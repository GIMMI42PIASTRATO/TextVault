import { createBrowserClient } from "@/lib/pocketbase";
import { useState, useEffect } from "react";
import { RecordModel } from "pocketbase";
import { useUserContext } from "@/app/dashboard/context/UserContext";

export default function useGetUserDocs() {
	const [docs, setDocs] = useState<RecordModel[]>([]);

	const user = useUserContext();

	useEffect(() => {
		try {
			const pb = createBrowserClient();

			const getDocs = async () => {
				if (!user) throw new Error("No user found");

				const docsCollection = await pb.collection("docs");
				const docs = await docsCollection.getList(1, 50, {
					filter: `user_id~ '${user.id}'`,
				});

				setDocs(docs.items);
			};

			getDocs();
		} catch (error) {
			console.error("Error getting user documents", error);
		}
	}, [user]);

	return docs;
}
