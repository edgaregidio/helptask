import React from 'react'
import { View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignIn from '../screens/SignIn'
import Register from '../screens/Register'

const { Navigator, Screen } = createNativeStackNavigator()

const AuthRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="signIn" component={SignIn} />
      <Screen name="register" component={Register} />
    </Navigator>
  )
}

export default AuthRoutes
