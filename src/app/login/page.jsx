"use client";
import React from "react";
import {
  Box,
  Container,
  CssBaseline,
  Typography,
  Paper,
  Avatar,
} from "@mui/material";
import { Button } from "@mui/material"; // Removed if not needed later.
import { LockOutlined } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LoginForm from "@/component/auth/login-form";
import Image from "next/image";
import bigLogo from "../../../public/image/bigLogo.png";
// Example: Replace this with your Persist Ventures logo import
// import persistLogo from "@/public/persist-ventures-logo.png";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6a1b9a", // Purple brand color
    },
    secondary: {
      main: "#8e44ad", // Another purple/blue complement
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
  },
});

function LoginPageReplica() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          height: "100vh",
          overflow: "hidden", // Prevent overflow of animated elements
          position: "relative", // For absolute positioning of background elements
          backgroundColor: "#000000", // Black background
        }}
      >
        {/* Animated Background with brand color circles */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            "&::before, &::after": {
              content: '""',
              position: "absolute",
              width: "200px",
              height: "200px",
              background: "rgba(106, 27, 154, 0.2)", // Brand color with alpha
              filter: "blur(100px)",
              borderRadius: "50%",
              animation: "float 10s infinite",
            },
            "&::before": {
              top: "20%",
              left: "10%",
              animationDelay: "0s",
            },
            "&::after": {
              bottom: "20%",
              right: "10%",
              animationDelay: "5s",
            },
            "@keyframes float": {
              "0%": { transform: "translateY(0px)" },
              "50%": { transform: "translateY(-20px)" },
              "100%": { transform: "translateY(0px)" },
            },
          }}
        ></Box>

        {/* Content */}
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 2,
          }}
        >
          <Container maxWidth="md">
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" }, // Stack on small screens
                justifyContent: "space-between",
                alignItems: "center",
                gap: { xs: 4, md: 0 }, // Add spacing on small screens
              }}
            >
              {/* Left Section */}
              <Box
                sx={{
                  flex: 1,
                  textAlign: { xs: "center", md: "left" }, // Center-align on small screens
                  paddingRight: { xs: 0, md: 4 }, // Remove padding on small screens
                }}
              >
                {/* Optionally, if you have a small logo for Persist Ventures, uncomment below */}
                {/*
                <Box sx={{ mb: 2 }}>
                  <Image
                    src={persistLogo}
                    alt="Persist Ventures Logo"
                    width={150}
                    height={50}
                    style={{ objectFit: "contain" }}
                  />
                </Box>
                */}

                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: "bold",
                    color: "#ffffff",
                    marginBottom: 2,
                    fontSize: { xs: "1.8rem", md: "3rem" }, // Smaller font size on small screens
                  }}
                >
                  Welcome to Persist Ventures
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#ffffff",
                    opacity: 0.9,
                    marginBottom: 4,
                    fontSize: { xs: "1rem", md: "1.25rem" }, // Smaller font size on small screens
                  }}
                >
                  We help you build unstoppable ventures.
                </Typography>
                {/* Instead of a Get Started button, display the bigLogo image */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 2,
                  }}
                >
                  <Image
                    src={bigLogo}
                    alt="Persist Ventures Big Logo"
                    width={200} // Adjust width as needed
                    height={200} // Adjust height as needed
                    style={{ objectFit: "contain" }}
                  />
                </Box>
              </Box>

              {/* Right Section */}
              <Paper
                elevation={6}
                sx={{
                  flex: 1,
                  padding: { xs: 2, sm: 4 }, // Smaller padding on small screens
                  borderRadius: 4,
                  backgroundColor: "#fff",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar sx={{ bgcolor: "primary.main", mb: 2 }}>
                    <LockOutlined />
                  </Avatar>
                  <Typography
                    component="h1"
                    variant="h5"
                    sx={{
                      mb: 3,
                      fontSize: { xs: "1.5rem", sm: "1.75rem" }, // Adjust font size on small screens
                      textAlign: "center",
                    }}
                  >
                    Sign in to your account
                  </Typography>
                  <LoginForm />
                </Box>
              </Paper>
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default LoginPageReplica;
