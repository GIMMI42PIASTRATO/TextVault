import useGetUserDocs from "@/hooks/useGetUserDocs";
import { DocumentModel } from "@/types/pocketbase-types";
import React, { createContext, useContext, useState, useEffect } from "react";
import { createBrowserClient } from "@/lib/pocketbase";
import { useUserContext } from "@/app/dashboard/context/UserContext";
import { json } from "stream/consumers";

interface DocsContextType {
	docs: DocumentModel[];
	addNewDocument: () => void;
	getDocsById: (id: string) => DocumentModel | undefined;
	updateDocument: (id: string, updatedDoc: string) => void;
}

interface DocsProviderProps {
	children: React.ReactNode;
}

export const DocsContext = createContext<DocsContextType | null>(null);

export function DocsProvider({ children }: DocsProviderProps) {
	const user = useUserContext();
	const [docs, setDocs] = useState<DocumentModel[]>([]);
	const userDocuments = useGetUserDocs();

	console.log("userDocuments", userDocuments);

	useEffect(() => {
		setDocs(userDocuments);
	}, [userDocuments]);

	const addNewDocument = async () => {
		try {
			const pb = createBrowserClient();

			const newObjDocument = {
				user_id: [user?.id],
				title: "Untitled",
				content: [
					{
						type: "heading",
						content: "Untitled",
					},
				],
				folder: "root",
			};

			const docsCollection = await pb.collection("docs");
			const newDocument = (await docsCollection.create(
				newObjDocument
			)) as DocumentModel;

			setDocs((prevDocs) => [...prevDocs, newDocument]);
		} catch (error) {
			console.error("Error creating new document", error);
		}
	};

	const getDocsById = (id: string) => {
		return docs.find((doc) => doc.id === id);
	};

	const updateDocument = async (id: string, jsonUpdatedDoc: string) => {
		if (!user) {
			console.error("User is not logged in");
			return;
		}

		const documentToUpdate = getDocsById(id);

		if (!documentToUpdate?.user_id.includes(user.id)) {
			console.error("User is not allowed to update this document");
			return;
		}

		try {
			const pb = createBrowserClient();

			const docsCollection = await pb.collection("docs");
			await docsCollection.update(id, {
				content: jsonUpdatedDoc,
			});

			const updatedDocs = docs.map((doc) => {
				if (doc.id === id) {
					return {
						...doc,
						content: JSON.parse(jsonUpdatedDoc),
					};
				}

				return doc;
			});

			setDocs(updatedDocs);
		} catch (error) {
			console.error("Error updating document", error);
		}
	};

	// TODO - CREATE A FUNCTION TO DELETE DOCUMENTS

	return (
		<DocsContext.Provider
			value={{ docs, addNewDocument, getDocsById, updateDocument }}
		>
			{children}
		</DocsContext.Provider>
	);
}

export function useDocsContext() {
	const context = useContext(DocsContext);

	if (!context) {
		throw new Error(
			"useDocumentsContext must be used within a DocumentsProvider"
		);
	}

	return context;
}
