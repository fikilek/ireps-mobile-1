import { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import { Tabs, Stack } from "expo-router";
import { Text } from "react-native";

import HeaderTitle from "../../components/HeaderTitle";

export default function TabLayout() {
	// const [user, setUser] = useState(true);

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: "blue",
				headerRight: (props) => <HeaderTitle {...props} />,
			}}
			options={{
				headerTitle: "iREPS",
			}}
		>
			<Tabs.Screen
				name="asts"
				options={{
					title: "Asts",
					tabBarIcon: ({ color }) => (
						<FontAwesome name="ruble" size={24} color="black" />
					),
					tabBarLabel: "ASTS",
				}}
			/>
			<Tabs.Screen
				name="trns"
				options={{
					title: "Trns",
					tabBarIcon: ({ color }) => (
						<Entypo name="hour-glass" size={24} color="black" />
					),
					tabBarLabel: "TRNS",
				}}
			/>
			<Tabs.Screen
				name="erfs"
				options={{
				title:"Erfs",
					tabBarIcon: ({ color }) => (
						<MaterialIcons name="place" size={24} color="black" />
					),
					tabBarLabel: "ERFS",
				}}
			/>
			<Tabs.Screen
				name="(app)"
				options={{
					headerShown: false,
					href: null,
					headerLeft: () => <Text >Meter Detail</Text>,
					// headerShown: false
					// headerTitle: '',
					headerTitleStyle: {
						fontWeight: 'bold',
						padding: '5'
					},
					
				}}

			/>
				
		</Tabs>
	);
}
