"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Chip,
  CircularProgress,
  Grid,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useRouter } from "next/navigation";

const predefinedPrompts = [
  "Epic battle in futuristic Tokyo",
  "A serene sunset over Mount Fuji",
  "Mystical forest with anime creatures",
];

export default function CreateVideoPage() {
  const [prompt, setPrompt] = useState("");
  const [additionalPrompt, setAdditionalPrompt] = useState("");
  const [title, setTitle] = useState("");
  const [theme, setTheme] = useState("");
  const [duration, setDuration] = useState(30);
  const [resolution, setResolution] = useState("1080p");
  const [language, setLanguage] = useState("English");
  const [subtitles, setSubtitles] = useState(false);
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [credits, setCredits] = useState(200);
  const router = useRouter();

  const [premiumOptions, setPremiumOptions] = useState({
    voiceover: false,
    customSoundtrack: false,
    specialEffects: false,
  });

  const [voiceoverDetails, setVoiceoverDetails] = useState("");
  const [soundtrackDetails, setSoundtrackDetails] = useState("");
  const [effectsDetails, setEffectsDetails] = useState("");

  const handleGenerateVideo = async () => {
    if (!prompt.trim() || !title.trim() || !theme.trim()) {
      alert("Please fill in all required fields.");
      return;
    }

    let cost = 50;
    if (premiumOptions.voiceover) cost += 20;
    if (premiumOptions.customSoundtrack) cost += 30;
    if (premiumOptions.specialEffects) cost += 40;

    if (credits < cost) {
      alert("Insufficient credits. Please buy more credits.");
      return;
    }

    setLoading(true);
    setCredits((prev) => prev - cost);

    try {
      const response = await fetch("/api/prompt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          prompt,
          additionalPrompt,
          theme,
          duration,
          resolution,
          language,
          subtitles,
          premiumOptions,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        // For now, we simply display the generated script.
        alert("Generated Video Script:\n\n" + data.script);
        // You can integrate further steps to generate a video using the script.
        // Optionally, setVideoUrl(data.videoUrl) if your API returns a video URL.
      } else {
        alert(data.error || "Failed to generate video script.");
      }
    } catch (error) {
      console.error("Video script generation error:", error);
      alert("An error occurred while generating the video script.");
    } finally {
      setLoading(false);
    }
  };

  const handlePromptSelect = (selectedPrompt) => {
    setPrompt(selectedPrompt);
  };

  const togglePremiumOption = (option) => {
    setPremiumOptions((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  const handleDownloadVideo = () => {
    const downloadCost = 20;
    if (credits < downloadCost) {
      alert("Insufficient credits for download. Please buy more credits.");
      return;
    }
    setCredits((prev) => prev - downloadCost);
    alert("Video downloaded successfully!");
  };

  const FormContent = () => (
    <>
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        mb={4}
        color="#333"
      >
        Create Your AI-Generated Short Anime Video
      </Typography>

      <TextField
        fullWidth
        label="Video Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        variant="outlined"
        sx={{ mb: 2 }}
      />

      <TextField
        fullWidth
        label="Enter your video prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        variant="outlined"
        sx={{ mb: 2 }}
      />

      <TextField
        fullWidth
        label="Additional Prompt Details (optional)"
        value={additionalPrompt}
        onChange={(e) => setAdditionalPrompt(e.target.value)}
        variant="outlined"
        multiline
        rows={3}
        sx={{ mb: 2 }}
      />

      <Typography variant="body1" mb={1} color="#333">
        Or select from popular prompts:
      </Typography>
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
        {predefinedPrompts.map((p, index) => (
          <Chip
            key={index}
            label={p}
            onClick={() => handlePromptSelect(p)}
            clickable
          />
        ))}
      </Box>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Theme</InputLabel>
        <Select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          <MenuItem value="Action">Action</MenuItem>
          <MenuItem value="Fantasy">Fantasy</MenuItem>
          <MenuItem value="Sci-Fi">Sci-Fi</MenuItem>
          <MenuItem value="Mystery">Mystery</MenuItem>
          <MenuItem value="Slice of Life">Slice of Life</MenuItem>
        </Select>
      </FormControl>

      <TextField
        fullWidth
        type="number"
        label="Duration (seconds)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        variant="outlined"
        sx={{ mb: 2 }}
      />

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Resolution</InputLabel>
        <Select
          value={resolution}
          onChange={(e) => setResolution(e.target.value)}
        >
          <MenuItem value="720p">720p</MenuItem>
          <MenuItem value="1080p">1080p</MenuItem>
          <MenuItem value="4K">4K</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Language</InputLabel>
        <Select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <MenuItem value="English">English</MenuItem>
          <MenuItem value="Japanese">Japanese</MenuItem>
          <MenuItem value="Spanish">Spanish</MenuItem>
        </Select>
      </FormControl>

      <FormControlLabel
        control={
          <Checkbox
            checked={subtitles}
            onChange={() => setSubtitles(!subtitles)}
          />
        }
        label="Include Subtitles"
        sx={{ mb: 2 }}
      />

      <Typography
        variant="h6"
        fontWeight="bold"
        mb={1}
        color="#333"
      >
        Enhance Your Video (Additional Cost)
      </Typography>
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 2 }}>
        <Chip
          label="Voiceover (+20 credits)"
          color={premiumOptions.voiceover ? "primary" : "default"}
          onClick={() => togglePremiumOption("voiceover")}
          clickable
        />
        <Chip
          label="Custom Soundtrack (+30 credits)"
          color={premiumOptions.customSoundtrack ? "primary" : "default"}
          onClick={() => togglePremiumOption("customSoundtrack")}
          clickable
        />
        <Chip
          label="Special Effects (+40 credits)"
          color={premiumOptions.specialEffects ? "primary" : "default"}
          onClick={() => togglePremiumOption("specialEffects")}
          clickable
        />
      </Box>

      <Button
        variant="contained"
        fullWidth
        size="large"
        onClick={handleGenerateVideo}
        disabled={loading}
        sx={{
          mb: 4,
          backgroundColor: "#1a237e",
          "&:hover": { backgroundColor: "#0d47a1" },
        }}
      >
        {loading ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          "Generate Video"
        )}
      </Button>
    </>
  );

  return (
    <Box sx={{ width: "100%", backgroundColor: "#fff", p: { xs: 2, md: 4 } }}>
      <Container sx={{ py: 4, maxWidth: "1000px" }}>
        {videoUrl ? (
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <FormContent />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 2 }}>
                <Box
                  sx={{
                    position: "relative",
                    paddingBottom: "56.25%",
                    height: 0,
                  }}
                >
                  <iframe
                    src={videoUrl}
                    frameBorder="0"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      borderRadius: 2,
                    }}
                  />
                </Box>
              </Box>
              <Button
                variant="contained"
                fullWidth
                sx={{ backgroundColor: "#ff9800" }}
                onClick={handleDownloadVideo}
              >
                Download Video (-20 Credits)
              </Button>
            </Grid>
          </Grid>
        ) : (
          <Box sx={{ maxWidth: "600px", mx: "auto" }}>
            <FormContent />
          </Box>
        )}
      </Container>
    </Box>
  );
}
