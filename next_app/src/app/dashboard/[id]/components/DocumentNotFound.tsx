import { TbFileSad } from "react-icons/tb";

export default function DocumentNotFound() {
	return (
		<div className="flex flex-col justify-center items-center">
			<TbFileSad className="w-24 h-24 text-gray-400 dark:text-gray-500" />
			<h1 className="text-2xl font-semibold mt-2">Document not found</h1>
		</div>
	);
}
