"use client"
import React from "react";
import ScrollVideo from "../scroller";
import { useState,useEffect } from "react";
import logo from "../../../../public/image/logo.png"
// import { N } from "framer-motion/dist/types.d-6pKw1mTI";
import { PlayCircleOutline } from "@mui/icons-material";
import Image from "next/image";
import { Link } from "@mui/material";
import { motion } from "framer-motion";
 import mainpage from "../../../../public/image/mainpage.png";
import {
  VolumeUp,
  HelpOutline,
  CheckCircle,
  EmojiObjects
} from "@mui/icons-material";
import { Instagram, LinkedIn, YouTube } from "@mui/icons-material";
import {
  MailOutline,
  AttachMoney,
  AccountBalance,
  Cloud,
  Language,
  Storage,
  Sms,
  ViewModule
} from "@mui/icons-material";
import { Monitor, Extension, Shield } from "@mui/icons-material";
import { RocketLaunch, Feedback, EmojiEvents } from "@mui/icons-material";
import FaceIcon from "@mui/icons-material/Face";
import {
  getCompletedChallenges,
  getFounders,
  getOngoingChallenges
} from "@/action/auth";

import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Container,
    Grid,
    Card,
    CardContent,
    Box,
    Avatar,
    IconButton
  } from "@mui/material";
const frames = Array.from({ length: 210 }, (_, i) => `/frames/${i + 1}.png`);


const Navbar = () => (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "black",
        padding: "10px 0",
        boxShadow: "none"
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Image src={logo} alt="Startupathon Logo" width={150} height={50} />
        <Box>
          <Button color="inherit">Ongoing Startupathon</Button>
          <Button color="inherit">Completed Startupathon</Button>
          <Button color="inherit">Startupathon Guide</Button>
          <Button color="inherit">How To Win</Button>
          <Button color="inherit">Mentor Network</Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#6a1b9a",
              ml: 2,
              borderRadius: "20px",
              padding: "10px 20px",
              fontWeight: "bold",
              textTransform: "none",
              boxShadow: "0px 4px 10px rgba(106, 27, 154, 0.5)"
            }}
          >
            Apply for Fellowship
          </Button>
          <Button color="inherit">
            <Link href="/login" style={{ color: "white" }}>
              <FaceIcon />
            </Link>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );

  const HeroSection = () => (
    <div>
      {/* <Image
        src={mainpage}
        alt="Startupathon Main Page"
        layout="responsive"
        style={{ width: "100%", height: "auto" }}
      /> */}
      <Typography
        variant="h3"
        gutterBottom
        fontWeight="bold"
        sx={{
          fontSize: { xs: "4rem", md: "4.5rem" },
          color: "#a288f1",
          textAlign: "center",
          textTransform: "uppercase"
        }}
      >
        Startupathon
      </Typography>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontSize: { xs: "1rem", md: "1.5rem" },
          textAlign: "center",
          color: "#fff",
          fontWeight: 400
        }}
      >
        Your Chance to Build, Lead, and Succeed as a Founder
      </Typography>
      {/* Video Wrapper with Reduced Height & Glowing Effect */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "900px",
          margin: "0 auto",
          mt: 3,
          position: "relative",
          paddingBottom: "40%",
          height: 0,
          overflow: "hidden",
          borderRadius: "10px",
          boxShadow: "0px 0px 20px rgba(162, 136, 241, 0.7)"
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/7KVOKfPKta8?autoplay=1&mute=1&controls=1&loop=1&playlist=7KVOKfPKta8&playsinline=1&vq=hd720"
          title="Startupathon Video"
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        ></iframe>
      </Box>
      <br />
    </div>
  );



  // Button Section with four main call-to-actions
 // ButtonSection (UPDATED STYLES for partial transparency + smaller padding)
