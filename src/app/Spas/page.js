import { Box, Typography, Grid } from "@mui/material"
import HeadingContent from "../Components/Heading&Content"
import Card from "../Components/Card"
import img1 from "../Images/SpasPage1.png"
import img2 from "../Images/SpasPage2.png"
import img3 from "../Images/SpasPage3.png"
import img4 from "../Images/SpasPage4.png"
import img5 from "../Images/SpasPage5.png"

export default function Treatment() {
    const treatmentInfo = [
        { img: img1, title: 'Laser Resurfacing', description: 'Lorem Ipsum' },
        { img: img2, title: 'Chemical Peels', description: 'Lorem Ipsum' },
        { img: img3, title: 'Acne Bluelight Therapy', description: 'Lorem Ipsum' },
        { img: img4, title: 'Thermage', description: 'Lorem Ipsum' },
        { img: img5, title: 'Botox', description: 'Lorem Ipsum' },
        { img: img1, title: 'Laser Resurfacing', description: 'Lorem Ipsum' },
        { img: img2, title: 'Chemical Peels', description: 'Lorem Ipsum' },
        { img: img3, title: 'Acne Bluelight Therapy', description: 'Lorem Ipsum' },
        { img: img4, title: 'Thermage', description: 'Lorem Ipsum' },
        { img: img5, title: 'Botox', description: 'Lorem Ipsum' },
        { img: img1, title: 'Laser Resurfacing', description: 'Lorem Ipsum' },
        { img: img2, title: 'Chemical Peels', description: 'Lorem Ipsum' },
        { img: img3, title: 'Acne Bluelight Therapy', description: 'Lorem Ipsum' },
        { img: img4, title: 'Thermage', description: 'Lorem Ipsum' },
        { img: img5, title: 'Botox', description: 'Lorem Ipsum' },

    ];

    return (
        <>
            <Box sx={{
                borderTop: '1px solid #121212'

            }}>
                <HeadingContent mt='50px' heading='Salons & Spas' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus.' />
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent:"center",
                alignItems:'center',
                margin:"auto",
                width:{md:'90%',xs:'100%'},
                padding:{md:'25px 20px',xs:'25px 10px'}
            }}>
                <Grid container  rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
                    {treatmentInfo.map((item, index) => (
                        <Grid item xs={6} sm={4} md={3} key={index}>
                            <Card w={{md:'230px',xs:'180px'}} img={item.img} heading={item.title} content={item.description} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}