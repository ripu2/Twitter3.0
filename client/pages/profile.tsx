import React from 'react'
import Profile from '../src/screens/profile'

const style = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] w-2/3 flex justify-between`,
}

export default function profile() {
  return (
    <div className={style.wrapper}>
      <Profile />
    </div>
  )
}
