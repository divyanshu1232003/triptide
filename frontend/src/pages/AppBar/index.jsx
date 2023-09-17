import React, { useState, useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function CustomAppBar() {
    const [cookies, , removeCookies] = useCookies(); // Removed setCookies as it's not used
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function login() {
        if (cookies.auth_token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }

    async function logout() {
        if (isLoggedIn) {
            await removeCookies("auth_token");
            setIsLoggedIn(false);
            navigate("/signup");
        }
    }

    useEffect(() => {
        login(); // Check login status when the component mounts
    }, []);

    return (
        <AppBar position="fixed" style={{ background: "black" }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    TripTide
                </Typography>
                {isLoggedIn && (
                    <Button color="inherit" onClick={logout}>
                        Logout
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
}
