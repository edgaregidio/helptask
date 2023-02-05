import styled from 'styled-components/native'
import theme from '../../../theme'

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  font-size: 14px;
  font-family: ${theme.FONTS.TITLE};
  color: ${theme.COLORS.TEXT};
  margin-left: 5px;
`
