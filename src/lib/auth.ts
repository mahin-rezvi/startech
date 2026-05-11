import { currentUser } from "@clerk/nextjs/server";

/**
 * Get the current authenticated user (server-side only)
 */
export async function getCurrentUser() {
  try {
    const user = await currentUser();
    return user;
  } catch (error) {
    console.error("Error fetching current user:", error);
    return null;
  }
}

/**
 * Check if user is authenticated
 */
export async function isUserAuthenticated() {
  const user = await getCurrentUser();
  return !!user;
}
