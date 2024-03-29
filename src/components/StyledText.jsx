import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from '../theme.js'
const styles = StyleSheet.create({
    text: {
        fontSize: theme.fontSizes.body,
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    colorPrimary: {
        color: theme.colors.primary
    },
    colorSecondary: {
        color: theme.colors.textSecondary
    },
    bold: {
        fontWeight: theme.fontWeights.bold
    },
    subHeading: {
        fontSize: theme.fontSizes.subHeading
    },
    textAlignCenter: {
        textAlign: 'center'
    }
})

export default function StyledText ({children, align, color, fontSize, fontWeight,
    style, ...restOfProps}) {
    const textStyles = [
        styles.text,
        style,
        align === 'center' && styles.textAlignCenter,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontSize === 'subheading' && styles.subHeading,
        fontWeight === 'bold' && styles.bold
    ]
    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}