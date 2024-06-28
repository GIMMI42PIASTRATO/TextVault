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
			<DashboardContainer className="bg-[--dash-white-bg1] dark:bg-[--dash-dark-bg1]  my-2 mr-2 ml-[16.5rem] w-full ring-1 ring-[--dash-white-accent1] dark:ring-[--dash-dark-accent1] rounded-xl">
				<DocumentNotFound />
			</DashboardContainer>
		);
	}

	return (
		<DashboardContainer
			className="bg-[--dash-white-bg1] dark:bg-[--dash-dark-bg1]  my-2 mr-2 ml-[16.5rem] w-full ring-1 ring-[--dash-white-accent1] dark:ring-[--dash-dark-accent1] rounded-xl"
			innerContainerStyle="sm:mt-32 mt-32"
		>
			<Editor
				onChange={onChange}
				document={document}
				className="grid grid-cols-[minmax(0,_1fr)_minmax(0,_80ch)_minmax(0,_1fr)]"
			/>
		</DashboardContainer>
		// <DashboardContainer className="ml-64 mr-0 mt-32">
		// </DashboardContainer>
	);
}
