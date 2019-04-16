// @flow
import React, { Component } from 'react'
import { Flex, Box, Text, Image } from 'rebass'
import styled from 'styled-components'

type Props = {
    name: string,
    description: string,
    link: string,
    logo: string
}

class ClientBox extends Component<Props> {
    render() {
        const { name, description, link, logo } = this.props

        return (
            <Flex p={5} justifyContent="space-evenly">
                <Flex width={1 / 4} justifyContent="center">
                    <Image src={logo} width={200} alignSelf="center" />
                </Flex>
                <Box width={3 / 4} px={4}>
                    <Text fontFamily="Bariol" fontSize={4}>
                        {name} <br /> <br />
                    </Text>
                    <Text fontFamily="Bariol" fontSize={'20px'}>
                        {description} <br />
                        <br />
                        {link}
                    </Text>
                </Box>
            </Flex>
        )
    }
}

export default ClientBox
