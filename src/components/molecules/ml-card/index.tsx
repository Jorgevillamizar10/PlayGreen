import { useSelector } from 'react-redux'
import {
  CardComponent,
  CardImage,
  ContainerButtons,
  SvglikeComponent
} from './styles'
import { themeSelector } from '../../../redux/features/themeSlice'
import { SaveSportsProps } from '../../../redux/features/sessionSlice'

const FavIcon = ({ theme }: { theme: string }) => (
  <SvglikeComponent
    xmlns='http://www.w3.org/2000/SvglikeComponent'
    width={24}
    height={23}
    theme={theme}
  >
    <path
      fillRule='evenodd'
      d='M16.494 0c.752 0 1.502.106 2.215.346 4.396 1.429 5.98 6.252 4.657 10.468a15.158 15.158 0 0 1-3.584 5.727 45.798 45.798 0 0 1-7.54 5.907l-.297.18-.31-.192a45.367 45.367 0 0 1-7.585-5.907 15.401 15.401 0 0 1-3.586-5.715C-.88 6.598.703 1.774 5.146.32 5.49.2 5.847.118 6.205.07h.143a6.905 6.905 0 0 1 1-.07h.13C8.23.022 8.957.153 9.66.392h.07a.416.416 0 0 1 .108.07 4.2 4.2 0 0 1 .75.311l.453.203c.11.058.232.147.338.224.067.049.128.093.174.121l.059.035c.102.06.208.121.298.19A7.459 7.459 0 0 1 16.494 0Zm3.168 8.575a.98.98 0 0 0 .94-.906v-.142c.036-1.668-.975-3.18-2.512-3.763a.954.954 0 0 0-1.203.595.974.974 0 0 0 .596 1.226 1.994 1.994 0 0 1 1.274 1.87v.036c-.023.273.06.536.226.739.167.202.417.32.679.345Z'
      clipRule='evenodd'
    />
  </SvglikeComponent>
)

const DeleteIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width={16} height={16} fill='none'>
    <path
      fill='#EA596F'
      fillRule='evenodd'
      d='M.869.869a1.534 1.534 0 0 1 2.17 0l4.7 4.7 4.699-4.7a1.534 1.534 0 0 1 2.17 2.17l-4.7 4.7 4.7 4.699a1.534 1.534 0 0 1-2.17 2.17l-4.7-4.7-4.7 4.7a1.534 1.534 0 1 1-2.169-2.17l4.7-4.7-4.7-4.7a1.534 1.534 0 0 1 0-2.169Z'
      clipRule='evenodd'
    />
  </svg>
)

const getButton = (status: string, theme: string) => {
  console.log('status', status)
  switch (status) {
    case 'like':
      return <FavIcon theme={theme} />

    default:
      return <DeleteIcon />
  }
}

export const MlCard = ({ image, name, type }: SaveSportsProps) => {
  const { theme } = useSelector(themeSelector)

  return (
    <CardComponent theme={theme}>
      <CardImage image={image}>
        <span>{name}</span>
      </CardImage>
      <ContainerButtons>{getButton(type, theme)}</ContainerButtons>
    </CardComponent>
  )
}
