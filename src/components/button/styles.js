import styled from "styled-components";

export const StyledButton = styled.div`
padding: 0.8rem 1.5rem;
outline: none;
border:2px solid white  ;
box-shadow: 0 15px 25px rgba(0, 0, 0, .6);


color:white;

font-weight:400;
cursor: pointer;
&:hover {
    opacity:65%;
    color: #21C994;
}
&:disabled {

    cursor: not-allowed;
    opacity: 3.5%
}

background-image: linear-gradient(-45deg,  #2B2B1A 10%, #A3976D 90%);
   
    display:  flex;
    justify-content: center;
    align-items: center;
    gap: 15px;


`