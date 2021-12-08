import { StyleSheet } from "react-native"
import { FONT_WEIGHT, PADDING, PRIMARY_COLOR } from "../constants/styling";
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const globalStyles = StyleSheet.create({
    container: {
        padding: PADDING
    },
    textCenter: {
        textAlign: "center",
    },
    alignItemsCenter: {
        alignItems: "center",
        justifyContent: "center"
    },
    boldText: {
        fontWeight: FONT_WEIGHT
    },
    inactive: {
        width: wp('10%'),
        height: 50,
        backgroundColor: PRIMARY_COLOR,
        resizeMode: 'stretch',
        borderRadius: 10,
        marginRight: 15,
    },
});

