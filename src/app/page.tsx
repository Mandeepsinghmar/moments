import { SignedIn, SignedOut } from "@clerk/nextjs";
import {  getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images(){
 const images = await getMyImages();
  return (
 <div className="flex flex-wrap justify-center gap-4 p-4">
        {images.map((image) => (
          <div
            key={image.id }
            className="overflow-hidden rounded-lg shadow-md flex flex-col w-48"
          >
             <img src={image.url} alt={`Image ${image.id}`}  />
              <h2 className="text-xl font-bold p-4">{image.name}</h2>
          </div>
          
        ))}
      </div>
  )
}
export default async function HomePage() {


  return (
    <main className="p-4">
   
   <SignedOut>
    <div className='w-full h-full text-2xl text-center'>Please sign in above to see images</div>
   </SignedOut>
   <SignedIn>


     <Images/>
   </SignedIn>
     

    </main>
  );
}
