import React from 'react'
import {TextInput, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        margin: 10
    },
    error: {
        borderColor: 'red'
    }
})

const StyledTextInput = ({style = {}, error, ...props}) => {
    const textInputStyle = [
        styles.textInput,
        style, 
        error && styles.error
    ]

    return <TextInput style={textInputStyle} {...props} />
}

export default StyledTextInput