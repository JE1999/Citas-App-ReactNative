import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home'

const Stack = createStackNavigator();

export default function HomeNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                component={Home} 
                options={{
                    title: 'Citas APP',
                    headerStyle: {
                        backgroundColor: '#841584',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
        </Stack.Navigator>
    )
}