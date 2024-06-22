import { Box, Typography } from "@mui/material"
import Image from "next/image"
import img1 from '../../Images/landingPageClient.png'

export default function ClientTestimonials({ img, heading, content }) {
    return (
        <>
            <Box sx={{

                width: '500px',
                display: 'flex',
                //height:'260px',
                //border: '2px solid red',
                borderRadius: '20px',
                margin:'auto'
                
            }}>
                <Image src={img} style={{
                    //position:'relative',
                    width: '50%',
                    height: '300px',
                    objectFit: 'cover',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    overflow: 'hidden',
                    borderRadius: '3%',
                }} />
                <Box sx={{
                   display:'flex',
                   flexDirection:'column',
                  // border: '2px solid red',
                   width:"70%",
                   //alignItems:'center',
                   justifyContent:"center",
                   padding:'48px',
                   paddingRight:'2px'
                }}>
                <Typography variant="h6" sx={{ marginTop: '12px', fontWeight: 'normal', color: '#351120' }}>
                    {heading}
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: '20px', color: '#351120' }} >
                   {content}
                </Typography>
                </Box>

            </Box>
        </>
    )
}
