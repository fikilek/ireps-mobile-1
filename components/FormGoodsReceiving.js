// npm libraries
import React, { useState } from "react";
import "react-native-get-random-values";
import { SelectList } from "react-native-dropdown-select-list";

// react native
import {
	StyleSheet,
	View,
	Text,
	Pressable,
	TextInput,
	Alert,
} from "react-native";

// component
import FormBtn from "./FormBtn";
import FormBtnSubmit from "./FormBtnSubmit";

const FormGoodsReceiving = (props) => {
	// console.log(`props`,props)
	const {
		asts,
		setAsts,
		setModalVisible,
		meterNo,
		setMeterNo,

		astName,
		setAstName,
		astManufacturer,
		setAstManufacturer,
		phase,
		setPhase,
		type,
		setType,
	} = props;

	const onBtnPress = (val) => {
		// console.log(`btn pressed`);
	};

	const handleChange = (val) => {
		// console.log(`val`, val);
		// console.log(`asts`, asts);

		setMeterNo(val);

		const result = asts?.find((ast) => ast.astNo === val);
		// console.log(`result`, result);

		// // check if the meter no is already in iREPS db
		if (result !== undefined) {
			console.log(`Result is NOT undefined`);
			Alert.alert("Capture Error", "Meter already in iREPS", [{ text: "OK" }]);
		} else {
			console.log(`Result is undefined`);
		}
	};

	return (
		<View styles={{ width: "100%" }}>
			<View style={styles.formRow}>
				<FormBtn label={"Clear"} onPress={setMeterNo} />
				<TextInput
					style={styles.formInput}
					onChangeText={handleChange}
					placeholder="Meter no"
					keyboardType="numeric"
					value={meterNo}
				/>
				<FormBtn
					label={"Scan"}
					onPress={onBtnPress}
					setModalVisible={setModalVisible}
				/>
				<FormBtnSubmit
					label={"Submit"}
					meterNo={meterNo}
					asts={asts}
					setAsts={setAsts}
					setMeterNo={setMeterNo}
					astName={astName}
					astManufacturer={astManufacturer}
					phase={phase}
					type={type}
				/>
			</View>
			<View style={styles.formRow}>
				{/* astName */}
				{/* <SelectList
					setSelected={(val) => setAstName(val)}
					data={[
						{ key: "BEC44", value: "BEC44" },
						{ key: "BEC6", value: "BEC6" },
					]}
					notFoundText='my not found'
					placeholder='Model Name'
					boxStyles={selectStyles.boxStyle}
					dropdownItemStyles={selectStyles.dropdownItemStyle}
				/> */}
				{/* astManufacturer */}
				<SelectList
					setSelected={(val) => setAstManufacturer(val)}
					data={[
						{ key: "Conlog", value: "Conlog" },
						{ key: "Hexing", value: "Hexing" },
						{ key: "Landis & Gear", value: "Landis & Gear" },
					]}
					save="value"
					notFoundText='my not found'
					placeholder='Manufacturer'
					boxStyles={selectStyles.boxStyle}
					defaultOption={{ key: "Conlog", value: "Conlog" }}
				/>
				{/* meter phase */}
				<SelectList
					setSelected={(val) => setPhase(val)}
					data={[
						{ key: "single", value: "single" },
						{ key: "three", value: "three" },
					]}
					placeholder='Meter Phase'
					boxStyles={selectStyles.boxStyle}
					defaultOption={{ key: "single", value: "single" }}
				/>
				{/* meter type */}
				<SelectList
					setSelected={(val) => setType(val)}
					data={[
						{ key: "conventional", value: "conventional" },
						{ key: "pre-paid", value: "pre-paid" },
					]}
					placeholder='Meter Type'
					boxStyles={selectStyles.boxStyle}
					defaultOption={{ key: "pre-paid", value: "pre-paid" }}
				/>
			</View>
		</View>
	);
};

export default FormGoodsReceiving;

const styles = StyleSheet.create({
	// container: {},
	formRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		margin: 0,
		padding: 5,
		borderWidth: 1,
		borderColor: "grey",
		gap: 5,
	},
	formInput: {
		borderWidth: 1,
		borderStyle: "solid",
		borderRadius: 5,
		padding: 5,
		width: 60,
		flex: 1,
		height: 30,
	},
});

const selectStyles = {
	boxStyle: {
		height: 30,
		borderRadius: 5,
		paddingTop: 3,
		paddingBottom: 0,
	},
	dropdownItemStyle: {
		height: 30,
	},
};
