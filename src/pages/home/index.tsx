import { useSelector } from 'react-redux'
import { LimitViewport, ViewportSection } from '../../styles/global-styles'
import { themeSelector } from '../../redux/features/themeSlice'

export const HomePage = () => {
  const { theme } = useSelector(themeSelector)

  return (
    <ViewportSection theme={theme}>
      <LimitViewport>
        <div>HomePage</div>
      </LimitViewport>
    </ViewportSection>
  )
}
