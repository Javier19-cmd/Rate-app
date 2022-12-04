import React from 'react'
import {View} from 'react-native'
import StyledText from './StyledText'

const parseThousands = (number) => {
    return number >= 1000 
    ?  `${Math.round(number / 1000)}k`: String(number)
}

const RepositoryStats = (props) => {
    // En React Native la dirección es al revés, es decir, flexDirection: 'column' es vertical y flexDirection: 'row' es horizontal.
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            {/* Cada vista invierte la dirección original */}
            <View>
                <StyledText align='center' fontWeight='bold'>Forks</StyledText>
                <StyledText align='center'>{parseThousands(props.forksCount)}</StyledText>
            </View>

            <View>
                <StyledText align='center' fontWeight='bold'>Stars</StyledText>
                <StyledText align='center'>{parseThousands(props.stargazersCount)}</StyledText>
            </View>

            <View>
                <StyledText align='center' fontWeight='bold'>Reviews</StyledText>
                <StyledText align='center'>{parseThousands(props.reviewCount)}</StyledText>
            </View>

            <View>
                <StyledText align='center' fontWeight='bold'>Rating</StyledText>
                <StyledText align='center'>{parseThousands(props.ratingAverage)}</StyledText>
            </View>

        </View>
    )
}

export default RepositoryStats