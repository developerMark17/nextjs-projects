import fs from "fs";

import matter from "gray-matter";
import { notFound } from "next/navigation";
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import OnThisPage from "@/components/ui/onThisPage";
export default async function Page({ params }) {

    // const blog = {
//     title:'Javascript',
//     author: "John Doe",
//     date: "2023-10-01",
//     description: "This is a sample blog description.",
//     content: "<p>This is the blog content.</p>"
// };

    const filepath = `content/${params.slug}.md`
    if(!fs.existsSync(filepath)){
        notFound;
        return
    }

    const fileContent = fs.readFileSync(filepath, 'utf-8');
    const{content,data }= matter(fileContent);

    const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, {title: '👋🌍'})
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
     .use(rehypePrettyCode, {
            theme:"github-dark",
            transformers: [
                transformerCopyButton({
                  visibility: 'always',
                  feedbackDuration: 3_000,
                }),
              ],
        
      })


    const htmlContent = (await processor.process(content)).toString()
  

    return (
        <div className='max-w-6xl mx-auto p-4'>
            <h1 className='text-4xl font-bold mb-4 text-white'>{data.title}</h1>
            <p className='text-base mb-2 border-1-4 border-gray-500 pl-4 italic text-white'>&quot;{data.description}&quot;</p>
            <div className='flex gap-2'>

            <h1 className='text-sm text-white italic'> By {data.author}</h1>
            <p className='text-sm text-white'>{data.date}</p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="prose text-white "></div>
            <OnThisPage htmlContent={htmlContent} />

        </div>
    )
}