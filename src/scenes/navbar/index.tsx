import { useState } from 'react';
import { Link } from "react-router-dom";
import PixIcon from "@mui/icons-material/Pix";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from '@/componets/FlexBetween';

type Props = {}

const Navbar = (props: Props) => {
    const { palette } = useTheme();
    const [selected, setseleted] = useState("dashboard");
  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
        {/* LEFT SIDE */}
        <FlexBetween gap="0.75rem">
        <PixIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize="16px">
            Finanseer
        </Typography>
        </FlexBetween>
    </FlexBetween>

  )
}

export default Navbar;