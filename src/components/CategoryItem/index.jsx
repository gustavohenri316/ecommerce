import React from 'react'
import { 
  Container,
  Button,
  Image,
  Info,
  Title 
} from './style'

export const CategoryItem = ({item }) => {
  return (
    <Container>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  )
}

