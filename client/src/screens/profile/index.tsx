import React from 'react'
import Feed from '../../components/feed'
import ProfilePage from '../../components/profile'
import Sidebar from '../../components/sidebar'
import Widget from '../../components/widgets'
import { ParentCotainer } from './styles'

function Profile() {
  return (
    <ParentCotainer>
      <Sidebar />
      <ProfilePage />
      <Widget />
    </ParentCotainer>
  )
}

export default Profile
