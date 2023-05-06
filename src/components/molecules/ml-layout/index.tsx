import { ReactNode } from 'react'
import { ThemeButton } from '../../atoms/at-theme-button'

export const MlLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      <ThemeButton />
      {children}
    </section>
  )
}
