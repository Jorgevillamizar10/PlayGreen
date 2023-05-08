import { useState } from 'react'
import { LimitViewport, ViewportSection } from '../../styles/global-styles'
import { useSelector } from 'react-redux'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { themeSelector } from '../../redux/features/themeSlice'
import { MlLayout } from '../../components/organism/or-layout'
import { auth } from '../../firebase'
import {
  Container,
  ContainerInputs,
  ContainerText,
  FormContainer,
  Paragraph,
  Title,
  Button,
  Input,
  Anchor
} from '../login/styles'
import { SignUpStateProps } from './types'
import { LabelError } from './styles'
import { useNavigate } from 'react-router-dom'

export const SignUpPage = () => {
  const { theme } = useSelector(themeSelector)
  const navigate = useNavigate()
  const [error, setError] = useState<{ message: string | undefined }>({
    message: undefined
  })
  const [signUpCredentials, setsignUpCredentials] = useState<SignUpStateProps>({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleSessionSignUp = () => {
    createUserWithEmailAndPassword(
      auth,
      signUpCredentials.email,
      signUpCredentials.password
    )
      .then((userCredentials) => {
        if (userCredentials) {
          navigate('/login')
        }
      })
      .catch((error) => setError(error))
    // dispatch(setAuth(true))
  }

  return (
    <MlLayout>
      <ViewportSection theme={theme}>
        <LimitViewport>
          <Container>
            <ContainerText>
              <Title theme={theme}>Sign Up</Title>
              <Paragraph theme={theme}>
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              </Paragraph>
            </ContainerText>
            <FormContainer>
              <ContainerInputs>
                <Input
                  autoComplete='email'
                  id='email'
                  label='Email'
                  variant='filled'
                  theme={theme}
                  onChange={(ev) =>
                    setsignUpCredentials((state: SignUpStateProps) => {
                      return {
                        ...state,
                        email: ev.target.value
                      }
                    })
                  }
                />
                <Input
                  autoComplete='new-password'
                  id='password'
                  label='Password'
                  type='password'
                  variant='filled'
                  theme={theme}
                  onChange={(ev) =>
                    setsignUpCredentials((state: SignUpStateProps) => {
                      return {
                        ...state,
                        password: ev.target.value
                      }
                    })
                  }
                />
                <Input
                  autoComplete='new-password'
                  id='confirmPassword'
                  label='Confirm Password'
                  type='password'
                  variant='filled'
                  theme={theme}
                  onChange={(ev) =>
                    setsignUpCredentials((state: SignUpStateProps) => {
                      return {
                        ...state,
                        confirmPassword: ev.target.value
                      }
                    })
                  }
                />
              </ContainerInputs>
              <Anchor href='/login' theme={theme}>
                Already have an account? Login
              </Anchor>
              {signUpCredentials.confirmPassword.length > 0 &&
                signUpCredentials.password !==
                  signUpCredentials.confirmPassword && (
                  <LabelError>Passwords do not match</LabelError>
                )}
              {error && <LabelError>{error?.message}</LabelError>}
              <Button
                style={{ width: '150px' }}
                onClick={(ev) => {
                  ev.preventDefault()
                  handleSessionSignUp()
                }}
                disabled={
                  signUpCredentials.password.length <= 0 ||
                  signUpCredentials.email.length <= 0 ||
                  signUpCredentials.confirmPassword.length <= 0 ||
                  signUpCredentials.password !==
                    signUpCredentials.confirmPassword
                }
              >
                Sign Up
              </Button>
            </FormContainer>
          </Container>
        </LimitViewport>
      </ViewportSection>
    </MlLayout>
  )
}
