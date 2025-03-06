// "use client";
// import React, { useState, useEffect } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Container,
//   Grid,
//   Card,
//   CardContent,
//   Box,
//   Avatar,
//   IconButton
// } from "@mui/material";
// import { PlayCircleOutline } from "@mui/icons-material";
// import Image from "next/image";
// import { Link } from "@mui/material";
// import { motion } from "framer-motion";
// import mainpage from "../../../../../public/image/mainpage.png";
// import logo from "../../../../../public/image/logo.png";
// import {
//   VolumeUp,
//   HelpOutline,
//   CheckCircle,
//   EmojiObjects
// } from "@mui/icons-material";
// import { Instagram, LinkedIn, YouTube } from "@mui/icons-material";
// import {
//   MailOutline,
//   AttachMoney,
//   AccountBalance,
//   Cloud,
//   Language,
//   Storage,
//   Sms,
//   ViewModule
// } from "@mui/icons-material";
// import { Monitor, Extension, Shield } from "@mui/icons-material";
// import { RocketLaunch, Feedback, EmojiEvents } from "@mui/icons-material";
// import FaceIcon from "@mui/icons-material/Face";
// import {
//   getCompletedChallenges,
//   getFounders,
//   getOngoingChallenges
// } from "@/action/auth";

// // ScrollAnimatedSection: Wraps children with a custom animation when scrolled into view.
// const ScrollAnimatedSection = ({ children, delay = 0, animationVariant }) => (
//   <motion.div
//     variants={
//       animationVariant || {
//         hidden: { opacity: 0, y: 50 },
//         visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } }
//       }
//     }
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true, amount: 0.3 }}
//   >
//     {children}
//   </motion.div>
// );

// // Navbar with black background and some opacity
// const Navbar = () => (
//   <AppBar
//     position="fixed"
//     sx={{
//       backgroundColor: "rgba(0, 0, 0, 0.8)",
//       padding: "10px 0",
//       boxShadow: "none"
//     }}
//   >
//     <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//       <Image src={logo} alt="Startupathon Logo" width={150} height={50} />
//       <Box>
//         <Button color="inherit">Ongoing Startupathon</Button>
//         <Button color="inherit">Completed Startupathon</Button>
//         <Button color="inherit">Startupathon Guide</Button>
//         <Button color="inherit">How To Win</Button>
//         <Button color="inherit">Mentor Network</Button>
//         <Button
//           variant="contained"
//           sx={{
//             backgroundColor: "#6a1b9a",
//             ml: 2,
//             borderRadius: "20px",
//             padding: "10px 20px",
//             fontWeight: "bold",
//             textTransform: "none",
//             boxShadow: "0px 4px 10px rgba(106, 27, 154, 0.5)"
//           }}
//         >
//           Apply for Fellowship
//         </Button>
//         <Button color="inherit">
//           <Link href="/login" style={{ color: "white" }}>
//             <FaceIcon />
//           </Link>
//         </Button>
//       </Box>
//     </Toolbar>
//   </AppBar>
// );

// // Hero Section with background image, titles and video
// const HeroSection = () => (
//   <div>
//     <Image
//       src={mainpage}
//       alt="Startupathon Main Page"
//       layout="responsive"
//       style={{ width: "100%", height: "auto" }}
//     />
//     <Typography
//       variant="h3"
//       gutterBottom
//       fontWeight="bold"
//       sx={{
//         fontSize: { xs: "4rem", md: "4.5rem" },
//         color: "#a288f1",
//         textAlign: "center",
//         textTransform: "uppercase"
//       }}
//     >
//       Startupathon
//     </Typography>
//     <Typography
//       variant="h4"
//       gutterBottom
//       sx={{
//         fontSize: { xs: "1rem", md: "1.5rem" },
//         textAlign: "center",
//         color: "#fff",
//         fontWeight: 400
//       }}
//     >
//       Your Chance to Build, Lead, and Succeed as a Founder
//     </Typography>
//     {/* Video Wrapper with Reduced Height & Glowing Effect */}
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         width: "100%",
//         maxWidth: "900px",
//         margin: "0 auto",
//         mt: 3,
//         position: "relative",
//         paddingBottom: "40%",
//         height: 0,
//         overflow: "hidden",
//         borderRadius: "10px",
//         boxShadow: "0px 0px 20px rgba(162, 136, 241, 0.7)"
//       }}
//     >
//       <iframe
//         src="https://www.youtube.com/embed/7KVOKfPKta8?autoplay=1&mute=1&controls=1&loop=1&playlist=7KVOKfPKta8&playsinline=1&vq=hd720"
//         title="Startupathon Video"
//         frameBorder="0"
//         allow="autoplay; encrypted-media; picture-in-picture"
//         allowFullScreen
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           objectFit: "cover"
//         }}
//       ></iframe>
//     </Box>
//     <br />
//   </div>
// );

// // Button Section with four main call-to-actions
// const ButtonSection = () => (
//   <Box
//     sx={{
//       display: "flex",
//       justifyContent: "center",
//       gap: 3,
//       mt: 4,
//       flexWrap: "wrap"
//     }}
//   >
//     {[
//       { text: "Ongoing Startupathon", icon: <VolumeUp /> },
//       { text: "Startupathon Guide", icon: <HelpOutline /> },
//       { text: "Past Startupathons", icon: <CheckCircle /> },
//       { text: "Mentor Network", icon: <EmojiObjects /> }
//     ].map((button, index) => (
//       <Button
//         key={index}
//         variant="contained"
//         startIcon={button.icon}
//         sx={{
//           background: "linear-gradient(135deg, #7b1fa2, #9c27b0)",
//           color: "#fff",
//           borderRadius: "12px",
//           padding: "16px 32px",
//           fontSize: "1.2rem",
//           fontWeight: "bold",
//           textTransform: "none",
//           boxShadow: "0px 0px 20px rgba(156, 39, 176, 0.7)",
//           transition: "all 0.3s ease-in-out",
//           "&:hover": {
//             transform: "scale(1.05)",
//             boxShadow: "0px 0px 30px rgba(156, 39, 176, 1)"
//           },
//           "&:active": {
//             transform: "scale(0.95)"
//           }
//         }}
//       >
//         {button.text}
//       </Button>
//     ))}
//   </Box>
// );

// // Rewards Section with static rewards data
// const RewardsSection = () => {
//   const rewards = [
//     { icon: <MailOutline fontSize="large" />, text: "Competitive Salary" },
//     { icon: <AttachMoney fontSize="large" />, text: "≥ $10,000 USD in Company Funding" },
//     { icon: <AccountBalance fontSize="large" />, text: "≥ 10% Founder Equity" },
//     { icon: <Cloud fontSize="large" />, text: "≥ $100,000 USD AWS Credits" },
//     { icon: <Language fontSize="large" />, text: "$1,000 OpenAI Credits" },
//     { icon: <Storage fontSize="large" />, text: "$120,000 USD IBM Cloud Credits" },
//     { icon: <Sms fontSize="large" />, text: "$2,500 Twilio Credits" },
//     { icon: <ViewModule fontSize="large" />, text: "$2,000 Airtable Credits" }
//   ];

//   return (
//     <div style={{ maxWidth: "80%", margin: "0 auto" }}>
//       <Box sx={{ textAlign: "center", py: 6 }}>
//         <Typography variant="h4" fontWeight="bold" sx={{ color: "#fff", mb: 4 }}>
//           Startupathon Success Comes with Extraordinary Rewards
//         </Typography>
//         <Grid container spacing={3} justifyContent="center">
//           {rewards.map((reward, index) => (
//             <Grid item xs={12} sm={6} md={3} key={index}>
//               <Box
//                 sx={{
//                   background: "linear-gradient(135deg, #1a1a2e, #2e1a47)",
//                   color: "#fff",
//                   borderRadius: "12px",
//                   padding: "20px",
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   minHeight: "150px",
//                   boxShadow: "0px 0px 15px rgba(156, 39, 176, 0.5)",
//                   transition: "all 0.3s ease-in-out",
//                   "&:hover": {
//                     transform: "scale(1.05)",
//                     boxShadow: "0px 0px 30px rgba(156, 39, 176, 1)"
//                   }
//                 }}
//               >
//                 {reward.icon}
//                 <Typography variant="body1" sx={{ mt: 2, fontWeight: "bold" }}>
//                   {reward.text}
//                 </Typography>
//               </Box>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </div>
//   );
// };

