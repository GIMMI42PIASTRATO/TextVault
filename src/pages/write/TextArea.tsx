import { FC } from "react";
import style from "./textarea.module.css";

const TextArea: FC = () => {
	return (
		<>
			<textarea name="textarea" className={style.textarea}></textarea>
		</>
	);
};

export default TextArea;
