'use client'

import { useState } from 'react'
import { db } from '~/server/db'
import { useRouter } from 'next/navigation'

export default function CreatePost() {
  const [name, setName] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const post = await db.query.posts.create({
      data: {
        name,
      },
    })
    router.push(`/posts/${post.id}`)
  }

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}