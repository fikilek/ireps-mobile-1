// npm libraries
import React from "react";

// react native
import { StyleSheet, View, Text, Pressable } from "react-native";

const FormBtn = (props) => {
	// console.log(props);

	const { label, onPress, setModalVisible } = props;

	const handlePress = (val) => {
		// console.log(`Btn Pressed ----------------------------------`,val);
		// onPress(val);
		if (label === "Clear") {
			onPress("");
		}

		if (label === "Scan") {
			setModalVisible(true);
		}
	};

	return (
		<Pressable onPress={handlePress} style={styles.btnContainer}>
			<Text style={styles.btn}>{label}</Text>
		</Pressable>
	);
};

export default FormBtn;

const styles = StyleSheet.create({
	btnContainer: {},
	btn: {
		borderWidth: 1,
		borderStyle: "solid",
		borderRadius: 5,
		padding: 5,
		width: 70,
		height: 30,
		textAlign: "center",
		backgroundColor: '#D1E9F6'
	},
});
