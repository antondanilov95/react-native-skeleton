import {StyleSheet} from "react-native";
import {horizontalScale} from "../../utils/sizes";
import {colors} from "../../styles";


export default StyleSheet.create({
    title: {
        marginTop: horizontalScale(20),
        fontSize: horizontalScale(24),
        textAlign: 'center'
    },
    errorText: {
        color: colors.red,
        marginTop: horizontalScale(20),
        fontSize: horizontalScale(14),
        textAlign: 'center'
    },
    inputsContainer: {
        paddingHorizontal: horizontalScale(20)
    },
    loginButton: {
        marginTop: horizontalScale(15),
        alignSelf: 'center'
    }
})
