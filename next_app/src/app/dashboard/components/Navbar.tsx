import ShowUser from "./ShowUser";
import NavButton from "./NavButton";

export default function Navbar() {
	return (
		<div className="flex flex-col h-screen max-w-72 box-border p-3 gap-5 bg-[--dash-white-bg2] dark:bg-[--dash-dark-bg2]">
			<ShowUser />
			<div>
				<NavButton
					icon="🏠"
					text="Home"
					onClick={() => console.log("ciao")}
				/>
			</div>
		</div>
	);
}
