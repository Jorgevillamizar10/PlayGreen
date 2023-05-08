import { useState } from 'react'
import { LimitViewport, ViewportSection } from '../../styles/global-styles'
import { useDispatch, useSelector } from 'react-redux'
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
import { setAuth } from '../../redux/features/sessionSlice'
import { MlLayout } from '../../components/organism/or-layout'

export const LoginPage = () => {
  const dispatch = useDispatch()
  const { theme } = useSelector(themeSelector)
  const [loginCredentials, setLoginCredentials] = useState<LoginFormStateProps>(
    {
      username: '',
      password: ''
    }
  )

  return (
    <MlLayout>
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
                <Input
                  id='user'
                  label='User'
                  variant='filled'
                  theme={theme}
                  onChange={(ev) =>
                    setLoginCredentials((state) => {
                      return {
                        ...state,
                        username: ev.target.value
                      }
                    })
                  }
                />
                <Input
                  id='password'
                  label='Password'
                  type='password'
                  variant='filled'
                  theme={theme}
                  onChange={(ev) =>
                    setLoginCredentials((state) => {
                      return {
                        ...state,
                        password: ev.target.value
                      }
                    })
                  }
                />
              </ContainerInputs>
              <Anchor href='/' theme={theme}>
                Forgot your password?
              </Anchor>
              <Button
                onClick={(ev) => {
                  ev.preventDefault()
                  dispatch(setAuth(true))
                }}
                disabled={
                  loginCredentials.password.length <= 0 ||
                  loginCredentials.username.length <= 0
                }
              >
                Login
              </Button>
            </FormContainer>
          </Container>
        </LimitViewport>
      </ViewportSection>
    </MlLayout>
  )
}
