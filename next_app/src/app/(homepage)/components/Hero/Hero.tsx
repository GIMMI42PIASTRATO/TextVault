import { libreBaskerville } from "@/utils/fonts";
import LinkComponent from "@/components/Link/LinkComponent";
import ImageComponent from "../ImageComponent/ImageComponent";
import Link from "next/link";

export default function Hero() {
	return (
		<>
			<div className="flex flex-col items-center">
				<h1
					className={`${libreBaskerville.className} text-center max-w-6xl text-4xl font-normal mb-10 lg:text-6xl`}
				>
					Protect your documents, enhance collaboration
				</h1>
				<p className="max-w-2xl mx-auto mb-12 text-lg text-center">
					With our state-of-the-art encryption, your documents stay
					safe while our intuitive platform ensures hassle-free
					sharing for effective collaboration.
				</p>
				<LinkComponent href="/auth/register" className="big_link">
					Get Started
				</LinkComponent>
				<p className="text-base font-normal text-center mt-8 xl:text-lg">
					Already have an account?{" "}
					<span>
						<Link
							href="/auth/login"
							className="text-nowrap font-medium underline underline-offset-4 hover:no-underline hover:text-[--tertiary-color] transition-all duration-200 ease-in-out"
						>
							Log in now
						</Link>
					</span>
				</p>
			</div>
			<div className="pt-12 md:pt-20">
				<ImageComponent src="/home-widgets.webp" alt="App image" />
			</div>
		</>
	);
}
