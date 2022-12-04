import React from 'react'
import {Text, StyleSheet} from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal,
    },
    colorPrimary:{
        color: theme.colors.primary,
    },
    colorSecundary:{
        color: theme.colors.textSecondary,
    },
    bold: {
        fontWeight: theme.fontWeights.bold,
    }, 
    subheading: {
        fontSize: theme.fontSizes.subheading,
    }, 
})

export default function StyledText({children, color, fontWeight, fontSize, style, ...restOfProps}) {
    const textStyles = [
        styles.text,
        color === 'primary' && styles.colorPrimary,
        color === 'secundary' && styles.colorSecundary,
        fontWeight === 'bold' && styles.bold,
        fontSize === 'subheading' && styles.subheading,
        fontWeight === 'bold' && fontSize === 'subheading' && styles.bold,
    ]
    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}