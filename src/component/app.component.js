import React, { Component } from "react"
import IconKeyboard from '@material-ui/icons/KeyboardOutlined';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import {
    Content,
    PincodeBlock,
    PincodeWrapper,
    Wrapper,
    WrapperHead,
    Text,
    PincodeInput,
    KeyboardButton,
    SendButton,
    PincodeInputWrapper
} from './app.styles'

const PinCode = () =>{

    const [toggle, setToggle] = React.useState(false)
        return (
            <Content>
                <Wrapper>
                    <WrapperHead>
                        <h2>Pincode singup</h2>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quaerat.</Text>
                    </WrapperHead>
                    <PincodeWrapper>
                        <PincodeBlock toggle={toggle}>
                            <KeyboardButton>
                                <IconKeyboard>keyboard_alt</IconKeyboard>
                            </KeyboardButton>
                            <PincodeInputWrapper>
                                <PincodeInput  type="password" autoFocus maxLength="4" />
                            </PincodeInputWrapper>
                            <SendButton  onClick={() => setToggle(toggle ? false : true)} disable={toggle}>
                                <ArrowForwardOutlinedIcon>arrow_forward</ArrowForwardOutlinedIcon>
                            </SendButton>
                        </PincodeBlock>
                    </PincodeWrapper>

                </Wrapper>
            </Content>
        )
}
export default PinCode;