import { createContext, useContext } from "react";
import { UsersResponse } from "@/types/pocketbase-types";

export const UserContext = createContext<UsersResponse | null>(null);

export const useUserContext = () => {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error("useUserContext must be used within a UserProvider");
	}

	return context;
};
