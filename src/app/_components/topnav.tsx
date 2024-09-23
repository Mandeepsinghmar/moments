'use client'

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { UploadButton } from '~/utils/uploadthing'

export default function TopNav(){
    const router = useRouter()
  return(
     <div className="p-4 flex justify-between  border-b">
      <div className="text-4xl text-pink-500 font-extrabold">
        t3gallery
      </div>    
      <div>
         <SignedIn>
              <div>
                    <h2 className="text-2xl text-center p-4">Upload New Images</h2>
<UploadButton endpoint="imageUploader" onClientUploadComplete={()=>router.refresh()} />
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
  )
}