import styled from 'styled-components'

export const StyledHeader = styled.div`
    border-bottom: 1px solid #000;
    margin-bottom: 10px;
    padding: 0 20px;
    background-color: #fff;
    ${({scrollY, currentCurrValue, currentCurr}) => {
        if (scrollY > 90) {
            return `
                &:after {
                    content: "${currentCurr}: ${currentCurrValue}";
                    position: fixed;
                    top: 10px;
                    width: 200px;
                    background-color: #eee;
                    border: 1px solid #000;
                    transform: translateX;
                    margin-left: 60px;
                    height: 20px;
                }
            `
        }
    }}
    .usd-container-info {
        display: flex;
        justify-content: space-between;
    }
`