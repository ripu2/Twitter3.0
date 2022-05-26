import React from 'react'
import { ConnectButton, Typography } from 'web3uikit'
import { ButtonCotainer, Greetings, ParentCotainer } from './styles'
import { VscTwitter } from 'react-icons/vsc'


export default function Authentication() {
  return (
    <ParentCotainer>
        <ButtonCotainer>
            <Greetings>
                <Typography style={{textAllign: 'center'}}>Welcome to twitter3.0</Typography>
                <div style={{justifyContent: 'center', display: 'flex'}}>
                <VscTwitter size={30} />
                </div>
            </Greetings>
            <ConnectButton/>
        </ButtonCotainer>
    </ParentCotainer>
  )
}
