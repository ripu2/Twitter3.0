import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const ParentCotainer = styled(Box)(({}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    width: '75%',
    padding: 20
}));

export const TableParentCotainer = styled(Box)(({}) => ({
    marginTop: 20,
    padding: 50
}))