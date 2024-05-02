import { AuthForm } from "../components/AuthForm";
import style from "../style/login.module.css";

export default function Login() {
	return (
		<div className={style.container}>
			<AuthForm isRegister={false} />
		</div>
	);
}
