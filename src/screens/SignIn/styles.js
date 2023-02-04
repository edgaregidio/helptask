import styled from 'styled-components'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import theme from '../../theme'

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.COLORS.BACKGROUND};
  padding: 24px;
`

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + 48
  }
})`
  width: 100%;
`

export const SubTitle = styled.Text`
  font-size: 13px;
  font-family: ${theme.FONTS.TEXT};
  color: ${theme.COLORS.SUBTEXT};
  text-align: center;
  margin: 12px 0 24px;
`
