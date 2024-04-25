import style from "./linkComponent.module.scss";

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
		<a href={className} className={`${style.link}`}>
			{children}
		</a>
	);
}
