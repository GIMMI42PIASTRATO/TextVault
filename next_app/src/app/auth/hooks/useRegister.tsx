import pb from "@/lib/pocketbase";
import { UseFormSetError } from "react-hook-form";
import { FormData } from "../types";
import { useState } from "react";

interface RegisterData {
	email: string;
	name: string;
	password: string;
	passwordConfirm: string;
	setError: UseFormSetError<FormData>;
}

export default function useRegister() {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const createRecord = async ({
		email,
		name,
		password,
		passwordConfirm,
		setError,
	}: RegisterData) => {
		setIsLoading(true);

		const newUser = {
			email,
			name,
			password,
			passwordConfirm,
		};

		try {
			const record = await pb.collection("users").create(newUser);
			return record;
		} catch (error) {
			setError("email", { message: "Email already exists" });
		}

		setIsLoading(false);
	};

	return { createRecord, isLoading };
}
