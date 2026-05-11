"use client";

import {
  SignInButton,
  UserButton,
  useAuth,
} from "@clerk/nextjs";

export function AuthHeader() {
  const { isSignedIn } = useAuth();

  return (
    <>
      {!isSignedIn ? (
        <>
          <SignInButton mode="modal">
            <button className="bg-purple-700 text-white rounded-full font-medium text-sm px-4 py-2 hover:bg-purple-800 transition-colors">
              Sign In
            </button>
          </SignInButton>
        </>
      ) : (
        <UserButton />
      )}
    </>
  );
}
