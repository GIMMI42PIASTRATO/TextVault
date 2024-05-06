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
			.regex(
				/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
				{
					message:
						"Password must contain at least one number, one special character, one uppercase and one lowercase letter",
				}
			),
		confirmpassword: z.string(),
	})
	.refine((data) => data.password === data.confirmpassword, {
		message: "Passwords do not match",
		path: ["confirmpassword"],
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

export interface FormFieldProps {
	type: string;
	placeholder: string;
	name: keyof FormData;
	register: UseFormRegister<FormData>;
	errors: FieldError | undefined;
	valueAsNumber?: boolean;
}
