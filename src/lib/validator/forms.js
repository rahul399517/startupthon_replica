import { z } from "zod";

export const completedChallengeSchema = async () => {
  return z.object({
    name: z.string().min(1, { message: "Challenge name is required." }),
    logo: z.string().optional(),
    founder: z.string().min(1, { message: "Founder is required." }),
    title: z.string().min(1, { message: "Title is required." }),
    description: z.string().min(1, { message: "Description is required." }),
    image: z.string().url({ message: "A valid image URL is required." }),
  });
};

export const founderSchema = async () => {
  return z.object({
    name: z.string().min(1, { message: "Founder name is required." }),
    logo: z.string().optional(),
    title: z.string().min(1, { message: "Title is required." }),
    description: z.string().min(1, { message: "Description is required." }),
    image: z.string().url({ message: "A valid image URL is required." }),
  });
};

export const ongoingChallengeSchema = async () => {
  return z.object({
    title: z.string().min(1, { message: "Title is required." }),
    logo: z.string().optional(),
    deadline: z
      .string()
      .min(1, { message: "Deadline is required." })
      .refine((val) => !isNaN(Date.parse(val)), {
        message: "Deadline must be a valid date (YYYY-MM-DD).",
      }),
    description: z.string().min(1, { message: "Description is required." }),
    image: z.string().url({ message: "A valid image URL is required." }),
  });
};
