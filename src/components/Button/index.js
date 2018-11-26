import React from 'react'
import {StyledButton} from './button.style'

export default ({...props}) => {
    return <StyledButton {...props}>{props.children}</StyledButton>
}