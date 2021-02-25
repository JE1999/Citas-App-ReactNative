import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'

import RootNavigator from './RootNavigator'

export default function AppNavigation() {
    
    const MyTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            primary: '#841584',
            background: '#fff',        },
    };

    return (
        <NavigationContainer theme={MyTheme}>
            <RootNavigator />
        </NavigationContainer>
    )
}