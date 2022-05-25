import { useRouter } from 'next/router'
import React from 'react'
import {
  ProfileHeaderContainer,
  Header,
  ButtonContainer,
  BackButton,
  UserDetails,
  Primary,
  Secondary,
  PhotoContainer,
  ProfilePhotoContainer,
  AccountDetailContainer,
  BottomCell,
  BottomTypography
} from './styles'

export default function ProfileHeader() {
  const router = useRouter()

  return (
    <ProfileHeaderContainer>
      <Header>
        <ButtonContainer>
          <BackButton onClick={() => router.push('/')} />
        </ButtonContainer>
        <UserDetails>
          <Primary>Ripu daman</Primary>
          <Secondary>4k tweets</Secondary>
        </UserDetails>
      </Header>
      <PhotoContainer>
        <img
          src="https://pbs.twimg.com/profile_banners/2825642501/1644771907/1500x500"
          alt="cover"
          style={{ objectFit: 'cover', width: '100%' }}
        />
      </PhotoContainer>
      <ProfilePhotoContainer>
        {false ? (
          <img
            src="https://pbs.twimg.com/profile_images/1282571486465855491/98xO6N0F_400x400.jpg"
            alt="name"
            className={true ? `smallHex` : ''}
            style={{ height: 60, width: 60, objectFit: 'cover' }}
          />
        ) : (
          <img
            src="https://pbs.twimg.com/profile_images/1282571486465855491/98xO6N0F_400x400.jpg"
            alt="name"
            style={{
              height: 60,
              width: 60,
              objectFit: 'cover',
              borderRadius: 50,
            }}
          />
        )}
      </ProfilePhotoContainer>
      <AccountDetailContainer>
          <Primary>
              Ripu daman
          </Primary>
          <Secondary>
              @4xse34....343d3
          </Secondary>
      </AccountDetailContainer>
      <BottomCell>
          <BottomTypography>
              Tweets
          </BottomTypography>
          <BottomTypography>
              Tweets and replies
          </BottomTypography>
          <BottomTypography>
              Media
          </BottomTypography>
          <BottomTypography>
             Likes
          </BottomTypography>
      </BottomCell>
    </ProfileHeaderContainer>
  )
}
