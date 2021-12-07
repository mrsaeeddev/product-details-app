import React from "react";
import { View, StyleSheet } from "react-native";
import SubCategory from "../SubCategory";
import { globalStyles } from "../../globalStyles";
import { subCategories } from "./interface";

const styles = StyleSheet.create({
    grid: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
})

function SubCategorySelector(props: subCategories) {
    return (<View style={[globalStyles.container, styles.grid]}>{props.subcategories.map((v, i) => <SubCategory subcategory={v} />)}</View>)
}

export default SubCategorySelector;
