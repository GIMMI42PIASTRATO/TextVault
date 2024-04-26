import { describe } from "node:test";
import { TbLock, TbGhost3, TbGitCommit } from "react-icons/tb";
import { FaEarthEurope } from "react-icons/fa6";

export const cardData = [
	{
		icon: <TbLock />,
		iconColor: "text-figma-green",
		title: "Secure Document Sharing",
		description:
			"Share documents securely with encryption, precise access controls, and anonymous sharing. Track changes with versioning and enforce geo-based access.",
	},
	{
		icon: <TbGhost3 />,
		iconColor: "text-figma-orange",
		title: "Anonymous Sharing",
		description:
			"Share documents anonymously with a secure link. No need to create an account or sign in. Share with anyone, anywhere, anytime.",
	},
	{
		icon: <FaEarthEurope />,
		iconColor: "text-figma-blue",
		title: "Geobased Access Control",
		description:
			"Control access to documents based on the user's location. Set up rules to restrict access to documents based on the user's country or region.",
	},
	{
		icon: <TbGitCommit />,
		iconColor: "text-figma-yellow",
		title: "Version Control",
		description:
			"Track changes to documents with version control. View the history of changes and revert to previous versions if needed.",
	},
];
