import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import theme from '../../../theme'

export const Container = styled(RectButton)`
  width: 100%;
  height: 56px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.COLORS.PRIMARY};
`

export const Title = styled.Text`
  font-size: 14px;
  color: ${theme.COLORS.WHITE};
  font-family: ${theme.FONTS.TEXT};
`

export const Load = styled.ActivityIndicator.attrs({
  color: theme.COLORS.WHITE
})``