// // Ongoing Challenges Section using data from getOngoingChallenges
// const ChallengesSection = () => {
//   const [challenges, setChallenges] = useState([]);

//   useEffect(() => {
//     async function fetchChallenges() {
//       try {
//         const data = await getOngoingChallenges();
//         console.log("ongoing", data);
//         if (data && data.challenges) {
//           setChallenges(data.challenges);
//         } else {
//           setChallenges(data);
//         }
//       } catch (error) {
//         console.error("Error fetching ongoing challenges:", error);
//       }
//     }
//     fetchChallenges();
//   }, []);

//   // Fallback icon if none is provided by the API
//   const defaultIcon = <Monitor sx={{ fontSize: 60, color: "#b388eb" }} />;

//   return (
//     <Container sx={{ py: 8, backgroundColor: "black", color: "#fff" }}>
//       <Typography variant="h4" gutterBottom textAlign="center" fontWeight="bold">
//         Ongoing Startupathon Challenges
//       </Typography>
//       <Typography variant="h6" textAlign="center" sx={{ mb: 4, opacity: 0.8 }}>
//         Start your journey—tackle live challenges, earn equity, and lead the future.
//       </Typography>
//       <Grid container spacing={3} justifyContent="center">
//         {challenges.map((challenge, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Card
//               sx={{
//                 background: "linear-gradient(135deg, #1a1a2e, #2e1a47)",
//                 color: "#fff",
//                 borderRadius: "15px",
//                 textAlign: "center",
//                 minHeight: "350px",
//                 maxHeight: "350px",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "space-between",
//                 boxShadow: "0px 0px 20px rgba(156, 39, 176, 0.5)",
//                 transition: "transform 0.3s ease-in-out",
//                 "&:hover": {
//                   transform: "scale(1.05)",
//                   boxShadow: "0px 0px 30px rgba(156, 39, 176, 1)"
//                 }
//               }}
//             >
//               <CardContent>
//                 {challenge.icon ? challenge.icon : defaultIcon}
//                 <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
//                   {challenge.title}
//                 </Typography>
//                 <Typography variant="subtitle2" color="primary" sx={{ mt: 1 }}>
//                   Initial Funding Offered: <i>{challenge.funding}</i>
//                 </Typography>
//                 <Typography variant="body2" sx={{ mt: 1, opacity: 0.8 }}>
//                   {challenge.description}
//                 </Typography>
//               </CardContent>
//               <Box sx={{ px: 2, pb: 2, textAlign: "center" }}>
//                 <Typography variant="body2" color="error" fontWeight="bold">
//                   🔥 Deadline approaching! Apply by{" "}
//                   {new Date(challenge.deadline).toLocaleDateString()}!
//                 </Typography>
//                 <Button
//                   variant="contained"
//                   sx={{
//                     mt: 2,
//                     width: "100%",
//                     backgroundColor: "#6a1b9a",
//                     color: "#fff",
//                     borderRadius: "8px",
//                     textTransform: "none",
//                     fontWeight: "bold",
//                     "&:hover": {
//                       backgroundColor: "#8e44ad"
//                     }
//                   }}
//                 >
//                   View Challenge Details
//                 </Button>
//               </Box>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// // Founders Section using data from getFounders
// const FoundersSection = () => {
//   const [founders, setFounders] = useState([]);

//   useEffect(() => {
//     async function fetchFounders() {
//       try {
//         const data = await getFounders();
//         console.log("founder", data);
//         if (data && data.founders) {
//           setFounders(data.founders);
//         } else {
//           setFounders(data);
//         }
//       } catch (error) {
//         console.error("Error fetching founders:", error);
//       }
//     }
//     fetchFounders();
//   }, []);
//   return (
//     <Box sx={{ py: 10, backgroundColor: "#0f0f1a", color: "#fff", textAlign: "center" }}>
//       <Typography variant="h4" fontWeight="bold">
//         Our Successful Founders
//       </Typography>
//       <Typography variant="h6" sx={{ opacity: 0.8, mb: 4 }}>
//         Meet the visionary founders who have turned Startupathon challenges into thriving startups.
//       </Typography>
//       <Grid container spacing={3} justifyContent="center">
//         {founders.map((founder, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Card
//               sx={{
//                 background: "linear-gradient(135deg, #1a1a2e, #2e1a47)",
//                 color: "#fff",
//                 borderRadius: "12px",
//                 padding: "24px",
//                 textAlign: "center",
//                 boxShadow: "0px 0px 15px rgba(106, 27, 154, 0.5)",
//                 transition: "all 0.3s ease-in-out",
//                 "&:hover": {
//                   transform: "scale(1.05)",
//                   boxShadow: "0px 0px 30px rgba(156, 39, 176, 1)"
//                 }
//               }}
//             >
//               <Typography variant="h6" fontWeight="bold" sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1 }}>
//                 {founder.name}
//               </Typography>
//               <Avatar
//                 src={founder.image}
//                 sx={{
//                   width: 120,
//                   height: 120,
//                   mx: "auto",
//                   mt: 2,
//                   border: "4px solid rgba(255, 255, 255, 0.2)"
//                 }}
//               />
//               <CardContent>
//                 <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
//                   {founder.title}
//                 </Typography>
//                 <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
//                   {founder.description}
//                 </Typography>
//                 <Button
//                   variant="contained"
//                   sx={{
//                     background: "linear-gradient(135deg, #6a1b9a, #8e44ad)",
//                     color: "#fff",
//                     borderRadius: "10px",
//                     padding: "10px 20px",
//                     fontSize: "0.9rem",
//                     fontWeight: "bold",
//                     textTransform: "none",
//                     boxShadow: "0px 4px 10px rgba(106, 27, 154, 0.5)",
//                     "&:hover": {
//                       background: "linear-gradient(135deg, #8e44ad, #6a1b9a)"
//                     }
//                   }}
//                 >
//                   Connect on LinkedIn
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// // Completed Challenges Section using data from getCompletedChallenges
// const CompletedChallengesSection = () => {
//   const [completedChallenges, setCompletedChallenges] = useState([]);

//   useEffect(() => {
//     async function fetchCompletedChallenges() {
//       try {
//         const data = await getCompletedChallenges();
//         console.log("here is the code ", data);
//         if (data && data.challenges) {
//           setCompletedChallenges(data.challenges);
//         } else {
//           setCompletedChallenges(data);
//         }
//       } catch (error) {
//         console.error("Error fetching completed challenges:", error);
//       }
//     }
//     fetchCompletedChallenges();
//   }, []);

