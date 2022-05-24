import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import { BiSearch } from 'react-icons/bi'

export const ParentContainer = styled(Box)(({}) => ({
   padding: 10,
   flex: 1
}));

export const Section = styled(Box)(({}) => ({
    background: '#192734',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20,
    overflow: 'hidden'
 }));

export const IconContainer = styled(Box)(({}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
 }));
 

export const SearchBar = styled(Box)(({}) => ({
    display: 'flex',
    backgroundColor: '#243340',
    padding: 7,
    borderRadius: 20
 }));
 
 export const SearchIcon = styled(BiSearch)(({}) => ({
    color: '#8899a6',
    marginRight: 10
 }));

export const TitleTypography = styled(Typography)(({}) => ({
    fontSize: 15,
    padding: 20,
    fontWeight: 800
 }));

 export const ItemContainer = styled(Box)(({}) => ({
   display: 'flex',
   padding: 10,
   // marginTop: 10,
   marginBottom: 10,
   cursor: 'pointer',
   // flexDirection: 'column',
   '&:hover': {
    background: "#22303c",
 },
 }));

 export const NewsTitleTypography = styled(Typography)(({}) => ({
    fontSize: 13,
    fontWeight: 800
 }));

 export const NewsCategoryTypography = styled(Typography)(({}) => ({
    fontSize: 11,
    fontWeight: 600,
    color: '#8899a6'
 }));

 export const RightContainer = styled(Box)(({}) => ({
      width: '20%',
      marginLeft: 10,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
}));

export const ShowMoreTypography = styled(Typography)(({}) => ({
   fontSize: 11,
   color: '#1d9bf0',
   padding: 10,
   '&:hover': {
      background: "#22303c",
   },
}));

export const FollowAvatarContainer = styled(Box)(({}) => ({
   width: "50%",
   paddingLeft: 10
}));

export const ProfileContainer = styled(Box)(({}) => ({
   marginLeft: 10,
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   flex: 1
}));

export const FollowButton = styled(Button)(({}) => ({
   background: '#1b8cd8',
   '&:hover': {
       background: "#1b8cd8 !important",
       color: "#FFFFFF"
    },
    borderRadius: 50,
    width: 80,
    height: 30,
    textTransform: 'none',
    color: 'black',
}));