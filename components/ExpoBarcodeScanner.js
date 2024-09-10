import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Pressable, Alert } from "react-native";
import React, { useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";

export const ExpoBarcodeScanner = (props) => {
	const { setModalVisible, setMeterNo, asts } = props;
	const [hasPermission, setHasPermission] = React.useState(false);
	const [scanData, setScanData] = React.useState();

	useEffect(() => {
		(async () => {
			const { status } = await BarCodeScanner.requestPermissionsAsync();
			setHasPermission(status === "granted");
		})();
	}, []);

	if (!hasPermission) {
		return (
			<View style={styles.container}>
				<Text>Please grant camera permissions to app.</Text>
			</View>
		);
	}

	const handleBarCodeScanned = ({ type, data }) => {
		setScanData(data);
	};

	const saveMeterNo = (val) => {
		// set meter no in grv form
		setMeterNo(scanData);
		// close modal
		setModalVisible(false);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.meterNoStyle}>{scanData}</Text>
			<BarCodeScanner
				style={StyleSheet.absoluteFillObject}
				onBarCodeScanned={scanData ? undefined : handleBarCodeScanned}
				style={styles.scanner}
			/>
			{scanData && (
				<View style={styles.scanFooter}>
					<Pressable onPress={() => setScanData(undefined)}>
						<Text style={styles.scanBtn}>New Scan?</Text>
					</Pressable>
					<Pressable onPress={saveMeterNo}>
						<Text style={styles.scanBtn}>Save</Text>
					</Pressable>
				</View>
			)}

			<StatusBar style="auto" />
		</View>
	);
};

export default ExpoBarcodeScanner;

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
	},
	scanner: {
		height: "60%",
		width: "100%",
	},
	scanData: {
		fontSize: 30,
	},
	scanBtn: {
		borderColor: "#bbb",
		borderWidth: 2,
		borderStyle: "dashed",
		// borderRadius: 10,
		padding: 5,
		width: 100,
		textAlign: "center",
	},
	scanFooter: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%",
		paddingTop: 10,
		// paddingRight: 10,
	},
	errorMeterNo: {
		borderColor: "red",
		borderWidth: 2,
		borderStyle: "dashed",
		color: "red",
		// borderRadius: 10,
		padding: 5,
		// width: 100,
		textAlign: "center",
	},
	error: {
		color: "red",
	},
	meterNoStyle: {
		fontSize: 25,
	},
});
