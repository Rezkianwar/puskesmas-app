import { Roboto } from 'next/font/google'
import './ui/globals.css'
import {
  ClerkLoaded,
  ClerkLoading,
  ClerkProvider,
} from '@clerk/nextjs'
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Flex, Spin } from 'antd';
import SessionProviderWrapper from './SessionProviderWrapper';

const roboto = Roboto({
  weight: ['400', '700'], 
  subsets: ['latin'],
display: 'swap',})

export const metadata = {
  title: 'Puskesmas Silago',
  description: 'Puskesmas App',
  img : '/favicon.ico',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <body className={roboto.className} style={{ backgroundColor: 'var(--bgHome)' }}>
          <SessionProviderWrapper>
            <ClerkLoading>
              <div className='loading'>
                <Flex gap="small" vertical>
                  <Spin size='large' />
                </Flex>
              </div>
            </ClerkLoading>
            <ClerkLoaded>
              <AntdRegistry>{children}</AntdRegistry>
            </ClerkLoaded>
          </SessionProviderWrapper>
        </body>
      </html>
    </ClerkProvider>
  )
}
