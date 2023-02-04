import React from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'

import signInAnimation from '../../assets/animations/signin.json'

import SignInForm from '../../components/Form/SignInForm'
import Lottie from '../../components/Animations/Lottie'

import { Container, Content, SubTitle } from './styles'

const SignIn = () => {
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Content>
          <Lottie source={signInAnimation} />
          <SubTitle>Conte conosco, estamos aqui para ajudar.</SubTitle>
          <SignInForm />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  )
}

export default SignIn
