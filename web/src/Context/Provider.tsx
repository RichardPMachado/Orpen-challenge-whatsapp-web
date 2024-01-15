import { ReactNode } from 'react'
import ChatProvider from './ChatProvider'

export default function Provider({ children }: {children: ReactNode}) {
  return <ChatProvider>{children}</ChatProvider>
}

