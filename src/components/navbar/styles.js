
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarContainer = styled.div`
    height: 100px;
    width: 100%;
    background-color:#C3B581  ;
    border-bottom: 2px solid #2B2B1A ;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    z-index: 999;
    padding: 0.1rem 0.1rem;
    
    @media (max-width:768px) {
        padding: 0.2rem 0rem ;
    }
`

export const NavbarLogo = styled.img`
    height: 100%;
`
export const NavbarLinksCartContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
`
export const CartContainer = styled.div `
    color:#1C1B16  ;
    font-size: 2rem;
    cursor: pointer;
`

export const DisplayDiv = styled.div` 
    display:none;
`

export const MenuContainer = styled.div `
    color:#1C1B16  ;
    font-size: 2rem;
    cursor: pointer;
    display: none;
    @media (max-width: 768px) {
        display: flex;
    }
`
    
export const NabvarLinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    text-shadow: 8px 8px 9px #2B2B1A  ;
    @media (max-width: 768px) {
        display: none;
        position: absolute;
        top: 100px;
       
        flex-direction: column;
        background-color:#C3B581  ;
    }
`

export const StyledNavLink  = styled(NavLink)`
   font-family: 'Caveat', cursive;
    font-size: 2rem;
    font-weight: 200;
`