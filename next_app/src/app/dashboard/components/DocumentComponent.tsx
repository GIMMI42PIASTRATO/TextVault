import Link from "next/link";
import DropDown from "./DropDown";

interface DocumentComponentProps {
	id: string;
	icon: string;
	title: string;
	created: string;
}

export default function DocumentComponent({
	id,
	icon,
	title,
	created,
}: DocumentComponentProps) {
	return (
		<Link
			href={`/dashboard/${id}`}
			className="flex justify-between p-4 rounded-lg bg-transparent border border-[--dash-white-accent1] dark:border-[--dash-dark-accent1] dark:bg-transparent hover:bg-[--dash-white-accent2] dark:hover:bg-[--dash-dark-accent2] transition-colors duration-200 ease-in-out"
		>
			<div className="flex gap-4">
				<div className="text-3xl flex items-center">{icon}</div>
				<div>
					<h4 className="font-semibold mt-1 text-base">{title}</h4>
					<small className="text-xs">{created}</small>
				</div>
			</div>
			<div className="flex items-center">
				<DropDown id={id} />
			</div>
		</Link>
	);
}
