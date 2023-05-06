import { useState } from 'react'
import { LimitViewport, ViewportSection } from '../../styles/global-styles'
import { useSelector } from 'react-redux'
import {
  Container,
  ContainerInputs,
  ContainerText,
  FormContainer,
  Paragraph,
  Title,
  Anchor,
  Button,
  Input
} from './styles'
import { LoginFormStateProps } from './types'
import { themeSelector } from '../../redux/features/themeSlice'

export const LoginPage = () => {
  const { theme } = useSelector(themeSelector)
  const [loginCredentials, setLoginCredentials] = useState<LoginFormStateProps>(
    {
      username: '',
      password: ''
    }
  )

  return (
    <ViewportSection theme={theme}>
      <LimitViewport>
        <Container>
          <ContainerText>
            <Title theme={theme}>Welcome</Title>
            <Paragraph theme={theme}>
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
            </Paragraph>
          </ContainerText>
          <FormContainer>
            <ContainerInputs>
              <Input id='user' label='User' variant='filled' theme={theme} />
              <Input
                id='password'
                label='Password'
                type='password'
                variant='filled'
                theme={theme}
              />
            </ContainerInputs>
            <Anchor href='/' theme={theme}>
              Forgot your password?
            </Anchor>
            <Button>Login</Button>
          </FormContainer>
        </Container>
      </LimitViewport>
    </ViewportSection>
  )
}
