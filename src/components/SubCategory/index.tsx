import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../../globalStyles";
import { subcategory } from "./interface";

function SubCategory(props: subcategory) {
    return (<>
        <TouchableOpacity onPress={() => props.handlePress(props.subcategory)}>
            <View style={[globalStyles.inactive, globalStyles.alignItemsCenter]}>
                <Text style={[globalStyles.textCenter, globalStyles.boldText]}>{props.subcategory}</Text>
            </View>
        </TouchableOpacity></>)
}

export default SubCategory;
