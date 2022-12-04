import React from 'react'
import {View, StyleSheet} from 'react-native'
import StyledText from './StyledText.jsx'

const RepositoryStats = (props) => {
    // En React Native la dirección es al revés, es decir, flexDirection: 'column' es vertical y flexDirection: 'row' es horizontal.
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            
            <View>
                <StyledText fontWeight='bold'>Stars</StyledText>
                <StyledText>{props.forksCount}</StyledText>
            </View>

            <View>
                <StyledText fontWeight='bold'>Forks</StyledText>
                <StyledText>{props.stargazersCount}</StyledText>
            </View>

            <View>
                <StyledText fontWeight='bold'>Reviews</StyledText>
                <StyledText>{props.reviewCount}</StyledText>
            </View>

            <View>
                <StyledText fontWeight='bold'>Rating</StyledText>
                <StyledText>{props.ratingAverage}</StyledText>
            </View>

        </View>
    )
}

const RepositoryItem = (props) => {
    return (
        <View key={props.id} style={styles.container}>
            <StyledText fontSize='subheading' fontWeight='bold'>{props.id}</StyledText>
            <StyledText>FullName: {props.fullName}</StyledText>
            <StyledText>Description: {props.description}</StyledText>
            <StyledText>Language: {props.language}</StyledText>
            <RepositoryStats {...props}/>
        </View>
    )
}

const styles = StyleSheet.create({ //Estilos. Esto es la forma adecuada de escribir los estilos en React Native.
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5,
    }, // Estilo del contenedor.
    strong: {
        color: '#09f',
        fontWeight: 'bold',
        marginBottom: 5,
    } // Estilo del texto.
}) // Estilos de la vista.

export default RepositoryItem