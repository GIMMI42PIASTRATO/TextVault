import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavButtonProps {
	icon: React.ReactNode;
	href: string;
	children: string;
	className?: string;
}

export default function NavButton({
	icon,
	children,
	href,
	className,
}: NavButtonProps) {
	return (
		<div className="flex">
			<Link
				href={href}
				className={cn(
					"flex items-center space-x-2 px-3 py-[10px] rounded w-full gap-2 text-left text-sm hover:bg-[--dash-white-bg-hover2] dark:hover:bg-[--dash-dark-bg-hover2] dark:text-[--dash-dark-text1] cursor-pointer transition-colors duration-200 ease-in-out",
					className
				)}
			>
				{icon}
				<span className="text-sm font-medium">{children}</span>
			</Link>
		</div>
	);
}
