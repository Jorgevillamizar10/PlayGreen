import { useBannerImage } from '../../../hooks/useBannerImage'
import { MlFavButtons } from '../../molecules/ml-fav-buttons'
import { BannerContainer, ImageContainer } from './styles'

export const OrBanner = () => {
  const { sportsData } = useBannerImage()

  console.log('aaa', sportsData?.teams?.[0]?.strTeamFanart3)

  return (
    <BannerContainer>
      <ImageContainer image={sportsData?.teams?.[0]?.strTeamFanart3 ?? ''} />
      <MlFavButtons />
    </BannerContainer>
  )
}
