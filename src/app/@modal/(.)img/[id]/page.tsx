import { Modal } from "./modal";
import FullImageView from "~/components/full-image";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (isNaN(idAsNumber)) throw new Error("Invalid image id");

  return (
    <Modal>
      <FullImageView id={idAsNumber} />
    </Modal>
  );
}
