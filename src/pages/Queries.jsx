import React from 'react'
import {View, Text} from 'react-native'
import {gql, useQuery, ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Respuesta from './Respuesta'

const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com',
    cache: new InMemoryCache()
})

const Queries = () => {
    return (
        <ApolloProvider client={client}>
            <Respuesta/>
        </ApolloProvider>
    )
}

export default Queries