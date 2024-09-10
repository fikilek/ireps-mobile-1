import { signOut } from "firebase/auth";

import { auth } from "../firebaseConfig/fbConfig";
import useAuth from "./useAuth";

export const useSignout = () => {
	const signout = async () => {
		try {
			await signOut(auth);
			// TODO Do an Alert for signout success
		} catch (err) {
			console.log(`Signout Error`, err.message)
			// TODO Do an Alert for signout error 
		}
	};

	return { signout };
};
