import styled from 'styled-components'

export const StyledButton = styled.button`
    border: 1px solid #ddd;
    background-color: #eee;
    height: 30px;
    ${({width}) => {
        return `
            width: ${width}
        `
    }}
    &:focus {
        outline:0;
    }
    &:hover {
        background-color: #ddd;
        cursor: pointer;
    }
`