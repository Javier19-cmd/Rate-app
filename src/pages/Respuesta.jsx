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

const Country = ({item}) => {
    return (
        <View>
            <Text>{item.name}</Text>
            <Text>{item.code}</Text>
            <Text>{item.capital}</Text>
            <Text>{item.currency}</Text>
        </View>
    )
}


const Respuesta = () => {
    const {data} = useQuery(QUERY)

    console.log(data.countries)

    return (
        <View>
            <Text>{JSON.stringify(data.countries, null, 2)}</Text>
        </View>
    )
}

export default Respuesta