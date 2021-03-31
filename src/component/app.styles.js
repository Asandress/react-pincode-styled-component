import styles, { keyframes, css } from 'styled-components'

export const Content = styles.div`
    display:flex;
    flex-grow: 1;
    height: 100vh;
    padding:0 20px;
    background: #fff;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    font-family: Verdana
`

export const WrapperHead =  styles.div`
    text-align: center; color: #987fa7
`

export const Text = styles.p`
    padding:20px;
    margin-bottom: 40px;
`

export const Wrapper = styles.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-content: center;
    align-items: center;
`

const shake = keyframes`
    0% { margin-left: 0rem; }
    25% { margin-left: 0.5rem; }
    75% { margin-left: -0.5rem; }
    100% { margin-left: 0rem; }
`

export const PincodeBlock = styles.div`
    display: flex;
    border:0px #ccc solid;
    border-radius: 16px;
    padding:15px;
    margin:0 10px;
    box-sizing: border-box;
    background: #fff;
    box-shadow: 0 0 10px rgba(152,127,157,0.5);
    animation: ${({toggle})=> toggle ? css `
    ${shake} 0.2s ease-in-out 0s 2;`:``}
`

export const PincodeWrapper = styles.div`
`

export const PincodeInputWrapper = styles.div`
    flex-grow: 2;
    align-content: center;
    align-items: stretch;
    justify-content: center;
    display: flex;
`

export const PincodeInput = styles.input`
font: small-caption;
    font-size: 28px;
    margin: 0 10px;
    box-sizing: border-box;
    border-radius: 16px;
    border: 0px solid #ccc;
    text-align: center;
    color: #987fa7;
    letter-spacing: 12px;
    box-shadow: 0 0 3px rgba(0,0,0,0.1);
    &:focus {
        outline: none;
    }
    
`

export const Button = styles.button`
    border-radius: 16px;
    padding:10px;
    height: 48px;
    width:48px;
    flex-grow: 1;
    display:flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border:0;
    outline: none;
    &:focus {
        outline: none;
    }
    &active {
        background-color:lightskyblue;
    }
    
`

export const KeyboardButton = styles(Button)`
    background: #e2e6dd;
    color:#987fa7;
`

export const SendButton = styles(Button)`
    background: #8bc34a;
    color:#fff;
`
const Error = styles.div`
animation: ${shake} 0.2s ease-in-out 0s 2;
`


