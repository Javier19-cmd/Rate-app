import React from 'react'
import {View, StyleSheet, Image, Platform} from 'react-native'
import StyledText from './StyledText.jsx'
import RepositoryStats from './RepositoryStats.jsx'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import theme from '../theme.js'


const RepositoryItemHeader = (props) => (
    <View style = {{flexDirection: 'row', paddingBottom: 2}}>

        {/*Esta view se queda donde está y usa sus espacio*/}
        <View style={{paddingRight: 10}}> 
            <Image style={styles.image} source={{ uri:props.ownerAvatarUrl }} />
        </View>
        
        {/* Esta view ocupa todo els espacio que puede */}
        <View style={{flex: 1}}>
            <StyledText fontWeight='bold'>{props.id}</StyledText>
            <StyledText color='secondary'>FullName: {props.fullName}</StyledText>
            <StyledText>Description: {props.description}</StyledText>
            <StyledText style={styles.language}>{props.language}</StyledText>
        </View>
    
    </View>
)

const RepositoryItem = (props) => {
    return (
        <View key={props.id} style={styles.container}>
            <RepositoryItemHeader {...props}/>
            <RepositoryStats {...props}/>
        </View>
    )
}

const styles = StyleSheet.create({ //Estilos. Esto es la forma adecuada de escribir los estilos en React Native.
    // Propiedades del contenedor.
    container: {
        padding: 20,
        paddingVertical: 5,
    }, 
    strong: {
        color: '#09f',
        fontWeight: 'bold',
        marginBottom: 5,
    }, 
    // Propiedades del texto de lenguaje.
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: Platform.select({
            android: theme.colors.primary,
            ios: 'orange',
            default: 'purple',
        }),
        alignSelf: 'flex-start',
        borderRadius: 4,
        marginVertical: 4,
        overflow: 'hidden',
    },
    
    // Propiedades de la imagen.
    image: {
        width: 50,
        height: 50,
        borderRadius: 4,
    }
}) // Estilos de la vista.

export default RepositoryItem