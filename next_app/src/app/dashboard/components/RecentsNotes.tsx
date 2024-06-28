import { useDocsContext } from "@/contexts/DocumentContext";
import DocumentComponent from "./DocumentComponent";
import { File, FilePlus2 } from "lucide-react";

export default function RecentsNotes() {
	const { docs } = useDocsContext();

	return (
		<div>
			{docs.length > 0 ? (
				<>
					<section className="flex gap-1 items-center text-gray-400 mb-2">
						<File size={16} />
						<h3 className="font-semibold]">
							{docs.length} documents
						</h3>
					</section>
					<div className="mb-5 border-b border-[--dash-white-accent1] dark:border-[--dash-dark-accent1]"></div>
					<div className="grid grid-cols-1 gap-4">
						{docs.map((doc) => (
							<DocumentComponent
								key={doc.id}
								id={doc.id}
								title={doc.title}
								created={doc.created}
							/>
						))}
					</div>
				</>
			) : (
				<>
					<div className="mb-5 border-b border-[--dash-white-accent1] dark:border-[--dash-dark-accent1]"></div>
					<div className="flex flex-col items-center justify-center h-96">
						<FilePlus2 width={48} height={48} strokeWidth={1} />
						<h3 className="text-sm font-medium mt-2">
							No documents here
						</h3>
						<p className="mt-1 text-sm text-[--dash-dark-text2]">
							Get started by creating a new document.
						</p>
					</div>
				</>
			)}
		</div>
	);
}
