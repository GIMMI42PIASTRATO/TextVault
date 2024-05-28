import Link from "next/link";

interface NavButtonProps {
	icon: React.ReactNode;
	href: string;
	text: string;
}

export default function NavButton({ icon, text, href }: NavButtonProps) {
	return (
		<div className="flex">
			<Link
				href={href}
				className={`flex items-center space-x-2 px-3 py-2 rounded w-full gap-2 text-left hover:bg-[--dash-white-bg-hover2] dark:hover:bg-[--dash-dark-bg-hover2] dark:text-[--dash-dark-text1] cursor-pointer transition-colors duration-200 ease-in-out`}
			>
				{icon}
				<span className="text-sm font-medium">{text}</span>
			</Link>
		</div>
	);
}
