import {
  Container,
  Button,
  Description,
  Input,
  InputContainer,
  Title
} from './style'
import SendIcon from '@mui/icons-material/Send';

export const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder='Your email'/>
        <Button>
          <SendIcon/>
        </Button>
      </InputContainer>
    </Container>
  )
}

