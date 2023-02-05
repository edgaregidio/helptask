import React from 'react'
import { Container, Title, Load } from './styles'

const Button = props => {
  const { title, isLoading = false, ...rest } = props

  return (
    <Container enabled={!isLoading} {...rest}>
      {isLoading ? <Load /> : <Title>{title}</Title>}
    </Container>
  )
}

export default Button
