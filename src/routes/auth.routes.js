import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignIn from '../screens/SignIn'
import Register from '../screens/Register'

const { Navigator, Screen } = createNativeStackNavigator()

const AuthRoutes = ({ theme }) => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="signIn" component={SignIn} initialParams={{ theme }} />
      <Screen name="register" component={Register} />
    </Navigator>
  )
}

export default AuthRoutes
