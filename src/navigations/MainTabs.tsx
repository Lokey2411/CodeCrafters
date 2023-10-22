import Home from "../screens/Home";
import { StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { BottomTabsParams } from "./config";
import { getColor, useTheme } from "native-base";
import Lesson from "../screens/Lesson";
import GameScreen from "../screens/GameScreen";
import Quizz from "../screens/Quizz";
import { Cup } from "iconsax-react-native";
import Game from "iconsax-react-native";
import LinearGradient from "react-native-linear-gradient";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const MainTabs = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName="Home"
		>
			<Stack.Screen
				name="Lesson"
				component={Lesson}
			/>
			<Stack.Screen
				name="Game"
				component={GameScreen}
			/>
			<Stack.Screen
				name="Quiz"
				component={Quizz}
			/>
			<Stack.Screen
				name="Home"
				component={Home}
			/>
		</Stack.Navigator>
	);
};

export default MainTabs;

const styles = StyleSheet.create({});
