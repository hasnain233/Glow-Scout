import { Box, Typography } from "@mui/material"
export default function HowGlowScoutWork({ number, content }) {
    return (
        <>
            <Box sx={{
                width: {md:'20%',xs:'70%'},
                margin:{xs:'auto'},
                height: '300px',
                //border:'2px solid red',
                backgroundColor: '#F6E9CE',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent:'space-between',
            }}>
                <Typography sx={{
                    fontFamily:  'Raleway',
                    fontWeight: '700',
                    fontSize: '35px',
                    lineHeight: '86px',
                    letterSpacing: '-0.04em',
                    textAlign: 'center',
                    color:'#351120'
                }}>
                    {number}
                </Typography>
                <Typography sx={{
                    fontFamily:  'Raleway',
                    fontWeight: '100',
                    fontSize: '25px',
                    lineHeight: '28px',
                    letterSpacing: '-0.04em',
                    textAlign: 'center',
                    color:'#351120',
                }}>
                    {content}
                </Typography>

            </Box>
        </>
    )
}