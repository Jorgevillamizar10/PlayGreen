import { useState } from 'react'
import { LimitViewport, ViewportSection } from '../../styles/global-styles'
import { useDispatch, useSelector } from 'react-redux'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { LoginFormStateProps } from './types'
import { themeSelector } from '../../redux/features/themeSlice'
import { setAuth } from '../../redux/features/sessionSlice'
import { MlLayout } from '../../components/organism/or-layout'
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
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'
import { LabelError } from '../sign-up/styles'

export const LoginPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [error, setError] = useState<{ message: string | undefined }>({
    message: undefined
  })
  const { theme } = useSelector(themeSelector)
  const [loginCredentials, setLoginCredentials] = useState<LoginFormStateProps>(
    {
      email: '',
      password: ''
    }
  )

  const handleSessionLogin = () => {
    signInWithEmailAndPassword(
      auth,
      loginCredentials.email,
      loginCredentials.password
    )
      .then((userCredentials) => {
        if (userCredentials) {
          dispatch(setAuth(true))
          navigate('/')
        }
      })
      .catch((error) => setError(error))
  }

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
                  id='email'
                  label='Email'
                  variant='filled'
                  theme={theme}
                  onChange={(ev) =>
                    setLoginCredentials((state) => {
                      return {
                        ...state,
                        email: ev.target.value
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
              <Anchor href='/signup' theme={theme}>
                Don't have an account? Sign Up
              </Anchor>
              {error && <LabelError>{error?.message}</LabelError>}
              <Button
                onClick={(ev) => {
                  ev.preventDefault()
                  handleSessionLogin()
                }}
                disabled={
                  loginCredentials.password.length <= 0 ||
                  loginCredentials.email.length <= 0
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
