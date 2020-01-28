import styled from 'styled-components'

export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
// border: 0.05rem solid var(--lightBlue) ;

// the add to cart button
border-color:${props => props.cart? "var(--mainYellow) !important" : "var(--lightBlue)"};
color: ${props => props.cart? "var(--mainYellow) !important" : "var(--lightBlue)"};

// the back to home button
border-color:${props => props.back? "var(--lightBlue) !important" : "var(--lightBlue)"};
color: ${props => props.back? "var(--lightBlue) !important" : "var(--lightBlue)"};

padding: 0.2rem 0.5rem;
// margin:0.2rem 0.5rem 0.2rem 0;
cursor: pointer;
transition: all 0.5s ease-in-out;
&:hover{
    background:${props => props.cart? "var(--mainYellow) !important" : "white"};
    color: black !important;
}
&:focus{
    outline:none
}


border: 0.05rem solid white;
border-radius: 0.5rem;

color: white;
// border: none;

`
