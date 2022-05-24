import React from 'react'
import {
  FollowAvatarContainer,
  IconContainer,
  ItemContainer,
  NewsCategoryTypography,
  NewsTitleTypography,
  ParentContainer,
  RightContainer,
  SearchBar,
  SearchIcon,
  Section,
  ShowMoreTypography,
  TitleTypography,
  ProfileContainer,
  FollowButton,
} from './styles'
import { news, whoToFollow } from '../../../lib/static'

export default function Widget() {
  return (
    <ParentContainer>
      <SearchBar>
        <IconContainer>
          <SearchIcon />
        </IconContainer>
        <input
          type="text"
          placeholder="Search Twitter"
          style={{ background: 'none', outline: 'none' }}
        />
      </SearchBar>
      <Section>
        <TitleTypography>What's happening</TitleTypography>
        {news.map((news: any, index: number) => {
          return (
            <ItemContainer key={index}>
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <NewsCategoryTypography>{news.category}</NewsCategoryTypography>
                <NewsTitleTypography>{news.title}</NewsTitleTypography>
              </div>
              <RightContainer>
                <img
                  src={news.image}
                  alt={news.category}
                  style={{
                    height: 70,
                    width: 70,
                    borderRadius: 50,
                    objectFit: 'contain',
                  }}
                />
              </RightContainer>
            </ItemContainer>
          )
        })}
        <ShowMoreTypography>Show more</ShowMoreTypography>
      </Section>
      <Section>
        <TitleTypography>Who to follow</TitleTypography>
        {whoToFollow.map((item: any, index: number) => {
          return (
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: 10 }}>
              <div style={{display: 'flex'}}>
                <FollowAvatarContainer>
                <img
                  src={item.avatar}
                  alt={item.handle}
                  style={{ height: 40, width: 40, borderRadius: 25 }}
                />
                </FollowAvatarContainer>
                <ProfileContainer>
                <NewsTitleTypography>{item.name}</NewsTitleTypography>
                    <NewsCategoryTypography>
                      {item.handle}
                    </NewsCategoryTypography>
                </ProfileContainer>
              </div>
              <FollowButton style={{ background: '#FFFFFF' }}>
                  Follow
                </FollowButton>
            </div>
          )
        })}
        <ShowMoreTypography>Show more</ShowMoreTypography>
      </Section>
    </ParentContainer>
  )
}
