import React from "react";
import { View, Text, Button, Pressable } from "react-native";
import { Link, router } from "expo-router";

const Trns = () => {
	return (
		<View>
			<Text>Trns</Text>
			<Pressable onPress={()=>router.replace('/home')} >
				<Text>Go To iREPS Home</Text>
			</Pressable>
		</View>
	);
};

export default Trns;
