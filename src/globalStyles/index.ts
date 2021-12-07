import { StyleSheet } from "react-native"
import { FONT_WEIGHT, PADDING } from "../constants/styling";

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
    }
});

