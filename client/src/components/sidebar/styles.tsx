import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const ParentCotainer = styled(Box)(({}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingRight: 10
}));

export const SideBarCells = styled(Box)(({}) => ({
    display: 'flex',
    padding: 10,
    borderRadius: 50,
    width:'fit-content',
    '&:hover': {
        background: "#7F8487",
     }
}));

export const LowerChild = styled(Box)(({}) => ({
    display: 'flex',
    flexDirection: 'column',
}));

export const LowerChildProfile = styled(Box)(({}) => ({
    display: 'flex',
}));

export const MintButton = styled(Button)(({}) => ({
    background: '#1d9bf0 !importat',
    '&:hover': {
        background: "#1b8cd8",
     },
     borderRadius: 50,
     width: 250,
     textTransform: 'none',
     color: '#FFFFFF',
     marginTop: 25
}));

export const IconContainer = styled(Box)(({}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: 10
}));

export const IconContainerBird = styled(Box)(({}) => ({
    display: 'flex',
    padding: 10
}));

