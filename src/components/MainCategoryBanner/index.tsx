import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { FONT_SIZE_H1, FONT_WEIGHT } from "../../constants/styling";
import { globalStyles } from "../../globalStyles";
import { MainCategoryProps } from "./interface";

const styles = StyleSheet.create({
    coverImage: {
        height: 300,
        resizeMode: 'stretch',
        borderRadius: 20,
    },
    heading: {
        fontSize: FONT_SIZE_H1,
        fontWeight: FONT_WEIGHT,
    }
});

function MainCategoryBanner(props: MainCategoryProps) {
    return (<View style={globalStyles.container}>
        <ImageBackground
            style={[styles.coverImage, globalStyles.alignItemsCenter]}
            imageStyle={{ borderRadius: 20 }}
            source={require('../../images/personalcare.jpg')}
        >
            <Text style={[globalStyles.textCenter, styles.heading]}>{props.name}</Text>
        </ImageBackground>
    </View>)
}

export default MainCategoryBanner;