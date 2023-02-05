import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

import { Container, Title } from './styles'

const FooterButton = ({ title, icon, ...rest }) => (
  <Container {...rest}>
    <MaterialIcons name={icon} size={24} />
    <Title>{title}</Title>
  </Container>
)

export default FooterButton
