"use client";

import DashboardContainer from "../components/DashboardContainer";
import { useDocsContext } from "@/contexts/DocumentContext";
import DocumentNotFound from "./components/DocumentNotFound";
import { createReactEditorJS } from "react-editor-js";
import { editorJsTools, defaultValue } from "@/lib/editorjs-tools";
import Header from "@editorjs/header";

interface DocumentEditorProps {
	params: {
		id: string;
	};
}

const ReactEditorJS = createReactEditorJS();

export default function DocumentEditor({ params }: DocumentEditorProps) {
	const { getDocsById } = useDocsContext();
	const document = getDocsById(params.id);

	if (!document) {
		return (
			<DashboardContainer>
				<DocumentNotFound />
			</DashboardContainer>
		);
	}

	return (
		<DashboardContainer>
			{/* <h1>{document.title}</h1>
			<p>Editing document: {params.id}</p>
			<p>{document.content}</p> */}

			<ReactEditorJS defaultValue={defaultValue} tools={editorJsTools} />
		</DashboardContainer>
	);
}
