import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { PRIMARY_COLOR } from "../../constants/styling";
import { globalStyles } from "../../globalStyles";
import { subcategory } from "./interface";

const styles = StyleSheet.create({
    inactive: {
        width: wp('10%'),
        height: 50,
        backgroundColor: PRIMARY_COLOR,
        resizeMode: 'stretch',
        borderRadius: 10,
        marginRight: 15,
    },
});

function SubCategory(props: subcategory) {
    return (<TouchableOpacity onPress={() => props.handlePress(props.subcategory)}><View style={[styles.inactive, globalStyles.alignItemsCenter]}><Text style={[globalStyles.textCenter, globalStyles.boldText]}>{props.subcategory}</Text></View></TouchableOpacity>)
}

export default SubCategory;
