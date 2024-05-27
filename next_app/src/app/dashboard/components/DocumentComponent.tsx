interface DocumentComponentProps {
	title: string;
	content: string;
}

export default function DocumentComponent({
	title,
	content,
}: DocumentComponentProps) {
	return (
		<div className="bg-white p-4 rounded-lg shadow-md dark:bg-zinc-800 ">
			<div className="text-xl">📄</div>
			<h4 className="font-semibold mt-1">{title}</h4>
			<p className="text-sm text-gray-500 mt-2">{content}</p>
		</div>
	);
}
