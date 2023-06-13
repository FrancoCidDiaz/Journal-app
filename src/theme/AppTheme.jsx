import React from 'react'
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material'
import { purpleTheme } from './purpleTheme';

const AppTheme = ({ children }) => {

const theme = useTheme()

  return (
    <ThemeProvider theme={purpleTheme}>
    <CssBaseline/>
     { children }
    </ThemeProvider> 
  )
}

export default AppTheme