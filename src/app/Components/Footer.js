import { Box, Typography } from "@mui/material"
import HeadingContent from "./Heading&Content"
import Link from "next/link"

export default function Footer() {
    const QuickLinks = [
        { names: 'Home', href: '/' },
        { names: 'Treatment', href: '/Treatment' },
        { names: 'Spas', href: '/Spas' },
        { names: 'Blog', href: '#' }
    ];
    const QuickLinks2 = [
        { names: 'privacy Policy', href: '#' },
        { names: 'Terms & Conditions', href: '#' },
        { names: 'About Us', href: '#' },
    ];
    const followUs = [
        { names: 'Instagram', href: '#' },
        { names: 'Facebook', href: '#' },
        { names: 'YouTube', href: '#' },
    ]
    return (
        <>
            <Box sx={{
                display: 'flex',
                borderTop: '1px solid #121212',
                justifyContent: "center",
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: { md: 'row', xs: 'column' },
                    width: {md:'65%',xs:'100%'},
                    backgroundColor: '#121212',
                    justifyContent: 'space-between',
                    padding: '30px',
                    alignItems: 'center',
                    marginTop: { md: '4%' },
                    borderTopLeftRadius: '10px',
                    borderTopRightRadius: '10px',

                }}>
                    <Typography sx={{
                        fontFamily: 'Raleway',
                        fontWeight: 'normal',
                        fontSize: '50px',
                        lineHeight: '40px',
                        letterSpacing: '-0.04em',
                        color: '#FEF5E3'
                    }}>
                        Glow <br />
                        Scout
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: { md: 'row', xs: 'column' },
                        gap: 5,
                        marginRight: { md: '70px', xs: '0px' }
                    }}>
                        <Box sx={{
                        }}>
                            <Typography sx={{
                                fontFamily: 'Raleway',
                                fontWeight: 'normal',
                                fontSize: '25px',
                                lineHeight: '30px',
                                letterSpacing: '-0.04em',
                                color: '#FEF5E3'
                            }}>Quick links</Typography>
                            {
                                QuickLinks.map((items) => (
                                    <Link href={items.href} style={{ textDecoration: 'none' }}>
                                        <Typography sx={{
                                            fontStyle: 'normal',
                                            fontWeight: '300',
                                            fontsize: { lg: '16px', md: '12px', xs: '11px' },
                                            lineHeight: '24px',
                                            /* identical to box height */

                                            color: '#9E9E9E',
                                        }}>
                                            {items.names}
                                        </Typography>
                                    </Link>
                                ))
                            }
                        </Box>

                        <Box sx={{
                        }}>

                            {
                                QuickLinks2.map((items) => (
                                    <Link href={items.href} style={{ textDecoration: 'none' }}>
                                        <Typography sx={{
                                            fontStyle: 'normal',
                                            fontWeight: '300',
                                            fontsize: { lg: '16px', md: '12px', xs: '11px' },
                                            lineHeight: '24px',
                                            /* identical to box height */

                                            color: '#9E9E9E',
                                        }}>
                                            {items.names}
                                        </Typography>
                                    </Link>
                                ))
                            }
                        </Box>
                        <Box>
                            <Typography sx={{
                                fontFamily: 'Raleway',
                                fontWeight: 'normal',
                                fontSize: '25px',
                                lineHeight: '30px',
                                letterSpacing: '-0.04em',
                                color: '#FEF5E3'
                            }}>Follow Us</Typography>
                            {
                                followUs.map((items) => (
                                    <Link href={items.href} style={{ textDecoration: 'none' }}>
                                        <Typography sx={{
                                            fontStyle: 'normal',
                                            fontWeight: '300',
                                            fontsize: { lg: '16px', md: '12px', xs: '11px' },
                                            lineHeight: '24px',
                                            /* identical to box height */

                                            color: '#9E9E9E',
                                        }}>
                                            {items.names}
                                        </Typography>
                                    </Link>
                                ))
                            }
                        </Box>

                    </Box>
                </Box>
            </Box >
        </>
    )
}