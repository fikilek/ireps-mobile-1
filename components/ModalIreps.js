import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity } from "react-native";
import ExpoCameraScanner from "./ExpoCameraScanner";


const ModalIreps = (props) => {
	const { modalVisible, setModalVisible, meterNo, setMeterNo, asts } = props;
	const [facing, setFacing] = useState('back');
	// console.log(`facing`, facing)

	function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }
	return (
		<View style={styles.centeredView}>
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					// Alert.alert("Modal has been closed.");
					setModalVisible(!modalVisible);
				}}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<View style={styles.header}>
							<TouchableOpacity
								style={[styles.button, styles.buttonClose]}
								onPress={toggleCameraFacing}
							>
								<Text style={styles.textStyle}>{facing.toUpperCase()}</Text>
							</TouchableOpacity>
							<Text style={styles.headerText}>Barcode Scanner</Text>
							<Pressable
								style={[styles.button, styles.buttonClose]}
								onPress={() => setModalVisible(!modalVisible)}
							>
								<Text style={styles.textStyle}>Hide Modal</Text>
							</Pressable>
						</View>
						<ExpoCameraScanner
							setModalVisible={setModalVisible}
							setMeterNo={setMeterNo}
							asts={asts}
							facing={facing}
						/>
					</View>
				</View>
			</Modal>
		</View>
	);
};

export default ModalIreps;

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		// justifyContent: 'center',
		// alignItems: 'center',
		marginTop: 10,
	},
	modalView: {
		marginTop: 80,
		backgroundColor: "white",
		// borderRadius: 20,
		borderColor: "#bbb",
		borderWidth: 2,
		borderStyle: "dashed",
		borderRadius: 8,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
		flex: 1,
	},
	button: {
		// borderRadius: 20,
		padding: 5,
		elevation: 2,
	},
	buttonOpen: {
		backgroundColor: "#F194FF",
	},
	buttonClose: {
		backgroundColor: "#2196F3",
		marginHorizontal: 5
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 15,
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderColor: "#bbb",
		borderWidth: 2,
		borderStyle: "dashed",
		width: "100%",
	},
	headerText: {
		fontSize: 15,
		padding: 10,
	},
});
