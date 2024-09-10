import { useEffect } from "react";
import { Slot, useSegments, useRouter } from "expo-router";
import AuthContextProvider from "../context/authContext";
import useAuth from "../hooks/useAuth";

const MainLayout = () => {
	const { isAuthenticated } = useAuth();
	const segments = useSegments();
	const router = useRouter();

	useEffect(() => {
		// determine if user is authenticated or not.
		if (typeof isAuthenticated == "undefined") return;
		const inApp = segments[0] == "(app)";
		if (isAuthenticated && !inApp) {
			// redirect to home
			router.replace("/asts");
		} else if (isAuthenticated == false) {
			// redirect to signin
			router.replace("signin");
		}
	}, [isAuthenticated]);

	return <Slot />
};

export default RootLayout = () => {
	return (
		<AuthContextProvider>
			<MainLayout />
		</AuthContextProvider>
	);
};
