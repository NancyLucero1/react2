import React from 'react'
import { Navbar } from '../../components/navbar/navbar'
import { Footer } from '../../components/footer/footer'
import { About} from"../../components/about_us/about"
import { HomeLayout } from '../../components/layout/home/home_layout'


export const AboutScreen = () => {
  return (
    <>
      <Navbar/>


      <HomeLayout>
      
    <About/>
     
     </HomeLayout>


     <Footer />
    </>
  );
};