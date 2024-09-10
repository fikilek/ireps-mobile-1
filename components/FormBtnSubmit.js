// npm libraries
import React, { useState } from "react";
import uuid from "react-native-uuid";
import { Timestamp } from "firebase/firestore";
import useAuth from "../hooks/useAuth";
import { ActivityIndicator } from "react-native";

// react native
import { StyleSheet, View, Text, Pressable, Alert } from "react-native";

// hooks
import { useFirestore } from "../hooks/useFirestore";

const FormBtnSubmit = (props) => {
	// console.log(`props`, props);

	const { setDocument } = useFirestore("asts");

	const [isPending, setIsPending] = useState(false);

	const { user } = useAuth();
	// console.log(`user`, user);

	const trnId = uuid.v4();
	const datetime = Timestamp.now();

	const meterData = {
		metadata: {
			updatedAtDatetime: datetime,
			updatedByUser: user?.displayName,
			updatedByUid: user?.uid,
			createdAtDatetime: datetime,
			createdByUser: user?.displayName,
			createdByUid: user?.uid,
			trnType: "checkin", //['installation', 'commissioning', 'vending', 'missing', 'found', 'disconnection', 'reconnection', 'sale', 'decomissioning', "dispose", 'inspection', 'audit']
			trnNo: "",
			trnId: trnId,
			trnState: "valid",
		},
		astData: {
			astId: uuid.v4(),
			astNo: "", // for meters this is a meter no
			astCatergory: "meter", // [ 'pole', 'box', 'meter', 'circuit breaker', 'seal'],
			astState: {
				state: "stores", // ['stores', 'checkOutPending', 'checkedOut', 'checkoutPending', 'checkedOut', 'Lesedi LM', 'temper']
				locationName: "Ormonde", // ['Ormonde', 'Andile', 'Willie', 'Willie', 'Lefu', '3423',   ]
			},
			astManufacturer: "",
			astName: "",
			meter: {
				phase: "", // ['single', 'three', ]
				type: "", // ['pre-paid', 'conventional']
			},
		},
		trns: [
			{
				trnId: trnId,
				trnType: "checkin",
				updatedAtDatetime: datetime,
				updatedByUser: user?.displayName,
			},
		],
	};

	const {
		label,
		meterNo,
		asts,
		setMeterNo,
		astName,
		astManufacturer,
		phase,
		type,
	} = props;

	const handlePress = async (val) => {
		// console.log(
		// 	`Btn Pressed : Frm submitted----------------------------------`
		// );

		// console.log(`meterNo`, meterNo);
		if (!meterNo) return;
		// console.log(`!meterNo`, !meterNo);

		// remove all spaces and trim meter no
		const mn = meterNo.replace(/ /g, "");

		const result = asts?.find(
			(ast) => ast?.astData?.astNo?.replace(/ /g, "") === mn
		);

		// check if the meter no is already in iREPS db
		// TODO: do more validation check for wrong meter numbers
		if (result !== undefined) {
			// console.log(`Result is NOT undefined - DUPLICATE meter no`);

			Alert.alert("Duplicate Error", `Meter "${meterNo}" already in iREPS`, [
				{ text: "OK", onPress: () => setMeterNo("") },
			]);
			return;
		} else {
			const newMeter = {
				...meterData,
				astData: {
					...meterData.astData,
					astNo: mn,
					astManufacturer,
					astName,
					meter: {
						...meterData.astData.meter,
						phase,
						type,
					},
				},
			};
			setIsPending(true);

			const { astId } = newMeter?.astData;
			// console.log(`newMeter to save: `, newMeter);
			const result = await setDocument(newMeter, astId);

			if (result.success) {
				Alert.alert(
					"Meter Add Success",
					`Meter "${meterNo}" successfully added to iREPS`,
					[{ text: "OK", onPress: () => setMeterNo("") }]
				);
			} else {
				Alert.alert("Meter Add Error", `Meter add failed "${meterNo}"`, [
					{ text: "OK", onPress: () => setMeterNo("") },
				]);
			}
			setIsPending(false);
		}
	};

	return (
		<Pressable onPress={handlePress} style={styles.btnContainer}>
			{isPending ? (
				<ActivityIndicator size={"small"} style={styles.btn} />
			) : (
				<Text style={styles.btn}>{label}</Text>
			)}
		</Pressable>
	);
};

export default FormBtnSubmit;

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
		color: "#615EFC",
		fontWeight: "bold",
		fontSize: 15,
	},
});
