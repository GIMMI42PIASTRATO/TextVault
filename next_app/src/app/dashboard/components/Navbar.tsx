import ShowUser from "./ShowUser";
import NavButton from "./NavLink";
import NewDocBtn from "./NewDocBtn";

export default function Navbar() {
	return (
		<div className="fixed top-0 flex flex-col h-screen w-64 box-border p-3 gap-5 bg-[--dash-white-bg2] dark:bg-[--dash-dark-bg2]">
			<ShowUser />
			<div className="flex flex-col gap-6">
				<NewDocBtn />
				<div>
					<NavButton icon="🏠" href="/dashboard" text="Home" />
					<NavButton icon="⭐" href="/favorites" text="Favorites" />
				</div>
			</div>
		</div>
	);
}
