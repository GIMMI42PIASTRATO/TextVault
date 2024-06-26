import { cn } from "@/lib/utils";

export default function DashboardContainer({
	children,
	className,
	innerContainerStyle,
}: {
	children: React.ReactNode;
	className?: string;
	innerContainerStyle?: string;
}) {
	return (
		<main className={cn("flex flex-col ml-[19rem] mr-12 my-10", className)}>
			<div
				className={cn(
					"h-full p-4 sm:m-4 sm:px-4 sm:py-4",
					innerContainerStyle
				)}
			>
				{children}
			</div>
		</main>
	);
}
