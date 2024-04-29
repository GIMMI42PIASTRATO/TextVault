"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import FormHeader from "./FormHeader";
import { useState } from "react";

const formSchema = z
	.object({
		username: z.string().min(3).max(100),

		email: z.string().email({
			message: "Invalid email address.",
		}),

		// password must be at least 8 characters long and contain at least one number and one special character
		password: z
			.string()
			.min(8)
			.max(100)
			.regex(/^(?=.*[0-9])(?=.*[^a-zA-Z0-9\s]).{8,}$/, {
				message:
					"Password must contain at least one number and one special character.",
			}),
		confirmPassword: z.string(),
		// .refine((confPassword) => confPassword === , { message: "Erorr" }),
	})
	.superRefine((formData, ctx) => {
		if (formData.password !== formData.confirmPassword) {
			ctx.addIssue({
				code: "custom",
				message: "Password doesn't match",
			});
		}
	});

export function AuthForm({ isRegister = false }) {
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			username: "",
			password: "",
			confirmPassword: "",
		},
	});

	const {
		formState: { errors },
	} = form;

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	const [value, setValue] = useState("");

	return (
		<div className="bg-white px-24 py-16 w-[512px] shadow-xl">
			<FormHeader />
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-8"
				>
					{isRegister && (
						<FormField
							control={form.control}
							name="username"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Username</FormLabel>
									<FormControl>
										<Input
											placeholder="Username"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					)}
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input placeholder="email" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input
										placeholder="password"
										{...field}
										type="password"
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					{isRegister && (
						<FormField
							control={form.control}
							name="confirmPassword"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Confirm Password</FormLabel>
									<FormControl>
										<Input
											placeholder="confirm password"
											{...field}
											type="password"
										/>
									</FormControl>
									{errors.confirmPassword?.message && (
										<p>{errors.confirmPassword?.message}</p>
									)}
								</FormItem>
							)}
						/>
					)}
					<Button
						type="submit"
						className="w-full bg-[--primary-color] hover:bg-[--primary-hover] text-white"
					>
						Continue
					</Button>
				</form>
			</Form>
		</div>
	);
}
