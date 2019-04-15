import React from 'react'
import { ThemeProvider } from 'styled-components'
export const colors = {
    black: ['#171E27', '#283444', '#3C4857'], // Darkest to lightest
    frost: ['#F9FAFC', '#F0F2F7', '#E5E9F2'],
    white: '#fff',
    text: '#024',
    navy: '#4669F6',
    tel: '#33CCCC',
    blue: ['#058', '#00b2ff', '#f5f7ff'],
    gray: ['#8392A6', '#D3DCE7', '#C0CCDA', '#F1F5F7'],
    darken: 'rgba(0, 0, 0, 0.25)',
    violet: '#8700ee',
    fuchsia: '#ee00de',
    pink: '#FD2F60',
    red: '#ee1000',
    orange: '#ee8700',
    yellow: '#FFB300',
    lime: '#67ee00',
    green: '#00ee10',
    teal: '#00ee87',
    cyan: '#00deee',
    cosmo: '#FD2F60'
}

const theme = {
    fontSizes: [12, 14, 16, 24, 32, 38, 44],
    breakpoints: [600, 900, 1200, 1800],
    colors
}

export default props => <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
