import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignIn from '../screens/SignIn'
import Register from '../screens/Register'

const { Navigator, Screen } = createNativeStackNavigator()

const AuthRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="register" component={Register} />
      <Screen name="signIn" component={SignIn} />
    </Navigator>
  )
}

export default AuthRoutes
