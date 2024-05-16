import { createBrowserClient } from "@/lib/pocketbase";
import { useState } from "react";

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
			const client = createBrowserClient();
			const authData = await client
				.collection("users")
				.authWithPassword(email, password);

			return authData;
		} catch (error) {
			console.log(error);
			setLoginError("Email or password are incorrect");
		} finally {
			setIsLoading(false);
		}
	};

	return { login, isLoading, loginError };
}
