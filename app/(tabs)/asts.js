import React, { useState, useEffect } from "react";
import "react-native-get-random-values";
import {
	View,
	Text,
	Button,
	Pressable,
	FlatList,
	ActivityIndicator,
} from "react-native";
import { Link, router } from "expo-router";

import Header from "../../components/Header";
import Meter from "../../components/Meter";
import FormGoodsReceiving from "../../components/FormGoodsReceiving";
import ModalIreps from "../../components/ModalIreps";
import useGetAllAsts from "../../hooks/useGetAllAsts";

const Asts = () => {
	const { data, error } = useGetAllAsts("asts");
	const [asts, setAsts] = useState(data);
	// console.log(`asts`, asts)
	const [meterNo, setMeterNo] = useState("");
	const [modalVisible, setModalVisible] = useState(false);

	const [astName, setAstName] = useState(false);
	// console.log(`astName`, astName)
	const [astManufacturer, setAstManufacturer] = useState(false);
	// console.log(`astManufacturer`, astManufacturer)
	const [phase, setPhase] = useState(false);
	// console.log(`phase`, phase)
	const [type, setType] = useState(false);
	// console.log(`type`, type)

	useEffect(() => {
		setAsts(data);
	}, [data]);

	return (
		<View>
			<Header title="Meters" />
			<FormGoodsReceiving
				asts={asts}
				setAsts={setAsts}
				setModalVisible={setModalVisible}
				meterNo={meterNo}
				setMeterNo={setMeterNo}

				astName={astName}
				setAstName={setAstName}
				astManufacturer={astManufacturer}
				setAstManufacturer={setAstManufacturer}
				phase={phase}
				setPhase={setPhase}
				type={type}
				setType={setType}
			/>
			{asts?.length > 0 ? (
				<FlatList
					data={asts}
					renderItem={({ item }) => {
						return <Meter ast={item} />;
					}}
				/>
			) : (
				<View
					style={{
						width: "100%,",
						height: "90%",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<ActivityIndicator size={"large"} />
				</View>
			)}

			<ModalIreps
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
				meterNo={meterNo}
				setMeterNo={setMeterNo}
				asts={asts}
			/>
		</View>
	);
};

export default Asts;
