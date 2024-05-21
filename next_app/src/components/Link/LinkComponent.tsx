import Link from "next/link";
import style from "./linkComponent.module.css";
import { inter } from "@/utils/fonts";

interface LinkComponentProps {
	href: string;
	children: React.ReactNode;
	className?: string;
}

export default function LinkComponent({
	href,
	children,
	className,
}: LinkComponentProps) {
	return (
		<Link
			href={href}
			className={`${inter.className} ${style.link} ${
				className && style[className]
			}`}
		>
			{children}
		</Link>
	);
}