const ButtonSection = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      gap: 3,
      mt: 4,
      flexWrap: "wrap"
    }}
  >
    {[
      { text: "Ongoing Startupathon", icon: <VolumeUp /> },
      { text: "Startupathon Guide", icon: <HelpOutline /> },
      { text: "Past Startupathons", icon: <CheckCircle /> },
      { text: "Mentor Network", icon: <EmojiObjects /> }
    ].map((button, index) => (
      <Button
        key={index}
        variant="contained"
        startIcon={button.icon}
        sx={{
          // Partial transparent gradient to see the background eye
          background: "linear-gradient(135deg, rgba(123,31,162,0.3), rgba(156,39,176,0.3))",
          backdropFilter: "blur(6px)",
          color: "#fff",
          borderRadius: "12px",
          padding: "12px 24px",
          fontSize: "1rem",
          fontWeight: "bold",
          textTransform: "none",
          boxShadow: "0px 0px 15px rgba(156, 39, 176, 0.5)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0px 0px 25px rgba(156, 39, 176, 0.7)"
          },
          "&:active": {
            transform: "scale(0.95)"
          }
        }}
      >
        {button.text}
      </Button>
    ))}
  </Box>
);

  // Rewards Section with static rewards data
  const RewardsSection = () => {
    const rewards = [
      { icon: <MailOutline fontSize="large" />, text: "Competitive Salary" },
      { icon: <AttachMoney fontSize="large" />, text: "≥ $10,000 USD in Company Funding" },
      { icon: <AccountBalance fontSize="large" />, text: "≥ 10% Founder Equity" },
      { icon: <Cloud fontSize="large" />, text: "≥ $100,000 USD AWS Credits" },
      { icon: <Language fontSize="large" />, text: "$1,000 OpenAI Credits" },
      { icon: <Storage fontSize="large" />, text: "$120,000 USD IBM Cloud Credits" },
      { icon: <Sms fontSize="large" />, text: "$2,500 Twilio Credits" },
      { icon: <ViewModule fontSize="large" />, text: "$2,000 Airtable Credits" }
    ];
  
    return (
      <div style={{ maxWidth: "80%", margin: "0 auto" }}>
        <Box sx={{ textAlign: "center", py: 6 }}>
          <Typography variant="h4" fontWeight="bold" sx={{ color: "#fff", mb: 4 }}>
            Startupathon Success Comes with Extraordinary Rewards
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {rewards.map((reward, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box
                  sx={{
                    // Partial transparent background with blur
                    background: "linear-gradient(135deg, rgba(26,26,46,0.3), rgba(46,26,71,0.3))",
                    backdropFilter: "blur(6px)",
                    color: "#fff",
                    borderRadius: "12px",
                    padding: "12px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "120px",
                    boxShadow: "0px 0px 15px rgba(156,39,176,0.3)",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0px 0px 25px rgba(156,39,176,0.5)"
                    }
                  }}
                >
                  {reward.icon}
                  <Typography variant="body1" sx={{ mt: 2, fontWeight: "bold" }}>
                    {reward.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    );
  };
  
  
  // Ongoing Challenges Section using data from getOngoingChallenges
  const ChallengesSection = () => {
    const [challenges, setChallenges] = useState([]);
  
    useEffect(() => {
      async function fetchChallenges() {
        try {
          const data = await getOngoingChallenges();
          console.log("ongoing", data);
          if (data && data.challenges) {
            setChallenges(data.challenges);
          } else {
            setChallenges(data);
          }
        } catch (error) {
          console.error("Error fetching ongoing challenges:", error);
        }
      }
      fetchChallenges();
    }, []);
  
    const defaultIcon = <Monitor sx={{ fontSize: 60, color: "#b388eb" }} />;
  
    // Split challenges into left and right columns
    const half = Math.ceil(challenges.length / 2);
    const leftChallenges = challenges.slice(0, half);
    const rightChallenges = challenges.slice(half);
  
    return (
      <Container
        sx={{
          py: 8,
          // Instead of solid black, use partial transparency so the eye is visible behind
          backgroundColor: "transparent",
          backdropFilter: "blur(4px)",
          color: "#fff"
        }}
      >
        <Typography variant="h4" gutterBottom textAlign="center" fontWeight="bold">
          Ongoing Startupathon Challenges
        </Typography>
        <Typography variant="h6" textAlign="center" sx={{ mb: 4, opacity: 0.8 }}>
          Start your journey—tackle live challenges, earn equity, and lead the future.
        </Typography>
  
        <Grid container spacing={3} justifyContent="center">
          {/* Left column */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {leftChallenges.map((challenge, index) => (
                <Card
                  key={index}
                  sx={{
                    background: "linear-gradient(135deg, rgba(26,26,46,0.3), rgba(46,26,71,0.3))",
                    backdropFilter: "blur(6px)",
                    color: "#fff",
                    borderRadius: "15px",
                    textAlign: "center",
                    minHeight: "280px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: "0px 0px 15px rgba(156,39,176,0.3)",
                    transition: "transform 0.3s ease-in-out",
                    my: 2,
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0px 0px 25px rgba(156,39,176,0.5)"
                    }
                  }}
                >
                  <CardContent>
                    {challenge.icon ? challenge.icon : defaultIcon}
                    <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                      {challenge.title}
                    </Typography>
                    <Typography variant="subtitle2" color="primary" sx={{ mt: 1 }}>
                      Initial Funding Offered: <i>{challenge.funding}</i>
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1, opacity: 0.8 }}>
                      {challenge.description}
                    </Typography>
                  </CardContent>
                  <Box sx={{ px: 2, pb: 2, textAlign: "center" }}>
                    <Typography variant="body2" color="error" fontWeight="bold">
                      🔥 Deadline approaching! Apply by{" "}
                      {new Date(challenge.deadline).toLocaleDateString()}!
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        mt: 2,
                        width: "100%",
                        backgroundColor: "#6a1b9a",
                        color: "#fff",
                        borderRadius: "8px",
                        textTransform: "none",
                        fontWeight: "bold",
                        "&:hover": {
                          backgroundColor: "#8e44ad"
                        }
                      }}
                    >
                      View Challenge Details
                    </Button>
                  </Box>
                </Card>
              ))}
            </motion.div>
          </Grid>
  
          {/* Empty center column for spacing on md+ screens */}
          <Grid item md={4} sx={{ display: { xs: "none", md: "block" } }} />
  
          {/* Right column */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {rightChallenges.map((challenge, index) => (
                <Card
                  key={index}
                  sx={{
                    background: "linear-gradient(135deg, rgba(26,26,46,0.3), rgba(46,26,71,0.3))",
                    backdropFilter: "blur(6px)",
                    color: "#fff",
                    borderRadius: "15px",
                    textAlign: "center",
                    minHeight: "280px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: "0px 0px 15px rgba(156,39,176,0.3)",
                    transition: "transform 0.3s ease-in-out",
                    my: 2,
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0px 0px 25px rgba(156,39,176,0.5)"
                    }
                  }}
                >
                  <CardContent>
                    {challenge.icon ? challenge.icon : defaultIcon}
                    <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                      {challenge.title}
                    </Typography>
                    <Typography variant="subtitle2" color="primary" sx={{ mt: 1 }}>
                      Initial Funding Offered: <i>{challenge.funding}</i>
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1, opacity: 0.8 }}>
                      {challenge.description}
                    </Typography>
                  </CardContent>
                  <Box sx={{ px: 2, pb: 2, textAlign: "center" }}>
                    <Typography variant="body2" color="error" fontWeight="bold">
                      🔥 Deadline approaching! Apply by{" "}
                      {new Date(challenge.deadline).toLocaleDateString()}!
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        mt: 2,
                        width: "100%",
                        backgroundColor: "#6a1b9a",
                        color: "#fff",
                        borderRadius: "8px",
                        textTransform: "none",
                        fontWeight: "bold",
                        "&:hover": {
                          backgroundColor: "#8e44ad"
                        }
                      }}
                    >
                      View Challenge Details
                    </Button>
                  </Box>
                </Card>
              ))}
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    );
  };
  
  
  // Founders Section using data from getFounders
  const FoundersSection = () => {
    const [founders, setFounders] = useState([]);
  
    useEffect(() => {
      async function fetchFounders() {
        try {
          const data = await getFounders();
          console.log("founder", data);
          if (data && data.founders) {
            setFounders(data.founders);
          } else {
            setFounders(data);
          }
        } catch (error) {
          console.error("Error fetching founders:", error);
        }
      }
      fetchFounders();
    }, []);
    return (
      <Box sx={{ py: 10, backgroundColor: "#0f0f1a", color: "#fff", textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold">
          Our Successful Founders
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.8, mb: 4 }}>
          Meet the visionary founders who have turned Startupathon challenges into thriving startups.
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {founders.map((founder, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  background: "linear-gradient(135deg, #1a1a2e, #2e1a47)",
                  color: "#fff",
                  borderRadius: "12px",
                  padding: "24px",
                  textAlign: "center",
                  boxShadow: "0px 0px 15px rgba(106, 27, 154, 0.5)",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 0px 30px rgba(156, 39, 176, 1)"
                  }
                }}
              >
                <Typography variant="h6" fontWeight="bold" sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1 }}>
                  {founder.name}
                </Typography>
                <Avatar
                  src={founder.image}
                  sx={{
                    width: 120,
                    height: 120,
                    mx: "auto",
                    mt: 2,
                    border: "4px solid rgba(255, 255, 255, 0.2)"
                  }}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                    {founder.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
                    {founder.description}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      background: "linear-gradient(135deg, #6a1b9a, #8e44ad)",
                      color: "#fff",
                      borderRadius: "10px",
                      padding: "10px 20px",
                      fontSize: "0.9rem",
                      fontWeight: "bold",
                      textTransform: "none",
                      boxShadow: "0px 4px 10px rgba(106, 27, 154, 0.5)",
                      "&:hover": {
                        background: "linear-gradient(135deg, #8e44ad, #6a1b9a)"
                      }
                    }}
                  >
                    Connect on LinkedIn
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };
  
  // Completed Challenges Section using data from getCompletedChallenges
  const CompletedChallengesSection = () => {
    const [completedChallenges, setCompletedChallenges] = useState([]);
  
    useEffect(() => {
      async function fetchCompletedChallenges() {
        try {
          const data = await getCompletedChallenges();
          console.log("here is the code ", data);
          if (data && data.challenges) {
            setCompletedChallenges(data.challenges);
          } else {
            setCompletedChallenges(data);
          }
        } catch (error) {
          console.error("Error fetching completed challenges:", error);
        }
      }
      fetchCompletedChallenges();
    }, []);
  
    return (
      <Box sx={{ py: 10, px: 6, backgroundColor: "#0f0f1a", color: "#fff", textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold">
          Completed Startupathon Challenges
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.8, mb: 4 }}>
          <i>People like you have cracked Startupathon challenges and are now leading thriving startups.</i>
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {completedChallenges.map((challenge, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50, rotate: 5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    background: "linear-gradient(135deg, #1a1a2e, #2e1a47)",
                    color: "#fff",
                    borderRadius: "12px",
                    padding: "24px",
                    textAlign: "center",
                    boxShadow: "0px 0px 15px rgba(106, 27, 154, 0.5)",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0px 0px 30px rgba(156, 39, 176, 1)"
                    }
                  }}
                >
                  <Typography variant="h6" fontWeight="bold" sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1 }}>
                    {challenge.name}
                  </Typography>
                  <Avatar
                    src={challenge.image}
                    sx={{
                      width: 120,
                      height: 120,
                      mx: "auto",
                      mt: 2,
                      border: "4px solid rgba(255, 255, 255, 0.2)"
                    }}
                  />
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                      {challenge.founder}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
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
                        borderRadius: "10px",
                        padding: "10px 20px",
                        fontSize: "0.9rem",
                        fontWeight: "bold",
                        textTransform: "none",
                        boxShadow: "0px 4px 10px rgba(106, 27, 154, 0.5)",
                        "&:hover": {
                          background: "linear-gradient(135deg, #8e44ad, #6a1b9a)"
                        }
                      }}
                    >
                      Connect on LinkedIn
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };
  
  // Video Section with a YouTube embed
  const VideoSection = () => (
    <Box sx={{ py: 8, backgroundColor: "#0f0f1a", color: "#fff", textAlign: "center" }}>
      <Container maxWidth="md">
        <Typography variant="h4" fontWeight="bold">
          Work Smart, Win Big: Pro Tips from{" "}
          <span style={{ fontStyle: "italic" }}>Swapnil Sharma</span>, CTO of Ovadrive (A Startupathon Success)
        </Typography>
        <Box
          sx={{
            mt: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            maxWidth: "900px",
            margin: "0 auto",
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            overflow: "hidden",
            borderRadius: "10px",
            boxShadow: "0px 0px 30px rgba(106, 27, 154, 0.8)"
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/NchvlSe1TY4?autoplay=1&mute=1&controls=1&loop=1&playlist=NchvlSe1TY4&playsinline=1&vq=hd720"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          ></iframe>
        </Box>
      </Container>
    </Box>
  );
  
  // Fellowship Section with an invitation to apply
  const FellowshipSection = () => (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 6,
        px: 2,
        backgroundColor: "#0f0f1a"
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Box
          sx={{
            background: "linear-gradient(135deg, #1a1a2e, #2e1a47)",
            borderRadius: "16px",
            padding: "50px",
            textAlign: "center",
            maxWidth: "1100px",
            width: "100%",
            boxShadow: "0px 0px 20px rgba(156, 39, 176, 0.3)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            transition: "all 0.3s ease-in-out",
            position: "relative",
            "&:hover": {
              boxShadow: "0px 0px 30px rgba(156, 39, 176, 0.5)"
            },
            "&::before": {
              content: '""',
              position: "absolute",
              width: "100%",
              height: "100%",
              background: "url('/wave-pattern.png')",
              opacity: 0.1,
              borderRadius: "inherit",
              top: 0,
              left: 0
            }
          }}
        >
          <Typography variant="h4" fontWeight="bold" sx={{ color: "#fff" }}>
            Got an idea of your own?
          </Typography>
          <Typography variant="h6" sx={{ color: "#b0a3e3", my: 2 }}>
            <i>
              We are always on the lookout for visionaries with great startup ideas, ready to become successful founders.
              If that's you, apply below for our Fellowship program.
            </i>
          </Typography>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                background: "linear-gradient(135deg, #6a1b9a, #8e44ad)",
                color: "#fff",
                borderRadius: "10px",
                padding: "14px 28px",
                fontSize: "1rem",
                fontWeight: "bold",
                textTransform: "none",
                boxShadow: "0px 4px 15px rgba(106, 27, 154, 0.5)",
                "&:hover": {
                  background: "linear-gradient(135deg, #8e44ad, #6a1b9a)"
                }
              }}
            >
              Apply For Fellowship
            </Button>
          </motion.div>
        </Box>
      </motion.div>
    </Box>
  );
  
  // AnimatedCursor: Follows mouse movement and scales up briefly on scroll.
  const AnimatedCursor = () => {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [scale, setScale] = useState(1);
  
    useEffect(() => {
      const moveCursor = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener("mousemove", moveCursor);
      return () => window.removeEventListener("mousemove", moveCursor);
    }, []);
  
    useEffect(() => {
      const handleScroll = () => {
        setScale(1.5);
        clearTimeout(window.cursorTimeout);
        window.cursorTimeout = setTimeout(() => {
          setScale(1);
        }, 150);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 9999,
          width: 20,
          height: 20,
          borderRadius: "50%",
          backgroundColor: "rgba(106,27,154,0.7)"
        }}
        animate={{
          x: position.x - 10,
          y: position.y - 10,
          scale: scale
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
      />
    );
  };
const MainScroller = () => {
  return (
    <div>
        <Navbar/>
      <ScrollVideo frames={frames} containerHeight={1500} speedMultiplier={0.5} />  
      {/* 1.55 */}
      {/* <Image
        src={mainpage}
        alt="Startupathon Main Page"
        layout="responsive"
        style={{ width: "100%", height: "auto" }}
      /> */}
      {/* Other content */}

      <HeroSection /> 

      



               <ButtonSection />
          
       
             {/* RewardsSection with Horizontal Flip */}
             
               <RewardsSection />
            
             {/* Ongoing Challenges Section with Fade & Slight Rotate */}
             
               <ChallengesSection />
             
             {/* Founders Section to display founders data */}
            
               <FoundersSection />
             
               <Box sx={{ py: 8, backgroundColor: "#0f0f1a", color: "#fff", overflowX: "hidden" }}>
                 <Typography variant="h4" fontWeight="bold" textAlign="center">
                   Found an idea that matches your skills?
                 </Typography>
                 <Typography variant="h6" textAlign="center" sx={{ mb: 6, opacity: 0.8 }}>
                   Here’s a simple guide on how the Startupathon process works once you find a project idea that suits your skills.
                 </Typography>
                 <Grid container justifyContent="center">
                   <Grid item xs={12} md={8}>
                     <Box sx={{ position: "relative", mx: "auto" }}>
                       <Box
                         sx={{
                           position: "absolute",
                           left: "50%",
                           top: 0,
                           bottom: 0,
                           width: "4px",
                           background: "linear-gradient(180deg, #6a1b9a, #8e44ad)",
                           transform: "translateX(-50%)",
                           boxShadow: "0px 0px 15px rgba(106, 27, 154, 0.5)"
                         }}
                       />
                       {[
                         {
                           title: "Dive into the Challenge Details Video",
                           subtitle: "It all starts here!",
                           description: "Receive an exciting task—your startup idea—with a detailed video to spark creativity and clarify our vision.",
                           icon: <PlayCircleOutline sx={{ fontSize: 40, color: "#b388eb" }} />,
                           tip: "💡 Pro Tip: Pay attention—it’s more than just instructions. It’s your roadmap to success!"
                         },
                         {
                           title: "Build, Submit & Shine",
                           description: "Create a prototype that showcases your approach, then submit your work with a Loom video presentation (no GitHub repo or complex code required). Your creative solution is what matters most.",
                           icon: <RocketLaunch sx={{ fontSize: 40, color: "#b388eb" }} />,
                           tip: "💡 Stay ahead: Submit on time or early to show your dedication!"
                         },
                         {
                           title: "Get Feedback, Level Up!",
                           description: "Three days after submission, we review your work. If it stands out, you're in! If not, we'll share feedback on how to improve. The cycle continues until we find the perfect fit.",
                           icon: <Feedback sx={{ fontSize: 40, color: "#b388eb" }} />,
                           tip: "💡 Pro Tip: This feedback is gold. Use it to sharpen your submission or learn what it takes to win!"
                         },
                         {
                           title: "Claim Your Crown",
                           description: "Ace the challenge to become the project leader. Lead the Project. Ace the challenge, and take charge as BOSS. Enjoy ownership, 20% equity, and a competitive salary.",
                           icon: <EmojiEvents sx={{ fontSize: 40, color: "#b388eb" }} />
                         }
                       ].map((step, index) => (
                         <motion.div
                           key={index}
                           initial={{ opacity: 0, y: 100, scale: 0.9 }}
                           whileInView={{ opacity: 1, y: 0, scale: 1 }}
                           transition={{
                             duration: 0.6,
                             delay: index * 0.2,
                             type: "spring",
                             stiffness: 80,
                             damping: 10
                           }}
                           viewport={{ once: false, amount: 0.3 }}
                           whileHover={{ scale: 1.05 }}
                         >
                           <Grid
                             container
                             alignItems="center"
                             sx={{
                               mb: 6,
                               display: "flex",
                               flexDirection: index % 2 === 0 ? "row" : "row-reverse"
                             }}
                           >
                             <Grid item xs={5} textAlign={index % 2 === 0 ? "right" : "left"} sx={{ px: 3 }}>
                               <Typography variant="h6" fontWeight="bold">
                                 {step.title}
                               </Typography>
                               {step.subtitle && (
                                 <Typography variant="h6" fontWeight="bold" color="primary">
                                   {step.subtitle}
                                 </Typography>
                               )}
                               <Typography variant="body2" sx={{ opacity: 0.8 }}>
                                 {step.description}
                               </Typography>
                               {step.tip && (
                                 <Typography variant="body2" sx={{ mt: 1, color: "#b388eb" }}>
                                   {step.tip}
                                 </Typography>
                               )}
                             </Grid>
                             <Grid item xs={2} textAlign="center">
                               <motion.div
                                 whileHover={{ scale: 1.3 }}
                                 whileTap={{ scale: 0.9 }}
                                 transition={{ duration: 0.3 }}
                               >
                                 <Box
                                   sx={{
                                     width: 60,
                                     height: 60,
                                     borderRadius: "50%",
                                     backgroundColor: "#6a1b9a",
                                     display: "flex",
                                     alignItems: "center",
                                     justifyContent: "center",
                                     boxShadow: "0px 0px 20px rgba(106, 27, 154, 0.7)",
                                     transition: "all 0.3s ease",
                                     "&:hover": {
                                       boxShadow: "0px 0px 30px rgba(156, 39, 176, 1)"
                                     }
                                   }}
                                 >
                                   {step.icon}
                                 </Box>
                               </motion.div>
                             </Grid>
                             <Grid item xs={5} textAlign={index % 2 === 0 ? "left" : "right"} sx={{ px: 3 }}>
                               <Typography variant="h6" fontWeight="bold">
                                 {step.title}
                               </Typography>
                               {step.subtitle && (
                                 <Typography variant="h6" fontWeight="bold" color="primary">
                                   {step.subtitle}
                                 </Typography>
                               )}
                               <Typography variant="body2" sx={{ opacity: 0.8 }}>
                                 {step.description}
                               </Typography>
                               {step.tip && (
                                 <Typography variant="body2" sx={{ mt: 1, color: "#b388eb" }}>
                                   {step.tip}
                                 </Typography>
                               )}
                             </Grid>
                           </Grid>
                         </motion.div>
                       ))}
                     </Box>
                   </Grid>
                 </Grid>
               </Box>
            
               <VideoSection />
         
               <FellowshipSection />
            
       
             {/* CompletedChallengesSection with Fade & Rotate */}
         
               <CompletedChallengesSection />
           
               <Box sx={{ backgroundColor: "#000", color: "#fff", py: 6, px: 4 }}>
                 <Grid container spacing={4} justifyContent="space-between">
                   <Grid item xs={12} md={4} textAlign="left">
                     <Image src={logo} alt="Persist Ventures" width={150} height={50} />
                     <Typography variant="body2" sx={{ mt: 2, opacity: 0.8 }}>
                       We partner with entrepreneurs and businesses to help scale and grow their ideas. With a diverse team skilled in every sector, there is no business we cannot help get a leg up.
                     </Typography>
                     <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                       <IconButton sx={{ color: "#fff" }}>
                         <Instagram />
                       </IconButton>
                       <IconButton sx={{ color: "#fff" }}>
                         <LinkedIn />
                       </IconButton>
                       <IconButton sx={{ color: "#fff" }}>
                         <YouTube />
                       </IconButton>
                     </Box>
                   </Grid>
                   <Grid item xs={12} md={4}>
                     <Typography variant="h6" fontWeight="bold">
                       Quick Links
                     </Typography>
                     <Box sx={{ mt: 1 }}>
                       <Link href="#" color="inherit" sx={{ display: "block", opacity: 0.8 }}>
                         Home
                       </Link>
                       <Link href="#" color="inherit" sx={{ display: "block", opacity: 0.8 }}>
                         Investor Application
                       </Link>
                       <Link href="#" color="inherit" sx={{ display: "block", opacity: 0.8 }}>
                         Job Application
                       </Link>
                       <Link href="#" color="inherit" sx={{ display: "block", opacity: 0.8 }}>
                         Startup Accelerator
                       </Link>
                       <Link href="#" color="inherit" sx={{ display: "block", opacity: 0.8 }}>
                         Career Accelerator
                       </Link>
                       <Link href="#" color="inherit" sx={{ display: "block", opacity: 0.8 }}>
                         Our Team
                       </Link>
                     </Box>
                   </Grid>
                   <Grid item xs={12} md={4}>
                     <Typography variant="h6" fontWeight="bold">
                       Legal
                     </Typography>
                     <Box sx={{ mt: 1 }}>
                       <Link href="#" color="inherit" sx={{ display: "block", opacity: 0.8 }}>
                         Terms of Service
                       </Link>
                       <Link href="#" color="inherit" sx={{ display: "block", opacity: 0.8 }}>
                         Privacy Policy
                       </Link>
                       <Link href="#" color="inherit" sx={{ display: "block", opacity: 0.8 }}>
                         Decentralized Intelligence Agency
                       </Link>
                     </Box>
                   </Grid>
                 </Grid>
                 <Typography variant="body2" textAlign="center" sx={{ mt: 4, opacity: 0.6 }}>
                   &copy; 2025 persistventures.com. All rights reserved.
                 </Typography>
               </Box>
             
       
             <AnimatedCursor />
    </div>
  );
};

export default MainScroller;

