import {StyleSheet} from "react-native";

export default StyleSheet.create({
    menuContainer: {
        padding: 20,
    },
    itemsContainer: {
        marginTop: 10,
        aspectRatio: 1 / 1.5
    },
    button: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    logo: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 20,
        lineHeight: 20,
    },
    icon: {
        height: 24,
        width: 24,
        marginRight: 10
    }
});
