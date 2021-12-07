import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import SubCategory from "../SubCategory";
import { globalStyles } from "../../globalStyles";
import { subCategories } from "./interface";

const styles = StyleSheet.create({
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 15,
    },
})

function SubCategorySelector(props: subCategories) {
    return (<View style={[globalStyles.container, styles.grid]}>{props.subcategories.map((v, i) => <SubCategory subcategory={v} handlePress={props.handlePress} />)}</View>)
}

export default SubCategorySelector;
