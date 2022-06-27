import {
  Container,
  Center,
  Left,
  Right,
  Description,
  Logo,
  SocialContainer,
  SocialIcon,
  List,
  ListItem,
  Title,
  ContactItem,
  Payment
} from './style'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LAMA.</Logo>
        <Description>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque explicabo et magnam itaque cumque est atque
          distinctio tempora corrupti corporis, cupiditate,
          voluptate nam totam facilis accusantium hic nesciunt. Totam, nesciunt?
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="25D366">
            <WhatsAppIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <MapOutlinedIcon style={{marginRight:'10px'}}/>
          622 Dixie Path , South Tobienchester 98336
        </ContactItem>
        <ContactItem>
          <LocalPhoneIcon style={{marginRight:'10px'}}/>
          + 234 31 99999-9999
        </ContactItem>
        <ContactItem>
          <EmailOutlinedIcon style={{marginRight:'10px'}}/>
          contact@lama.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  )
}


