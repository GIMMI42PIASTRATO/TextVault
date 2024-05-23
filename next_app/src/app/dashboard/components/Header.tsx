"use client";

import useGetUser from "@/hooks/useGetUser";

export default function Header() {
	const user = useGetUser();

	return (
		<div className="flex flex-col justify-start">
			<small>Ready for secure notes?</small>
			<h1>{user?.name}&apos;s Home</h1>
		</div>
	);
}