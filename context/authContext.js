import { useEffect, useState, createContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig/fbConfig";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
	const { children } = props;

	const [user, setUser] = useState(null);
	// console.log(`user`, user)

	const [isAuthenticated, setIsAuthenticated] = useState(undefined);

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (user) => {
			// console.log(`onAuthStateChanged user`, user);

			if (user) {
				// console.log(`user logged on`, user)
				setIsAuthenticated(true);
				setUser(user);
			} else {
				// console.log(`user NOT logged on`, user)
				setIsAuthenticated(false);
				setUser(null);
			}
		});

		return unsub;
	}, []);

	return (
		<AuthContext.Provider value={{ children, user, setUser, isAuthenticated }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
