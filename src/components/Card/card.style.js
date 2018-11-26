import styled from 'styled-components'

export const StyledCard = styled.div`
    border: 1px solid #000;
    display: flex;
    margin-bottom: 10px;
    .card-container {
        width: 90%;
        padding: 0 10px;
    }
    .button-container {
        border-left: 1px solid #000;
        width: 10%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .card-total-curr {
        display: flex;
        justify-content: space-between;
    }
    .card-total-curr p {
        margin-bottom: 0;
    }
`