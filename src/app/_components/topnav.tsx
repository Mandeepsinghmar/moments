import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import SimpleUploadButton from "./simple-upload-button";

export default function TopNav() {
  return (
    <div className="flex justify-between border-b p-4">
      <div className="text-4xl font-extrabold text-pink-500">t3gallery</div>
      <div className="flex items-center gap-4">
        <SignedIn>
          <SimpleUploadButton />
        </SignedIn>
        <div className="text-2xl">
          <SignedOut>
            <SignInButton />
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
}
