import { Dimensions, PixelRatio } from 'react-native';

const { height, width } = Dimensions.get('window');
const originalHeight = 680;
const originalWidth = 380;

const verticalRatio = height / originalHeight;
const verticalScale = amount => verticalRatio * amount;

const horizontalRatio = width / originalWidth;
const horizontalScale = amount => (amount && typeof(amount) === "number") ? horizontalRatio * amount : amount;

const fontRatio = PixelRatio.getFontScale();
const fontScale = value => value/fontRatio;

export { verticalScale, horizontalScale, fontScale, height, width };
