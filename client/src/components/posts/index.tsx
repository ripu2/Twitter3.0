import React from 'react'
import { TweetInterface } from '../../types/types'
import {
  ProfileAvatar,
  ParentContainer,
  ImageContainer,
  ProfileDetailContainer,
  ProfileNameTypo,
  ProfileNameContainer,
  CheckBoxContainer,
  ProfileDataTypo,
  TweetTypo,
  IconContainer,
  CommentIcon
} from './styles'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { format } from 'timeago.js'
import { FaRegComment, FaRetweet } from 'react-icons/fa'


function Posts(props: TweetInterface) {
  return (
    <ParentContainer>
      <ImageContainer>
        {props.isProfileImageNft ? (
          <img
            src={props.avatar}
            alt={props.userName}
            className={true ? `smallHex` : ''}
            style={{ height: 40, width: 40, objectFit: 'cover' }}
          />
        ) : (
          <ProfileAvatar
            src={props.avatar}
            alt={props.userName}
            className={true ? `smallHex` : ''}
          />
        )}
      </ImageContainer>
      <div style={{display: 'flex', flexDirection: 'column'}}>
      <ProfileDetailContainer>
        <ProfileNameContainer>
          <ProfileNameTypo>{props.displayName}</ProfileNameTypo>
          {props.isProfileImageNft && (
            <CheckBoxContainer>
              <BsFillPatchCheckFill />
            </CheckBoxContainer>
          )}
        </ProfileNameContainer>
        <ProfileDataTypo>
          @{props.userName.slice(0, 5)}...{props.userName.slice(-4)} •{' '}
          {format(new Date(props.timeStamp).getTime())}
        </ProfileDataTypo>
      </ProfileDetailContainer>
      <TweetTypo>
          {props.text}
      </TweetTypo>
      <IconContainer>
          <CommentIcon />
      </IconContainer>
      </div>
    </ParentContainer>
  )
}

export default Posts
