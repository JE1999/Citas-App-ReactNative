import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Home from './HomeNavigator'
import Create from './CreateNavigator'

const Stack = createStackNavigator();

export default function RootNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Create" component={Create} />
        </Stack.Navigator>
    )
}