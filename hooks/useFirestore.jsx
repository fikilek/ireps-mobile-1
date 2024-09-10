import { useEffect, useState } from "react";
import { doc, Timestamp, collection, setDoc } from "firebase/firestore";

// hooks
import useAuth from "./useAuth";

import { db } from "../firebaseConfig/fbConfig";

export const useFirestore = (fbCollection) => {
	// console.log(`useFirestore fbCollection:`, fbCollection);

	const { user } = useAuth();

	const ref = collection(db, fbCollection);

	const setDocument = async (document, id) => {
		// console.log(`document`, document);
		// console.log(`id`, id);

		if (!document) return;

		const docToUpdateRef = doc(db, fbCollection, id);
		// console.log(`docToUpdateRef` ,docToUpdateRef

		try {
			const setDocResult = await setDoc(docToUpdateRef, document);
			// console.log(`setDocResult`, setDocResult);
			return { success: true };
		} catch (err) {
			console.log(`ERROR: `, err.message);
			return { success: false, msg: err.message };
		}
	};

	return {
		setDocument
	};
};
