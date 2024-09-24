import FullImageView from "~/components/full-image";

export default async function SingleImagePage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (isNaN(idAsNumber)) throw new Error("Invalid image id");

  return <FullImageView id={idAsNumber} />;
}
