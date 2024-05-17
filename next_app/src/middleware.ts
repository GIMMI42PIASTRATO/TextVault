import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "./lib/pocketbase";

export function middleware(req: NextRequest) {
	console.log("am i here 🤔");
	const url = req.nextUrl.clone();
	const cookieStore = cookies();
	const { authStore } = createServerClient(cookieStore);

	const isAuthenticated = authStore.isValid;

	if (url.pathname.startsWith("/dashboard")) {
		// If the user is not authenticated and tries to access the dasboard or is sub routes, redirect it to the /auth/login
		console.log("i'm here 🩷");
		if (!isAuthenticated) {
			url.pathname = "/auth/login";
			return NextResponse.redirect(url);
		}
	} else if (
		req.nextUrl.pathname === "/auth/login" ||
		req.nextUrl.pathname === "/auth/register" ||
		req.nextUrl.pathname === "/"
	) {
		console.log("i'm here 🔥");
		if (isAuthenticated) {
			url.pathname = "/dashboard";
			return NextResponse.redirect(url);
		}
	}
}
