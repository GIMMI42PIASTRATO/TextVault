"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormData, LoginFormData, LoginSchema, UserSchema } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import FormHeader from "./FormHeader";
import FormFields from "./FormFields";
import InputText from "@/components/InputText/InputText";

import pb from "@/lib/pocketbase";
import { useRouter } from "next/navigation";

export function RegisterForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm<FormData>({ resolver: zodResolver(UserSchema) });
	const router = useRouter();

	const onSubmit = async (data: FormData) => {
		const newUser = {
			email: data.email,
			name: data.username,
			password: data.password,
			passwordConfirm: data.confirmpassword,
		};

		try {
			const record = await pb.collection("users").create(newUser);
			console.log(record);
			router.push("/auth/login");
		} catch (error) {
			setError("email", { message: "Email already exists" });
		}
	};

	return (
		<div className="bg-white px-24 py-16 w-[512px] shadow-xl">
			<FormHeader />
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormFields
					type="text"
					placeholder="Email"
					name="email"
					register={register}
					errors={errors.email}
				/>

				<FormFields
					type="password"
					placeholder="Password"
					name="password"
					register={register}
					errors={errors.password}
				/>

				<FormFields
					type="password"
					placeholder="Confirm Password"
					name="confirmpassword"
					register={register}
					errors={errors.confirmpassword}
				/>

				<FormFields
					type="text"
					placeholder="Username"
					name="username"
					register={register}
					errors={errors.username}
				/>
				{/* //TODO remove the button if the user who try to acces doesn't exist */}
				<Button
					type="submit"
					className="w-full bg-[--primary-color] hover:bg-[--primary-hover] text-white mt-8 rounded-md"
				>
					Continue
				</Button>
			</form>
		</div>
	);
}

export function LoginForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm<LoginFormData>({
		resolver: zodResolver(LoginSchema),
	});
	const router = useRouter();
	const [loginError, setLoginError] = useState<string>("");

	const onSubmit = async (data: LoginFormData) => {
		try {
			const user = await pb
				.collection("users")
				.authWithPassword(data.email, data.password);
			console.log(user);
			router.push("/dashboard");
		} catch (error) {
			console.log(error);
			setLoginError("Email or password are incorrect");
		}
	};

	return (
		<div className="bg-white px-24 py-16 w-[512px] shadow-xl">
			<FormHeader />
			<form onSubmit={handleSubmit(onSubmit)}>
				<InputText
					type="text"
					placeholder="Email"
					name="email"
					register={register}
					errors={errors.email}
				/>
				<InputText
					type="text"
					placeholder="Password"
					name="password"
					register={register}
					errors={errors.password}
				/>
				<Button
					type="submit"
					className="w-full bg-[--primary-color] hover:bg-[--primary-hover] text-white mt-8 rounded-md"
				>
					Continue
				</Button>
				{loginError && (
					<p className="mt-1 text-sm font-semibold text-red-500 text-center">
						{loginError}
					</p>
				)}
			</form>
		</div>
	);
}
