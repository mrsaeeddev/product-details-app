import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { globalStyles } from "../../globalStyles";
import { MainCategoryProps } from "./interface";

const styles = StyleSheet.create({
    coverImage: {
        height: 300,
        resizeMode: 'stretch',
        borderRadius: 20,
    }
});

function MainCategoryBanner(props: MainCategoryProps) {
    return (<View style={globalStyles.container}>
        <ImageBackground
            style={[styles.coverImage, globalStyles.alignItemsCenter]}
            imageStyle={{ borderRadius: 20 }}
            source={require('../../images/personalcare.jpg')}
        >
            <Text style={globalStyles.textCenter}>{props.name}</Text>
        </ImageBackground>
    </View>)
}

export default MainCategoryBanner;