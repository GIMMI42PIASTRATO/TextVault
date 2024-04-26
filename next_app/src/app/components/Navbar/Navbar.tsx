import LinkComponent from "@/components/Link/LinkComponent";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
	return (
		<nav className={style.container}>
			<div>
				<Link href="/">
					<img
						className={style.log_img}
						src="text-vault-logo-libre.png"
						alt="Logo"
					/>
				</Link>
			</div>
			<LinkComponent href="/login" className="">
				Login
			</LinkComponent>
		</nav>
	);
}
