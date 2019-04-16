// @flow
import React, { Component } from 'react'
import { Image, Flex, Box, Text } from 'rebass'
import styled from 'styled-components'

// assets
import finimize from '../Images/FinimizeBlue.png'

// components
import ClientBox from '../Components/ClientBox'

const CUSTOMERS = [
    {
        name: 'Finimize',
        description:
            'We helped Finimize build out parts of their mobile app and website. Today, they have over 300,000 users worldwide.',
        link: 'www.finimize.com',
        logo: finimize
    },
    {
        name: 'Finimize',
        description:
            'We helped Finimize build out parts of their mobile app and website. Today, they have over 300,000 users worldwide.',
        link: 'www.finimize.com',
        logo: finimize
    }
]

class Clients extends Component {
    render() {
        return (
            <Box p={5}>
                {CUSTOMERS.map(({ name, description, link, logo }) => (
                    <ClientBox {...{ name, description, link, logo }} />
                ))}
            </Box>
        )
    }
}

export default Clients
