import styled from "@emotion/styled";
import { Avatar, Box, Typography } from "@mui/material";
import { BsArrowLeftShort } from 'react-icons/bs'

export const ParentContainer = styled(Box)(({}) => ({
    borderLeft: '1px solid #38444d',
    borderRight: '1px solid #38444d',
    flex: 2,
    overflowY: 'scroll'
}));

export const ProfileHeaderContainer = styled(Box)(({}) => ({
    border: '1px solid  #38444d'
}));

export const Header = styled(Box)(({}) => ({
    padding: 10,
    display: 'flex',
    allignItem: 'center'
}));

export const ButtonContainer = styled(Box)(({}) => ({
    marginRight: 20,
    padding: 5,
    '&:hover': {
        backgroundColor: "#313b44",
     },
     borderRadius: 50,
     cursor: 'pointer'
}));

export const BackButton = styled(BsArrowLeftShort)(({}) => ({
   fontSize: 30
}));

export const UserDetails = styled(Box)(({}) => ({
    padding: 5,
}));

export const Primary = styled(Typography)(({}) => ({
   background: 'transparent',
   outline: 'none',
   fontWeight: 800,
   fontSize: 15
}));

export const Secondary = styled(Typography)(({}) => ({
    color: '#8899a6',
    fontSize: 13
 }));

export const PhotoContainer = styled(Box)(({}) => ({
    display: 'flex',
    justifyContent: 'center',
    height: "15vh"
}));

export const ProfilePhotoContainer = styled(Box)(({}) => ({
    width: '100%',
    borderRadius: 50,
    marginTop: -40,
    marginBottom: 8,
    marginLeft: 10,
    display: 'flex',
    justifyContent: 'flex-start',
    allignItem: 'center'
}));

export const AccountDetailContainer= styled(Box)(({}) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    marginTop: 15
}));

export const BottomCell = styled(Box)(({}) => ({
    display: 'flex',
    padding: 15,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'space-between'
}));

export const BottomTypography = styled(Typography)(({}) => ({
    fontSize: 15,
    '&:hover': {
        color: '#8899a6'
     }
 }));
