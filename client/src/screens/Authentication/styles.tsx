import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const ParentCotainer = styled(Box)(({}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
}));

export const ButtonCotainer = styled(Box)(({}) => ({
   margin: '0 auto'
}));

export const Greetings = styled(Box)(({}) => ({
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 20,
    marginLeft: 10
 }));
