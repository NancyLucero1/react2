import React from 'react'
import {favorite} from '../../../data/favorite'
import { FavoriteCard } from '../favorite_card/favorite_card'
import { FavoriteContainer, FavoriteWrapper } from './styles';
import { Button } from '../../button/button';
import bor1 from "../../../assets/image/bor1.png"
import { SeparadorGold } from '../../products/product_widget/styles';
import { Link } from "react-router-dom";

export const FavoriteWidget = () => {
  return (
    <FavoriteWrapper>
    
     
     
     <h3>Here are some of the most popular cake flavors</h3>
      <h3>What are your favorite cake? </h3>
     <FavoriteContainer>

        {
      favorite.map((product) => <FavoriteCard key={product.id} {...product}/>)


        }
     </FavoriteContainer>
     
   <Link to="/store" ><Button  >Go To Store</Button></Link>

   
    <SeparadorGold>
    <img src={bor1}/>    <img src={bor1}/>   
    <img src={bor1}/>
     </SeparadorGold>
   
    </FavoriteWrapper>
  )
};

