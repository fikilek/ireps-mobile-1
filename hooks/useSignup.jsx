import {
	createUserWithEmailAndPassword,
	sendEmailVerification,
	updateProfile,
} from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { auth, db } from "../firebaseConfig/fbConfig";

export const useSignup = () => {
	const signup = async (userCredentials) => {
		// console.log(`userCredentials`, userCredentials);
		const { email, password, surname, name, phoneNumber, workbase } =
			userCredentials;
		try {
			const result = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			if (!result) {
				throw new Error("User signup failed");
			}
			console.log(`result`, result)
			
			const user = result?.user
			// console.log(`user`, user)

			// send emil verification
			await sendEmailVerification(user);

			// update displayName details at firebase auth user. Use first letter of surname and name as displayName
			await updateProfile(auth?.currentUser, {
				displayName: `${name} ${surname}`,
			});

			// Create user profile in firestore using UID as the unique identifier
			const docRef = doc(db, "users", user.uid);
			const userDocResult = await setDoc(docRef, {
				metadata: {
					createdByName: `${surname} ${name}`,
					createdByUid: user.uid,
					createdAtDatetime: Timestamp.now(),
					updatedByName: `${surname} ${name}`,
					updatedByUid: user.uid,
					updatedAtDatetime: Timestamp.now(),
				},
				email,
				name,
				surname,
				workbase,
				phoneNumber,
				workbase,
			});
			// console.log(`userDocResult:`, userDocResult);

			return { success: true };

		} catch (err) {
			// console.log(`Signup Error:`, err.message);

			let msg = "Sign Up Error. Contact Admin";

			if (err.message.includes("(auth/wrong-password)")) {
				msg = "Wrong Credentials";
			}
			if (err.message.includes("(auth/invalid-email)")) {
				msg = "Invalid Email";
			}
			if (err.message.includes("(auth/email-already-in-use)")) {
				msg = "Email already in use";
			}

			return { success: false, error: msg };
		}
	};

	return { signup };
};
