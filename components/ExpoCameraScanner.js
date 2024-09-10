import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Pressable } from "react-native";
import { CameraView, Camera } from "expo-camera";

export default ExpoCameraScanner = (props) => {
	// console.log(`props`, props)

	const { setModalVisible, setMeterNo, asts, facing } = props;
	const [hasPermission, setHasPermission] = React.useState(false);
	// console.log(`hasPermission`, hasPermission)
	const [scanData, setScanData] = React.useState();
	// console.log(`scanData`, scanData)
	

	useEffect(() => {
		const getCameraPermissions = async () => {
			const { status } = await Camera.requestCameraPermissionsAsync();
			setHasPermission(status === "granted");
		};

		getCameraPermissions();
	}, []);

	const handleBarcodeScanned = ({ type, data }) => {
		setScanned(true);
		// alert(`Bar code with type ${type} and data ${data} has been scanned!`);
	};

	if (hasPermission === null) {
		return <Text>Requesting for camera permission</Text>;
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
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
			<CameraView
				onBarcodeScanned={scanData ? undefined : handleBarCodeScanned}
				// barcodeScannerSettings={{
				//   barcodeTypes: ["qr", "pdf417"],
				// }}
				style={StyleSheet.absoluteFillObject}
				style={styles.scanner}
				facing={facing}
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
		</View>
	);
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column",
//     justifyContent: "center",
//   },
// });

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
