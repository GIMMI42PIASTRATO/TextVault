import Link from "next/link";
import { Block, InlineContent } from "@blocknote/core";

interface DocumentComponentProps {
	id: string;
	title: string;
	// content: Block[];
}

export default function DocumentComponent({
	id,
	title,
}: // content,
DocumentComponentProps) {
	return (
		<Link
			href={`/dashboard/${id}`}
			className="bg-white p-4 rounded-lg shadow-md dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-600 transition-colors duration-200 ease-in-out"
		>
			<div className="text-xl">📄</div>
			<h4 className="font-semibold mt-1">{title}</h4>
		</Link>
	);
}
