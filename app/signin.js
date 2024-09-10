import React, { useRef, useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TextInput,
	Pressable,
	Alert,
} from "react-native";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import login from "../assets/images/login.png";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Loading from "../components/Loading";
import CustomKeyboardView from "../components/CustomKeyboardView";
import { useSignin } from "../hooks/useSignin";

const Signin = () => {
	const [isLoading, setIsLoading] = useState(false);

	const { signin } = useSignin();

	const emailRef = useRef("");
	const passwordRef = useRef("");

	const handleSignin = async () => {
		if (!emailRef.current || !passwordRef.current) {
			Alert.alert("Sign in", "Please fill in all the fields");
			return;
		}
		// Signin process
		setIsLoading(true);
		const signinResult = await signin({
			email: emailRef.current,
			password: passwordRef.current,
		});
		// console.log(`signinResult`, signinResult);
		setIsLoading(false);

		// respond to failed signup or error
		if (signinResult.error) {
			// console.log(`signinResult.error`, signinResult.error);
			Alert.alert("Signin Error", signinResult.error);
			return;
		}

		// respond to successful signin
		if (signinResult.success) {
			// console.log(`signinResult.success`, signinResult.success);
			Alert.alert("Signin Success",
				`User "${emailRef?.current}" Signed In Successfully `
			);
			return;
		}
	};

	return (
		<CustomKeyboardView>
			<View style={styles.container}>
				{/* <StatusBar style="dark" /> */}
				<View style={styles.centered}>
					{/* signin image */}
					<View style={styles.image}>
						<Image source={login} style={styles.loginImage} />
					</View>
					{/* signin form */}
					<View style={{ gap: 10, width: "100%" }}>
						<Text
							style={{ textAlign: "center", fontWeight: "bold", fontSize: 25 }}
						>
							Sign In
						</Text>

						{/* email input field */}
						<View style={styles.textInputWrapper}>
							<AntDesign name="mail" size={hp(3)} color="#CCC8AA" />
							<TextInput
								onChangeText={(value) => (emailRef.current = value)}
								style={styles.inputField}
								placeholder="Email adr"
							/>
						</View>

						{/* password input field */}
						<View style={styles.textInputWrapper}>
							{/* <FontAwesome5 name="user-lock" size={24} color="black" /> */}
							<AntDesign name="lock" size={hp(3)} color="#CCC8AA" />
							<TextInput
								onChangeText={(value) => (passwordRef.current = value)}
								style={styles.inputField}
								placeholder="Password"
								secureTextEntry
							/>
						</View>

						<Text
							style={{
								fontSize: hp(2),
								textAlign: "right",
								paddingRight: hp(0.5),
							}}
						>
							Forgot Password?
						</Text>

						{/* Sign in submit btn */}
						<View>
							{isLoading ? (
								<View
									style={{
										// flex: 1,
										flexDirection: "row",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<Loading size={hp(8)} />
								</View>
							) : (
								<Pressable
									style={{
										flexDirection: "row",
										alignItems: "center",
										justifyContent: "center",
										height: hp(7),
										backgroundColor: "#9DBDFF",
										borderRadius: 10,
									}}
									onPress={handleSignin}
								>
									<Text style={{ fontSize: hp(3) }}>Sign in</Text>
								</Pressable>
							)}
						</View>
					</View>

					{/* Already signed up */}
					<View style={{ flexDirection: "row", marginTop: hp(3) }}>
						<Text>Don't have an account? </Text>
						<Pressable
							style={{
								borderWidth: hp(0.1),
								borderColor: "#F0EBE3",
								borderRadius: 5,
								backgroundColor: "#F0EBE3",
								paddingLeft: hp(1),
								paddingRight: hp(1),
							}}
							onPress={() => router.push("signup")}
						>
							<Text style={{ fontWeight: "bold", color: "#1640D6" }}>
								Sign up
							</Text>
						</Pressable>
					</View>
				</View>
			</View>
		</CustomKeyboardView>
	);
};

export default Signin;

const styles = StyleSheet.create({
	container: {
		padding: hp(3),
		marginTop: hp(10),
		borderColor: "#f0f0f0",
		backgroundColor: "#f9f9f9",
		flex: 1,
	},
	form: {
		flex: 1,
		paddingTop: hp(5),
		paddingHorizontal: wp(5),
		gap: 10,
	},
	centered: {
		justifyContent: "center",
		alignItems: "center",
	},
	loginImage: {
		width: hp(30),
		height: hp(30),
	},
	text1: {
		flexDirection: "row",
		justifyContent: "center",
		fontSize: hp(4),
		fontWeight: "bold",
	},
	form: {
		// flex: 1,
		paddingTop: hp(5),
		flexDirection: "row,",
		justifyContent: "center",
		alignItems: "center",
	},
	textInputWrapper: {
		height: hp(7),
		flexDirection: "row",
		alignItems: "center",
		borderRadius: 10,
		backgroundColor: "#F1EFEF",
		paddingLeft: hp(1),
	},
	inputField: {
		color: "#191717",
		alignItems: "center",
		height: hp(4),
		paddingLeft: hp(3),
		fontSize: hp(2.5),
	},
});
