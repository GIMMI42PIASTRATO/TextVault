import { TypedPocketBase } from "@/types/pocketbase-types";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import PocketBase from "pocketbase";

let singletonClient: TypedPocketBase | null = null;

export function createBrowserClient() {
	if (!process.env.NEXT_PUBLIC_PB_URL) {
		throw new Error("Pocketbase API url not defined !");
	}

	const createNewClient = () => {
		return new PocketBase(
			process.env.NEXT_PUBLIC_PB_URL
		) as TypedPocketBase;
	};

	const _singletonClient = singletonClient ?? createNewClient();

	if (typeof window === "undefined") return _singletonClient;

	if (!singletonClient) singletonClient = _singletonClient;

	singletonClient.authStore.onChange(() => {
		const cookieString = singletonClient!.authStore.exportToCookie({
			httpOnly: false,
		});
		console.log("cookieString", cookieString);
		document.cookie = cookieString;
	});

	return singletonClient;
}

/* 
The createBrowserClient function is used to create an instance of the PocketBase client.
*/

export function createServerClient(cookieStore?: ReadonlyRequestCookies) {
	if (!process.env.NEXT_PUBLIC_PB_URL) {
		throw new Error("Pocketbase API url not defined !");
	}

	if (typeof window !== "undefined") {
		throw new Error(
			"This method is only supposed to call from the Server environment"
		);
	}

	const client = new PocketBase(
		process.env.NEXT_PUBLIC_PB_URL
	) as TypedPocketBase;

	if (cookieStore) {
		const authCookie = cookieStore.get("pb_auth");

		if (authCookie) {
			client.authStore.loadFromCookie(
				`${authCookie.name}=${authCookie.value}`
			);
		}
	}

	return client;
}
