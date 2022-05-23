import React from 'react'
import {
  BodyContainer,
  HeaderContainer,
  HomeContainer,
  HomeTypogaphy,
  IconContainer,
  ParentContainer,
} from './styles'
import { BsStars } from 'react-icons/bs'
import CreateTweetBox from '../tweetbox'
import Tweets from '../tweetbox/tweets'

function Feed() {
  return (
    <ParentContainer>
      <HeaderContainer>
        <HomeContainer>
          <HomeTypogaphy>Home</HomeTypogaphy>
          <IconContainer>
            <BsStars />
          </IconContainer>
        </HomeContainer>
        <CreateTweetBox />
      </HeaderContainer>
      <BodyContainer>
          <Tweets />
      </BodyContainer>
    </ParentContainer>
  )
}

export default Feed
