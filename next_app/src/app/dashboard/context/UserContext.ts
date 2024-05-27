import { createContext, useContext } from "react";
import { UsersResponse } from "@/types/pocketbase-types";

export const UserContext = createContext<UsersResponse | null>(null);

export const useUserContext = () => {
	const context = useContext(UserContext);

	if (!context) {
		console.log("user is null in UserContext");
	}

	return context;
};
