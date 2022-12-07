import React from 'react'
import {View, Text} from 'react-native'
import {gql, useQuery, ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const QUERY = gql`
query{
    countries{
        name
        code
        capital
        currency
    }
}
`
const Respuesta = () => {


    const {data} = useQuery(QUERY)
    return (
        <View>
            <Text>{JSON.stringify(data.countries, null, 2)}</Text>
        </View>
    )
}

export default Respuesta