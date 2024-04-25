import { style } from "./button.module.scss"

interface LinkProps {
	href: string;
	children: React.ReactNode;
	className?: string;
}

export default function Link({ href, children, className }: LinkProps) {
	return (
		<a href={className} className={`${}`}>
			{children}
		</a>
	);
}
