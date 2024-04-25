// Lading Page
// Here is where the user will land when they visit the site

import { libreBaskerville } from "@/utils/fonts";
import LinkComponent from "@/components/Link/LinkComponent";

export default function Home() {
	return (
		<>
			<section className="flex justify-center mx-auto 2xl:max-w-7xl xl:max-w-6xl lg:max-w-4xl md:max-w-3xl xs:max-w-md">
				<div className="flex flex-col items-center">
					<h1
						className={`${libreBaskerville.className} text-center max-w-6xl text-4xl font-normal mb-10 lg:text-6xl`}
					>
						Protecting your documents, empowering your
						collaboration.
					</h1>
					<p className="max-w-2xl mx-auto text-lg ">
						With our state-of-the-art encryption, your documents
						stay safe while our intuitive platform ensures
						hassle-free sharing for effective collaboration.
					</p>
				</div>
				<div className="flex flex-col items-center mt-10">
					<LinkComponent href="/login" className="bg-blue-500">
						Get Started
					</LinkComponent>
				</div>
			</section>
		</>
	);
}
