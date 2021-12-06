import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { globalStyles } from "../../globalStyles";

const styles = StyleSheet.create({
    inactive: {
        width: wp('10%'),
        height: 50,
        backgroundColor: 'lightgray',
        resizeMode: 'stretch',
        borderRadius: 10,
    },
});

function SubCategory() {
    return (<View style={[styles.inactive, globalStyles.alignItemsCenter]}><Text style={globalStyles.textCenter}>Saeed</Text></View>)
}

export default SubCategory;
