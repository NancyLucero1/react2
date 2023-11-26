import React from 'react'
import { Footer } from '../../components/footer/footer'
import { Navbar } from '../../components/navbar/navbar';
import { HomeLayout } from '../../components/layout/home/home_layout'
import {Contact} from "../../components/contact/contact"

export const ContactScreen = () => {
  return (
    <>
      
    <Navbar/>


      <HomeLayout>
      
    
     <Contact/>
      
     
     </HomeLayout>

     <Footer />
   
    </>
  );
};
