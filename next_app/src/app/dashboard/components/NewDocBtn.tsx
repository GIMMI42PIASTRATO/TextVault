import NewFileIco from "@/components/icons/NewFileIco";
import { useUserContext } from "../context/UserContext";
import { createBrowserClient } from "@/lib/pocketbase";

export default function NewDocBtn() {
	const user = useUserContext();

	const handleClick = async () => {
		try {
			const pb = createBrowserClient();

			const newDocument = {
				user_id: [user?.id],
				title: "Untitled",
				content: "",
				folder: "root",
			};

			const docsCollection = await pb.collection("docs");
			const document = await docsCollection.create(newDocument);
		} catch (error) {
			console.error("Error creating new document", error);
		}
	};

	return (
		<div onClick={handleClick}>
			<button className="flex items-center gap-2 px-3 py-2 rounded w-full text-left bg-[#4dc869] hover:bg-green-600 text-[--dash-dark-text1] dark:text-[--dash-white-text1] cursor-pointer transition-colors duration-200 ease-in-out">
				<NewFileIco />
				<span className="text-sm font-semibold">New Document</span>
			</button>
		</div>
	);
}
