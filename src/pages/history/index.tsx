import { useSelector } from 'react-redux'
import { themeSelector } from '../../redux/features/themeSlice'
import { ViewportHomeSection } from '../../components/organism/or-banner/styles'
import { LimitViewport } from '../../styles/global-styles'
import { MlCard } from '../../components/molecules/ml-card'
import {
  BackButton,
  ContainerCards,
  Containerhistory,
  DateText,
  Description,
  InfoContainer,
  Title
} from './styles'
import { MlLayout } from '../../components/organism/or-layout'
import { useNavigate } from 'react-router-dom'
import {
  SaveSportsProps,
  sessionSelector
} from '../../redux/features/sessionSlice'

const ArrowBackIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={30} height={30} fill='none'>
      <g
        stroke='#232232'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={3}
        clipPath='url(#a)'
      >
        <path d='M25.313 15H4.688M13.125 6.563 4.687 15l8.438 8.438' />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h30v30H0z' />
        </clipPath>
      </defs>
    </svg>
  )
}

const ArrowDarkBackIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={30} height={30} fill='none'>
      <g
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={3}
        clipPath='url(#a)'
      >
        <path d='M25.313 15H4.688M13.125 6.563 4.687 15l8.438 8.438' />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h30v30H0z' />
        </clipPath>
      </defs>
    </svg>
  )
}

export const HistoryPage = () => {
  const { theme } = useSelector(themeSelector)
  const { saveSports } = useSelector(sessionSelector)
  const navigate = useNavigate()
  const date = new Date()
  const options: Object = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  return (
    <MlLayout>
      <ViewportHomeSection theme={theme}>
        <LimitViewport>
          <Containerhistory>
            <BackButton onClick={() => navigate('/')} name='comeBack'>
              {theme === 'dark' ? <ArrowDarkBackIcon /> : <ArrowBackIcon />}
            </BackButton>

            <InfoContainer>
              <Title theme={theme}>History</Title>
              <Description theme={theme}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Description>
              <DateText theme={theme}>
                {date.toLocaleDateString('en-US', options)}
              </DateText>
              <ContainerCards>
                {saveSports.length > 0 ? (
                  saveSports?.map((sport: SaveSportsProps, index) => (
                    <MlCard {...sport} key={index} />
                  ))
                ) : (
                  <Description
                    style={{ textAlign: 'center', fontWeight: 'bold' }}
                  >
                    You don't have sports saved yet :c
                  </Description>
                )}
              </ContainerCards>
            </InfoContainer>
          </Containerhistory>
        </LimitViewport>
      </ViewportHomeSection>
    </MlLayout>
  )
}
