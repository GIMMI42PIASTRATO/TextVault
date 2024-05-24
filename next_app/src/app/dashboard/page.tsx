"use client";

import DashboardContainer from "./components/DashboardContainer";
import Header from "./components/Header";
import { UserContext } from "./context/UserContext";
import useGetUser from "@/hooks/useGetUser";

export default function Dashboard() {
	const user = useGetUser();

	return (
		<>
			{user ? (
				<UserContext.Provider value={user}>
					<DashboardContainer>
						<Header />
					</DashboardContainer>
				</UserContext.Provider>
			) : (
				<div className="w-full h-full flex items-center justify-center">
					<div className="w-12 h-12 bg-gray-200 animate-pulse rounded-full dark:bg-zinc-700"></div>
				</div>
			)}
		</>
	);
}
