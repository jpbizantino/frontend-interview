import { ReactNode } from 'react'
import { AppLayout } from '../../app/layout/AppLayout'

interface Props {
  children?: ReactNode
}

export const MemberPage = ({ children }: Props) => {
  return <AppLayout>{children}</AppLayout>
}
