import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { globalStyles } from "../../globalStyles";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    coverImage: {
        height: 300,
        resizeMode: 'stretch',
        borderRadius: 20,
    }
});

function MainCategoryBanner() {
    return (<View style={globalStyles.container}>
        <ImageBackground
            style={[styles.coverImage, globalStyles.alignItemsCenter]}
            imageStyle={{ borderRadius: 20 }}
            source={require('../../images/personalcare.jpg')}
        >
            <Text style={globalStyles.textCenter}>Saeed</Text>
        </ImageBackground>
    </View>)
}

export default MainCategoryBanner;