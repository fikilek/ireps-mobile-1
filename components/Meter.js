// npm librates
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router, Link } from "expo-router";
import { Pressable } from "react-native";

// react native
import { StyleSheet, View, Text, TouchableOpacity, Button } from "react-native";

const Meter = (props) => {
	// console.log(`props`, props);

	const { ast } = props;
	// console.log(`ast?.astData`, ast?.astData);

	let locationName = "";
	if (ast?.astData?.astState.state === "stores") {
		locationName = ast?.astData?.astState?.locationName;
	}
	// if (ast?.astData?.astState.state === "checkOutPending") {
	// 	locationName = "Ormonde";
	// }
	// if (ast?.astData?.astState.state === "checkedOut") {
	// 	locationName = "Ormonde";
	// }
	if (ast?.astData?.astState.state === "service" || !(ast?.astData?.astState.state) ) {
		locationName = `${ast?.erf?.address?.lmMetro} - ${ast?.erf?.erfNo}`;
	}

	const handlePress = () => {
		// console.log(`ast`, ast);

		router.push({
			pathname: "/",
			params: {
				astNo: ast?.astData?.astNo,
				astManufacturer: ast?.astData?.astManufacturer,
				astName: ast?.astData?.astName,
				astState: ast?.astData?.astState?.state,
				astLocation: ast?.astData?.astState?.locationName,
			},
		});
	};

	return (
		<View style={styles.meterContainer}>
			<View style={styles.meter}>
				<Text style={styles.astNo}>{ast?.astData?.astNo}</Text>
				<View style={styles.astState}>
					<Text style={styles.astNo}>{ast?.astData?.astState?.state}</Text>
					<Text style={styles.astNo}>{locationName}</Text>
				</View>
			</View>
			<Pressable onPress={handlePress} style={styles.btnEdit}>
				<AntDesign name="edit" size={30} color="green" />
			</Pressable>
			{/* <Link href="/" asChild>
				<Pressable>
				<AntDesign name="edit" size={30} color="green" />
				</Pressable>
			</Link> */}
		</View>
	);
};

export default Meter;

const styles = StyleSheet.create({
	meterContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		flex: 1,
	},
	meter: {
		margin: 5,
		padding: 5,
		borderColor: "#bbb",
		borderWidth: 2,
		borderStyle: "dashed",
		borderRadius: 8,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "85%",
		marginLeft: 10,
	},
	btnEdit: {
		borderRadius: 30,
		fontSize: 10,
		borderColor: "#bbb",
		borderWidth: 1,
		borderStyle: "solid",
		borderRadius: 5,
		marginRight: 10,
	},
	astNo: {
		color: "black",
	},
	astState: {
		flexDirection: 'row',
		gap: 10
	}
});
