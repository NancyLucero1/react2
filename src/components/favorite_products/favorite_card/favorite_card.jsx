import React from 'react'
import { FavoritaCard } from './styles'
import { Button } from "../../button/button"
import{motion} from "framer-motion";


export const FavoriteCard = ({img, title, desc, price}) => {
  return (


    <motion.div whileHover={{scale:1.10}}>
    <FavoritaCard>
     <img src={img} alt="" />
     <h2>{title}</h2>
     <p>{desc}</p>
      <div>
         <p> USD {price}</p>
         <Button> Add To Cart </Button>

      </div>




    </FavoritaCard>

    </motion.div>
  )
}

