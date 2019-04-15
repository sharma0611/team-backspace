// @flow
import React, { Component } from 'react'
import logo from '../Images/logo.png'
import { Image, Box, Flex, Text } from 'rebass'

class Home extends Component {
    render() {
        return (
            <div>
                <Flex flexDirection="row" alignItems="center">
                    <Text width={[1 / 3]} fontSize={4} fontFamily="Bariol" textAlign="center">
                        About us
                    </Text>
                    <Image px={6} py={4} width={[1 / 3]} alignSelf="center" src={logo} />
                    <Text width={[1 / 3]} fontSize={4} fontFamily="Bariol" textAlign="center">
                        Clients
                    </Text>
                </Flex>
                <Text
                    width={1}
                    pt={4}
                    color="tel"
                    fontFamily="Bariol"
                    textAlign="center"
                    fontSize={5}
                >
                    Your personal software team.
                </Text>
            </div>
        )
    }
}

export default Home
