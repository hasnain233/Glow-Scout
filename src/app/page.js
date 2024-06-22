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
    
          <Navbar />
        
      <Box sx={{
        width: "95%",
        margin: 'auto',
        alignContent: 'center'
      }}>

        

        {/* FRONT PAGE */}

        <Box sx={{
          display: 'flex',
          height: '100vh',
          //border: '2px solid red',
          position: 'relative'
        }}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: "column",
            marginLeft: '50px'
          }}>
            <Box sx={{ width: '370px', }}>
              <Typography sx={{
                fontFamily: "Raleway",
                fontWeight: 'normal',
                lineHeight: '50px',
                fontSize: '50px',
                color: '#351120'
              }}>
                REVEAL YOUR BEAUTY WITH
              </Typography>
              <Typography sx={{
                fontFamily: "Valky",
                fontWeight: '300',
                lineHeight: '50px',
                fontSize: '70px',
                color: '#351120'
              }}>
                Glow Scout
              </Typography>
            </Box>
            <Typography sx={{
              fontFamily: "Raleway",
              fontWeight: '300',
              lineHeight: '20px',
              fontSize: '20px',
              color: '#351120',
              marginTop: '30px',
              width: '70%'
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
              width='100px'
              mt='12px'
            />
          </Box>
          <Box sx={{
            width: '587px', height: '450px', border: '1px solid #351120', borderRadius: '50%',
            alignItems: 'center', marginTop: '120px', marginRight: '37px', transform: 'rotate(-13deg)'
          }}></Box>
          <Image src={FrontPageWomen} width={500} height={500} style={{ position: "absolute", bottom: '0px', right: '5px' }} />

          <Box sx={{
            display: 'flex', position: 'absolute', bottom: 30, backgroundColor: '#F6E9CE', alignItems: 'center',
            justifyContent: 'center',
            padding: '12px',
            borderRadius: '60px',
            left: '20%',
            opacity: '0.9'
          }}>
            <TextField
              select
              label="Select your Goals"
              value={goal}
              onChange={handleGoalChange}
              variant="outlined"
              sx={{ mr: 2, minWidth: 300, '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
            >
              <MenuItem value="goal1">Goal 1</MenuItem>
              <MenuItem value="goal2">Goal 2</MenuItem>
              <MenuItem value="goal3">Goal 3</MenuItem>
            </TextField>
            <Box sx={{ marginRight: 2, color: '#35112033' }}> | </Box>
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
              bg='#351120'
              br='50px'
              color='#F6E9CE'
              height="38px"
              fs="13px"
              lineHeight="28.18px"
              ffamily="Raleway"
              p='0px 15px'

            />
          </Box>

        </Box>




      </Box>

      {/* HOW GLOW SCOUT WORK */}

      <Box sx={{
        height: '100vh',
        backgroundColor: '#FEF5E3',
        //border:'2px solid red'
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3,
      }}>
        <Typography sx={{
          fontFamily: 'Raleway',
          fontWeight: '100',
          fontSize: '35px',
          lineHeight: '86px',
          letterSpacing: '-0.04em',
          textAlign: 'center',
          color: '#351120'
        }}>
          How Glow Scout Works
        </Typography>
        <Box sx={{
          display: 'flex',
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
        width: "90%",
        height: '100vh',
        margin: 'auto',
        //display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Box sx={{ marginTop: '200px' }}>
          <HeadingContent heading='Trending Treatment' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus' />
        </Box>
        <Box sx={{
          //display:'flex',
          gap: 2,
          marginTop: '45px',

        }}>
          <CardCrasol />
        </Box>
      </Box>

      {/* Client’s Testimonials */}

      <Box sx={{
        height: '100vh',
        backgroundColor: '#FEF5E3',
        //border:'2px solid red',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin:'auto'
      }}>
        <HeadingContent heading='Client’s Testimonials' mt='150px'/>
        
        <Box sx={{
          width:'600px',
          //border:'2px solid red',
          margin:'auto',
          marginTop:'45px'
        }}>
        <ClientTestimonialCrasol/>
        </Box>
      </Box>
    </>
  );
}