//   return (
//     <Box sx={{ py: 10, px: 6, backgroundColor: "#0f0f1a", color: "#fff", textAlign: "center" }}>
//       <Typography variant="h4" fontWeight="bold">
//         Completed Startupathon Challenges
//       </Typography>
//       <Typography variant="h6" sx={{ opacity: 0.8, mb: 4 }}>
//         <i>People like you have cracked Startupathon challenges and are now leading thriving startups.</i>
//       </Typography>
//       <Grid container spacing={3} justifyContent="center">
//         {completedChallenges.map((challenge, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <motion.div
//               initial={{ opacity: 0, y: 50, rotate: 5 }}
//               whileInView={{ opacity: 1, y: 0, rotate: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               viewport={{ once: true }}
//             >
//               <Card
//                 sx={{
//                   background: "linear-gradient(135deg, #1a1a2e, #2e1a47)",
//                   color: "#fff",
//                   borderRadius: "12px",
//                   padding: "24px",
//                   textAlign: "center",
//                   boxShadow: "0px 0px 15px rgba(106, 27, 154, 0.5)",
//                   transition: "all 0.3s ease-in-out",
//                   "&:hover": {
//                     transform: "scale(1.05)",
//                     boxShadow: "0px 0px 30px rgba(156, 39, 176, 1)"
//                   }
//                 }}
//               >
//                 <Typography variant="h6" fontWeight="bold" sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1 }}>
//                   {challenge.name}
//                 </Typography>
//                 <Avatar
//                   src={challenge.image}
//                   sx={{
//                     width: 120,
//                     height: 120,
//                     mx: "auto",
//                     mt: 2,
//                     border: "4px solid rgba(255, 255, 255, 0.2)"
//                   }}
//                 />
//                 <CardContent>
//                   <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
//                     {challenge.founder}
//                   </Typography>
//                   <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
//                     {challenge.title}
//                   </Typography>
//                   <Typography variant="body2" sx={{ mb: 2 }}>
//                     {challenge.description}
//                   </Typography>
//                   <Button
//                     variant="contained"
//                     sx={{
//                       background: "linear-gradient(135deg, #6a1b9a, #8e44ad)",
//                       color: "#fff",
//                       borderRadius: "10px",
//                       padding: "10px 20px",
//                       fontSize: "0.9rem",
//                       fontWeight: "bold",
//                       textTransform: "none",
//                       boxShadow: "0px 4px 10px rgba(106, 27, 154, 0.5)",
//                       "&:hover": {
//                         background: "linear-gradient(135deg, #8e44ad, #6a1b9a)"
//                       }
//                     }}
//                   >
//                     Connect on LinkedIn
//                   </Button>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// // Video Section with a YouTube embed
// const VideoSection = () => (
//   <Box sx={{ py: 8, backgroundColor: "#0f0f1a", color: "#fff", textAlign: "center" }}>
//     <Container maxWidth="md">
//       <Typography variant="h4" fontWeight="bold">
//         Work Smart, Win Big: Pro Tips from{" "}
//         <span style={{ fontStyle: "italic" }}>Swapnil Sharma</span>, CTO of Ovadrive (A Startupathon Success)
//       </Typography>
//       <Box
//         sx={{
//           mt: 4,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           width: "100%",
//           maxWidth: "900px",
//           margin: "0 auto",
//           position: "relative",
//           paddingBottom: "56.25%",
//           height: 0,
//           overflow: "hidden",
//           borderRadius: "10px",
//           boxShadow: "0px 0px 30px rgba(106, 27, 154, 0.8)"
//         }}
//       >
//         <iframe
//           src="https://www.youtube.com/embed/NchvlSe1TY4?autoplay=1&mute=1&controls=1&loop=1&playlist=NchvlSe1TY4&playsinline=1&vq=hd720"
//           title="YouTube video player"
//           frameBorder="0"
//           allow="autoplay; encrypted-media; picture-in-picture"
//           allowFullScreen
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             objectFit: "cover"
//           }}
//         ></iframe>
//       </Box>
//     </Container>
//   </Box>
// );

// // Fellowship Section with an invitation to apply
// const FellowshipSection = () => (
//   <Box
//     sx={{
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       py: 6,
//       px: 2,
//       backgroundColor: "#0f0f1a"
//     }}
//   >
//     <motion.div
//       initial={{ opacity: 0, x: -100 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//     >
//       <Box
//         sx={{
//           background: "linear-gradient(135deg, #1a1a2e, #2e1a47)",
//           borderRadius: "16px",
//           padding: "50px",
//           textAlign: "center",
//           maxWidth: "1100px",
//           width: "100%",
//           boxShadow: "0px 0px 20px rgba(156, 39, 176, 0.3)",
//           border: "1px solid rgba(255, 255, 255, 0.1)",
//           transition: "all 0.3s ease-in-out",
//           position: "relative",
//           "&:hover": {
//             boxShadow: "0px 0px 30px rgba(156, 39, 176, 0.5)"
//           },
//           "&::before": {
//             content: '""',
//             position: "absolute",
//             width: "100%",
//             height: "100%",
//             background: "url('/wave-pattern.png')",
//             opacity: 0.1,
//             borderRadius: "inherit",
//             top: 0,
//             left: 0
//           }
//         }}
//       >
//         <Typography variant="h4" fontWeight="bold" sx={{ color: "#fff" }}>
//           Got an idea of your own?
//         </Typography>
//         <Typography variant="h6" sx={{ color: "#b0a3e3", my: 2 }}>
//           <i>
//             We are always on the lookout for visionaries with great startup ideas, ready to become successful founders.
//             If that's you, apply below for our Fellowship program.
//           </i>
//         </Typography>
//         <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//           <Button
//             variant="contained"
//             sx={{
//               mt: 2,
//               background: "linear-gradient(135deg, #6a1b9a, #8e44ad)",
//               color: "#fff",
//               borderRadius: "10px",
//               padding: "14px 28px",
//               fontSize: "1rem",
//               fontWeight: "bold",
//               textTransform: "none",
//               boxShadow: "0px 4px 15px rgba(106, 27, 154, 0.5)",
//               "&:hover": {
//                 background: "linear-gradient(135deg, #8e44ad, #6a1b9a)"
//               }
//             }}
//           >
//             Apply For Fellowship
//           </Button>
//         </motion.div>
//       </Box>
//     </motion.div>
//   </Box>
// );

// // AnimatedCursor: Follows mouse movement and scales up briefly on scroll.
// const AnimatedCursor = () => {
//   const [position, setPosition] = useState({ x: -100, y: -100 });
//   const [scale, setScale] = useState(1);

//   useEffect(() => {
//     const moveCursor = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", moveCursor);
//     return () => window.removeEventListener("mousemove", moveCursor);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScale(1.5);
//       clearTimeout(window.cursorTimeout);
//       window.cursorTimeout = setTimeout(() => {
//         setScale(1);
//       }, 150);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <motion.div
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         pointerEvents: "none",
//         zIndex: 9999,
//         width: 20,
//         height: 20,
//         borderRadius: "50%",
//         backgroundColor: "rgba(106,27,154,0.7)"
//       }}
//       animate={{
//         x: position.x - 10,
//         y: position.y - 10,
//         scale: scale
//       }}
//       transition={{
//         type: "spring",
//         stiffness: 300,
//         damping: 20
//       }}
//     />
//   );
// };

// const StartupathonPage = () => {
//   return (
//     <>
//       {/* Global CSS for scrollbar and overflow */}
//       <style jsx global>{`
//         html,
//         body {
//           margin: 0;
//           padding: 0;
//           background-color: black;
//           color: #fff;
//           overflow-x: hidden;
//           overflow-y: auto;
//           padding-top: 80px;
//           scrollbar-width: thin;
//           scrollbar-color: #8e44ad #1a1a2e;
//         }
//         ::-webkit-scrollbar {
//           width: 8px;
//         }
//         ::-webkit-scrollbar-track {
//           background: #1a1a2e;
//         }
//         ::-webkit-scrollbar-thumb {
//           background-color: #8e44ad;
//           border-radius: 8px;
//           border: 2px solid #1a1a2e;
//         }
//         ::-webkit-scrollbar-thumb:hover {
//           background-color: #a288f1;
//         }
//       `}</style>

//       <Navbar />

//       {/* HeroSection with Zoom In */}
//       <ScrollAnimatedSection
//         animationVariant={{
//           hidden: { opacity: 0, scale: 0.8 },
//           visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
//         }}
//       >
//         <HeroSection />
//       </ScrollAnimatedSection>

//       {/* ButtonSection with Slide & Rotate */}
//       <ScrollAnimatedSection
//         animationVariant={{
//           hidden: { opacity: 0, y: 50, rotate: 10 },
//           visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.8 } }
//         }}
//       >
//         <ButtonSection />
//       </ScrollAnimatedSection>

//       {/* RewardsSection with Horizontal Flip */}
//       <ScrollAnimatedSection
//         animationVariant={{
//           hidden: { opacity: 0, scaleX: 0.8 },
//           visible: { opacity: 1, scaleX: 1, transition: { duration: 0.8 } }
//         }}
//       >
//         <RewardsSection />
//       </ScrollAnimatedSection>

//       {/* Ongoing Challenges Section with Fade & Slight Rotate */}
//       <ScrollAnimatedSection
//         animationVariant={{
//           hidden: { opacity: 0, y: 50, rotate: -5 },
//           visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.8 } }
//         }}
//       >
//         <ChallengesSection />
//       </ScrollAnimatedSection>

//       {/* Founders Section to display founders data */}
//       <ScrollAnimatedSection
//         animationVariant={{
//           hidden: { opacity: 0, y: 50 },
//           visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
//         }}
//       >
//         <FoundersSection />
//       </ScrollAnimatedSection>

