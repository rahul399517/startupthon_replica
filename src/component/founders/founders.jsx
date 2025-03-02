"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Avatar,
  Typography,
  Button,
} from "@mui/material";
import Image from "next/image";
import { getCompletedChallenges } from "@/action/auth";
import { getOngoingChallenges } from "@/action/auth";
import { getFounders } from "@/action/auth";
import NewOngoingChallengeForm from "@/component/forms/ongoing_complete_challenge_form";
import NewFounderForm from "../forms/founder_form";
const FounderManager= () => {
  // State to hold challenge data from API
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [handler, setHandler] = useState(0);
  const [error, setError] = useState(null);
  // State for modal dialog
  const [openDialog, setOpenDialog] = useState(false);
  // Form state for new challenge
  const [newChallenge, setNewChallenge] = useState({
    name: "",
    logo: "",
    founder: "",
    title: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await getFounders();
        if (response.errors) {
          setError(response.errors);
        } else {
          setChallenges(response.challenges);
        }
      } catch (err) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchChallenges();
  }, []);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await getFounders();
        console.log("here it is ", response)
        if (response.errors) {
          setError(response.errors);
        } else {
          setChallenges(response.founders);
        }
      } catch (err) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchChallenges();
  }, [handler]);

  const handleDialogOpen = () => setOpenDialog(true);
  const handleDialogClose = () => {
    setOpenDialog(false);
    setNewChallenge({
      name: "",
      logo: "",
      founder: "",
      title: "",
      description: "",
      image: "",
    });
    setHandler(handler + 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewChallenge((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // For demo, simulate adding a new challenge to local state.
    const newId = challenges.length > 0 ? challenges[challenges.length - 1].id + 1 : 1;
    const challengeToAdd = { ...newChallenge, id: newId };
    // Prepend new challenge to the list so it's seen first.
    setChallenges((prev) => [challengeToAdd, ...prev]);
    handleDialogClose();
    // In a real app, perform a POST request to save data in your database.
  };

  if (loading) {
    return (
      <Box sx={{ textAlign: "center", py: 4, color: "#fff" }}>
        <Typography variant="h6">Loading Founders...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: "center", py: 4, color: "#fff" }}>
        <Typography variant="h6">Error: {error}</Typography>
      </Box>
    );
  }

  return (
    <Container sx={{ py: 10, backgroundColor: "#0f0f1a", color: "#fff" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Founders
        </Typography>
        <Button
          variant="contained"
          onClick={handleDialogOpen}
          sx={{
            background: "linear-gradient(135deg, #6a1b9a, #8e44ad)",
            color: "#fff",
            textTransform: "none",
          }}
        >
          Add New Challenge
        </Button>
      </Box>

      <Grid container spacing={3}>
        {challenges?.map((challenge) => (
          <Grid item xs={12} sm={6} md={4} key={challenge.id}>
            <Paper
              elevation={3}
              sx={{
                background: "linear-gradient(135deg, #1a1a2e, #2e1a47)",
                color: "#fff",
                borderRadius: 2,
                p: 2,
                textAlign: "center",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 0px 20px rgba(156, 39, 176, 0.7)",
                },
              }}
            >
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                {challenge.name} {challenge.logo}
              </Typography>
              <Avatar
                src={challenge.image}
                alt={challenge.founder}
                sx={{
                  width: 120,
                  height: 120,
                  mx: "auto",
                  mb: 2,
                  border: "4px solid rgba(255, 255, 255, 0.2)",
                }}
              />
              <Typography variant="subtitle1" fontWeight="bold">
                {challenge.founder}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                {challenge.title}
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                {challenge.description}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(135deg, #6a1b9a, #8e44ad)",
                  color: "#fff",
                  borderRadius: 2,
                  px: 2,
                  py: 1,
                  "&:hover": {
                    background: "linear-gradient(135deg, #8e44ad, #6a1b9a)",
                  },
                }}
              >
                View Details
              </Button>
            </Paper>
          </Grid>
        )).reverse()}
      </Grid>

      {/* Modal form component to add new challenge */}
      <NewFounderForm
        open={openDialog}
        handleClose={handleDialogClose}
        newChallenge={newChallenge}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
};

export default FounderManager;
