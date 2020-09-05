import {StyleSheet} from "react-native";
import {horizontalScale} from "../../utils/sizes";
import {colors, sizes} from "../../styles";


export default StyleSheet.create({
    navContainer: {
        borderTopColor: colors.lightBlack,
        borderTopWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: horizontalScale(60),
        paddingBottom: sizes.isIphoneX ? 15 : 0
    },
    navButton: {
        alignItems: 'center',
    },
    navIcon: {
        height: horizontalScale(24),
        width: horizontalScale(24),
    },
    navText: {
        fontSize: horizontalScale(12),
    },
})