//       {/* Timeline Section with Slide from Left */}
//       <ScrollAnimatedSection
//         animationVariant={{
//           hidden: { opacity: 0, x: -50 },
//           visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
//         }}
//       >
//         <Box sx={{ py: 8, backgroundColor: "#0f0f1a", color: "#fff", overflowX: "hidden" }}>
//           <Typography variant="h4" fontWeight="bold" textAlign="center">
//             Found an idea that matches your skills?
//           </Typography>
//           <Typography variant="h6" textAlign="center" sx={{ mb: 6, opacity: 0.8 }}>
//             Here’s a simple guide on how the Startupathon process works once you find a project idea that suits your skills.
//           </Typography>
//           <Grid container justifyContent="center">
//             <Grid item xs={12} md={8}>
//               <Box sx={{ position: "relative", mx: "auto" }}>
//                 <Box
//                   sx={{
//                     position: "absolute",
//                     left: "50%",
//                     top: 0,
//                     bottom: 0,
//                     width: "4px",
//                     background: "linear-gradient(180deg, #6a1b9a, #8e44ad)",
//                     transform: "translateX(-50%)",
//                     boxShadow: "0px 0px 15px rgba(106, 27, 154, 0.5)"
//                   }}
//                 />
//                 {[
//                   {
//                     title: "Dive into the Challenge Details Video",
//                     subtitle: "It all starts here!",
//                     description: "Receive an exciting task—your startup idea—with a detailed video to spark creativity and clarify our vision.",
//                     icon: <PlayCircleOutline sx={{ fontSize: 40, color: "#b388eb" }} />,
//                     tip: "💡 Pro Tip: Pay attention—it’s more than just instructions. It’s your roadmap to success!"
//                   },
//                   {
//                     title: "Build, Submit & Shine",
//                     description: "Create a prototype that showcases your approach, then submit your work with a Loom video presentation (no GitHub repo or complex code required). Your creative solution is what matters most.",
//                     icon: <RocketLaunch sx={{ fontSize: 40, color: "#b388eb" }} />,
//                     tip: "💡 Stay ahead: Submit on time or early to show your dedication!"
//                   },
//                   {
//                     title: "Get Feedback, Level Up!",
//                     description: "Three days after submission, we review your work. If it stands out, you're in! If not, we'll share feedback on how to improve. The cycle continues until we find the perfect fit.",
//                     icon: <Feedback sx={{ fontSize: 40, color: "#b388eb" }} />,
//                     tip: "💡 Pro Tip: This feedback is gold. Use it to sharpen your submission or learn what it takes to win!"
//                   },
//                   {
//                     title: "Claim Your Crown",
//                     description: "Ace the challenge to become the project leader. Lead the Project. Ace the challenge, and take charge as BOSS. Enjoy ownership, 20% equity, and a competitive salary.",
//                     icon: <EmojiEvents sx={{ fontSize: 40, color: "#b388eb" }} />
//                   }
//                 ].map((step, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 100, scale: 0.9 }}
//                     whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                     transition={{
//                       duration: 0.6,
//                       delay: index * 0.2,
//                       type: "spring",
//                       stiffness: 80,
//                       damping: 10
//                     }}
//                     viewport={{ once: false, amount: 0.3 }}
//                     whileHover={{ scale: 1.05 }}
//                   >
//                     <Grid
//                       container
//                       alignItems="center"
//                       sx={{
//                         mb: 6,
//                         display: "flex",
//                         flexDirection: index % 2 === 0 ? "row" : "row-reverse"
//                       }}
//                     >
//                       <Grid item xs={5} textAlign={index % 2 === 0 ? "right" : "left"} sx={{ px: 3 }}>
//                         <Typography variant="h6" fontWeight="bold">
//                           {step.title}
//                         </Typography>
//                         {step.subtitle && (
//                           <Typography variant="h6" fontWeight="bold" color="primary">
//                             {step.subtitle}
//                           </Typography>
//                         )}
//                         <Typography variant="body2" sx={{ opacity: 0.8 }}>
//                           {step.description}
//                         </Typography>
//                         {step.tip && (
//                           <Typography variant="body2" sx={{ mt: 1, color: "#b388eb" }}>
//                             {step.tip}
//                           </Typography>
//                         )}
//                       </Grid>
//                       <Grid item xs={2} textAlign="center">
//                         <motion.div
//                           whileHover={{ scale: 1.3 }}
//                           whileTap={{ scale: 0.9 }}
//                           transition={{ duration: 0.3 }}
//                         >
//                           <Box
//                             sx={{
//                               width: 60,
//                               height: 60,
//                               borderRadius: "50%",
//                               backgroundColor: "#6a1b9a",
//                               display: "flex",
//                               alignItems: "center",
//                               justifyContent: "center",
//                               boxShadow: "0px 0px 20px rgba(106, 27, 154, 0.7)",
//                               transition: "all 0.3s ease",
//                               "&:hover": {
//                                 boxShadow: "0px 0px 30px rgba(156, 39, 176, 1)"
//                               }
//                             }}
//                           >
//                             {step.icon}
//                           </Box>
//                         </motion.div>
//                       </Grid>
//                       <Grid item xs={5} textAlign={index % 2 === 0 ? "left" : "right"} sx={{ px: 3 }}>
//                         <Typography variant="h6" fontWeight="bold">
//                           {step.title}
//                         </Typography>
//                         {step.subtitle && (
//                           <Typography variant="h6" fontWeight="bold" color="primary">
//                             {step.subtitle}
//                           </Typography>
//                         )}
//                         <Typography variant="body2" sx={{ opacity: 0.8 }}>
//                           {step.description}
//                         </Typography>
//                         {step.tip && (
//                           <Typography variant="body2" sx={{ mt: 1, color: "#b388eb" }}>
//                             {step.tip}
//                           </Typography>
//                         )}
//                       </Grid>
//                     </Grid>
//                   </motion.div>
//                 ))}
//               </Box>
//             </Grid>
//           </Grid>
//         </Box>
//       </ScrollAnimatedSection>

//       {/* VideoSection with Subtle Zoom */}
//       <ScrollAnimatedSection
//         animationVariant={{
//           hidden: { opacity: 0, scale: 0.9 },
//           visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
//         }}
//       >
//         <VideoSection />
//       </ScrollAnimatedSection>

//       {/* FellowshipSection sliding from Left */}
//       <ScrollAnimatedSection
//         animationVariant={{
//           hidden: { opacity: 0, x: -100 },
//           visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
//         }}
//       >
//         <FellowshipSection />
//       </ScrollAnimatedSection>

//       {/* CompletedChallengesSection with Fade & Rotate */}
//       <ScrollAnimatedSection
//         animationVariant={{
//           hidden: { opacity: 0, y: 50, rotate: 5 },
//           visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.8 } }
//         }}
//       >
//         <CompletedChallengesSection />
//       </ScrollAnimatedSection>

//       {/* Footer with Fade from Bottom */}
//       <ScrollAnimatedSection
//         animationVariant={{
//           hidden: { opacity: 0, y: 30 },
//           visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
//         }}
//       >
//         <Box sx={{ backgroundColor: "#000", color: "#fff", py: 6, px: 4 }}>
//           <Grid container spacing={4} justifyContent="space-between">
//             <Grid item xs={12} md={4} textAlign="left">
//               <Image src={logo} alt="Persist Ventures" width={150} height={50} />
//               <Typography variant="body2" sx={{ mt: 2, opacity: 0.8 }}>
//                 We partner with entrepreneurs and businesses to help scale and grow their ideas. With a diverse team skilled in every sector, there is no business we cannot help get a leg up.
//               </Typography>
//               <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
//                 <IconButton sx={{ color: "#fff" }}>
//                   <Instagram />
//                 </IconButton>
//                 <IconButton sx={{ color: "#fff" }}>
//                   <LinkedIn />
//                 </IconButton>
//                 <IconButton sx={{ color: "#fff" }}>
//                   <YouTube />
//                 </IconButton>
//               </Box>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <Typography variant="h6" fontWeight="bold">
//                 Quick Links
//               </Typography>
//               <Box sx={{ mt: 1 }}>
//                 <Link href="#" color="inherit" sx={{ display: "block", opacity: 0.8 }}>
//                   Home
//                 </Link>
//                 <Link href="#" color="inherit" sx={{ display: "block", opacity: 0.8 }}>
//                   Investor Application
//                 </Link>
//                 <Link href="#" color="inherit" sx={{ display: "block", opacity: 0.8 }}>
//                   Job Application
//                 </Link>
//                 <Link href="#" color="inherit" sx={{ display: "block", opacity: 0.8 }}>
//                   Startup Accelerator
//                 </Link>
//                 <Link href="#" color="inherit" sx={{ display: "block", opacity: 0.8 }}>
//                   Career Accelerator
//                 </Link>
//                 <Link href="#" color="inherit" sx={{ display: "block", opacity: 0.8 }}>
//                   Our Team
//                 </Link>
//               </Box>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <Typography variant="h6" fontWeight="bold">
//                 Legal
//               </Typography>
//               <Box sx={{ mt: 1 }}>
//                 <Link href="#" color="inherit" sx={{ display: "block", opacity: 0.8 }}>
//                   Terms of Service
//                 </Link>
//                 <Link href="#" color="inherit" sx={{ display: "block", opacity: 0.8 }}>
//                   Privacy Policy
//                 </Link>
//                 <Link href="#" color="inherit" sx={{ display: "block", opacity: 0.8 }}>
//                   Decentralized Intelligence Agency
//                 </Link>
//               </Box>
//             </Grid>
//           </Grid>
//           <Typography variant="body2" textAlign="center" sx={{ mt: 4, opacity: 0.6 }}>
//             &copy; 2025 persistventures.com. All rights reserved.
//           </Typography>
//         </Box>
//       </ScrollAnimatedSection>

