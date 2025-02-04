import React from 'react'
import Link from 'next/link';
import { CalendarDays, User } from 'lucide-react';
import { buttonVariants } from "@/components/ui/button"
import fs, {readFileSync} from 'fs';
import matter from 'gray-matter';

// ... keep your existing imports and data fetching logic
const dirContent = fs.readdirSync("content","utf-8");
const blogs = dirContent.map(file=>{
  const fileContent = fs.readFileSync(`content/${file}`,"utf-8");
  const{data} = matter(fileContent);
return data

})

export const metadata = { /* keep existing metadata */ }

const Blog = () => {
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16 mt-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text ">
            Latest Articles
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore insights on full-stack development, React, Next.js, and modern web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article 
              key={blog.slug}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 dark:shadow-gray-800/10"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CalendarDays className="w-4 h-4" />
                    <time dateTime={blog.date}>
                      {new Date(blog.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                </div>

                <h2 className="text-xl font-bold mb-2 line-clamp-2">
                  {blog.title}
                </h2>
                <p className="text-muted-foreground line-clamp-3 mb-4 leading-relaxed">
                  {blog.description}
                </p>
                
                <Link 
                  href={`/blogpost/${blog.slug}`}
                  className={buttonVariants({ 
                    variant: "secondary",
                    className: "w-full group/button transition-all"
                  })}
                >
                  Read Article
                  <svg 
                    className="ml-2 w-4 h-4 transition-transform group-hover/button:translate-x-1"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
        <h1 className='text-center text-4xl font-bold mt-10'>Stay tuned</h1>
      </div>
    </div>
  )
}

export default Blog