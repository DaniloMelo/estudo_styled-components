import styled from 'styled-components'

const StyledDisplay = styled.p`
    font-size: ${({ theme }) => theme.sizes.l};
    text-align: center;
    color: ${({ theme }) => theme.colors.fonts.primary};
`

const Display = ({ children }) => {
    return (
        <StyledDisplay> {children} </StyledDisplay>
    )
}

export default Display