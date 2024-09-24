
export default function Img({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return <div>{photoId}</div>
}