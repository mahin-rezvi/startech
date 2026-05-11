const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
const secretKey = process.env.CLERK_SECRET_KEY;

function isLiveKey(value: string | undefined, prefix: "pk_live_" | "sk_live_") {
  return Boolean(value && value.startsWith(prefix));
}

export function getClerkPublishableKey() {
  if (process.env.NODE_ENV === "production") {
    if (!isLiveKey(publishableKey, "pk_live_")) {
      throw new Error(
        "Production requires NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY with a live Clerk key (pk_live_...).",
      );
    }
  }

  return publishableKey;
}

export function assertClerkServerKeyForProduction() {
  if (process.env.NODE_ENV === "production" && !isLiveKey(secretKey, "sk_live_")) {
    throw new Error("Production requires CLERK_SECRET_KEY with a live Clerk key (sk_live_...).");
  }
}
