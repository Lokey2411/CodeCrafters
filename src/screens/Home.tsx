import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CardItem from "../components/Main/CardItem";
import { STYLES, colors } from "../constansts/style";
import { Box, Image } from "native-base";
import { homeCardList } from "../constansts/navigations";
import HomeCard from "../components/Home/HomeCard";
import BackgroundLayout from "../components/BackgroundLayout";

type Props = {};

const Home = (props: Props) => {
	return (
		<Box
			flex={1}
			justifyContent={"center"}
			alignItems={"center"}
			bg={"#000"}
			px={6}
		>
			<Image
				source={require("../../assets/image/logo/logo.jpg")}
				alt="LOGO"
				w={"100%"}
				resizeMode="cover"
				h={20}
			/>
			{homeCardList.map((cardProps) => (
				<HomeCard
					{...cardProps}
					key={cardProps.navigateTo}
				/>
			))}
		</Box>
	);
};

export default Home;

const styles = StyleSheet.create({});
