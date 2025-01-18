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
export const metadata = {
  metadataBase: new URL("https://markcoder.tech"), // Replace with your blog's actual domain
  title: "Markcoder's Blog",
  description:
    "Dive into Markcoder's blog featuring insightful articles on full-stack development, React, Next.js, JavaScript, and creative UI/UX design. Discover tips, tutorials, and industry trends.",
  icons: "/images/blog-fav.webp",
  generator: "Airaz Khan",
  applicationName: "Markcoder's Blog",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Blog",
    "Web Development",
    "React",
    "Next.js",
    "JavaScript",
    "UI/UX Design",
    "Full-Stack Development",
    "Programming",
    "Tutorials",
    "Industry Trends",
  ],
  authors: [
    { name: "Markcoder", url: "https://markcoderblog.com" },
    { name: "Airaz Khan" },
  ],
  creator: "Markcoder",
  publisher: "Markcoder Publishing",
  openGraph: {
    title: "Markcoder's Blog",
    description:
      "Explore articles, tips, and tutorials on full-stack development, React, Next.js, JavaScript, and more.",
    url: "https://markcoder.tech", // Replace with your blog's URL
    type: "website",
    images: [
      {
        url: "/images/blog-og-image.png", // Replace with the actual path to your OpenGraph image
        width: 1200,
        height: 630,
        alt: "Markcoder's Blog Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle", // Replace with your Twitter handle
    creator: "@yourtwitterhandle", // Replace with your Twitter handle
    title: "Markcoder's Blog",
    description:
      "Discover insightful articles on full-stack development, React, JavaScript, and more.",
    images: ["/images/twitter-blog-card.png"], // Replace with your Twitter card image path
  },
};

export const viewport = {
  themeColor: "#ffffff", // Set a light theme color for better readability
  colorScheme: "light", // Specify the light color scheme
  viewport: "width=device-width, initial-scale=1.0", // Define the viewport for responsive design
};


const Blog = () => {
 

  return (
    <div>
      <div className="container mx-auto p-4 ">
        <h1 className="text-3xl font-bold mb-6 mt-20">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs.map((blog) => (
            <div key={blog.slug} className="rounded-lg shadow-lg overflow-hidden dark:border-2">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{blog.title}</h2>
                <p className="">{blog.description}</p>
                <p className="text-sm mb-2">{`By ${blog.author} on ${new Date(blog.date).toLocaleDateString()}`}</p>
                <Link className={buttonVariants({ variant: "secondary", })}  href={`/blogpost/${blog.slug}`}>Click here</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog