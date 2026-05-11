const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
const secretKey = process.env.CLERK_SECRET_KEY;

export function getClerkPublishableKey() {
  if (!publishableKey && process.env.NODE_ENV === "production") {
    throw new Error("Missing NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY in production environment.");
  }

  return publishableKey;
}

export function assertClerkServerKeyForProduction() {
  if (!secretKey && process.env.NODE_ENV === "production") {
    throw new Error("Missing CLERK_SECRET_KEY in production environment.");
  }
}
