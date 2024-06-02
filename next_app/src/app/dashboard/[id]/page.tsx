"use client";

import DashboardContainer from "../components/DashboardContainer";
import { useDocsContext } from "@/contexts/DocumentContext";
import { TbFileSad } from "react-icons/tb";

interface DocumentEditorProps {
	params: {
		id: string;
	};
}

export default function DocumentEditor({ params }: DocumentEditorProps) {
	const { getDocsById } = useDocsContext();
	const document = getDocsById(params.id);

	if (!document) {
		return (
			<DashboardContainer>
				<div className="flex flex-col justify-center items-center">
					<TbFileSad className="w-24 h-24 text-gray-400 dark:text-gray-500" />
					<h1 className="text-2xl font-semibold mt-2">
						Document not found
					</h1>
				</div>
			</DashboardContainer>
		);
	}

	return (
		<DashboardContainer>
			<h1>{document.title}</h1>
			<p>Editing document: {params.id}</p>
			<p>{document.content}</p>
		</DashboardContainer>
	);
}
