// npm librates
import React from "react";

// react native
import { StyleSheet, View, Text } from "react-native";

const Header = (props) => {
	// console.log(`props`, props);

	const { title } = props;
	// console.log(`ast`, ast);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#87eafb",
	},
	title: {
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 20,
		color: "#fff",
	},
});
