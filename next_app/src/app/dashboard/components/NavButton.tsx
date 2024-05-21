import React from "react";

interface NavButtonProps {
	icon: React.ReactNode;
	text: string;
	onClick: () => void;
}

export default function NavButton({ icon, text, onClick }: NavButtonProps) {
	return (
		<div className="flex">
			<button
				className={`flex items-center space-x-2 px-3 py-2 rounded-lg w-full gap-2 text-left hover:bg-[--dash-white-bg-hover2] dark:hover:bg-[--dash-dark-bg-hover2] dark:text-[--dash-dark-text1] cursor-pointer transition-colors duration-200 ease-in-out`}
				onClick={onClick}
			>
				{icon}
				<span className="text-sm font-medium">{text}</span>
			</button>
		</div>
	);
}
