import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function TopNav(){
  return(
     <div className="p-4 flex justify-between  border-b">
      <div className="text-4xl text-pink-500 font-extrabold">
        t3gallery
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
  )
}