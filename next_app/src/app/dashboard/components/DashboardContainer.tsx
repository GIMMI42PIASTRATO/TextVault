import { cn } from "@/lib/utils";

export default function DashboardContainer({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div className={cn("flex flex-col ml-[19rem] mr-12 my-10", className)}>
			{children}
		</div>
	);
}
