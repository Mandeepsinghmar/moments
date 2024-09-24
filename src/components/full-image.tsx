import { getImage } from "~/server/queries";
import Image from "next/image";

export default async function FullImageView(props: { id: number }) {
  const image = await getImage(props.id);
  return (
    <div>
      <Image
        src={image.url}
        style={{ objectFit: "contain" }}
        width={300}
        height={250}
        alt={`Image ${image.id}`}
      />
    </div>
  );
}
