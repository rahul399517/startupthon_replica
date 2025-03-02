"use client";
import React from "react";
import { Box, Container, Button } from "@mui/material";
import { useRouter } from "next/navigation";
// import CompletedChallengesManager from "@/component/sections/CompletedChallengesManager";
// import FoundersManager from "@/component/sections/FoundersManager";
// import OngoingChallengesManager from "@/component/sections/OngoingChallengesManager";
import CompletedChallengesManager from "../completed_challenges/completed _challenges";
import FounderManager from "@/component/founders/founders";
import OngoingChallengesManager from "../ongoingChallenge/ongoing_challenge";

export default function DataManagementPage() {
  const router = useRouter();

  // Smooth scroll to section by id
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Style for gradient buttons
  const gradientButtonSx = {
    background: "linear-gradient(135deg, #6a1b9a, #8e44ad)",
    color: "#fff",
    textTransform: "none",
    px: 3,
    py: 1,
    fontWeight: "bold",
    borderRadius: "8px",
    "&:hover": {
      background: "linear-gradient(135deg, #8e44ad, #6a1b9a)",
    },
  };

  return (
    <Box>
      {/* Sticky Navigation Bar */}
      {/* <Box
        sx={{
          position: "sticky",
          top: 0,
          backgroundColor: "black",
          zIndex: 1000,
          py: 2,
          boxShadow: 1,
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Button sx={gradientButtonSx} onClick={() => scrollToSection("completed")}>
            Completed Challenges
          </Button>
          <Button sx={gradientButtonSx} onClick={() => scrollToSection("founders")}>
            Founders
          </Button>
          <Button sx={gradientButtonSx} onClick={() => scrollToSection("ongoing")}>
            Ongoing Challenges
          </Button>
        </Container>
      </Box> */}

      {/* Completed Challenges Section */}
      <Box id="completed" sx={{ my: 8 }}>
        <CompletedChallengesManager limit={3} />
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Button
            variant="contained"
            sx={gradientButtonSx}
            onClick={() => router.push("/completed_challenges")}
          >
            View All Completed Challenges
          </Button>
        </Box>
      </Box>

      {/* Founders Section */}
      <Box id="founders" sx={{ my: 8 }}>
        <FounderManager limit={3} />
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Button
            variant="contained"
            sx={gradientButtonSx}
            onClick={() => router.push("/founders")}
          >
            View All Founders
          </Button>
        </Box>
      </Box>

      {/* Ongoing Challenges Section */}
      <Box id="ongoing" sx={{ my: 8 }}>
        <OngoingChallengesManager limit={3} />
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Button
            variant="contained"
            sx={gradientButtonSx}
            onClick={() => router.push("/ongoing_challenge")}
          >
            View All Ongoing Challenges
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
