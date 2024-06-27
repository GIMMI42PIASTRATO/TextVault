import SkeletonDocs from "./SkeletonDocs";
import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonDashboard() {
	return (
		<>
			<section className="flex flex-col justify-start mb-16 space-y-2">
				<small className="text-[--dash-dark-text2]">
					Ready for secure notes?
				</small>
				<Skeleton className="w-32 h-7 rounded-lg bg-[--dash-white-accent1] dark:bg-[--dash-dark-accent1]" />
			</section>

			<div className="mb-5 border-b border-[--dash-white-accent1] dark:border-[--dash-dark-accent1]"></div>

			<section className="space-y-4">
				<SkeletonDocs />
				<SkeletonDocs />
				<SkeletonDocs />
				<SkeletonDocs />
				<SkeletonDocs />
				<SkeletonDocs />
			</section>
		</>
	);
}
