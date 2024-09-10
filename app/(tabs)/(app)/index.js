import { View, Text, Pressable } from "react-native";
import React from "react";
import { useLocalSearchParams, router } from "expo-router";
import MeterProperty from "../../../components/MeterProperty";

const AstDetail = () => {
	const params = useLocalSearchParams();
	console.log(`params`, params)
	const { astNo, astManufacturer, astName, astState, astLocation } = params;
	// console.log(`astNo`, astNo)
	const handlePress = () => {
		router.push("/asts");
	};
	return (
		<View>
			<View>
				<MeterProperty data={astState} dataName="Meter State" />
				<MeterProperty data={astLocation} dataName="Meter Location" />
				<MeterProperty data={astManufacturer} dataName="Meter Manufacture" />
				<MeterProperty data={astName} dataName="Meter Model Name" />
			</View>

			
				<Pressable
					onPress={handlePress}
					// style={{justifyContent: 'center', alignItems: 'center', width: 150, height: 150}}
				>
					<View
						style={{
							// alignItems: "center",
							margin: 3,
							// width: "100%",
              justifyContent: 'center',
              flexDirection: 'row',
						}}
					>
						<Text
							style={{
								borderWidth: 5,
								borderRadius: 5,
								borderColor: "#FFBE98",
								margin: 15,
								padding: 10,
								width: 150,
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
							}}
						>
							Go Back
						</Text>
					</View>
				</Pressable>
		
		</View>
	);
};

export default AstDetail;
