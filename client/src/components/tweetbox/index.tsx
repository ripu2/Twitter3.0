import React, { useState } from 'react'
import {
  ProfileContainer,
  ProfilePicture,
  TweeetButton,
  TweeetField,
  TweeetButtonContainer,
  TweetTypography,
  BottomBox,
  IconContainer,
} from './styles'
import { BsCardImage, BsEmojiSmile } from 'react-icons/bs'
import { RiFileGifLine, RiBarChartHorizontalFill } from 'react-icons/ri'
import { IoMdCalendar } from 'react-icons/io'
import { MdOutlineLocationOn } from 'react-icons/md'

const style = {
  wrapper: `px-4 flex flex-row border-b border-[red] pb-4`,
  tweetBoxLeft: `mr-4`,
  tweetBoxRight: `flex-1`,
  profileImage: `height-12 w-12 rounded-full`,
  inputField: `w-full h-full outline-none bg-transparent text-lg`,
  formLowerContainer: `flex`,
  iconsContainer: `text-[#1d9bf0] flex flex-1 items-center`,
  icon: `mr-2`,
  submitGeneral: `px-6 py-2 rounded-3xl font-bold`,
  inactiveSubmit: `bg-[#196195] text-[#95999e]`,
  activeSubmit: `bg-[#1d9bf0] text-white`,
}

function CreateTweetBox() {
  const [tweet, setTweet] = useState('')

  const postTweet = () => {
    console.log('twee', tweet)
  }

  return (
    <ProfileContainer>
      <div style={{ display: 'flex' }}>
        <ProfilePicture src="https://www.looper.com/img/gallery/25-most-powerful-naruto-characters-ranked-worst-to-best/l-intro-1651164487.jpg" />
        <div style={{flex: 1}}>
          <TweeetField>
            <form>
              <textarea
                style={{
                  backgroundColor: 'transparent',
                  width: '100%',
                  height: '100%',
                  outline: 'none',
                  resize: 'none',
                }}
                placeholder="What's happening"
                value={tweet}
                onChange={(e: any) => setTweet(e.target.value)}
              />
            </form>
          </TweeetField>
          <BottomBox>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                paddingBottom: 10,
              }}
            >
              <IconContainer>
                <BsCardImage style={{ marginRight: 10, cursor: 'pointer', color: '#1d9bf0' }} />
                <RiFileGifLine style={{ marginRight: 10, cursor: 'pointer', color: '#1d9bf0' }} />
                <RiBarChartHorizontalFill style={{ marginRight: 10, cursor: 'pointer', color: '#1d9bf0' }} />
                <BsEmojiSmile style={{ marginRight: 10, cursor: 'pointer', color: '#1d9bf0' }} />
                <IoMdCalendar style={{ marginRight: 10, cursor: 'pointer', color: '#1d9bf0' }} />
                <MdOutlineLocationOn style={{ marginRight: 10, cursor: 'pointer', color: '#1d9bf0' }} />
              </IconContainer>
            </div>
            <TweeetButtonContainer>
              <TweeetButton
                disabled={tweet.length === 0}
                style={{
                  backgroundColor: tweet.length === 0 ? '#196195' : '#1d9bf0',
                }}
                onClick={postTweet}
              >
                <TweetTypography>Tweet</TweetTypography>
              </TweeetButton>
            </TweeetButtonContainer>
          </BottomBox>
        </div>
      </div>
    </ProfileContainer>
  )
}

export default CreateTweetBox
