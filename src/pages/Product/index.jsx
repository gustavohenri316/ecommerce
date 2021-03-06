import {
  Container,
  AddContainer,
  Amount,
  AmountContainer,
  Button,
  Desc,
  Filter,
  FilterColor,
  FilterContainer,
  FilterSize,
  FilterSizeOption,
  FilterTitle,
  Image,
  ImgContainer,
  InfoContainer,
  Price,
  Title,
  Wrapper,
} from './style'
import { Annoucement } from '../../components/Annoucement'
import { Navbar } from '../../components/Navbar'
import { Newsletter } from '../../components/Newsletter'
import { Footer } from '../../components/Footer'
import { Add, Remove } from "@material-ui/icons";

export const Product = () => {
  return (
    <Container>
    <Navbar />
    <Annoucement />
    <Wrapper>
      <ImgContainer>
        <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
      </ImgContainer>
      <InfoContainer>
        <Title>Denim Jumpsuit</Title>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
          iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
          tristique tortor pretium ut. Curabitur elit justo, consequat id
          condimentum ac, volutpat ornare.
        </Desc>
        <Price>$ 20</Price>
        <FilterContainer>
          <Filter>
            <FilterTitle>Color</FilterTitle>
            <FilterColor color="black" />
            <FilterColor color="darkblue" />
            <FilterColor color="gray" />
          </Filter>
          <Filter>
            <FilterTitle>Size</FilterTitle>
            <FilterSize>
              <FilterSizeOption>XS</FilterSizeOption>
              <FilterSizeOption>S</FilterSizeOption>
              <FilterSizeOption>M</FilterSizeOption>
              <FilterSizeOption>L</FilterSizeOption>
              <FilterSizeOption>XL</FilterSizeOption>
            </FilterSize>
          </Filter>
        </FilterContainer>
        <AddContainer>
          <AmountContainer>
            <Remove />
            <Amount>1</Amount>
            <Add />
          </AmountContainer>
          <Button>ADD TO CART</Button>
        </AddContainer>
      </InfoContainer>
    </Wrapper>
    <Newsletter />
    <Footer />
  </Container>
  )
}


