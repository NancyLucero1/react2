import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../button/button";
import paris from "../../assets/image/paris.png";
import { HeaderContainer } from "../header/styles";
import { HeaderTextContainer } from "../header/styles";
import { HeaderImageContainer } from "../header/styles";
import { Abouttext } from "./styles";

export const About = () => {
    return (
        <HeaderContainer>
        

        
       
      <Abouttext>
      
      <h3>About Us</h3>

        <p> The story of the world’s most famous bakery begins in 1996 on a quaint, cobblestone corner in the West Village
           where Pauline Bakery opened its doors for the first time. The sweet smell of cakes and cookies and pies and pudding 
           tumbled out, wafting down the streets, beckoning all in.

Our red velvet cupcakes became iconic and people lined up around the block for our banana pudding. 
There was even talk of New York pretzel guys becoming cupcake guys. Pauline Bakery was a destination for locals 
and tourists alike.

It was time for us to open the cupboards and share our magic with the world. Our neighborhood bakery found its way 
into new neighborhoods near and far, we wrote cookbooks and helped people all over celebrate their most important moments.

And while we have grown, a few things will always remain: open early and close late, a dollop of buttercream makes 
everything better, and our mission: make today sweeter 
than yesterday.    </p>
  
</Abouttext>   
     
     

       
    
      
     </HeaderContainer>
    )
  };