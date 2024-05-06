import { LoginForm } from "../components/AuthForm";
import style from "../style/login.module.css";

export default function Login() {
	return (
		<div className={style.container}>
			<LoginForm />
		</div>
	);
}
