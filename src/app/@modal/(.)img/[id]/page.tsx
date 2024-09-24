import { getImage } from '~/server/queries';
import { Modal } from './modal';

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (isNaN(idAsNumber)) throw new Error("Invalid image id");

  const image = await getImage(idAsNumber);
  return <div>
    <img src={image.url} alt={image.name} className='w-96 h-96'/>
    </div>;
}