// @flow
import React, { Component } from 'react'
import { Flex, Box, Text, Button } from 'rebass'
import styled from 'styled-components'
import TealGradientBox from './TealGradientBox'

const PurpleButton = styled(Button)`
    background-image: linear-gradient(to top, #9040b0, #b167d2);
    &:active {
        background-image: linear-gradient(to bottom, #9040b0, #b167d2);
    }
    font-family: Bariol;
    font-weight: 100;
    padding-left: 36px;
    padding-right: 36px;
    padding-top: 18px;
    padding-bottom: 18px;
`
const InputBox = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    font-size: 18px;
    font-family: Bariol;
    box-sizing: border-box;
`

const BigInputBox = styled.textarea`
    width: 100%;
    padding: 12px 20px;
    height: 250px;
    margin: 8px 0;
    font-size: 18px;
    font-family: Bariol;
    box-sizing: border-box;
    line-height: 34px;
`

class ContactForm extends Component {
    render() {
        return (
            <TealGradientBox px={[5, 6]} py={5}>
                <Text width={1} fontFamily="Bariol" fontSize={5} color="white">
                    Contact Us
                </Text>
                <Flex flexWrap="wrap" justifyContent="space-between">
                    <Box width={[1, 2 / 5]}>
                        <Text
                            width={1}
                            fontFamily="Bariol"
                            fontSize={5}
                            color="white"
                            pt={5}
                            pb={2}
                        >
                            Name
                        </Text>
                        <InputBox type="text" name="name" placeholder="John Smith" />
                    </Box>
                    <Box width={[1, 2 / 5]}>
                        <Text
                            width={1}
                            fontFamily="Bariol"
                            fontSize={5}
                            color="white"
                            pt={[3, 5]}
                            pb={2}
                        >
                            Email
                        </Text>
                        <InputBox type="text" name="email" placeholder="johnsmith@gmail.com" />
                    </Box>
                </Flex>
                <Text width={1} fontFamily="Bariol" fontSize={5} color="white" pt={[3, 5]} pb={2}>
                    How can we help?
                </Text>
                <BigInputBox
                    type="text"
                    name="name"
                    placeholder="I want to know how tech could help my business succeed…
I have this idea.. but I want to know if it’s feasible…
I want a website made…"
                />
                <Flex py={3} justifyContent="center">
                    <PurpleButton fontSize={3}>Submit</PurpleButton>
                </Flex>
            </TealGradientBox>
        )
    }
}

export default ContactForm
