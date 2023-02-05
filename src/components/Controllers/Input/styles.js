import React from 'react'
import styled from 'styled-components/native'
import { TextInput } from 'react-native'
import theme from '../../../theme'

const Container = styled(TextInput).attrs(() => ({
  placeholderTextColor: theme.COLORS.SUBTEXT
}))`
  width: 100%;
  height: 56px;
  background-color: ${theme.COLORS.WHITE};
  border-radius: 12px;
  font-size: 14px;
  padding: 7px 0;
  padding-left: 20px;
  margin-bottom: 12px;
  font-family: ${theme.FONTS.TEXT};
  border: 1px solid ${theme.COLORS.BORDER};
  color: ${theme.COLORS.TEXT};
`

export { Container }
