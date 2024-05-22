import ShowUser from "./ShowUser";
import NavButton from "./NavLink";

export default function Navbar() {
	return (
		<div className="flex flex-col h-screen max-w-72 box-border p-3 gap-5 bg-[--dash-white-bg2] dark:bg-[--dash-dark-bg2]">
			<ShowUser />
			<div>
				<NavButton icon="🏠" href="/dashboard" text="Home" />
			</div>
		</div>
	);
}
