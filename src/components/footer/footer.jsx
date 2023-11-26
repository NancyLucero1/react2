import React from 'react'
import {  FaRegHeart,FaMapMarkerAlt,FaEnvelope ,FaWhatsapp,FaShippingFast } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa';
import { FooterContainerStyled } from './styles';
import { LinksContainerStyled } from './styles';
import { SocialMediaStyled, ContacUsStyled } from './styles';
import { TitleH3 } from './styles';
import { Sign } from './styles';
import { FooterMenu } from './styles';
import { motion } from "framer-motion";



export const Footer = () => {
  return (
    <FooterContainerStyled>

      <LinksContainerStyled >
     

      

      </LinksContainerStyled >
      <TitleH3><h3>Stay in touch</h3></TitleH3>
    
      <ContacUsStyled >
      <motion.div whileHover={{scale:3.10}}> 
      <FaMapMarkerAlt/>

      </motion.div> 
     
   
                    
                   
                
        <p> Rosales 256. Ramos Mejía</p>
        <motion.div whileHover={{scale:3.10}}> 

        
        <FaWhatsapp/>
        </motion.div> 
        <p>1123857844</p>
        <motion.div whileHover={{scale:3.10}}> 
        <FaShippingFast/>

        </motion.div> 
        <p> FreeShipping</p>
       
      </ContacUsStyled >
      
     <TitleH3> <h3>Follow Us</h3></TitleH3>
    
      <SocialMediaStyled>
       
            <motion.div whileHover={{scale:3.10}}>
            <FaFacebook />
            </motion.div> 

            <motion.div whileHover={{scale:3.10}}>
            <FaTwitter/>
            </motion.div> 
            <motion.div whileHover={{scale:3.10}}>
            <FaPinterest/>
            </motion.div> 
            <motion.div whileHover={{scale:3.10}}>
            <FaInstagram/>
            </motion.div> 

            <motion.div whileHover={{scale:3.10}}>
            <FaEnvelope/>
            </motion.div> 
      
      </SocialMediaStyled>
      
      
      <TitleH3> <h3>Footer Menu</h3></TitleH3>
      <FooterMenu>
      <a href="/#"> Term & Conditions</a>
     
     <a href="/#">Newsletter </a>
     <a href="/#">Polity Privacy </a>
     <a href="/#">Preference Cookies </a>
     </FooterMenu>
      
     <Sign>
      <p> Designed in < FaRegHeart/> by Nancy Lucero </p>
      <p> Copyright © 2023- All  rights reserved</p>
      </Sign>
      </FooterContainerStyled>
  );
};
