import React from 'react'
import { TweetInterface } from '../../types/types'
import Posts from '../posts'

function Tweets() {
    const tweet: TweetInterface[] = [
        {
            displayName: 'Naruto',
            userName: '0x7D078Ed82011a227965De0d1E19BeF423d84360D',
            avatar: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/ca2e913adf3055cbb60624e4fbd9e3d98f3fe16b45e8c17d21886c4ba4a8df59._RI_V_TTW_.png',
            text: 'Ochihaaa !!!!!',
            isProfileImageNft: false,
            timeStamp: '2020-06-01T12:00:00.000Z'
        },
        {
            displayName: 'Naruto',
            userName: '0x7D078Ed82011a227965De0d1E19BeF423d84360D',
            avatar: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/ca2e913adf3055cbb60624e4fbd9e3d98f3fe16b45e8c17d21886c4ba4a8df59._RI_V_TTW_.png',
            text: 'Ochihaaa !!!!!',
            isProfileImageNft: false,
            timeStamp: '2020-06-01T12:00:00.000Z'
        },
        {
            displayName: 'Goku',
            userName: '0x7D078Ed82011a227965De0d1E19BeF423d84360D',
            avatar: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Goku.Dragon-Ball.webp',
            text: 'Ochihaaa !!!!!',
            isProfileImageNft: true,
            timeStamp: '2022-04-01T12:00:00.000Z'
        }
    ]


  return (
    <div>
        {
            tweet.map((el: TweetInterface) => {
                return(
                    <Posts {...el} />
                )
            })
        }
    </div>
  )
}

export default Tweets