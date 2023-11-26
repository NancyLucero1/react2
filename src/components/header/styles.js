import styled from "styled-components";



export const HeaderContainer = styled.div`
background-image: linear-gradient(-45deg, #2F2C22    30%,70% #A3976D70);
display: flex;
justify-content:space-around;
align-items: center;
max-width: 1300px;
margin: 0 auto;
gap: 5px;
padding:111px;

h1{
  color:#21C994 ;
    margin-bottom: 0.5rem;
    font-family: 'Caveat', cursive;
}
@media (max-width: 1000px) {
    flex-direction: column;
  h1 {right:-6px;}
}
    
    
`
export const HeaderTextContainer = styled.div`
display: flex;
flex-direction: column;

justify-content:center;
align-items: flex-start;
width: 40%;

h1{
font-size: 4rem;
margin: 15px 0;
font-family: 'Caveat', cursive;
text-shadow: 8px 8px 9px #2B2B1A  ;
}

h2{
font-size: 1.5rem;
margin: 15px 0;
font-family: 'Caveat', cursive;
}
p{
font-size: 1.2rem;
margin: 15px 0;
font-family: 'Caveat', cursive;
}


@media (max-width: 1000px) {

align-items: center;
/*font-size:1rem;*/
  /*width: 100%;*/
justify-content: space-around;
  text-align: justify;
  /*padding:  2px;*/
/*word-spacing: normal;*/
width: 40vw;

img{
  width: 85vw;
}

h2{
font-size: 1.5rem;
margin: 5px 0;
}
p{
font-size: 1.2rem;
margin: 5px 0;

}


}



  
    
`
export const HeaderImageContainer = styled.div`

width:100%;
height:100%;
background-color: white;

img{
    width:100%;
    height:80%;
    
   
  
}   

@media (max-width: 1195px) {
display:none;
}    
    
`
export const H1Pauline = styled.div`

transform: translateX(45%);

h1{
    
    
    @media (max-width: 1000px) {

}
   
}

`

