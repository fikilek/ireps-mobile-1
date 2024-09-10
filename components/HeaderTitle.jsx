import React from "react";
import { useSignout } from "../hooks/useSignout";
import { View, Button, StyleSheet, Text, Pressable } from "react-native";
import useAuth from "../hooks/useAuth";

const HeaderTitle = () => {
	const { signout } = useSignout();
	const user = useAuth();
	// console.log(`HeaderTitle user`, user);

	const displayName = user?.user?.displayName;
	// console.log(`displayName`, displayName);

	return (
		<View style={styles.headerTitle}>
			<Text style={{ paddingRight: 5, color: "#4A249D", fontWeight: 'bold' }}>{displayName}</Text>
			<Pressable onPress={() => signout()}>
				<Text
					style={{
						borderWidth: 1,
						borderRadius: 5,
						borderColor: "#DDDDDD",
						padding: 4,
						backgroundColor: "#FFD3B6",
					}}
				>
					Sign Out
				</Text>
			</Pressable>
		</View>
	);
};

export default HeaderTitle;

const styles = StyleSheet.create({
	headerTitle: {
		// padding: 20
		paddingRight: 10,
		flexDirection: "row",
		alignItems: "center",
		gap: 3,
	},
});
