import { AppShell } from '@/components/AppShell'
import { CartSheet } from '@/components/CartSheet'
import { ChatSheet } from '@/components/ChatSheet'
import { Header } from '@/components/Header'
import { Toaster } from '@/components/ui/sonner'
import { CartStoreProvider } from '@/lib/store/cart-store-provider'
import { ChatStoreProvider } from '@/lib/store/chat-store-provider'
import { SanityLive } from '@/sanity/lib/live'
import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'

function Layout({children}: {children:React.ReactNode}) {
  return (
    <ClerkProvider>
      <CartStoreProvider>
        <ChatStoreProvider>
          <AppShell>
          <Header/>
          <main> { children } </main>
          </AppShell>
          <CartSheet/>
          <ChatSheet/>
        <Toaster position='bottom-center'/>
        </ChatStoreProvider>
      </CartStoreProvider>
        <SanityLive/>
    </ClerkProvider>
  )
}

export default Layout