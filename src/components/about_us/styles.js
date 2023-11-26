import styled from "styled-components";

export const Abouttext = styled.div`

h3{
   
    font-size:55px;
    font-family: 'Caveat', cursive;
        font-weight: 700;
        text-shadow: 8px 8px 9px #1A1A10  ;
        text-overflow: ellipsis;
        display: flex; 
   flex-direction: column;
   text-align: center;
   align-items: center;
   gap: 0.5rem;

   width: 650px;
   max-width: 80%;
   color:#21C994 ;
   
    }
    p{font-size: 2rem;
  width: 100%;


       
  text-align: justify;
  padding:  5px;
word-spacing: normal;
flex-direction:column;
align-items:center;
justify-content:center;

padding: 10px 0;
  max-width: 1200px;


    }
 
@media (max-width: 702px) {

    text-align: center;
   
    p{
        
        font-size: 0.5rem ;
     
        display: flex;
  
 
  text-align: center;
    


    }
  

}


`