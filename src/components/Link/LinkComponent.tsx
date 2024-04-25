import Link from "next/link";
import style from "./linkComponent.module.css";

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
		<Link href={href} className={`${style.link} ${style[className]}`}>
			{children}
		</Link>
	);
}
