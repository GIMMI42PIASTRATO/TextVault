import { TbSettings } from "react-icons/tb";

export default function Settings() {
	const handleClick = () => {
		alert("We are working on it");
	};

	return (
		<div
			className="flex justify-center items-center text-2xl text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 cursor-pointer transition-colors duration-200 ease-in-out"
			onClick={handleClick}
		>
			<TbSettings />
		</div>
	);
}