//       <AnimatedCursor />
//     </>
//   );
// };

// export default StartupathonPage;
"use client";
import React, { useState, useEffect } from "react";
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
  IconButton,
  Drawer,
  Link as MuiLink
} from "@mui/material";
import { PlayCircleOutline } from "@mui/icons-material";
import Image from "next/image";
import { motion } from "framer-motion";
import mainpage from "../../../../../public/image/mainpage.png";
import logo from "../../../../../public/image/logo.png";
import {
  VolumeUp,
  HelpOutline,
  CheckCircle,
  EmojiObjects,
  Instagram,
  LinkedIn,
  YouTube,
  MailOutline,
  AttachMoney,
  AccountBalance,
  Cloud,
  Language,
  Storage,
  Sms,
  ViewModule,
  Monitor,
  RocketLaunch,
  Feedback,
  EmojiEvents,
  Group,
  Face as FaceIcon,
  

} from "@mui/icons-material";
import ScrollVideo from "@/component/scroller/scroller";
import { Menu as MenuIcon } from "@mui/icons-material";
import {
  getCompletedChallenges,
  getFounders,
  getOngoingChallenges
} from "@/action/auth";
const frames = Array.from({ length: 210 }, (_, i) => `/frames/${i + 1}.png`);
// ScrollAnimatedSection: Wraps children with a custom animation when scrolled into view.
const ScrollAnimatedSection = ({ children, delay = 0, animationVariant }) => (
  <motion.div
    variants={
      animationVariant || {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } }
      }
    }
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    {children}
  </motion.div>
);

// Navbar with light background
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Toggle the Drawer
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // The list of nav items (shared by desktop and mobile)
  const navItems = [
    { label: "Ongoing Startupathon", href: "#" },
    { label: "Completed Startupathon", href: "#" },
    { label: "Startupathon Guide", href: "#" },
    { label: "How To Win", href: "#" },
    { label: "Mentor Network", href: "#" },
  ];

  // Mobile drawer content
  const drawerContent = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        py: 2,
        backgroundColor: "black",
        height: "100%",
      }}
    >
      <Image src={logo} alt="Startupathon Logo" width={120} height={40} />
      {navItems.map((item, index) => (
        <Button
          key={index}
          sx={{ color: "white", textTransform: "none", fontSize: "1rem" }}
          href={item.href}
        >
          {item.label}
        </Button>
      ))}
      <Button
        variant="contained"
        sx={{
          background: "linear-gradient(135deg, #6dd5ed, #2193b0)",
          borderRadius: "20px",
          padding: "10px 20px",
          fontWeight: "bold",
          textTransform: "none",
          boxShadow: "0px 4px 10px rgba(33, 150, 243, 0.3)",
          mt: 2,
        }}
      >
        Apply for Fellowship
      </Button>
      <Button sx={{ color: "#fff" }} href="/login">
        <FaceIcon />
      </Button>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "black",
          padding: "10px 0",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          borderTop: "1px solid #e0e0e0",
          top: "auto",
          bottom: 16,
          left: "50%",
          width: { xs: "95%", md: "80%" }, // Slightly narrower on mobile
          transform: "translateX(-50%)",
          borderRadius: "20px",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Left side: Logo on all screen sizes */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Image src={logo} alt="Startupathon Logo" width={120} height={40} />
          </Box>

          {/* Desktop Nav: shown on md+ screens */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {navItems.map((item, index) => (
              <Button key={index} sx={{ color: "white", textTransform: "none" }}>
                {item.label}
              </Button>
            ))}
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(135deg, #6dd5ed, #2193b0)",
                ml: 2,
                borderRadius: "20px",
                padding: "10px 20px",
                fontWeight: "bold",
                textTransform: "none",
                boxShadow: "0px 4px 10px rgba(33, 150, 243, 0.3)",
              }}
            >
              Apply for Fellowship
            </Button>
            <Button sx={{ color: "#fff" }} href="/login">
              <FaceIcon />
            </Button>
          </Box>

          {/* Mobile Nav: hamburger icon (shown on xs & sm) */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton sx={{ color: "white" }} onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer (slides up from bottom) */}
      <Drawer
        anchor="bottom"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            borderRadius: "20px 20px 0 0",
            bottom: 0,
            top: "auto",
            height: "60%", // adjust as needed
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};



// Hero Section with background image and updated text colors
const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        px: { xs: 2, md: 4 },
        py: { xs: 4, md: 8 },
      }}
    >
      {/* Left Side: Stacked Cards */}
      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", md: "50%" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Image Card */}
        <Box
          sx={{
            position: "relative",
            // Increase width & height here
            width: { xs: "100%", sm: 400 },
            height: { xs: 250, sm: 300 },
            borderRadius: 4,
            overflow: "hidden",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            transform: "rotate(-5deg)",
          }}
        >
          <Image
            src={mainpage}
            alt="Startupathon Main Page"
            layout="fill"
            objectFit="cover"
          />
        </Box>

        {/* Video Card (stacked above/below with offset) */}
        <Box
          sx={{
            position: "relative",
            // Increase width & height here
            width: { xs: "100%", sm: 400 },
            height: { xs: 250, sm: 300 },
            borderRadius: 4,
            overflow: "hidden",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            transform: "rotate(5deg)",
            mt: -6, // negative margin to overlap
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/7KVOKfPKta8?autoplay=1&mute=1&controls=1&loop=1&playlist=7KVOKfPKta8&playsinline=1&vq=hd720"
            title="Startupathon Video"
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>

      {/* Right Side: Text */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { xs: "center", md: "flex-start" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ textTransform: "uppercase", mb: 2 }}
        >
          Startupathon
        </Typography>
        <Typography variant="h5" sx={{ color: "#555", fontWeight: 400, mb: 2 }}>
          Your Chance to Build, Lead, and Succeed as a Founder
        </Typography>
        <Typography variant="body1" sx={{ color: "#777", maxWidth: 500 }}>
        Persist Ventures is a venture studio with a mission to accelerate innovation and altruism globally. We help bring build founders and companies to scale, and share an ecosystem of services and best practices to increase success, and decrease inefficient time expenses. 

        </Typography>
      </Box>
    </Box>
  );
};




