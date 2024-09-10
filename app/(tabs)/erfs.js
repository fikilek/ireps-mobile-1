import React from "react";
import {View, Text, Button, Pressable} from 'react-native'
import {Link, router} from 'expo-router'

const Erfs = () => {
	return (
		<View>
			<Text>Erfs</Text>
			<Pressable onPress={()=>router.replace('/home')} >
				<Text>Go To iREPS Home</Text>
			</Pressable>
    </View>
	);
};

export default Erfs;
