import { View, Text } from "react-native";
import React from "react";

const MeterDetailHeader = (props) => {
	const { title, astNo } = props;
	return (
		<View
			style={{
        // flex: 1,
				flexDirection: 'row',
				alignItems: "center",
				justifyContent: "space-between",
        padding: '20',
        width: '100%',
			}}
		>
			<Text>{title}</Text>
			<Text style={{paddingRight: '30'}}>{astNo}</Text>
		</View>
	);
};

export default MeterDetailHeader;
