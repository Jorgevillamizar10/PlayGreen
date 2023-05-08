import { useSelector } from 'react-redux'
import { useBannerImage } from '../../../hooks/useBannerImage'
import { MlFavButtons } from '../../molecules/ml-fav-buttons'
import { BannerContainer, ImageContainer, SubTitle } from './styles'
import { sessionSelector } from '../../../redux/features/sessionSlice'

export const OrBanner = () => {
  const { sportsData, loading } = useBannerImage()
  const { sportsKey } = useSelector(sessionSelector)

  return (
    <BannerContainer>
      <ImageContainer
        image={sportsData?.teams?.[sportsKey]?.strTeamFanart3 ?? ''}
      >
        <SubTitle>
          {loading
            ? 'Loading...'
            : sportsData?.teams?.[sportsKey]?.strAlternate ?? ''}
        </SubTitle>
      </ImageContainer>
      <MlFavButtons
        name={sportsData?.teams?.[sportsKey]?.strAlternate}
        image={sportsData?.teams?.[sportsKey]?.strTeamFanart3}
        limit={sportsData?.teams?.length}
      />
    </BannerContainer>
  )
}
