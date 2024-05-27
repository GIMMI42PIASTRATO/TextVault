import { useUserContext } from "../context/UserContext";

export default function Header() {
	const user = useUserContext();

	return (
		<div className="flex flex-col justify-start">
			<small className="text-[--dash-dark-text2]">
				Ready for secure notes?
			</small>
			<h1 className="text-2xl font-bold">{user?.name}&apos;s Home</h1>
		</div>
	);
}
