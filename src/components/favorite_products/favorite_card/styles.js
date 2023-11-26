import styled from "styled-components";
import{motion} from "framer-motion";


export const FavoritaCard = styled.div`

width: 150px;

padding:0.8rem;
background-color:  #A3976D;
border:2px solid #3E371B ;
box-shadow: 0 15px 25px rgba(0, 0, 0, .6);
/*&:hover {
 transform: translateY(10px);
}  */
img{
    width:100%;
    margin-bottom: 1rem;
    border:2px solid #3E371B ;
    
    
}

h2{

font-weight:400;
margin:0;


}


p{

color:#3E371B;
font-size:0.9rem;

}
@media (max-width: 768px) {
    width:140px;
    text-align:center;
    margin-left:3px;
    justify-content:center;
}

`