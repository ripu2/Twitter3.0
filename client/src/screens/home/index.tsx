import React from 'react'
import Feed from '../../components/feed'
import Sidebar from '../../components/sidebar'
import { ParentCotainer } from './styles'

function HomePage() {
  return (
    <ParentCotainer>
      <Sidebar />
      <Feed />
      <div>Profile</div>
    </ParentCotainer>
  )
}

export default HomePage
