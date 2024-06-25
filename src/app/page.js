"use client"
import { useState } from "react";
import Image from "next/image";
import Navbar from "./Components/Navbar"
import { Box, Typography, TextField, MenuItem } from "@mui/material";
import Button from "./Components/Button"
import FrontPageWomen from "./Images/FrontPageWomen.png"
import HomeGlowScoutWork from './Components/HomePage/HowGlowScoutWork'
import HeadingContent from './Components/Heading&Content'
import Card from './Components/Card'
import CardCrasol from './Components/TrendingTreatment/CardsCrasol'
import ClientTestimonialCrasol from './Components/HomePage/ClientTestimonialsCrasol'
import AboutWomen1 from './Images/landingPageAbout1.png'
import AboutWomen2 from './Images/landingPageAbout2.png'
import Footer from './Components/Footer'


export default function Home() {
  const [goal, setGoal] = useState('');
  const [location, setLocation] = useState('');

  const handleGoalChange = (event) => {
    setGoal(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
  return (
    <>
        
      <Box sx={{
        width: "95%",
        margin: 'auto',
        alignContent: 'center'
      }}>

        

        {/* FRONT PAGE */}

        <Box sx={{marginTop:'72px', display: 'flex', position: 'relative', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'center', p: { xs: 2, sm: 3, md: 5 } }}>
      <Box sx={{
        display: 'flex',
        justifyContent: { xs: 'center', md: 'flex-start' },
        flexDirection: 'column',
        textAlign: { xs: 'center', md: 'left' },
        m: { xs: 0, md: '0 0px' }
      }}>
        <Box sx={{ width: { xs: '100%', sm: '370px' },  }}>
          <Typography sx={{
            fontFamily: "Raleway",
            fontWeight: 'normal',
            lineHeight: '50px',
            fontSize: { xs: '30px', sm: '40px', md: '50px' },
            color: '#351120'
          }}>
            REVEAL YOUR BEAUTY WITH
          </Typography>
          <Typography sx={{
            fontFamily: "Valky",
            fontWeight: '300',
            lineHeight: '50px',
            fontSize: { xs: '40px', sm: '60px', md: '70px' },
            color: '#351120'
          }}>
            Glow Scout
          </Typography>
        </Box>
        <Typography sx={{
          fontFamily: "Raleway",
          fontWeight: '300',
          lineHeight: '20px',
          fontSize: { xs: '15px', sm: '18px', md: '20px' },
          color: '#351120',
          marginTop: '30px',
          width: { xs: '90%', md: '70%' },
          
        }}>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Ut ut nibh faucibus.
        </Typography>

        <Button
              title='Sign Up'

              br='50px'
              color='#351120'
              height="38px"
              fs="15px"
              lineHeight="28.18px"
              ffamily="Raleway"
              border='1.5px solid #351120'
              width='170px'
              mt='20px'
            />
      </Box>
      <Box sx={{position:"relative", width:'70%'}}>
      <Box sx={{
        width: { xs: '180px', sm: '320px',md: '360px' },
        height: {xs: '260px', sm: '400px', md: '455px' },
        border: '1px solid #351120',
        borderRadius: '50%',
        alignItems: 'center',
        marginTop: { xs: '20px', md: '40px' },
        marginRight: { md: '30px' },
        transform: 'rotate(-15deg)',
        mx: 'auto'
      }}></Box>
      <Image src={FrontPageWomen} style={{ position: "absolute", bottom: '0px', right: { xs: '0px', md: '5px' } }} />
      </Box>

      <Box sx={{
        display: 'flex',
        position: 'absolute',
        bottom: 30,
        backgroundColor: '#F6E9CE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '12px',
        borderRadius: '60px',
        left: { xs: '10%', md: '20%' },
        opacity: '0.9',
        flexDirection: { xs: 'column', sm: 'row' }
      }}>
        <TextField
          select
          label="Select your Goals"
          value={goal}
          onChange={handleGoalChange}
          variant="outlined"
          sx={{ mr: { xs: 0, sm: 2 }, mb: { xs: 2, sm: 0 }, minWidth: 300, '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
        >
          <MenuItem value="goal1">Goal 1</MenuItem>
          <MenuItem value="goal2">Goal 2</MenuItem>
          <MenuItem value="goal3">Goal 3</MenuItem>
        </TextField>
        <Box sx={{ display: { xs: 'none', sm: 'block' }, marginRight: 2, color: '#35112033' }}> | </Box>
        <TextField
          select
          label="Select your Location"
          value={location}
          onChange={handleLocationChange}
          variant="outlined"
          sx={{ mr: 2, minWidth: 300, '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
        >
          <MenuItem value="location1">Location 1</MenuItem>
          <MenuItem value="location2">Location 2</MenuItem>
          <MenuItem value="location3">Location 3</MenuItem>
        </TextField>
        <Button
              title='Book Now!'

              br='50px'
              color='#351120'
              height="38px"
              fs="15px"
              lineHeight="28.18px"
              ffamily="Raleway"
              border='1.5px solid #351120'
              width='170px'
              mt='20px'
            />
      </Box>
    </Box>



      </Box>

      {/* HOW GLOW SCOUT WORK */}

      <Box sx={{
        //height: '100vh',
        backgroundColor: '#FEF5E3',
        //border:'2px solid red'
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3,
        padding:'60px 0px'
      }}>
        <Typography sx={{
          fontFamily: 'Raleway',
          fontWeight: '100',
          fontSize: '35px',
          lineHeight: '86px',
          letterSpacing: '-0.04em',
          textAlign: 'center',
          color: '#351120',
          marginTop:'12px'
        }}>
          How Glow Scout Works
        </Typography>
        <Box sx={{
          display: 'flex',
          flexDirection:{md:'row',xs:'column'},
          gap: 4,
          // justifyContent:'center'
        }}>
          <HomeGlowScoutWork number='01' content='Sign Up' />
          <HomeGlowScoutWork number='02' content='Select your Beauty Goals' />
          <HomeGlowScoutWork number='03' content='Select Treatment' />
          <HomeGlowScoutWork number='04' content='Select Spa' />
        </Box>
        <Button
          title='Get Started'
          bg='#351120'
          br='50px'
          color='#F6E9CE'
          height="38px"
          fs="13px"
          lineHeight="28.18px"
          ffamily="Raleway"
          p='0px 15px'
          mt='10px'

        />
      </Box>

      {/* TRENDING Treatment */}

      <Box sx={{
        width: "100%",
        //height: '100vh',
        margin: 'auto',
        //display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding:'80px 0px'
      }}>
        <Box >
          <HeadingContent heading='Trending Treatment' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus' />
        </Box>
        <Box sx={{
          //display:'flex',
          
          
          
          width:{md:'95%',xs:'55%'},
          margin:"auto",
          padding:"50px 0px"

        }}>
          <CardCrasol />
        </Box>
      </Box>

      {/* Client’s Testimonials */}

      <Box sx={{
        //height: '100vh',
        backgroundColor: '#FEF5E3',
        //border:'2px solid red',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin:'auto',
        padding:'115px 0px'
      }}>
        <HeadingContent heading='Client’s Testimonials'/>
        
        <Box sx={{
          width:{md:'600px',xs:'90%'},
          //border:'2px solid red',
          margin:'auto',
          marginTop:'45px'
        }}>
        <ClientTestimonialCrasol/>
        </Box>
      </Box>

      {/* About Glow Scout */}

      <Box sx={{
         //height: '100vh',
         backgroundColor: '#351120',
         //border:'2px solid red',
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',
         justifyContent: 'center',
         margin:'auto',
         padding:'158px 0px'
      }}>
        <Box sx={{
          //border:'2px solid red',
          display:'flex',
          flexDirection:{md:"row",xs:'column'},
          justifyContent:"space-between",
          width:{md:'100%',xs:'90%'},
          
          }}>
          <Image src={AboutWomen1} style={{
            width: '200px',
            height: '100%',
            objectFit: 'cover',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            overflow: 'hidden',
            borderRadius: '3%',
          
            
          }}/>
          <Box sx={{
            //padding:'0px 122px'
            width:{md:'500px'},
          }}>
            <HeadingContent lh="40px" clr="#F6E9CE" heading='About'/>
            <HeadingContent lh="40px" clr="#F6E9CE" heading='"Glow Scout"' content='“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh  faucibus'/>
           
          </Box>
          <Image src={AboutWomen2} style={{
            width: '200px',
            height: '100%',
            objectFit: 'cover',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            overflow: 'hidden',
            borderRadius: '3%',
          }}/>
        </Box>
      </Box>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '70px 0px',
      }}>
        <HeadingContent mb='12px' heading='Are you a business?' content='People are seeking for the specialist. Join us now and serve your skills'/>
        <Button
              title='Sign Up Business'

              br='50px'
              color='#351120'
              height="38px"
              fs="15px"
              lineHeight="28.18px"
              ffamily="Raleway"
              border='1.5px solid #351120'
              width='170px'
              mt='20px'
            />
      </Box>
    </>
  );
}
