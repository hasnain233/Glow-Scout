
import { Box,Typography } from "@mui/material"
export default function HeadingContent({heading,content,mt,clr='#351120',w,lh='30px',mb}){
    return(
        <>
        <Box>
        <Typography sx={{
        fontFamily:  'Raleway',
        fontWeight: 'light',
        fontSize: '40px',
        lineHeight: lh,
        letterSpacing: '-0.04em',
        textAlign: 'center',
        color:clr,
        marginTop:mt,
        marginBottom: mb ,
        width:w
      }}>
      {heading}
      </Typography>

      <Typography sx={{
        fontFamily:  'Raleway',
        fontWeight: '100',
        fontSize: '15px',
        lineHeight: '30px',
        letterSpacing: '-0.04em',
        textAlign: 'center',
        color: clr
      }}>
      {content}
      </Typography>
      </Box>
        </>
    )
}