"use client";

import { useForm } from "react-hook-form";
import { FormData, LoginFormData, LoginSchema, UserSchema } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import FormHeader from "./FormHeader";
import FormFields from "./FormFields";
import InputText from "@/components/InputText/InputText";

import { useRouter } from "next/navigation";
import useLogin from "../hooks/useLogin";
import useRegister from "../hooks/useRegister";

export function RegisterForm() {
	const { createRecord, isLoading } = useRegister();

	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm<FormData>({ resolver: zodResolver(UserSchema) });
	const router = useRouter();

	const onSubmit = async (data: FormData) => {
		await createRecord({
			email: data.email,
			name: data.username,
			password: data.password,
			passwordConfirm: data.confirmpassword,
			setError,
		});
		router.push("/dashboard");
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
				{isLoading && (
					<p className="mt-1 text-sm font-semibold text-blue-500 text-center">
						Loading...
					</p>
				)}
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
	const { login, isLoading, loginError } = useLogin();

	const onSubmit = async (data: LoginFormData) => {
		const authData = await login({
			email: data.email,
			password: data.password,
		});

		if (!authData) return;

		localStorage.setItem("userId", authData.record.id);
		router.push("/dashboard");
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
					type="password"
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
				{isLoading && (
					<p className="mt-1 text-sm font-semibold text-blue-500 text-center">
						Loading...
					</p>
				)}

				{loginError && (
					<p className="mt-1 text-sm font-semibold text-red-500 text-center">
						{loginError}
					</p>
				)}
			</form>
		</div>
	);
}
