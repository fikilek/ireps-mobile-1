import { signInWithEmailAndPassword } from "firebase/auth";

import { auth, functions } from "../firebaseConfig/fbConfig";

export const useSignin = () => {
	const signin = async (userCredentials) => {
		const { email, password } = userCredentials;

		try {
			const result = await signInWithEmailAndPassword(auth, email, password);
			return { success: true };
		} catch (err) {
			// console.log(`Signin Error:`, err.message)
			let msg = 'Sign In Error. Contact Admin'
			if(err.message.includes('(auth/user-not-found)')) {
				msg = 'User Not Found'
			}
			if(err.message.includes('(auth/wrong-password)')) {
				msg = 'Wrong Credentials'
			}
			return { success: false, error: msg };
		}
	};

	return { signin };	
};
