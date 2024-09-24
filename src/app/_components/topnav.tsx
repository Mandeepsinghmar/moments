"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export default function TopNav() {
  const router = useRouter();
  return (
    <div className="flex justify-between border-b p-4">
      <div className="text-4xl font-extrabold text-pink-500">t3gallery</div>
      <div>
        <SignedIn>
          <div>
            <h2 className="p-4 text-center text-2xl">Upload New Images</h2>
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={() => router.refresh()}
            />
          </div>
        </SignedIn>
      </div>
      <div className="text-2xl">
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
