import React from 'react'
import {Text, FlatList} from 'react-native'
import repositories from '../data/repositories'
import RepositoryItem from './RepositoryItem'

const RepositoryList = () => {
    {/*En este caso se usará FlatList, porque se está renderizando una lista de repositorios, no un texto.*/}
    return (
        <FlatList 
            data={repositories}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({item: repo}) => (
                <RepositoryItem {...repo} />
            )}
        >
        </FlatList>
    )
}

export default RepositoryList