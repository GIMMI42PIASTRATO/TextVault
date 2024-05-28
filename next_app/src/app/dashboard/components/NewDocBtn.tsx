"use client";

import NewFileIco from "@/components/icons/NewFileIco";
import { useUserContext } from "../context/UserContext";

export default function NewDocBtn() {
	const handleClick = () => {};

	return (
		<div onClick={handleClick}>
			<button className="flex items-center gap-2 px-3 py-2 rounded w-full text-left bg-[#4dc869] text-[--dash-white-text1] dark:text-[--dash-dark-text1:] cursor-pointer transition-colors duration-200 ease-in-out">
				<NewFileIco />
				<span className="text-sm font-semibold">New Document</span>
			</button>
		</div>
	);
}
