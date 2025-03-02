"use server"
import {
    userSchema,
  } from "@/lib/validator/auth";
  import db from "@/db";
  import { hash, compare } from "bcryptjs";
import bcrypt from "bcryptjs";
import { sign } from "jsonwebtoken";
import { userlogin } from "@/lib/validator/auth";
import { completedChallengeSchema, founderSchema, ongoingChallengeSchema } from "@/lib/validator/forms";
  export async function signup(formstate, formData) {
    const schema = await userSchema();
    const result = schema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    });
    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }
  
    const existingUser = await db.user.findFirst({
      where: { email: result.data.email },
    });
  
    if (existingUser) {
      return {
        errors: {
          email: [`User with similar email already exists`],
        },
      };
    }
  
    try {
      const hashedPassword = await hash(result.data.password, 10);
      const user = await db.user.create({
        data: {
          name: result.data.name,
          email: result.data.email,
          password: hashedPassword,
        },
      });
      return {
        status: true,
        error: undefined,
      };
    } catch (error) {
      console.log("Error : ", error);
    }
  }



  
  export async function login(formstate, formData) {
    const schema = await userlogin();
    const result = schema.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
    });
  
    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }
  
    const { email, password } = result.data;
  
    const existingUser = await db.user.findUnique({
      where: { email },
    });
  
    if (!existingUser) {
      return {
        errors: {
          email: "User does not exist.",
        },
      };
    }
  
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid) {
      return {
        errors: {
          email: "Invalid email or password.",
          password: "Invalid email or password.",
        },
      };
    }
  
    try {
      // Use a valid secret for JWT generation
      const secret = process.env.NEXTAUTH_SECRET || "default_secret_key";
  
      const token = sign(
        {
          id: existingUser.id,
          email: existingUser.email,
          role: existingUser.role,
        },
        secret,
        { expiresIn: "1h" }
      );
  
      return {
        message: "Login success.",
        token,
      };
    } catch (error) {
      console.error("Error during JWT generation:", error);
  
      return {
        errors: {
          server: "An internal server error occurred.",
        },
      };
    }
  }





// Action for creating a new CompletedChallenge
export async function createCompletedChallenge(formstate, formData) {
  const schema = await completedChallengeSchema();
  const result = schema.safeParse({
    name: formData.get("name"),
    logo: formData.get("logo"),
    founder: formData.get("founder"),
    title: formData.get("title"),
    description: formData.get("description"),
    image: formData.get("image"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    const challenge = await db.completedChallenge.create({
      data: result.data,
    });
    return {
      message: "Completed challenge created.",
      challenge,
    };
  } catch (error) {
    console.error("Error creating completed challenge:", error);
    return {
      errors: { server: "An internal server error occurred." },
    };
  }
}

// Action for creating a new Founder
export async function createFounder(formstate, formData) {
  const schema = await founderSchema();
  const result = schema.safeParse({
    name: formData.get("name"),
    logo: formData.get("logo"),
    title: formData.get("title"),
    description: formData.get("description"),
    image: formData.get("image"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    const founder = await db.founder.create({
      data: result.data,
    });
    return {
      message: "Founder created.",
      founder,
    };
  } catch (error) {
    console.error("Error creating founder:", error);
    return {
      errors: { server: "An internal server error occurred." },
    };
  }
}

export async function createOngoingChallenge(formstate, formData) {
  const schema = await ongoingChallengeSchema();
  const result = schema.safeParse({
    title: formData.get("title"),
    logo: formData.get("logo"),
    deadline: formData.get("deadline"),
    description: formData.get("description"),
    image: formData.get("image"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    // Convert deadline string to Date object
    const dataToCreate = {
      ...result.data,
      deadline: new Date(result.data.deadline),
    };

    const challenge = await db.ongoingChallenge.create({
      data: dataToCreate,
    });
    return {
      message: "Ongoing challenge created.",
      challenge,
    };
  } catch (error) {
    console.error("Error creating ongoing challenge:", error);
    return {
      errors: { server: "An internal server error occurred." },
    };
  }
}



// Get all Completed Challenges
export async function getCompletedChallenges() {
  try {
    const challenges = await db.completedChallenge.findMany();
    return { challenges };
  } catch (error) {
    console.error("Error fetching completed challenges:", error);
    return {
      errors: { server: "An internal server error occurred." },
    };
  }
}

// Get all Founders
export async function getFounders() {
  try {
    const founders = await db.founder.findMany();
    return { founders };
  } catch (error) {
    console.error("Error fetching founders:", error);
    return {
      errors: { server: "An internal server error occurred." },
    };
  }
}

// Get all Ongoing Challenges
export async function getOngoingChallenges() {
  try {
    const challenges = await db.ongoingChallenge.findMany();
    return { challenges };
  } catch (error) {
    console.error("Error fetching ongoing challenges:", error);
    return {
      errors: { server: "An internal server error occurred." },
    };
  }
}
