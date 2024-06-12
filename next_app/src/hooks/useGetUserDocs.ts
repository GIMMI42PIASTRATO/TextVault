import { createBrowserClient } from "@/lib/pocketbase";
import { useState, useEffect } from "react";
import { DocumentModel } from "@/types/pocketbase-types";
import { useUserContext } from "@/app/dashboard/context/UserContext";

export default function useGetUserDocs() {
	const [docs, setDocs] = useState<DocumentModel[]>([]);

	const user = useUserContext();

	useEffect(() => {
		try {
			const pb = createBrowserClient();

			const getDocs = async () => {
				if (!user) throw new Error("No user found");

				const docsCollection = await pb.collection("docs");
				const documents = await docsCollection.getList(1, 50, {
					filter: `user_id~ '${user.id}'`,
				});

				setDocs(documents.items as DocumentModel[]);
			};

			getDocs();
		} catch (error) {
			console.error("Error getting user documents", error);
		}
	}, [user]);

	return docs;
}
