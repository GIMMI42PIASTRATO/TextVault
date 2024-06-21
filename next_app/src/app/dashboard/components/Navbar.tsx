import ShowUser from "./ShowUser";
import NavButton from "./NavLink";
import NewDocBtn from "./NewDocBtn";
import { FolderOpen, Star } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
	{
		icon: <FolderOpen size={20} />,
		href: "/dashboard",
		text: "Documents",
	},
	{
		icon: <Star size={20} />,
		href: "/favorites",
		text: "Favorites",
	},
];

export default function Navbar() {
	const pathname = usePathname();

	return (
		<div className="fixed top-0 flex flex-col h-screen w-64 box-border p-3 gap-5 bg-[--dash-white-bg2] dark:bg-[--dash-dark-bg2]">
			<ShowUser />
			<div className="flex flex-col gap-6">
				<NewDocBtn />
				<div className="flex flex-col gap-2">
					{navLinks.map((link, i) => {
						const isActive = pathname.startsWith(link.href);

						return (
							<NavButton
								key={i}
								icon={link.icon}
								href={link.href}
								className={
									isActive
										? "bg-[--dash-white-selected-hover] hover:bg-[--dash-white-selected-hover] dark:bg-[--dash-dark-selected-hover] dark:hover:bg-[--dash-dark-selected-hover]"
										: ""
								}
							>
								{link.text}
							</NavButton>
						);
					})}
				</div>
			</div>
		</div>
	);
}
