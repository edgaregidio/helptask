import styled from 'styled-components/native'
import theme from '../../theme'

export const Form = styled.View``

export const Title = styled.Text`
  font-size: 32px;
  margin-bottom: 24px;
  align-self: flex-start;
  font-family: ${theme.FONTS.TITLE};
  color: ${theme.COLORS.TEXT};
`

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`
