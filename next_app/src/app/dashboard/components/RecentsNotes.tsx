import DocumentComponent from "./DocumentComponent";
import useGetUserDocs from "@/hooks/useGetUserDocs";

export default function RecentsNotes() {
	const docs = useGetUserDocs();

	return (
		<div>
			<h3 className="mt-10 font-semibold">Recent Notes</h3>
			<div className="grid grid-cols-1 gap-4 mt-4">
				{docs.map((doc) => (
					<DocumentComponent
						key={doc.id}
						title={doc.title}
						content={doc.content}
					/>
				))}
			</div>
		</div>
	);
}
