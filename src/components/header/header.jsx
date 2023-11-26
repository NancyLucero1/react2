

import { Button } from "../button/button"
import portada from '../../assets/image/portada.png';
import bor from "../../assets/image/bor.png"
import { HeaderContainer } from './styles';
import { HeaderTextContainer } from './styles';
import { HeaderImageContainer } from './styles';
import bor1 from "../../assets/image/bor1.png";
import { FavoriteWrapper } from "../favorite_products/favorite_widget/styles";
import  {H1Pauline} from "./styles"
import portada2 from "../../assets/image/portada2.jpg"
export const Header = () => {
  return (
    

    <HeaderContainer>
      
      <HeaderTextContainer>
     
              <img src={bor}/>


         <H1Pauline>
         <h1>Pauline </h1>
       

         </H1Pauline>
         
         <h2>Here is the best place,to kick off your day or just take a break. </h2>
         
             <h2>
               ¿Take away? ¿To eat in? Enter and make your order online today . </h2>

              


                
               <img src={bor1}/>

             
            
    
              
            
        </HeaderTextContainer>
      
         <HeaderImageContainer>
           <img src={portada2} />

        </HeaderImageContainer> 
       
    
   </HeaderContainer>

   
  )
}
