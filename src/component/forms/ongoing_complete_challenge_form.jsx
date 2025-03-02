"use client";
import React, { useEffect } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  FormHelperText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useRouter } from "next/navigation";
import SubmitButton from "../buttons/submit-button";
import ToastNotification from "../toast/success-toast";
import { createOngoingChallenge } from "@/action/auth";

const NewOngoingChallengeForm = ({ open, handleClose }) => {
  const router = useRouter();
  const [formState, action] = React.useActionState(createOngoingChallenge, {
    message: "",
    errors: {},
  });

  useEffect(() => {
    if (formState?.message === "Ongoing challenge created.") {
      const timeout = setTimeout(() => {
        handleClose();
        // router.push(`/completed_challenges`);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [formState, router]);

  return (
    <>
      {/* Global style to reduce scrollbar width */}
      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #1e1e1e;
        }
        ::-webkit-scrollbar-thumb {
          background-color: #6a1b9a;
          border-radius: 6px;
          border: 2px solid #1e1e1e;
        }
        * {
          scrollbar-width: thin;
          scrollbar-color: #6a1b9a #1e1e1e;
        }
      `}</style>

      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: {
            backgroundColor: "#121212",
            borderRadius: 3,
            boxShadow: "0px 4px 20px rgba(0,0,0,0.5)",
          },
        }}
      >
        <DialogTitle>
          <Typography
            variant="h6"
            component="div"
            fontWeight="bold"
            sx={{ color: "#fff" }}
          >
            Add New Ongoing Challenge
          </Typography>
        </DialogTitle>
        <form action={action}>
          <DialogContent>
            <Box noValidate sx={{ mt: 3, width: "100%" }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                autoComplete="title"
                error={!!formState?.errors?.title}
                autoFocus
                placeholder="Type your challenge title"
                InputProps={{
                  sx: { backgroundColor: "#1e1e1e", borderRadius: 1, color: "#fff" },
                }}
                InputLabelProps={{ sx: { color: "#8e8e8e" } }}
              />
              {!!formState?.errors?.title && (
                <FormHelperText error>{formState?.errors?.title}</FormHelperText>
              )}
              <TextField
                margin="normal"
                fullWidth
                id="logo"
                label="Logo (Emoji or Text)"
                name="logo"
                autoComplete="logo"
                error={!!formState?.errors?.logo}
                placeholder="Add your logo"
                InputProps={{
                  sx: { backgroundColor: "#1e1e1e", borderRadius: 1, color: "#fff" },
                }}
                InputLabelProps={{ sx: { color: "#8e8e8e" } }}
              />
              {!!formState?.errors?.logo && (
                <FormHelperText error>{formState?.errors?.logo}</FormHelperText>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                id="deadline"
                label="Deadline"
                name="deadline"
                autoComplete="deadline"
                error={!!formState?.errors?.deadline}
                placeholder="Enter deadline (YYYY-MM-DD)"
                InputProps={{
                  sx: { backgroundColor: "#1e1e1e", borderRadius: 1, color: "#fff" },
                }}
                InputLabelProps={{ sx: { color: "#8e8e8e" } }}
              />
              {!!formState?.errors?.deadline && (
                <FormHelperText error>{formState?.errors?.deadline}</FormHelperText>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                id="description"
                label="Description"
                name="description"
                autoComplete="description"
                error={!!formState?.errors?.description}
                placeholder="Add description"
                multiline
                rows={3}
                InputProps={{
                  sx: { backgroundColor: "#1e1e1e", borderRadius: 1, color: "#fff" },
                }}
                InputLabelProps={{ sx: { color: "#8e8e8e" } }}
              />
              {!!formState?.errors?.description && (
                <FormHelperText error>{formState?.errors?.description}</FormHelperText>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                id="image"
                label="Image URL"
                name="image"
                autoComplete="image"
                error={!!formState?.errors?.image}
                placeholder="Add image URL"
                InputProps={{
                  sx: { backgroundColor: "#1e1e1e", borderRadius: 1, color: "#fff" },
                }}
                InputLabelProps={{ sx: { color: "#8e8e8e" } }}
              />
              {!!formState?.errors?.image && (
                <FormHelperText error>{formState?.errors?.image}</FormHelperText>
              )}
            </Box>
          </DialogContent>
          <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
              <SubmitButton variant="contained" size="medium">
                Submit
              </SubmitButton>
            </Box>
          </DialogActions>
        </form>
        {formState?.message === "Ongoing challenge created." && (
          <ToastNotification message="🎉 Ongoing Challenge added successfully!" />
        )}
      </Dialog>
    </>
  );
};

export default NewOngoingChallengeForm;
