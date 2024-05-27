"use client";

import DashboardContainer from "./components/DashboardContainer";
import Header from "./components/Header";
import RecentsNotes from "./components/RecentsNotes";
import { useUserContext } from "./context/UserContext";

export default function Dashboard() {
	const user = useUserContext();

	return (
		<>
			{user ? (
				<DashboardContainer>
					<Header />
					<RecentsNotes />
				</DashboardContainer>
			) : (
				<div className="w-full h-full flex items-center justify-center">
					<div className="w-12 h-12 bg-gray-200 animate-pulse rounded-full dark:bg-zinc-700"></div>
				</div>
			)}
		</>
	);
}
