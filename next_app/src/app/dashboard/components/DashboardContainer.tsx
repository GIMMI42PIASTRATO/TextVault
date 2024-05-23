export default function DashboardContainer({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className="flex flex-col ml-72 mr-8 my-6">{children}</div>;
}
