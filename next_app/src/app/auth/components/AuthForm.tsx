"use client";

import { useForm } from "react-hook-form";
import { FormData, LoginFormData, UserSchema } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import FormHeader from "./FormHeader";
import FormFields from "./FormFields";

import pb from "@/lib/pocketbase";
import InputText from "@/components/InputText/InputText";

export function RegisterForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm<FormData>({ resolver: zodResolver(UserSchema) });

	const onSubmit = async (data: FormData) => {
		console.log("SUCCESS", data);
	};

	return (
		<div className="bg-white px-24 py-16 w-[512px] shadow-xl">
			<FormHeader />
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormFields
					type="email"
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
	const { register, handleSubmit } = useForm<LoginFormData>();

	const onSubmit = async (data: LoginFormData) => {
		console.log("SUCCESS", data);
	};

	return (
		<div className="bg-white px-24 py-16 w-[512px] shadow-xl">
			<FormHeader />
			<form onSubmit={handleSubmit(onSubmit)}>
				<InputText type="text" placeholder="Email" name="email" />
				<InputText type="text" placeholder="Password" name="password" />
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
