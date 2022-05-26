import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useMoralis } from 'react-moralis'
import Authentication from '../src/screens/Authentication'
import HomePage from '../src/screens/home'

const style = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] w-2/3 flex justify-between`,
}

const Home: NextPage = () => {

  const { isAuthenticated, Moralis } = useMoralis()

  return (
    <div className={style.wrapper}>
      {
        isAuthenticated ? <HomePage /> : <Authentication />
      }
    </div>
  )
}

export default Home
