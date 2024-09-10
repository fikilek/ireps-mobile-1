import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
// import LottieView from "lottie-react-native";
// import lottie from "../assets/animations/lottie.json";

const Loading = (props) => {
	const { size } = props;
	return (
		<View
			style={{
				height: size,
				flexDirection: "row",
				justifyContent: "center",
				aspectRation: 1,
        flex: 1
			}}
		>
			{/* <LottieView style={{ flex: 1 , backgroundColor: '##f9f9f9' }} source={lottie} autoPlay loop /> */}
			<ActivityIndicator size='large' color='grey' />
		</View>
	);
};

export default Loading;

const styles = StyleSheet.create({});
