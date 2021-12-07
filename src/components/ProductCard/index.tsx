import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BLUE_COLOR, FONT_WEIGHT, PADDING, PADDING_HORIZONTAL, PADDING_VERTICAL, PRIMARY_COLOR } from "../../constants/styling";
import { globalStyles } from "../../globalStyles";
import { productProps } from "./interface";

const styles = StyleSheet.create({
    coverImage: {
        width: wp('42%'),
        padding: PADDING,
        height: 200,
        borderRadius: 20,
    },
    item: {
        width: wp('50%'),
        alignItems: "center",
        paddingLeft: PADDING_HORIZONTAL,
        paddingTop: PADDING_VERTICAL,
        paddingRight: PADDING_HORIZONTAL,
        justifyContent: "flex-start"
    },
    content: {
        width: wp('42%'),
        alignItems: "flex-start",
    },
    brandName: {
        color: BLUE_COLOR,
        paddingTop: 5,
        paddingBottom: 5,
    }
});

function ProductCard(props: productProps) {
    return (<View style={styles.item}><Image
        style={styles.coverImage}
        source={require('../../images/personalcare.jpg')}
    />
        <View style={styles.content}>
            <Text style={[globalStyles.boldText, styles.brandName]}>{props.product.brand.name}</Text>
            <Text style={globalStyles.boldText}>{props.product.name}</Text>
            <Text style={globalStyles.boldText}>{props.product.price}</Text>
        </View>
    </View>)
}

export default ProductCard;
