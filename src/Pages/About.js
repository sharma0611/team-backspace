// @flow
import React, { Component } from 'react'
import { Flex, Box, Text, Image } from 'rebass'
import styled from 'styled-components'

import shivam from '../Images/ShivamBitmoji.png'
import shady from '../Images/ShadyBitmoji.png'
import max from '../Images/MaxBitmoji.png'
import maxAlt from '../Images/MaxBitmoji2.png'

class About extends Component {
    render() {
        return (
            <div>
                <Text
                    width={1}
                    p={[5, 6]}
                    color="tel"
                    fontFamily="Bariol"
                    textAlign="center"
                    fontSize={[4, 5]}
                >
                    We’re a team of software engineers, product designers, and data scientists based
                    in Waterloo.
                </Text>
                <Flex justifyContent="space-around" px={[3, 3, 6]} flexWrap="wrap">
                    <Flex
                        flexDirection="column"
                        alignItems="center"
                        onClick={e =>
                            window.open(
                                'https://www.linkedin.com/in/shivam-sharma-245187107/',
                                '_blank'
                            )
                        }
                    >
                        <Image src={shivam} height={350} alignSelf="center" />
                        <Text pt={3} textAlign="center" fontFamily="Bariol" fontSize={3}>
                            Shivam
                        </Text>
                    </Flex>
                    <Flex
                        onClick={e =>
                            window.open('https://www.linkedin.com/in/max-theodore-jakel/', '_blank')
                        }
                        flexDirection="column"
                        alignItems="center"
                    >
                        <Image
                            src={max}
                            height={350}
                            alignSelf="center"
                            onMouseOver={e => (e.currentTarget.src = maxAlt)}
                            onPress={e => (e.currentTarget.src = maxAlt)}
                            onMouseOut={e => (e.currentTarget.src = max)}
                        />
                        <Text pt={3} textAlign="center" fontFamily="Bariol" fontSize={3}>
                            Max
                        </Text>
                    </Flex>
                    <Flex
                        flexDirection="column"
                        alignItems="center"
                        onClick={e =>
                            window.open('https://www.linkedin.com/in/matthewvukojevic/', '_blank')
                        }
                    >
                        <Image src={shady} height={350} alignSelf="center" />
                        <Text pt={3} textAlign="center" fontFamily="Bariol" fontSize={3}>
                            Matt
                        </Text>
                    </Flex>
                    <Flex
                        flexDirection="column"
                        alignItems="center"
                        onClick={e =>
                            window.open('https://www.linkedin.com/in/theshadyibrahim/', '_blank')
                        }
                    >
                        <Image src={shady} height={350} alignSelf="center" />
                        <Text pt={3} textAlign="center" fontFamily="Bariol" fontSize={3}>
                            Shady
                        </Text>
                    </Flex>
                    <Flex
                        flexDirection="column"
                        alignItems="center"
                        onClick={e => window.open('https://www.linkedin.com/in/fukouda/', '_blank')}
                    >
                        <Image src={shady} height={350} alignSelf="center" />
                        <Text pt={3} textAlign="center" fontFamily="Bariol" fontSize={3}>
                            Nasr
                        </Text>
                    </Flex>
                </Flex>
                <Text
                    width={1}
                    p={[5, 6]}
                    color="tel"
                    fontFamily="Bariol"
                    textAlign="center"
                    fontSize={[4, 5]}
                >
                    Our mission is to make tech more accessible to every small-medium size business
                    in Ontario.
                    <br /> <br />
                    Everyone should reap the benefits of tech. <br />
                    Not just the big guys.
                </Text>
            </div>
        )
    }
}

export default About