// Variants for the container (parent) and the items (children)
const containerVariants = {
  hidden: {}, // no special hidden state for the container
  visible: {
    transition: {
      // Stagger each child by 0.2s
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};





const cardsData = [
  {
    title: "Ongoing Startupathon",
    icon: <VolumeUp fontSize="large" />,
    description: "Join live challenges and get started right away, gaining real-world experience."
  },
  {
    title: "Startupathon Guide",
    icon: <HelpOutline fontSize="large" />,
    description: "Learn proven strategies and insider tips to excel in your Startupathon journey."
  },
  {
    title: "Past Startupathons",
    icon: <CheckCircle fontSize="large" />,
    description: "Review previous success stories and discover the best practices that led teams to victory."
  },
  {
    title: "Mentor Network",
    icon: <EmojiObjects fontSize="large" />,
    description: "Connect with seasoned professionals ready to help you refine your ideas and strategies."
  },
  {
    title: "Investor Connections",
    icon: <AttachMoney fontSize="large" />,
    description: "Tap into a network of investors eager to back promising ventures."
  },
  {
    title: "Resource Hub",
    icon: <Storage fontSize="large" />,
    description: "Access a comprehensive library of tools and documentation to accelerate development."
  },
  {
    title: "Exclusive Workshops",
    icon: <EmojiObjects fontSize="large" />,
    description: "Participate in hands-on workshops led by experts to sharpen your technical and business skills."
  },
  {
    title: "Community Access",
    icon: <Group fontSize="large" />,
    description: "Join a thriving community of founders, innovators, and enthusiasts."
  },
  {
    title: "Feature: Dashboard",
    icon: <CheckCircle fontSize="large" />,
    description: "Monitor your Startupathon progress with real-time insights and analytics."
  },
  {
    title: "Feature: Analytics",
    icon: <HelpOutline fontSize="large" />,
    description: "Leverage in-depth metrics to track performance and fine-tune your strategy."
  }
];



// Helper to compute a position for each card based on its index
const getPositionButton = (index) => {
  // These formulas produce a pseudo-random position
  const top = `${5 + (index * 7) % 80}%`;
  const left = `${5 + (index * 13) % 80}%`;
  const rotate = `${-5 + (index * 3) % 10}deg`;
  return { top, left, rotate };
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (custom) => ({
    opacity: 1,
    scale: 1,
    // Rotation is taken from our getPosition function
    rotate: getPositionButton(custom).rotate,
    transition: {
      duration: 0.8,
      type: "spring",
      bounce: 0.4,
    },
  }),
};

const ButtonSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "flex-start",
        justifyContent: "center",
        gap: 4,
        px: 2, // Reduced horizontal padding
        py: 4, // Reduced vertical padding
        // Eye‐catchy gradient background
        background: "linear-gradient(135deg, #fbc2eb, #a18cd1)",
      }}
    >
      {/* OPTIONAL: Left‐side text */}
      {/* <Box sx={{ width: { xs: "100%", md: "40%" }, mb: { xs: 4, md: 0 } }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2, color: "#fff" }}>
          Explore Our Features
        </Typography>
        <Typography variant="body1" sx={{ color: "#f0f0f0", lineHeight: 1.6 }}>
          Learn more about the incredible benefits and tools available to help
          you succeed in your Startupathon journey.
        </Typography>
      </Box> */}

      {/* Right Side: Scattered Cards Container */}
      <Box
        sx={{
          width: { xs: "100%", md: "60%" },
          position: "relative",
          minHeight: "650px", // Enough height for multiple cards
        }}
      >
        {cardsData.map((card, index) => {
          const pos = getPosition(index);
          return (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{ zIndex: 100, scale: 1.07 }}
              viewport={{ once: false, amount: 0.2 }}
              style={{
                position: "absolute",
                top: pos.top,
                left: pos.left,
                width: 350,
                height: 350,
                transformOrigin: "center",
                transform: `rotate(${pos.rotate})`,
              }}
            >
              <Card
                sx={{
                  // Semi‐transparent “glass” effect:
                  background: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(6px)", // ensure you have a background behind
                  borderRadius: "12px",
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                    {card.icon}
                    <Box>
                      <Typography variant="h6" sx={{ color: "#333", fontWeight: "bold", mb: 1 }}>
                        {card.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#555", lineHeight: 1.5 }}>
                        {card.description}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </Box>
    </Box>
  );
};




// Rewards Section with light theme styling
// Your rewards array (8 items as an example)
const rewards = [
  { icon: <MailOutline fontSize="large" color="primary" />, text: "Competitive Salary" },
  { icon: <AttachMoney fontSize="large" color="primary" />, text: "≥ $10,000 USD in Company Funding" },
  { icon: <AccountBalance fontSize="large" color="primary" />, text: "≥ 10% Founder Equity" },
  { icon: <Cloud fontSize="large" color="primary" />, text: "≥ $100,000 USD AWS Credits" },
  { icon: <Language fontSize="large" color="primary" />, text: "$1,000 OpenAI Credits" },
  { icon: <Storage fontSize="large" color="primary" />, text: "$120,000 USD IBM Cloud Credits" },
  { icon: <Sms fontSize="large" color="primary" />, text: "$2,500 Twilio Credits" },
  { icon: <ViewModule fontSize="large" color="primary" />, text: "$2,000 Airtable Credits" },
];

// Split rewards into two rows
const half = Math.ceil(rewards.length / 2);
const firstRowRewards = rewards.slice(0, half);
const secondRowRewards = rewards.slice(half);

// Motion variants for each row (using keyframes)
const rowVariantsLeft = {
  animate: {
    x: [0, -300], // Adjust this value (in pixels) to match the total width of the row
    transition: { duration: 20, repeat: Infinity, ease: "linear" },
  },
};

const rowVariantsRight = {
  animate: {
    x: [0, 300], // Moves in opposite direction
    transition: { duration: 20, repeat: Infinity, ease: "linear" },
  },
};

const RewardsSection = () => {
  return (
    <div style={{ maxWidth: "80%", margin: "0 auto", overflow: "hidden" }}>
      <Box sx={{ textAlign: "center", py: 6 }}>
        <Typography variant="h4" fontWeight="bold" sx={{ color: "#333", mb: 4 }}>
          Startupathon Success Comes with Extraordinary Rewards
        </Typography>
        
        {/* First Row Carousel (moving left) */}
        <Box sx={{ overflow: "hidden", mb: 4 }}>
          <motion.div
            variants={rowVariantsLeft}
            animate="animate"
            style={{ display: "flex", gap: 16 }}
          >
            {/* Duplicate the first row rewards to create a continuous loop */}
            {firstRowRewards.concat(firstRowRewards).map((reward, index) => (
              <Box
                key={index}
                sx={{
                  minWidth: "250px",
                  backgroundColor: "#fff",
                  color: "#333",
                  borderRadius: "12px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                {reward.icon}
                <Typography variant="body1" sx={{ mt: 2, fontWeight: "bold" }}>
                  {reward.text}
                </Typography>
              </Box>
            ))}
          </motion.div>
        </Box>

        {/* Second Row Carousel (moving right) */}
        <Box sx={{ overflow: "hidden" }}>
          <motion.div
            variants={rowVariantsRight}
            animate="animate"
            style={{ display: "flex", gap: 16 }}
          >
            {secondRowRewards.concat(secondRowRewards).map((reward, index) => (
              <Box
                key={index}
                sx={{
                  minWidth: "250px",
                  backgroundColor: "#fff",
                  color: "#333",
                  borderRadius: "12px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                {reward.icon}
                <Typography variant="body1" sx={{ mt: 2, fontWeight: "bold" }}>
                  {reward.text}
                </Typography>
              </Box>
            ))}
          </motion.div>
        </Box>
      </Box>
    </div>
  );
};

// Ongoing Challenges Section with updated card styling for light theme
// Updated card positions (corners, spaced out)
// Adjusted positions to space out the four cards
const challengeCardPositions = [
  { top: "10%", left: "5%", rotate: "-5deg" },
  { top: "10%", right: "5%", rotate: "5deg" },
  { bottom: "10%", left: "5%", rotate: "-5deg" },
  { bottom: "10%", right: "5%", rotate: "5deg" },
];

// Framer Motion variants
const cardVariantsChallenge = {
  hidden: { opacity: 0, scale: 0 },
  visible: (custom) => ({
    opacity: 1,
    scale: 1,
    rotate: challengeCardPositions[custom % challengeCardPositions.length].rotate,
    transition: {
      duration: 0.8,
      type: "spring",
      bounce: 0.4,
    },
  }),
};

const ChallengesSection = () => {
  const [challenges, setChallenges] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null); // Track which card is hovered

  useEffect(() => {
    async function fetchChallenges() {
      try {
        const data = await getOngoingChallenges();
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

  // Fallback icon if none is provided by the API
  const defaultIcon = <Monitor sx={{ fontSize: 60, color: "#2196f3" }} />;

  return (
    <Container
      sx={{
        py: 4,
        backgroundColor: "#f8f8f8",
        color: "#333",
        position: "relative",
        minHeight: "800px",
        background: "linear-gradient(135deg, #fbc2eb, #a18cd1)",
      }}
    >
      {challenges.slice(0, 4).map((challenge, index) => {
        const pos = challengeCardPositions[index];
        return (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariantsChallenge}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ scale: 1.05 }}
            style={{
              position: "absolute",
              top: pos.top || "auto",
              bottom: pos.bottom || "auto",
              left: pos.left || "auto",
              right: pos.right || "auto",
              width: 330,
              height: 300,
              transformOrigin: "center",
              // If hovered, zIndex=9999; else base zIndex is 'index'
              zIndex: hoveredCard === index ? 9999 : index,
            }}
            // Update hoveredCard in state
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <Card
              sx={{
                backgroundColor: "#fff",
                color: "#333",
                borderRadius: "15px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease-in-out",
              }}
            >
              <CardContent>
                {challenge.icon ? (
                  challenge.icon
                ) : challenge.image ? (
                  <Box
                    sx={{
                      width: "300px",
                      height: "200px",
                      background: "linear-gradient(135deg, #fbc2eb, #a18cd1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                    }}
                  >
                    <img
                      src={challenge.image}
                      alt="Challenge"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                ) : (
                  defaultIcon
                )}
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
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    width: "100%",
                    background: "linear-gradient(135deg, #6dd5ed, #2193b0)",
                    color: "#fff",
                    borderRadius: "8px",
                    textTransform: "none",
                    fontWeight: "bold",
                    "&:hover": {
                      background: "linear-gradient(135deg, #2193b0, #6dd5ed)",
                    },
                  }}
                >
                  View Challenge Details
                </Button>
              </Box>
            </Card>
          </motion.div>
        );
      })}
    </Container>
  );
};



// Founders Section using updated card styling for light theme
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
    <Box sx={{ py: 10, backgroundColor: "#f8f8f8", color: "#333", textAlign: "center" }}>
     
      <Grid container spacing={3} justifyContent="center">
        {founders.map((founder, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: "#fff",
                color: "#333",
                borderRadius: "12px",
                padding: "24px",
                textAlign: "center",
                boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)"
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
                  border: "4px solid #e0e0e0"
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
                    background: "linear-gradient(135deg, #6dd5ed, #2193b0)",
                    color: "#fff",
                    borderRadius: "10px",
                    padding: "10px 20px",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                    textTransform: "none",
                    boxShadow: "0px 4px 10px rgba(33, 150, 243, 0.3)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #2193b0, #6dd5ed)"
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

// Helper to compute position for each card based on its index
function getPosition(index) {
  // Example arithmetic to distribute cards across the container
  // Adjust as needed for spacing/rotation
  const top = `${10 + (index * 15) % 70}%`;  // shift 15% each time, cycle through 70%
  const left = `${10 + (index * 20) % 70}%`; // shift 20% each time, cycle through 70%
  const rotate = `${-5 + (index * 5) % 10}deg`;
  return { top, left, rotate };
}

// Framer Motion variants
const cardVariantsCompleted = {
  hidden: { opacity: 0, scale: 0 },
  visible: (custom) => ({
    opacity: 1,
    scale: 1,
    rotate: getPosition(custom).rotate,
    transition: {
      duration: 0.8,
      type: "spring",
      bounce: 0.4,
    },
  }),
};

const CompletedChallengesSection = () => {
  const [completedChallenges, setCompletedChallenges] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null); // track which card is hovered

  useEffect(() => {
    async function fetchCompletedChallenges() {
      try {
        const data = await getCompletedChallenges();
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

  // Fallback icon if none is provided by the API
  const defaultIcon = <Monitor sx={{ fontSize: 60, color: "#2196f3" }} />;

  return (
    <Container
      sx={{
        py: 8,
        position: "relative",
        minHeight: "1600px", // More vertical space to reduce congestion
        background: "linear-gradient(135deg, #fbc2eb, #a18cd1)",
        color: "#333",
        overflow: "hidden", // optional if you want to hide overflow
      }}
    >
      {/* Optional Title */}
      {/* <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ textAlign: "center", mb: 4, color: "#fff" }}
      >
        Completed Startupathon Challenges
      </Typography> */}

      {completedChallenges.map((challenge, index) => {
        const pos = getPosition(index);
        return (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariantsCompleted}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            style={{
              position: "absolute",
              top: pos.top,
              left: pos.left,
              width: 330, // Card width
              height: 380, // Enough space for 300×200 image plus text
              transformOrigin: "center",
              transform: `rotate(${pos.rotate})`,
              zIndex: hoveredCard === index ? 9999 : index, // Raise on hover
            }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            whileHover={{ scale: 1.05 }}
          >
            <Card
              sx={{
                backgroundColor: "#fff",
                borderRadius: "12px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease-in-out",
              }}
            >
              <CardContent>
                {challenge.icon ? (
                  challenge.icon
                ) : challenge.image ? (
                  <Box
                    sx={{
                      width: 300,
                      height: 200,
                      mx: "auto",
                      background: "linear-gradient(135deg, #fbc2eb, #a18cd1)",
                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={challenge.image}
                      alt="Challenge"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                ) : (
                  defaultIcon
                )}
                <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                  {challenge.name}
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
                    background: "linear-gradient(135deg, #6dd5ed, #2193b0)",
                    color: "#fff",
                    borderRadius: "8px",
                    textTransform: "none",
                    fontWeight: "bold",
                    "&:hover": {
                      background: "linear-gradient(135deg, #2193b0, #6dd5ed)",
                    },
                  }}
                >
                  View Challenge Details
                </Button>
              </Box>
            </Card>
          </motion.div>
        );
      })}
    </Container>
  );
};

// Video Section with updated styling for light theme
const VideoSection = () => (
  <Box sx={{ py: 8, backgroundColor: "#fff", color: "#333", textAlign: "center" }}>
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
          boxShadow: "0px 0px 30px rgba(33, 150, 243, 0.3)"
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

// Fellowship Section with updated styling for light theme
const FellowshipSection = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      py: 6,
      px: 2,
      backgroundColor: "#f8f8f8"
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
          backgroundColor: "#fff",
          borderRadius: "16px",
          padding: "50px",
          textAlign: "center",
          maxWidth: "1100px",
          width: "100%",
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
          border: "1px solid #e0e0e0",
          transition: "all 0.3s ease-in-out"
        }}
      >
        <Typography variant="h4" fontWeight="bold" sx={{ color: "#333" }}>
          Got an idea of your own?
        </Typography>
        <Typography variant="h6" sx={{ color: "#555", my: 2 }}>
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
              background: "linear-gradient(135deg, #6dd5ed, #2193b0)",
              color: "#fff",
              borderRadius: "10px",
              padding: "14px 28px",
              fontSize: "1rem",
              fontWeight: "bold",
              textTransform: "none",
              boxShadow: "0px 4px 15px rgba(33, 150, 243, 0.3)",
              "&:hover": {
                background: "linear-gradient(135deg, #2193b0, #6dd5ed)"
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
        backgroundColor: "rgba(33, 150, 243, 0.7)"
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

const StartupathonPage = () => {
  return (
    <>
      {/* Global CSS for scrollbar and overflow */}
      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          background-color: #f8f8f8;
          color: #333;
          overflow-x: hidden;
          overflow-y: auto;
          padding-top: 80px;
          scrollbar-width: thin;
          scrollbar-color: #2193b0 #e0e0e0;
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #e0e0e0;
        }
        ::-webkit-scrollbar-thumb {
          background-color: #2193b0;
          border-radius: 8px;
          border: 2px solid #e0e0e0;
        }
        ::-webkit-scrollbar-thumb:hover {
          background-color: #6dd5ed;
        }
      `}</style>

      <Navbar />
      {/* <Box
  sx={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -10, // places the video behind everything
    overflow: "hidden",
  }}
>
  <ScrollVideo frames={frames} containerHeight={3000} speedMultiplier={0.5} />
</Box>   */}
      {/* HeroSection with Zoom In */}
      <ScrollAnimatedSection
        animationVariant={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
        }}
      >
        <HeroSection />
      </ScrollAnimatedSection>
      <Box sx={{ textAlign: "center", mb: 4 }}>
      <Typography variant="h4" fontWeight="bold">
      "Unlock Your Potential"
       </Typography>
       <Typography variant="h6" sx={{ opacity: 0.8, mb: 4 }}>
         <i>This one emphasizes the empowerment your platform offers.</i>
       </Typography>
      </Box>
      {/* ButtonSection with Slide & Rotate */}
      <ScrollAnimatedSection
        animationVariant={{
          hidden: { opacity: 0, y: 50, rotate: 10 },
          visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.8 } }
        }}
      >
        <ButtonSection />
      </ScrollAnimatedSection>

      {/* RewardsSection with Horizontal Flip */}
      <ScrollAnimatedSection
        animationVariant={{
          hidden: { opacity: 0, scaleX: 0.8 },
          visible: { opacity: 1, scaleX: 1, transition: { duration: 0.8 } }
        }}
      >
        <RewardsSection />
      </ScrollAnimatedSection>


      <Box sx={{ textAlign: "center", mb: 4 }}>
      <Typography variant="h4" fontWeight="bold">
         Completed Startupathon Challenges
       </Typography>
       <Typography variant="h6" sx={{ opacity: 0.8, mb: 4 }}>
         <i>People like you have cracked Startupathon challenges and are now leading thriving startups.</i>
       </Typography>
      </Box>
      {/* Ongoing Challenges Section with Fade & Slight Rotate */}
      <ScrollAnimatedSection
        animationVariant={{
          hidden: { opacity: 0, y: 50, rotate: -5 },
          visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.8 } }
        }}
      >
        <ChallengesSection />
      </ScrollAnimatedSection>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Box sx={{ textAlign: "center", mb: 4 }}>
      <Typography variant="h4" fontWeight="bold">
        Our Successful Founders
      </Typography>
      <Typography variant="h6" sx={{ opacity: 0.8, mb: 4 }}>
        Meet the visionary founders who have turned Startupathon challenges into thriving startups.
      </Typography>
      </Box>


      
      {/* Founders Section to display founders data */}
      <ScrollAnimatedSection
        animationVariant={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
        }}
      >
        <FoundersSection />
      </ScrollAnimatedSection>

      {/* Timeline Section with Slide from Left */}
      <ScrollAnimatedSection
        animationVariant={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
        }}
      >
        <Box sx={{ py: 8, backgroundColor: "#f8f8f8", color: "#333", overflowX: "hidden" }}>
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
                    background: "linear-gradient(180deg, #6dd5ed, #2193b0)",
                    transform: "translateX(-50%)",
                    boxShadow: "0px 0px 15px rgba(33, 150, 243, 0.3)"
                  }}
                />
                {[
                  {
                    title: "Dive into the Challenge Details Video",
                    subtitle: "It all starts here!",
                    description: "Receive an exciting task—your startup idea—with a detailed video to spark creativity and clarify our vision.",
                    icon: <PlayCircleOutline sx={{ fontSize: 40, color: "#2193b0" }} />,
                    tip: "💡 Pro Tip: Pay attention—it’s more than just instructions. It’s your roadmap to success!"
                  },
                  {
                    title: "Build, Submit & Shine",
                    description: "Create a prototype that showcases your approach, then submit your work with a Loom video presentation (no GitHub repo or complex code required). Your creative solution is what matters most.",
                    icon: <RocketLaunch sx={{ fontSize: 40, color: "#2193b0" }} />,
                    tip: "💡 Stay ahead: Submit on time or early to show your dedication!"
                  },
                  {
                    title: "Get Feedback, Level Up!",
                    description: "Three days after submission, we review your work. If it stands out, you're in! If not, we'll share feedback on how to improve. The cycle continues until we find the perfect fit.",
                    icon: <Feedback sx={{ fontSize: 40, color: "#2193b0" }} />,
                    tip: "💡 Pro Tip: This feedback is gold. Use it to sharpen your submission or learn what it takes to win!"
                  },
                  {
                    title: "Claim Your Crown",
                    description: "Ace the challenge to become the project leader. Lead the Project. Ace the challenge, and take charge as BOSS. Enjoy ownership, 20% equity, and a competitive salary.",
                    icon: <EmojiEvents sx={{ fontSize: 40, color: "#2193b0" }} />
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
                          <Typography variant="body2" sx={{ mt: 1, color: "#2193b0" }}>
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
                              backgroundColor: "#6dd5ed",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              boxShadow: "0px 0px 20px rgba(33, 150, 243, 0.3)",
                              transition: "all 0.3s ease",
                              "&:hover": {
                                boxShadow: "0px 0px 30px rgba(33, 150, 243, 0.5)"
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
                          <Typography variant="body2" sx={{ mt: 1, color: "#2193b0" }}>
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
      </ScrollAnimatedSection>

      {/* VideoSection with Subtle Zoom */}
      <ScrollAnimatedSection
        animationVariant={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
        }}
      >
        <VideoSection />
      </ScrollAnimatedSection>

      {/* FellowshipSection sliding from Left */}
      <ScrollAnimatedSection
        animationVariant={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
        }}
      >
        <FellowshipSection />
      </ScrollAnimatedSection>

      <Box sx={{ textAlign: "center", mb: 4 }}>
      <Typography variant="h4" fontWeight="bold">
         OnGoing Startupathon Challenges
       </Typography>
       <Typography variant="h6" sx={{ opacity: 0.8, mb: 4 }}>
         <i>Ongoing Startupathon challenges and are  leading thriving startups....</i>
       </Typography>
      </Box>
      <br></br>
      {/* CompletedChallengesSection with Fade & Rotate */}
      <ScrollAnimatedSection
        animationVariant={{
          hidden: { opacity: 0, y: 50, rotate: 5 },
          visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.8 } }
        }}
      >
        <CompletedChallengesSection />
      </ScrollAnimatedSection>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
      {/* Footer with Fade from Bottom */}
      <ScrollAnimatedSection
        animationVariant={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
        }}
      >
        <Box sx={{ backgroundColor: "#f5f5f5", color: "#333", py: 6, px: 4 }}>
          <Grid container spacing={4} justifyContent="space-between">
            <Grid item xs={12} md={4} textAlign="left">
              <Image src={logo} alt="Persist Ventures" width={150} height={50} />
              <Typography variant="body2" sx={{ mt: 2, opacity: 0.8 }}>
                We partner with entrepreneurs and businesses to help scale and grow their ideas. With a diverse team skilled in every sector, there is no business we cannot help get a leg up.
              </Typography>
              <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                <IconButton sx={{ color: "#333" }}>
                  <Instagram />
                </IconButton>
                <IconButton sx={{ color: "#333" }}>
                  <LinkedIn />
                </IconButton>
                <IconButton sx={{ color: "#333" }}>
                  <YouTube />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" fontWeight="bold">
                Quick Links
              </Typography>
              <Box sx={{ mt: 1 }}>
                <MuiLink href="#" color="inherit" sx={{ display: "block", opacity: 0.8 }}>
                  Home
                </MuiLink>
                <MuiLink href="#" color="inherit" sx={{ display: "block", opacity: 0.8 }}>
                  Investor Application
                </MuiLink>
                <MuiLink href="#" color="inherit" sx={{ display: "block", opacity: 0.8 }}>
                  Job Application
                </MuiLink>
                <MuiLink href="#" color="inherit" sx={{ display: "block", opacity: 0.8 }}>
                  Startup Accelerator
                </MuiLink>
                <MuiLink href="#" color="inherit" sx={{ display: "block", opacity: 0.8 }}>
                  Career Accelerator
                </MuiLink>
                <MuiLink href="#" color="inherit" sx={{ display: "block", opacity: 0.8 }}>
                  Our Team
                </MuiLink>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" fontWeight="bold">
                Legal
              </Typography>
              <Box sx={{ mt: 1 }}>
                <MuiLink href="#" color="inherit" sx={{ display: "block", opacity: 0.8 }}>
                  Terms of Service
                </MuiLink>
                <MuiLink href="#" color="inherit" sx={{ display: "block", opacity: 0.8 }}>
                  Privacy Policy
                </MuiLink>
                <MuiLink href="#" color="inherit" sx={{ display: "block", opacity: 0.8 }}>
                  Decentralized Intelligence Agency
                </MuiLink>
              </Box>
            </Grid>
          </Grid>
          <Typography variant="body2" textAlign="center" sx={{ mt: 4, opacity: 0.6 }}>
            &copy; 2025 persistventures.com. All rights reserved.
          </Typography>
        </Box>
      </ScrollAnimatedSection>

      <AnimatedCursor />
    </>
  );
};

export default StartupathonPage;
