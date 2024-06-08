import Link from "next/link";

interface RegisterLoginRedirectProps {
	text: string;
	highlightText: string;
	linkPath: string;
}

export default function RegisterLoginRedirect({
	text,
	highlightText,
	linkPath,
}: RegisterLoginRedirectProps) {
	return (
		<Link href={linkPath}>
			<p className="text-sm text-[#838383] font-medium text-center mt-8">
				{text + " "}
				<span className="text-nowrap font-medium text-[--tertiary-color]">
					{highlightText}
				</span>
			</p>
		</Link>
	);
}
