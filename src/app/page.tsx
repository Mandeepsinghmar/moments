


import { db } from "~/server/db";

export const dynamic = "force-dynamic";

// tasks done
// installed github cli
// pushed to github
// deployed to vercel
// made basic ui with mock data
// set up database 
// speed up build process
// attach database to ui 


export default async function HomePage() {

  const images = await db.query.images.findMany({
    orderBy: (model, {desc}) => desc(model.id)
  });

  return (
    <main className="p-4">
   
      <h1 className="text-4xl font-bold">Images</h1>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {[...images, ...images, ...images].map((image, i) => (
          <div
            key={image.id + '-' + i}
            className="overflow-hidden rounded-lg shadow-md flex flex-col w-48"
          >
             <img src={image.url} alt={`Image ${image.id}`}  />
              <h2 className="text-xl font-bold p-4">{image.name}</h2>
          </div>
          
        ))}
      </div>

    </main>
  );
}
