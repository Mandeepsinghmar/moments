import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {images.map((image) => (
        <div
          key={image.id}
          className="flex w-48 flex-col overflow-hidden rounded-lg shadow-md"
        >
          <Link href={`/img/${image.id}`}>
          <Image
            src={image.url}
            style={{ objectFit: "contain" }}
            width={300}
            height={300}
            alt={`Image ${image.id}`}
          />
          </Link>
          <h2 className="p-4 text-xl font-bold">{image.name}</h2>
        </div>
      ))}
    </div>
  );
}
export default async function HomePage() {
  return (
    <main className="p-4">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above to see images
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
