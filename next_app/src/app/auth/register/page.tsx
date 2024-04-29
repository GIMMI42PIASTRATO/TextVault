import { AuthForm } from "../components/AuthForm";
import style from "../style/login.module.css";

export default function Register() {
	return (
		<div className={style.container}>
			<AuthForm isRegister={true} />
		</div>
	);
}
