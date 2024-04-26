import { libreBaskerville } from "@/utils/fonts";

interface CardProps {
	icon: React.ReactNode;
	title: string;
	description: string;
	pd?: string;
	bg?: string;
	iconColor: string;
}

export default function Card({
	icon,
	title,
	description,
	iconColor,
	bg,
	pd,
}: CardProps) {
	return (
		<div className={`${bg} ${pd} w-full`}>
			<div className={`${iconColor} text-6xl mb-5`}>{icon}</div>
			<h4
				className={`${libreBaskerville.className} text-2xl mb-4 lg:text-3xl`}
			>
				{title}
			</h4>
			<p className="text-base lg:text-lg">{description}</p>
		</div>
	);
}
