const { z } = require("zod");

export const generateVideoSchema = async () => {
  return z.object({
    title: z.string().min(1, { message: "Title is required" }),
    description: z.string().min(10, { message: "Description must be at least 10 characters long" }),
    theme: z.string().min(1, { message: "Theme is required" }),
    voiceOver: z.boolean().default(true),
    duration: z
      .number()
      .min(10, { message: "Video must be at least 10 seconds long" })
      .max(600, { message: "Video cannot exceed 10 minutes" }),
    resolution: z.enum(["720p", "1080p", "4K"], {
      message: "Resolution must be 720p, 1080p, or 4K",
    }),
    language: z
      .string()
      .min(1, { message: "Language is required" })
      .max(50, { message: "Language must be under 50 characters" }),
    backgroundMusic: z.boolean().default(true),
    subtitles: z.boolean().default(false),
  });
};
