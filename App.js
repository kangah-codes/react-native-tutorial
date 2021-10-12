import { StatusBar } from "expo-status-bar";
import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	Button,
} from "react-native";

/*
TODO
1. Image
2. Text
3. Button
*/

export default function App() {
	return (
		<View style={styles.container}>
			<Image
				style={styles.imageStyle}
				source={require("./assets/bicycle.jpg")}
			/>
			<Text style={styles.welcomeText}>Welcome to</Text>
			<Text style={styles.powerText}>Power Bike Shop</Text>

			<View style={styles.buttonView}>
				<TouchableOpacity style={styles.googleButton}>
					<Text style={styles.buttonText}>Login with Gmail</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.appleButton}>
					<Text style={styles.appleText}>Login with Apple</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.bottomView}>
				<Text style={styles.bottomText}>Not a member?</Text>
				<Text style={styles.orangeText}> Sign up</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	imageStyle: {
		width: 250,
		height: 250,
		borderRadius: 20,
		transform: [{ rotate: "45deg" }],
		marginBottom: 90,
	},
	welcomeText: {
		fontSize: 30,
		textAlign: "center",
	},
	powerText: {
		fontSize: 30,
		textAlign: "center",
		fontWeight: "bold",
	},
	buttonText: {
		fontSize: 20,
		textAlign: "center",
		fontWeight: "bold",
	},
	appleText: {
		color: "white",
		fontSize: 20,
		textAlign: "center",
		fontWeight: "bold",
	},
	googleButton: {
		backgroundColor: "#D3D3D3",
		padding: 10,
		paddingVertical: 15,
		borderRadius: 10,
		marginTop: 20,
	},
	appleButton: {
		backgroundColor: "black",
		padding: 10,
		paddingVertical: 15,
		borderRadius: 10,
		marginTop: 10,
	},
	buttonView: {
		width: "100%",
		paddingHorizontal: 20,
	},
	bottomText: {
		marginTop: 20,
		fontSize: 18,
		color: "#808080",
	},
	bottomView: {
		flexDirection: "row",
	},
	orangeText: {
		color: "#DD6E0F",
		marginTop: 20,
		fontSize: 18,
		fontWeight: "bold",
	},
});
