import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Create from '../screens/Create'

const Stack = createStackNavigator();

export default function CreateNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Create" 
                component={Create} 
                options={{
                    title: 'Crear'
                }}
            />
        </Stack.Navigator>
    )
}