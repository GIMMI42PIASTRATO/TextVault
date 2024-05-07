import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";

export const UserSchema: ZodType<FormData> = z
	.object({
		email: z.string().email(),
		username: z
			.string()
			.min(3, { message: "Username too short" })
			.max(30, { message: "Username too long" }),
		password: z
			.string()
			.min(8, { message: "Password must contain at least 8 characters" })
			.max(100, { message: "Password too long" })
			// crea una regex per contrllare che la password abbia almeno una lettere un numero e un carattere speciale
			.regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm, {
				message:
					"Password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number",
			}),
		confirmpassword: z.string(),
	})
	.refine((data) => data.password === data.confirmpassword, {
		message: "Passwords do not match",
		path: ["confirmpassword"],
	});

export const LoginSchema: ZodType<LoginFormData> = z.object({
	email: z.string().email({ message: "Email is required" }),
	password: z.string().min(8, { message: "Password is required" }),
});

export interface FormData {
	email: string;
	password: string;
	confirmpassword: string;
	username: string;
}

export interface LoginFormData {
	email: string;
	password: string;
}

export interface InputTextProps {
	type: string;
	placeholder: string;
	name: keyof LoginFormData;
	register: UseFormRegister<LoginFormData>;
	errors: FieldError | undefined;
}

export interface FormFieldProps {
	type: string;
	placeholder: string;
	name: keyof FormData;
	register: UseFormRegister<FormData>;
	errors: FieldError | undefined;
	valueAsNumber?: boolean;
}
