import { useState, useEffect } from "react";
import {
	collection,
	limit,
	onSnapshot,
	orderBy,
	query,
} from "firebase/firestore";

// hooks

// components
import { db } from "../firebaseConfig/fbConfig";

const useGetAllAsts = (fbCollection) => {
	// console.log(`fbCollection`, fbCollection);

	const [data, setData] = useState([]);
	const [error, setError] = useState("");

	let colRef = collection(db, fbCollection);

	useEffect(() => {
		// console.log(`testing array equality`);

		let newQuery = query(
			colRef,
			orderBy("metadata.updatedAtDatetime", "desc"),
			limit(50)
		);
		// console.log(`newQuery`, newQuery);

		const unsubscribe = onSnapshot(
			newQuery,
			(snapShot) => {
				const results = [];
				snapShot.docs.forEach((doc) => {
					results.push({ id: doc.id, ...doc.data() });
				});
				setData(results);
			},
			(err) => {
				console.log(`firestore err`, err.message);
				setError(err.message);
			}
		);

		setError("");

		return unsubscribe;
	}, []);

	return { data, error };
};

export default useGetAllAsts;
