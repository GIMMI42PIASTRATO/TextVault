// Lading Page
// Here is where the user will land when they visit the site

import Hero from "./components/Hero/Hero";
import CoolStuff from "./components/CoolStuff/CoolStuff";

export default function Home() {
	return (
		<>
			<section className="flex flex-col justify-center mx-auto px-5 pb-10 2xl:max-w-7xl xl:max-w-6xl lg:max-w-4xl md:max-w-3xl xs:max-w-md">
				<Hero />
			</section>
			<section className="flex items-center justify-center py-16 px-5 lg:pb-28">
				<CoolStuff />
			</section>
		</>
	);
}
