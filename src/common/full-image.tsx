import { clerkClient } from "@clerk/nextjs/server";
import { deleteImage, getImage } from "~/server/queries";
import { Button } from "../components/ui/button";

export default async function FullImageView(props: { id: number }) {
  const idAsNumber = Number(props.id);
  if (isNaN(idAsNumber)) throw new Error("Invalid image id");

  const image = await getImage(idAsNumber);
  const uploaderInfo = await clerkClient.users.getUser(image.userId);
  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex flex-shrink items-center justify-center">
        <img
          src={image.url}
          className="flex-shrink object-contain"
          alt={`Image ${image.id}`}
        />
      </div>

      <div className="flex w-48 flex-shrink-0 flex-col border-l">
        <div className="border-b p-4 text-white">{image.name}</div>
        <div className="flex flex-col p-2 text-white">
          <span>Uploaded by </span>
          <span> {uploaderInfo.fullName}</span>
        </div>
        <div className="flex flex-col p-2 text-white">
          <span>Created on</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>

        <div className="p-2">
          <form
            action={async () => {
              "use server";
              await deleteImage(idAsNumber);
            }}
          >
            <Button variant="destructive" type="submit">
              Delete
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
