import styled from "styled-components";
import{motion} from "framer-motion";

export const CategoriasWrapper = styled.div`

justify-content:center;
align-items:center;
flex-direction:column;
max-width:1200px;
margin:  0px  auto;
display: flex;
padding:30px;
gap:30px;
@media (max-width: 768px) {
    padding-top: 30px;
    text-align: center;
     gap:20px;
     justify-content:center;

}

 h3{

    padding:30px;
    font-size:35px;
}


`

export const CategoriasContainer = styled.div`
display: flex;

flex-wrap: wrap;
justify-content:space-around;
align-items:center;
gap:20px;
user-select: none;

@media (max-width: 768px) {
    padding-top: 30px;
    text-align: center;
    
}


`