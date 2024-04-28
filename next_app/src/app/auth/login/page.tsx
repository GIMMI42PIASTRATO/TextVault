import { AuthForm } from "../components/AuthForm";
import style from "./login.module.css";

export default function Login() {
	return (
		<div className={style.container}>
			<AuthForm />
		</div>
	);
}
