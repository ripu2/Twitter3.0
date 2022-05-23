import { Avatar, Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { FaRegComment, FaRetweet } from 'react-icons/fa'

export const ParentContainer = styled(Box)(({}) => ({
    display: 'flex',
    padding: 15,
    borderBottom: '1px solid #38444d'
}));

export const ImageContainer  = styled(Box)(({}) => ({
    display: 'flex'
}));

export const ProfileDetailContainer = styled(Box)(({}) => ({
    display: 'flex',
    marginLeft: 10,
}));

export const ProfileNameContainer = styled(Box)(({}) => ({
    display: 'flex',
}));

export const ProfileNameTypo = styled(Typography)(({}) => ({
   fontSize: 15
}));

export const ProfileAvatar = styled(Avatar)(({}) => ({
    heigh: '40px',
    width: '40px'
}));

export const CheckBoxContainer = styled(Box)(({}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginLeft: 10,
    marginTop: 3
}));

export const ProfileDataTypo = styled(Typography)(({}) => ({
    fontSize: 12,
    color: '#8899a6',
    marginLeft: 10,
    marginTop: 2
 }));

 export const TweetTypo = styled(Typography)(({}) => ({
    fontSize: 12,
    marginLeft: 10,
    marginTop: 10
 }))

 export const IconContainer  = styled(Box)(({}) => ({
    display: 'flex',
    marginLeft: 10,
    marginTop: 10
}));

export const CommentIcon = styled(FaRegComment)(({}) => ({
    color: '#8899a6',
    marginRight: 10,
    '&:hover': {
        color: "#1b8cd8",
     },
}));