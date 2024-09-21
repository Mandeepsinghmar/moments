

import Image from "next/image";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

// tasks done
// installed github cli
// pushed to github
// deployed to vercel


const mockUrls = [
  "https://utfs.io/f/n2H3YqVS6bY5x3ZeXe5mLztBgDrbTNX8qnSKk0aMHjJFlsyi",
  "https://utfs.io/f/n2H3YqVS6bY5QRA817lcC5anzPwmy3qeMKR8dQD4sETokGUi",
  "https://utfs.io/f/n2H3YqVS6bY5JKB2mJQB5zMltYRNw1jGKpDU36FySZkuAi9m",
  "https://utfs.io/f/n2H3YqVS6bY5TLpNGCw4q6DWEKzaepcCiYlXAJv8OdwUbmt7",
  "https://utfs.io/f/n2H3YqVS6bY57paHYr8G61lxPwKnecvbEIsm4a5ZHAFjXrhL",
  "https://utfs.io/f/n2H3YqVS6bY5jrHgU1aq1J3FGuOcDTgaso9PAHZrhnMBm0pe",
  "https://utfs.io/f/n2H3YqVS6bY5ihhAjgJFZnQUTqKkHa2j0EfCL9WxgBYAseIu",
  "https://utfs.io/f/n2H3YqVS6bY5Ec1Pv46EOCiorFagJ5LGWT0z9j2qMV1PScK3",
  "https://utfs.io/f/n2H3YqVS6bY5yxwcaDn612XhF4u0cInQd598PbjWtrAHCxOm",
];

const mockImages = mockUrls.map((url, i) => ({
  url,
  id: i + 1,
}));


export default async function HomePage() {

  const posts = await db.query.posts.findMany();
  console.log(posts);



  return (
    <main className="p-4">
      {posts.map((post) => (
        <div key={post.id} className="p-4">
          <h1 className="text-2xl">{post.name}</h1>
          {/* <p className="text-gray-500">{post.createdAt}</p> */}
        </div>
      ))}
      <h1 className="text-4xl font-bold">Images</h1>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image, i) => (
          <div
            key={image.id + '-' + i}
            className="overflow-hidden rounded-lg bg-white shadow-md"
          >
             <img src={image.url} alt={`Image ${image.id}`} className="w-full h-96 object-cover" />
          </div>
          
        ))}
      </div>

    </main>
  );
}
