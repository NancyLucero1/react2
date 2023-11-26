import React from 'react'
import { ProductWidget } from '../../components/products/product_widget/product_widget'
import { Footer } from '../../components/footer/footer'
import { Navbar } from '../../components/navbar/navbar'
import { HomeLayout } from '../../components/layout/home/home_layout'
import { CategoryWidget } from '../../components/categories/category_widget/category_widget'


export const StoreScreen = () => {
  return (
    <>
     
<Navbar/>
      <HomeLayout>
    
     
    <CategoryWidget ></CategoryWidget>
     <ProductWidget />
     
     </HomeLayout>


     <Footer />
    </>
  );
};