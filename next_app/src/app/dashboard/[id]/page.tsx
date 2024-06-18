"use client";

import DashboardContainer from "../components/DashboardContainer";
import { useDocsContext } from "@/contexts/DocumentContext";
import DocumentNotFound from "./components/DocumentNotFound";
import Editor from "./components/Editor";

interface DocumentEditorProps {
	params: {
		id: string;
	};
}

export default function DocumentEditor({ params }: DocumentEditorProps) {
	const { getDocsById, updateDocument } = useDocsContext();
	const document = getDocsById(params.id);

	console.log("Document:", document);

	const onChange = (content: string) => {
		console.log("Editor content:", content);
		updateDocument(params.id, content);
	};

	if (!document) {
		return (
			<DashboardContainer>
				<DocumentNotFound />
			</DashboardContainer>
		);
	}

	return (
		<DashboardContainer className="ml-64 mr-0 mt-32">
			<Editor
				onChange={onChange}
				initialContent={document.content}
				className="max-w-[80ch] mx-auto"
			/>
		</DashboardContainer>
	);
}
