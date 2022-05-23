import styled from "@emotion/styled";
import { Avatar, Box, Typography } from "@mui/material";

export const ParentContainer = styled(Box)(({}) => ({
    borderLeft: '1px solid #38444d',
    borderRight: '1px solid #38444d',
    flex: 2,
}));

export const HeaderContainer = styled(Box)(({}) => ({
    paddingBottom: 20,
    paddingLeft: 10,
    borderBottom: '1px solid #38444d'
}));

export const HomeContainer = styled(Box)(({}) => ({
    display: 'flex',
    justifyContent: 'space-between',
}));


export const IconContainer= styled(Box)(({}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: 10
}));

export const HomeTypogaphy = styled(Typography)(({}) => ({
    fontSize: 20
}));

export const BodyContainer= styled(Box)(({}) => ({
    display: 'flex',
    flexDirection: 'column',
    marginTop: 10
}));