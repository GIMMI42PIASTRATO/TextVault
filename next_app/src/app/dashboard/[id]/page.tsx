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
	const { getDocsById } = useDocsContext();
	const document = getDocsById(params.id);

	const onChange = (content: string) => {
		// TODO - CALL DOCUMENT CONTEXT TO UPDATE DOCUMENT
		console.log("Editor content:", content);
	};

	if (!document) {
		return (
			<DashboardContainer>
				<DocumentNotFound />
			</DashboardContainer>
		);
	}

	return (
		<DashboardContainer>
			<Editor onChange={onChange} initialContent={document.content} />
		</DashboardContainer>
	);
}
