import { Box, Typography } from "@mui/material"
import Link from "next/link";
import Button from "./Button";

export default function Navbar() {
    return (
        <Box sx={{
            display: 'flex',
            margin: 'auto',
            alignContent: 'center',
            alignItems: 'center',
            width: '100%',
            position: 'fixed',
            top: 0,
            zIndex: 1000,
            backgroundColor: '#fff', 
            padding: '15px 40px', // Adjust padding as needed

        }}>
            <Typography style={{ color: '#351120', fontFamily: 'Valky', fontWeight: '400', fontSize: '35px', lineHeight: '47px', border: '0.3px', solid: "#351120" }}>
                Glow Scout
            </Typography>
            <Box sx={{
                display: 'flex',
                alignContent: 'center',
                gap: '100px',
                margin: "auto"
            }}>
                <Link href="#">
                    <Typography style={{ color: '#351120', fontFamily: 'Raleway', fontWeight: '500', fontSize: '24px', lineHeight: '28.18px', Letter: "2%" }}>
                        Home
                    </Typography>
                </Link>
                <Link href="#">
                    <Typography style={{ color: '#351120', fontFamily: 'Raleway', fontWeight: '500', fontSize: '24px', lineHeight: '28.18px', Letter: "2%" }}>
                        Goals
                    </Typography>
                </Link>
                <Link href="#">
                    <Typography style={{ color: '#351120', fontFamily: 'Raleway', fontWeight: '500', fontSize: '24px', lineHeight: '28.18px', Letter: "2%" }}>
                        Spas
                    </Typography>
                </Link>
                <Link href="#">
                    <Typography style={{ color: '#351120', fontFamily: 'Raleway', fontWeight: '500', fontSize: '24px', lineHeight: '28.18px', Letter: "2%" }}>
                        Blog
                    </Typography>
                </Link>
            </Box >
            <Button
                title='Sign In/Up'
                bg='#351120'
                br='50px'
                color='#F6E9CE'
                height="38px"
                fs="15px"
                lineHeight="28.18px"
                ffamily="Raleway"

            />
        </Box>
    );
}