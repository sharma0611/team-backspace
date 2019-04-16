import React from 'react'
import { ThemeProvider } from 'styled-components'
export const colors = {
    black: ['#171E27', '#283444', '#3C4857'], // Darkest to lightest
    frost: ['#F9FAFC', '#F0F2F7', '#E5E9F2'],
    white: '#fff',
    text: '#024',
    tel: '#33CCCC',
    purp: '#9040b0'
}

const theme = {
    fontSizes: [12, 14, 16, 24, 32, 38, 44],
    breakpoints: [600, 900, 1200, 1800],
    colors
}

export default props => <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
