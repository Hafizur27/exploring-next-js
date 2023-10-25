import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import RootLayout from '../../components/RootLayout/RootLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1>This is home page</h1>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return (
   <RootLayout>
    {page}
   </RootLayout>
  )
}
