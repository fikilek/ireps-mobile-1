// npm libraries
import React, { useRef, useState, useEffect } from "react";
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
import register from "../assets/images/register.png";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AntDesign from "@expo/vector-icons/AntDesign";
import Octicons from "@expo/vector-icons/Octicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

// hooks
import { useSignup } from "../hooks/useSignup";

// components
import Loading from "../components/Loading";
import CustomKeyboardView from "../components/CustomKeyboardView";

const Signup = () => {
	const [isLoading, setIsLoading] = useState(false);

	const { signup } = useSignup();

	const surnameRef = useRef("");
	const nameRef = useRef("");
	const emailRef = useRef("");
	const passwordRef = useRef("");
	const confirmPasswordRef = useRef("");

	surnameRef?.current === "kentane";
	nameRef?.current === "fikile";
	emailRef?.current === "fk@gmail.com";
	passwordRef?.current === "123456";
	confirmPasswordRef?.current === "123456";

	const handleSignup = async () => {
		if (
			surnameRef?.current === "" ||
			nameRef?.current === "" ||
			emailRef?.current === "" ||
			passwordRef?.current === "" ||
			confirmPasswordRef?.current === ""
		) {
			console.log("Please fill in all the fields");
			Alert.alert("Sign Up", "Please fill in all the fields");
			return;
		}

		if (passwordRef?.current?.length < 6) {
			console.log("Password must be at least 6 characters");
			Alert.alert("Sign Up", "Password must be at least 6 characters");
			return;
		}

		if (passwordRef?.current != confirmPasswordRef?.current) {
			console.log("Password and Confirm Password must be equal");
			Alert.alert("Sign Up", "Password and Confirm Password must be equal");
			return;
		}
		console.log(`validation passed`);

		setIsLoading(true);

		// Signup process
		const userCredentials = {
			email: emailRef?.current,
			password: passwordRef?.current,
			surname: surnameRef?.current,
			name: nameRef?.current,
			workbase: "workbase",
			phoneNumber: "",
		};

		const signupResult = await signup(userCredentials);
		setIsLoading(false);
		// console.log(`signupResult`, signupResult);

		// respond to failed signup or error
		if (signupResult?.error) {
			// console.log(`signupResult?.error`, signupResult?.error);
			Alert.alert("Signup Error", signupResult?.error);
			return;
		}

		// respond to successful signup
		if (signupResult?.success) {
			// console.log(`signupResult.success`, signupResult?.success);
			Alert.alert(
				"Signed Up Successful",
				`User  ${surnameRef?.current} ${nameRef?.current} Signed In `
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
						<Image source={register} style={styles.signupImage} />
					</View>
					{/* signup form */}
					<View style={{ gap: 10, width: "100%" }}>
						<Text
							style={{ textAlign: "center", fontWeight: "bold", fontSize: 25 }}
						>
							Sign Up
						</Text>

						{/* surname input field */}
						<View style={styles.textInputWrapper}>
							<Octicons name="person" size={hp(3)} color="#CCC8AA" />
							<TextInput
								onChangeText={(value) => (surnameRef.current = value)}
								style={styles.inputField}
								placeholder="surname"
							/>
						</View>

						{/* name input field */}
						<View style={styles.textInputWrapper}>
							<Octicons name="person-fill" size={hp(3)} color="#CCC8AA" />
							<TextInput
								onChangeText={(value) => (nameRef.current = value)}
								style={styles.inputField}
								placeholder="name"
							/>
						</View>

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
								// secureTextEntry
							/>
						</View>

						{/* Confirm password input field */}
						<View style={styles.textInputWrapper}>
							<MaterialIcons name="password" size={hp(3)} color="#CCC8AA" />
							<TextInput
								onChangeText={(value) => (confirmPasswordRef.current = value)}
								style={styles.inputField}
								placeholder="Confirm Password"
								// secureTextEntry
								qaz
							/>
						</View>

						{/* Sign up submit btn */}
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
									onPress={handleSignup}
								>
									<Text style={{ fontSize: hp(3) }}>Sign up</Text>
								</Pressable>
							)}
						</View>
					</View>

					{/* Already signed up */}
					<View style={{ flexDirection: "row", marginTop: hp(3) }}>
						<Text>Already signed up? </Text>
						<Pressable
							style={{
								borderWidth: hp(0.1),
								borderColor: "#F0EBE3",
								borderRadius: 5,
								backgroundColor: "#F0EBE3",
								paddingLeft: hp(1),
								paddingRight: hp(1),
							}}
							onPress={() => router.push("signin")}
						>
							<Text style={{ fontWeight: "bold", color: "#1640D6" }}>
								Sign in
							</Text>
						</Pressable>
					</View>
				</View>
			</View>
		</CustomKeyboardView>
	);
};

export default Signup;

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
	signupImage: {
		width: hp(20),
		height: hp(20),
		resizeMode: "contain",
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
