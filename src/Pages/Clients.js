// @flow
import React, { Component } from 'react'
import { Image, Flex, Box, Text } from 'rebass'
import styled from 'styled-components'

// assets
import finimize from '../Images/FinimizeBlue.png'
import aplus from '../Images/aplus.png'
import tpg from '../Images/tpglogo.png'
import feelgood from '../Images/feelgoodlogo.png'

// components
import ClientBox from '../Components/ClientBox'

const CUSTOMERS = [
    {
        name: 'A+ Window Cleaning Inc.',
        description:
            'We built a client management system for A+. Our software manages bookings, sends reminder texts the day before, and plans cleaning routes for crews. Today, they serve over 50,000 homes in the GTA.',
        link: 'www.apluswindowcleaning.ca',
        logo: aplus
    },
    {
        name: 'Finimize',
        description:
            'We helped Finimize build out parts of their mobile app and website. Today, they have over 300,000 users worldwide.',
        link: 'www.finimize.com',
        logo: finimize
    },
    {
        name: 'TPG Presents',
        description:
            'We built event websites and performed SEO for TPG. They hosted Lil Yachty in London, Ontario in 2018.',
        link: 'www.tpgpresents.com',
        logo: tpg
    },
    {
        name: 'FeelGood',
        description:
            'We helped FeelGood in their mission to promote healthy living through international e-commerce by building out their payments infrastructure.',
        link: 'www.feelgood.com',
        logo: feelgood
    }
]

class Clients extends Component {
    render() {
        return (
            <div>
                <Box p={[1, 5]}>
                    {CUSTOMERS.map(({ name, description, link, logo }) => (
                        <ClientBox {...{ name, description, link, logo }} />
                    ))}
                </Box>
                <Text
                    width={1}
                    pb={[5]}
                    color="tel"
                    fontFamily="Bariol"
                    textAlign="center"
                    fontSize={[4, 5]}
                >
                    Have questions? Just ask.
                </Text>
            </div>
        )
    }
}

export default Clients
