"use client";

import DashboardContainer from "../components/DashboardContainer";
import { useDocsContext } from "@/contexts/DocumentContext";
import DocumentNotFound from "./components/DocumentNotFound";

// blocknote imports
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";

interface DocumentEditorProps {
	params: {
		id: string;
	};
}

export default function DocumentEditor({ params }: DocumentEditorProps) {
	const { getDocsById } = useDocsContext();
	const document = getDocsById(params.id);

	// Creates a new editor instance
	const editor = useCreateBlockNote();

	if (!document) {
		return (
			<DashboardContainer>
				<DocumentNotFound />
			</DashboardContainer>
		);
	}

	return (
		<DashboardContainer>
			<h1>{document.title}</h1>
			<BlockNoteView editor={editor} defaultValue={document.content} />
		</DashboardContainer>
	);
}
