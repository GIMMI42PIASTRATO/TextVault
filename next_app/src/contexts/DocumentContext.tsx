import useGetUserDocs from "@/hooks/useGetUserDocs";
import { RecordModel } from "pocketbase";
import React, { createContext, useContext, useState, useEffect } from "react";

interface DocsContextType {
	docs: RecordModel[];
	updateDocuments: (newDocument: RecordModel) => void;
}

interface DocsProviderProps {
	children: React.ReactNode;
}

export const DocsContext = createContext<DocsContextType | null>(null);

export function DocsProvider({ children }: DocsProviderProps) {
	const [docs, setDocs] = useState<RecordModel[]>([]);
	const userDocuments = useGetUserDocs();

	useEffect(() => {
		setDocs(userDocuments);
	}, [userDocuments]);

	const updateDocuments = (newDocument: RecordModel) => {
		setDocs((prevDocs) => [...prevDocs, newDocument]);
	};

	return (
		<DocsContext.Provider value={{ docs, updateDocuments }}>
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
