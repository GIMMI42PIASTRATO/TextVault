"use client";

import DashboardContainer from "./components/DashboardContainer";
import Header from "./components/Header";
import RecentsNotes from "./components/RecentsNotes";
import SkeletonDocs from "./components/SkeletonDocs";
import { useUserContext } from "./context/UserContext";

export default function Dashboard() {
	const user = useUserContext();

	return (
		<>
			{user ? (
				<DashboardContainer className="bg-[--dash-white-bg1] dark:bg-[--dash-dark-bg1]  my-2 mr-2 ml-[16.5rem] w-full ring-1 ring-[--dash-white-accent1] dark:ring-[--dash-dark-accent1] rounded-xl">
					<Header />
					<RecentsNotes />
				</DashboardContainer>
			) : (
				<DashboardContainer
					className="bg-[--dash-white-bg1] dark:bg-[--dash-dark-bg1]  my-2 mr-2 ml-[16.5rem] w-full ring-1 ring-[--dash-white-accent1] dark:ring-[--dash-dark-accent1] rounded-xl"
					innerContainerStyle="space-y-4"
				>
					<SkeletonDocs />
					<SkeletonDocs />
					<SkeletonDocs />
					<SkeletonDocs />
					<SkeletonDocs />
					<SkeletonDocs />
				</DashboardContainer>
			)}
		</>
	);
}
