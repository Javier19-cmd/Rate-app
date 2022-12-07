import React from 'react'
import {View, Text} from 'react-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import {Route, Routes} from 'react-router-native'
import Login from '../pages/Login'
import Queries from '../pages/Queries'

const Main = () => {
    return (
        <View style={{flex: 1}}>
            <AppBar />
            <Routes>
                <Route path="/" element={<RepositoryList />} />
                <Route path="/signin" element={<Login/>} />
                <Route path="/queries" element={<Queries/>} />
            </Routes>
            
        </View>
    )
}


export default Main