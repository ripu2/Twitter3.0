import React from 'react'
import { ParentContainer } from '../feed/styles'
import ProfileHeader from './profileHeader'
import ProfileTweets from './profileTweets'

export default function ProfilePage() {
  return (
    <ParentContainer>
        <ProfileHeader />
        <ProfileTweets />
    </ParentContainer>
  )
}
