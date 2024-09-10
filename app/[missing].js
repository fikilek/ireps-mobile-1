import { View, Text } from "react-native";
import React from "react";
import { Link, router } from "expo-router";

const Missing = () => {
	return (
		<View>
			<Text>Page Missing</Text>
			<Link href={"home"} asChild>
				<Text>Go to Home Page</Text>
			</Link>
		</View>
	);
};

export default Missing;
