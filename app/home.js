import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Link, router } from "expo-router";

const Home = () => {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text style={{ fontSize: 50 }}>iREPS Home</Text>

			<View style={styles.authBtn}>
				<Pressable onPress={() => router.replace("/erfs")}>
					<Text>Go To iREPS ERFS</Text>
				</Pressable>
			</View>

			<View style={styles.authBtn}>
				<Pressable onPress={() => router.replace("/trns")}>
					<Text>Go To iREPS TRNS</Text>
				</Pressable>
			</View>

			<View style={styles.authBtn}>
				<Pressable onPress={() => router.replace("/asts")}>
					<Text>Go To ASTS</Text>
				</Pressable>
			</View>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	authBtn: {
		margin: 20,
	},
});
