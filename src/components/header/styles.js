import {StyleSheet} from "react-native";
import {horizontalScale} from "../../utils/sizes";
import {sizes} from "../../styles";


export default StyleSheet.create({
    headerContainer: {
        marginTop: Platform.OS === 'ios' ? sizes.statusbarHeight : 0,
        flexDirection: 'row',
        height: horizontalScale(56),
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        paddingHorizontal: horizontalScale(20),
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: horizontalScale(20),
    },
    logoutButton: {

    }
})
