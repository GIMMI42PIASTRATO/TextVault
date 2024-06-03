import { RegisterForm } from "../components/AuthForm";
import style from "../style/login.module.css";

export const metadata = {
	title: "Create a new Text Vault account",
	description:
		"Create a new account to store safely and share your documents.",
};

export default function Register() {
	return (
		<div className={style.container}>
			<RegisterForm />
		</div>
	);
}
