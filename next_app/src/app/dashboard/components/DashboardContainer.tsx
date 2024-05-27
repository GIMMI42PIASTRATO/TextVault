export default function DashboardContainer({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-col ml-[19rem] mr-12 my-10">{children}</div>
	);
}
