import {Dimensions, PixelRatio, Platform, StatusBar} from 'react-native';
import {horizontalScale} from "./utils/sizes";

const OS = Platform.OS;
const { height, width } = Dimensions.get('window');

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

export const isIPhoneX = () => OS === 'ios' ? width === X_WIDTH && height === X_HEIGHT || width === XSMAX_WIDTH && height === XSMAX_HEIGHT
    : false;

export const statusbarHeight = Platform.select({
    ios: isIPhoneX() ? 44 : 20,
    android: StatusBar.currentHeight,
    default: 0
})

const sizes = {
    isIphone5: Dimensions.get('window').width < 375,
    isIphoneX: isIPhoneX(),
    statusbarHeight,
    windowWidth: Dimensions.get('window').width,
    windowHeight: Dimensions.get('window').height,
    fontSize: PixelRatio.getFontScale()
};

const fonts = {
    main: OS === 'ios' ? 'System' : 'Roboto',
};

const weights = {
    thin: OS === 'ios' ? '100' : 'Thin',
    ultraLight: OS === 'ios' ? '200' : 'ExtraLight',
    light: OS === 'ios' ? '300' : 'Light',
    regular: OS === 'ios' ? '400' : 'Regular',
    medium: OS === 'ios' ? '500' : 'Medium',
    semiBold: OS === 'ios' ? '600' : 'SemiBold',
    bold: OS === 'ios' ? '700' : 'bold',
    heavy: OS === 'ios' ? '800' : 'ExtraBold',
    black: OS === 'ios' ? '900' : 'Black',
};

const fontStyle = {
    normal: 'normal',
    italic: 'italic',
};

const getFont = ({weight = weights.regular, style = fontStyle.normal, family = fonts.main}) => {
    if (OS === 'android') {
        return {
            fontFamily: `${family}-${weight === 'bold' ? 'Bold' : weight}`,
            fontStyle: style
        };
    }

    return {
        fontFamily: family,
        fontWeight: weight,
        fontStyle: style,
    };
};

const colors = {
    blue: '#0060FF',
    white: '#FFFFFF',
    gray: '#595959',
    black: '#000000',
    lightBlack: '#02010A',
    red: '#AB3428',
    errorRed: '#D8000C',
};

const commonStyles = {
    title: {
        fontWeight: weights.bold,
        fontSize: horizontalScale(22),
        lineHeight: 24,
        textAlign:'center',
    },
    error: {
        ...getFont({}),
        fontSize: 14,
        lineHeight: 17,
        opacity: 0.75,
        color: colors.red
    },
};

export {
    sizes,
    fonts,
    colors,
    weights,
    fontStyle,
    commonStyles,
    getFont,
};
