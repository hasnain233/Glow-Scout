"use client"
import React from 'react';
import { Box, Typography, IconButton, Drawer, List, ListItem, ListItemText, Divider } from "@mui/material";
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import Button from "./Button";
import { useState } from 'react';

export default function Navbar() {
    const navInfo =[
        {title:'Home',href:'/'},
        {title:'Goals',href:'/'},
        {title:'Spas',href:'/Spas'},
        {title:'Blogs',href:'/'},
    ]
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Glow Scout
            </Typography>
            <Divider />
            <List>
                {navInfo.map((text) => (
                    <Link key={text} href={text.href} passHref>
                        <ListItem button>
                            <ListItemText primary={text.title} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            position: 'fixed',
            top: 0,
            zIndex: 1000,
            backgroundColor: '#fff',
            padding: '15px 40px',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        }}>
            <Typography variant="h6" sx={{
                color: '#351120',
                fontFamily: 'Valky',
                fontWeight: 400,
                fontSize: { xs: '24px', md: '35px' },
                lineHeight: '47px',
            }}>
                Glow Scout
            </Typography>

            <Box sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: '40px',
                margin: "auto"
            }}>
                {navInfo.map((text) => (
                    <Link key={text} href={text.href} passHref>
                        <Typography sx={{
                            color: '#351120',
                            fontFamily: 'Raleway',
                            fontWeight: 500,
                            fontSize: '24px',
                            lineHeight: '28.18px',
                            cursor: 'pointer'
                        }}>
                            {text.title}
                        </Typography>
                    </Link>
                ))}
            </Box>

            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ display: { md: 'none' } }}
            >
                <MenuIcon />
            </IconButton>

            <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                }}
            >
                {drawer}
            </Drawer>

            <Button
                title='Sign In/Up'
                bg='#351120'
                br='50px'
                color='#F6E9CE'
                height="38px"
                fs="15px"
                lineHeight="28.18px"
                ffamily="Raleway"
                sx={{ display: { xs: 'none', md: 'inline-block' } }}
            />
        </Box>
    );
}
