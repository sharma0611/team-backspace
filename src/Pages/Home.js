// @flow
import React, { Component } from 'react'
import { Image, Box, Flex, Text, Button } from 'rebass'
import styled from 'styled-components'

// assets
import character from '../Images/character.png'
import desktop from '../Images/desktopwhite.png'
import digitize from '../Images/digitize.png'
import web from '../Images/web.png'
import TealGradientBox from '../Components/TealGradientBox'

class Home extends Component {
    render() {
        return (
            <div>
                <Text
                    width={1}
                    p={[4, 6]}
                    color="tel"
                    fontFamily="Bariol"
                    textAlign="center"
                    fontSize={5}
                >
                    Your personal software team.
                </Text>
                <Flex width={1} pt={5} justifyContent="center">
                    <Image src={character} width={200} alignSelf="center" />
                </Flex>
                <TealGradientBox width={1} p={[4, 5]} justifyContent="center">
                    <Flex justifyContent="space-evenly" py={5} flexWrap="wrap">
                        <Text
                            order={[2, 1]}
                            color="white"
                            textAlign={['center', 'left']}
                            width={[1, 1 / 2]}
                            fontSize={[4, 5]}
                        >
                            We make custom software solutions to take your business to the next
                            level.
                        </Text>
                        <Flex
                            order={[1, 2]}
                            justifyContent={['center', 'flex-end']}
                            width={[1, 1 / 4]}
                            pb={[5, 0]}
                        >
                            <Image src={desktop} width={180} alignSelf="center" />
                        </Flex>
                    </Flex>

                    <Flex justifyContent="space-evenly" py={5} flexWrap="wrap">
                        <Text
                            order={2}
                            color="white"
                            textAlign={['center', 'right']}
                            width={[1, 1 / 2]}
                            fontSize={[4, 5]}
                        >
                            We find ways to streamline operations, automate tasks, and better manage
                            your data.
                        </Text>
                        <Flex
                            order={1}
                            justifyContent={['center', 'flex-start']}
                            width={[1, 1 / 4]}
                            pb={[5, 0]}
                        >
                            <Image src={digitize} width={350} alignSelf="center" />
                        </Flex>
                    </Flex>

                    <Flex justifyContent="space-evenly" py={5} flexWrap="wrap">
                        <Text
                            order={[2, 1]}
                            color="white"
                            textAlign={['center', 'left']}
                            width={[1, 1 / 2]}
                            fontSize={[4, 5]}
                        >
                            Websites, inventory tracking, algorithmic quoting, customer management,
                            and beyond; we do it all.
                        </Text>
                        <Flex
                            order={[1, 2]}
                            justifyContent={['center', 'flex-end']}
                            width={[1, 1 / 4]}
                            pb={[5, 0]}
                        >
                            <Image src={web} width={180} alignSelf="center" />
                        </Flex>
                    </Flex>
                </TealGradientBox>
                <Text width={1} fontFamily="Bariol" fontSize={5} color="tel" p={[5, 6]}>
                    Ever wondered how tech could revolutionize your business? <br /> <br /> Give us
                    a call today for a free consultation. <br />
                    Seriously, it’s on the house.
                </Text>
            </div>
        )
    }
}

export default Home
