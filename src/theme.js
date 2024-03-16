import { Platform } from "react-native"

const theme = {
    appBar: {
        primary: '#24292e',
        secondary: '#888',
        primaryText: '#fefefe'
    },
    colors: {
        textPrimary: '#24292e',
        textSecondary: '#586069',
        primary: '#0366d6',
        white: '#fefefe'
    },
    fontSizes: {
        body: 14,
        subHeading: 16
    },
    fonts: {
        main: Platform.select({
           ios: 'Arial',
           android: 'Roboto',
           default: 'System' 
        })
    },
    fontWeights: {
        normal: '400',
        bold: '700'
    }
}
export default theme