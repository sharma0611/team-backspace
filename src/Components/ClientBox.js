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
            <Flex p={[2, 5]} justifyContent="space-evenly" flexWrap="wrap">
                <Flex width={[1, 1 / 4]} justifyContent="center" py={[5, 1]}>
                    <Image src={logo} width={200} alignSelf="center" />
                </Flex>
                <Box width={[1, 3 / 4]} px={4}>
                    <Text fontFamily="Bariol" fontSize={4} textAlign={['center', 'left']}>
                        {name} <br /> <br />
                    </Text>
                    <Text fontFamily="Bariol" fontSize={'20px'} textAlign={['center', 'left']}>
                        {description} <br />
                        <br />
                        <a href={'http://' + link} target="_blank">
                            {link}
                        </a>
                    </Text>
                </Box>
            </Flex>
        )
    }
}

export default ClientBox
