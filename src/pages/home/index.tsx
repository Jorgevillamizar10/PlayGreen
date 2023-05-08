import { useSelector } from 'react-redux'
import { LimitViewport } from '../../styles/global-styles'
import { themeSelector } from '../../redux/features/themeSlice'
import { OrBanner } from '../../components/organism/or-banner'
import { ViewportHomeSection } from '../../components/organism/or-banner/styles'
import { MlLayout } from '../../components/organism/or-layout'

export const HomePage = () => {
  const { theme } = useSelector(themeSelector)

  return (
    <MlLayout>
      <ViewportHomeSection theme={theme}>
        <LimitViewport>
          <OrBanner />
        </LimitViewport>
      </ViewportHomeSection>
    </MlLayout>
  )
}
