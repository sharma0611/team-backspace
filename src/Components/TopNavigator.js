// @flow
import React, { Component } from 'react'
import { Flex, Box, Text, Image } from 'rebass'
import styled from 'styled-components'
import logo from '../Images/logo.png'
import { NavLink, Link } from 'react-router-dom'
import { colors } from '../Theme'

const StyledLink = styled(NavLink)`
    text-decoration: none;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
    }
    &:hover {
        color: ${colors.purp};
    }
`
class TopNavigator extends Component {
    render() {
        return (
            <Flex
                flexDirection="row"
                flexWrap="wrap"
                justifyContent="space-between"
                alignItems="center"
                pt={4}
            >
                <Text
                    order={[2, 1]}
                    width={[1, 1 / 3]}
                    fontSize={4}
                    py={3}
                    fontFamily="Bariol"
                    textAlign="center"
                    color="black"
                >
                    <StyledLink to="/about/" activeStyle={{ color: colors.purp }}>
                        About Us
                    </StyledLink>
                </Text>
                <Box order={[1, 2]} p={[4, 1]} width={[1, 1 / 5]} alignSelf="center">
                    <Link to="/">
                        <Image alignSelf="center" src={logo} />
                    </Link>
                </Box>
                <Text
                    order={3}
                    width={[1, 1 / 3]}
                    py={3}
                    fontSize={4}
                    fontFamily="Bariol"
                    textAlign="center"
                >
                    <StyledLink to="/clients/" activeStyle={{ color: colors.purp }}>
                        Clients
                    </StyledLink>
                </Text>
            </Flex>
        )
    }
}

export default TopNavigator
