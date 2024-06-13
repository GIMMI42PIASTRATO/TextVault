import useGetUserDocs from "@/hooks/useGetUserDocs";
import { DocumentModel } from "@/types/pocketbase-types";
import React, { createContext, useContext, useState, useEffect } from "react";

interface DocsContextType {
	docs: DocumentModel[];
	addNewDocument: (newDocument: DocumentModel) => void;
	getDocsById: (id: string) => DocumentModel | undefined;
}

interface DocsProviderProps {
	children: React.ReactNode;
}

export const DocsContext = createContext<DocsContextType | null>(null);

export function DocsProvider({ children }: DocsProviderProps) {
	const [docs, setDocs] = useState<DocumentModel[]>([]);
	const userDocuments = useGetUserDocs();

	console.log("userDocuments", userDocuments);

	useEffect(() => {
		setDocs(userDocuments);
	}, [userDocuments]);

	const addNewDocument = (newDocument: DocumentModel) => {
		setDocs((prevDocs) => [...prevDocs, newDocument]);
	};

	const getDocsById = (id: string) => {
		return docs.find((doc) => doc.id === id);
	};

	// TODO - MOVE THE LOGIC OF NEWDOCBTN TO THIS CONTEXT
	// TODO - CREATE A FUNCTION TO UPDATE DOCUMENTS
	// TODO - CREATE A FUNCTION TO DELETE DOCUMENTS

	return (
		<DocsContext.Provider value={{ docs, addNewDocument, getDocsById }}>
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
