import pb from "@/lib/pocketbase";
import { useState } from "react";
import { set } from "react-hook-form";

export default function useLogin() {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [loginError, setLoginError] = useState<string>("");

	const login = async ({
		email,
		password,
	}: {
		email: string;
		password: string;
	}) => {
		setIsLoading(true);
		try {
			const authData = await pb
				.collection("users")
				.authWithPassword(email, password);

			console.log(authData);
		} catch (error) {
			console.log(error);
			setLoginError("Email or password are incorrect");
		}
		setIsLoading(false);
	};

	return { login, isLoading, loginError };
}
