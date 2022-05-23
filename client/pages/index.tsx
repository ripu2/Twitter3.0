import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HomePage from '../src/screens/home'

const style = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] w-2/3 flex justify-between`,
}

const Home: NextPage = () => {
  return (
    <div className={style.wrapper}>
      <HomePage />
    </div>
  )
}

export default Home
