import React from 'react'
import {View, StyleSheet} from 'react-native'
import StyledText from './StyledText'
import Constanst from 'expo-constants'
import theme from '../theme'

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        paddingTop: Constanst.statusBarHeight + 10,
        paddingBottom: 10,
        paddingLeft: 10
    },
    text: {
        color: theme.appBar.primaryText,
    }
})

const AppBar = () => {
    return (
        <View style={styles.container}>
            <StyledText fontWeight='bold' style={styles.text}>
                Repositories
            </StyledText>
        </View>
    )
}

export default AppBar