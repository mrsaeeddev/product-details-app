import React from "react";
import { View, Image, StyleSheet } from "react-native";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    coverImage: {
        width: wp('42%'),
        padding: 20,
        height: 200,
        borderRadius: 20,
    },
    item: {
        width: wp('50%'),
        alignItems: "center",
        paddingLeft: 30,
        paddingTop: 30,
        paddingRight: 30,

    }
});

function ProductCard() {
    return (<View style={styles.item}><Image
        style={styles.coverImage}
        source={require('../../images/personalcare.jpg')}
    /></View>)
}

export default ProductCard;
