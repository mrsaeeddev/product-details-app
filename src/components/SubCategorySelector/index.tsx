import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from "react-native";
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
    console.log(props.subcategories)
    return (
        <View >
            <ScrollView horizontal={true} style={styles.grid}>
                <TouchableOpacity onPress={props.handleAllProducts}>
                    <View>
                        <View style={[globalStyles.inactive, globalStyles.alignItemsCenter]}>
                            <Text style={[globalStyles.textCenter, globalStyles.boldText]} >All Products</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {props.subcategories.map((v, i) =>
                    <SubCategory key={i} subcategory={v} handlePress={() => props.handlePress(v)} handleAllProducts={props.handleAllProducts} />)}
            </ScrollView>
        </View>
    )
}

export default SubCategorySelector;
