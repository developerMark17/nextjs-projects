import React from 'react'
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link';
import fs, {readFileSync} from 'fs';
import matter from 'gray-matter';

const dirContent = fs.readdirSync("content","utf-8");
const blogs = dirContent.map(file=>{
  const fileContent = fs.readFileSync(`content/${file}`,"utf-8");
  const{data} = matter(fileContent);
return data

})
// const blogs = [
//   {
//     slug: 'first-blog',
//     image: '/img1.webp',
//     title: 'First Blog',
//     description: 'This is the description for the first blog.',
//     author: 'Author One',
//     date: '2023-10-01',
//   },
//   {
//     slug: 'second-blog',
//     image: 'img2.webp',
//     title: 'Second Blog',
//     description: 'This is the description for the second blog.',
//     author: 'Author Two',
//     date: '2023-10-02',
//   },
//   // Add more blog objects as needed
// ];
const Blog = () => {
 

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs.map((blog) => (
            <div key={blog.slug} className="rounded-lg shadow-lg overflow-hidden dark:border-2">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{blog.title}</h2>
                <p className="">{blog.description}</p>
                <p className="text-sm">{`By ${blog.author} on ${new Date(blog.date).toLocaleDateString()}`}</p>
                <Link className={buttonVariants({ variant: "outline" })} href={`/blogpost/${blog.slug}`}>Click here</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog