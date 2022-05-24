import React from 'react'
import Feed from '../../components/feed'
import Sidebar from '../../components/sidebar'
import Widget from '../../components/widgets'
import { ParentCotainer } from './styles'

function HomePage() {
  return (
    <ParentCotainer>
      <Sidebar />
      <Feed />
      <Widget />
    </ParentCotainer>
  )
}

export default HomePage
