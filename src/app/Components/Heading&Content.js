
import { Box,Typography } from "@mui/material"
export default function HeadingContent({heading,content,mt}){
    return(
        <>
        <Box>
        <Typography sx={{
        fontFamily:  'Raleway',
        fontWeight: 'normal',
        fontSize: '35px',
        lineHeight: '30px',
        letterSpacing: '-0.04em',
        textAlign: 'center',
        color:'#351120',
        marginTop:mt
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
        color:'#351120'
      }}>
      {content}
      </Typography>
      </Box>
        </>
    )
}