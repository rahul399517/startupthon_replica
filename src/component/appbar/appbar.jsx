"use client";
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Box
} from '@mui/material';

// MUI Icons
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

export default function MyAppBar() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: '#000000', // Black background
        color: '#ffffff',           // White text/icons
        borderBottom: '1px solid #333333', // Subtle dark border
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Left side: Title and Date */}
        <Box>
          {/* Optional: Today's Plan with dropdown (currently commented out) */}
          {/*
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ mr: 1 }}>
              Today’s Plan
            </Typography>
            <ArrowDropDownIcon />
          </Box>
          */}
          {/* Optional Date (commented out) */}
          {/*
          <Typography variant="body2" sx={{ color: '#cccccc' }}>
            March 27th, 2023
          </Typography>
          */}
        </Box>

        {/* Right side: Notification + User Info */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Notification icon */}
          <IconButton sx={{ mr: 2, color: '#ffffff' }}>
            <NotificationsNoneIcon />
          </IconButton>

          {/* User name/role + Avatar */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ textAlign: 'right', mr: 2 }}>
              <Typography variant="subtitle1">Mykola Ledenov</Typography>
              <Typography variant="caption" sx={{ color: '#cccccc' }}>
                CEO/Nied
              </Typography>
            </Box>
            <Avatar
              alt="Mykola Ledenov"
              src="https://via.placeholder.com/40"
            />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
