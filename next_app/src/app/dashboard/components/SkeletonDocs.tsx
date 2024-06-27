import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonDocs() {
	return (
		<div className="flex justify-between p-4 rounded-lg bg-transparent border border-[--dash-white-accent1] dark:border-[--dash-dark-accent1] dark:bg-transparent">
			<div className="flex gap-4">
				<Skeleton className="w-12 h-12 rounded-lg bg-[--dash-white-accent1]" />
				<div className="flex flex-col justify-center space-y-2">
					<Skeleton className="w-24 h-4 rounded-lg bg-[--dash-white-accent1]" />
					<Skeleton className="w-16 h-3 rounded-lg bg-[--dash-white-accent1]" />
				</div>
			</div>
			<div className="flex items-center">
				<Skeleton className="w-10 h-10 rounded-lg bg-[--dash-white-accent1]" />
			</div>
		</div>
	);
}
