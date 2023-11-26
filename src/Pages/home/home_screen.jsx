import React from 'react'
import { Header } from '../../components/header/header'
import { Footer } from '../../components/footer/footer'
import { Navbar } from '../../components/navbar/navbar'
import { HomeLayout } from '../../components/layout/home/home_layout'
import { FavoriteWidget } from '../../components/favorite_products/favorite_widget/favorite_widget'


export const HomeScreen = () => {
  return (
    <>
     

<Navbar/>
      <HomeLayout>
           <Header/>
     
             <FavoriteWidget></FavoriteWidget>

    
     
     </HomeLayout>

  
     <Footer />
    </>
  );
};
