import { Stack, router, useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import MeterDetailHeader from "../../../components/MeterDetailHeader";

export default function Layout() {
	const params = useLocalSearchParams();
	// console.log(`params`, params);
	const { astNo } = params;

	return (
		<Stack
			screenOptions={{
				tabBarActiveTintColor: "blue",
				title: "Meter Detail",
				headerRight: () => (
					<Text style={{ paddingRight: 15, fontWeight: "bold", fontSize: 16 }}>{astNo}</Text>
				),
			}}
		/>
	);
}
