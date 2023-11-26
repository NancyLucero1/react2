


import logo from '../../assets/image/logo.png';
import React from "react";
import { motion } from "framer-motion";
import { FaShoppingCart } from 'react-icons/fa';
import { IoMenu } from "react-icons/io5";
import { NavbarContainer } from "./styles";
import { NavbarLogo, StyledNavLink, NavbarLinksCartContainer, MenuContainer, CartContainer, NabvarLinksContainer, DisplayDiv } from "./styles";
import { useRef } from "react";
import { CartMenu } from "../cart/cart_menu/cart_menu";


export const Navbar = () => {

    let refMenu = useRef();
    let refMenuIcon = useRef();
    let refCartMenu = useRef();

    const handleToggleMenu = (e) =>{
            if (refMenu.current.style.display === "none"){
                refCartMenu.current.style.display  = "none";
                refMenu.current.style.display  = "flex";
            } else {
                refMenu.current.style.display  = "none";
            };

            }


    const handleToggleCartMenu = (e) =>{
            if (refCartMenu.current.style.display === "none" ){
                refCartMenu.current.style.display  = "flex";
            } else {
                refCartMenu.current.style.display  = "none";
            };
        
            }        
        
    
return (
    <NavbarContainer>
        <NavbarLogo src={logo}  />
        <NavbarLinksCartContainer>
            <NabvarLinksContainer ref={refMenu}>
                    <motion.div whileHover={{scale:0.97}}>  
                    <StyledNavLink
                     to= "/"
                     style={({isActive}) => ({color: isActive ? `  #46e5b3   ` : `white`})}
                     >Home</StyledNavLink> 
                    </motion.div>
                    <motion.div whileHover={{scale:0.97}}>  
                    <StyledNavLink
                     to= "/about"
                     style={({isActive}) => ({color: isActive ? ` #46e5b3      ` : `white`})}
                     >About</StyledNavLink> 
                    </motion.div>
                    <motion.div whileHover={{scale:0.97}}>  
                    <StyledNavLink
                     to= "/store"
                     style={({isActive}) => ({color: isActive ? ` #46e5b3   ` : `white`})}
                     >Store</StyledNavLink> 
                    </motion.div>
                    <motion.div whileHover={{scale:0.97}}>
                      <StyledNavLink 
                      to="/contact"
                      style={({isActive}) => ({color: isActive ? `  #46e5b3  ` : `white`})}
                      >Contact</StyledNavLink>
                    </motion.div>
            </NabvarLinksContainer>
            <MenuContainer ref={refMenuIcon} onClick={handleToggleMenu}>
                <motion.div whileHover={{scale:0.97}}>  
                    <IoMenu />
                </motion.div>
            </MenuContainer>
            <CartContainer onClick={handleToggleCartMenu}>
                <motion.div whileHover={{scale:0.97}}>  
                    <FaShoppingCart/>
                </motion.div>
                <DisplayDiv ref={refCartMenu}>
                <CartMenu/>
                </DisplayDiv>
            </CartContainer>


        </NavbarLinksCartContainer>
    </NavbarContainer>
)

}
