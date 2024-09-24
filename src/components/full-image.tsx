import { getImage } from "~/server/queries";

export default async function FullImageView(props: { id: number }) {
  const image = await getImage(props.id);
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
        <div className="p-4 text-white">
          <h1>{image.name}</h1>
        </div>
      </div>
    </div>
  );
}
