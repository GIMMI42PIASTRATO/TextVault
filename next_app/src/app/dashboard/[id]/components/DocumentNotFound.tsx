import { FileX2 } from "lucide-react";

export default function DocumentNotFound() {
	return (
		<div className="flex flex-col justify-center items-center h-96">
			<FileX2 size={48} strokeWidth={1} />
			<h3 className="text-sm font-medium mt-2">No document found</h3>
			<p className="mt-1 text-sm text-[--dash-dark-text2]">
				Please check the document ID and try again.
			</p>
		</div>
	);
}
