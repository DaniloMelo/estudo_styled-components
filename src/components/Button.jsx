import styled from 'styled-components'

const StyledButton = styled.button`
    width: ${({theme}) => theme.sizes.xxl};
    height: ${({theme}) => theme.sizes.l};
    border: none;
    border-radius: ${({theme}) => theme.sizes.s};
    background: ${({ bgColor, theme}) => bgColor || theme.colors.buttons.primary};
    color: ${({theme}) => theme.colors.fonts.light};
    margin: 1em;

    &:hover{
        background: ${({hoverColor, theme}) => hoverColor || theme.colors.buttons.primaryHover}; 
    }
`
const Button = ({children, bgColor, hoverColor, click}) =>{
    return(
        <StyledButton bgColor={bgColor} hoverColor={hoverColor} onClick={click}> 
            {children} 
        </StyledButton>
    )
}

export default Button