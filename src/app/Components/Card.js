import { Box,Typography } from "@mui/material"
import Image from "next/image"
import img1 from '../Images/landingPage1.png'

export default function Card({img,heading,content}){
  return(
    <>
    <Box sx={{
      
      width:'190px',
      //height:'260px',
      //border:'2px solid red',
      borderRadius: '20px'
    }}>
      <Image src={img} style={{
        //position:'relative',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
        borderRadius: '3%',
      }}/>
      <Typography variant="h6" sx={{ marginTop:'12px',fontWeight: 'normal',color:'#351120' }}>
        {heading}
      </Typography>
      <Typography variant="body2" sx={{lineHeight:'10px',color:'#351120'}} >
        {content}
      </Typography>

    </Box>
    </>
  )
}
