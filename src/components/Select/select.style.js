import styled from 'styled-components'

export const StyledSelect = styled.div`
    ${({isDisplay}) => {
        if (isDisplay) {
            return `
                display: flex;
            `
        } else {
            return `
                display: none;
            `
        }
    }}
    .select {
        width: 80%;
        height: 30px;
        border-radius: 0px;
        -webkit-appearance: none;
        -webkit-border-radius: 0px;
        padding-left: 10px;
    }
    .btn {
        width: 20%;
    }
    .select:focus{
        outline: none;
    }
`