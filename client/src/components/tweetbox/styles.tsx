import { Avatar, styled, Box, Button, Typography } from "@mui/material";

export const ProfileContainer = styled(Box)(({}) => ({
    display: 'flex',
    paddingTop: 10
}));

export const ProfilePicture = styled(Avatar)(({}) => ({
   height: 40,
   width: 40,
   borderRadius: 50
}));

export const TweeetField = styled(Box)(({}) => ({
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15
}));

export const BottomBox = styled(Box)(({}) => ({
    display: 'flex',
}));

export const IconContainer = styled(Box)(({}) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    marginRight: 30,
    width: '100%'
}));

export const TweeetButtonContainer = styled(Box)(({}) => ({
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: 30
}));

export const TweeetButton = styled(Button)(({}) => ({
    backgroundColor: '#1d9bf0 !importat',
    '&:hover': {
        background: "#1b8cd8",
     },
     borderRadius: 50,
     textTransform: 'none',
     color: '#FFFFFF',
     marginTop: 25,
     width: 100,
     height: 35,
     textAlign: 'center',
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'center',
     "&:disabled": {
        backgroundColor: 'red'
      }
}));


export const TweetTypography = styled(Typography)(({}) => ({
    color: '#FFFFFF'
}));