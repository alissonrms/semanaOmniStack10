import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Main from './pages/Main'
import Profile from './pages/Profile'

const Stack = createStackNavigator()

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions = {{
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: '#6787d0'
          },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen
          name = "Main"
          component = {Main}
          options = {{
            title: "DevRadar",
          }}
        />
        <Stack.Screen
          name =  "Profile"
          component = {Profile}
          options = {{
            title: "Perfil no github",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}