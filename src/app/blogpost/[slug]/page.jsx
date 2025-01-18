import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import OnThisPage from "@/components/ui/onThisPage";

// Metadata for the blog post page
export async function generateMetadata({ params }) {
  const filepath = path.join("content", `${params.slug}.md`);

  if (!fs.existsSync(filepath)) {
    return {
      metadataBase: new URL("https://markcoder.tech"), // Replace with your domain
      title: "Page Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { data } = matter(fileContent);

  return {
    metadataBase: new URL("https://markcoder.tech"), // Replace with your domain
    title: `${data.title} | Markcoder's Blog`,
    description: data.description || "Explore this blog post on Markcoder's Blog",
    icons: data.image,
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://markcoder.tech/${params.slug}`, // Replace with your domain
      type: "article",
      images: [
        {
          url: data.image, // Replace with a default Open Graph image path
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: data.image, // Replace with your Twitter card image path
    },
  };
}

// Generate static params for dynamic routing
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "content");
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}

// Blog post page component
export default async function Page({ params }) {
  const filepath = path.join("content", `${params.slug}.md`);

  if (!fs.existsSync(filepath)) {
    notFound();
    return;
  }

  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { content, data } = matter(fileContent);

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: data.title || "Blog Post" })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3000,
        }),
      ],
    });

  const htmlContent = (await processor.process(content)).toString();

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 text-white mt-20">{data.title}</h1>
      <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic text-white">
        &quot;{data.description}&quot;
      </p>
      <div className="flex gap-2">
        <h1 className="text-sm text-white italic">By {data.author}</h1>
        <p className="text-sm text-white">{data.date}</p>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        className="prose prose-invert"
      ></div>
      <OnThisPage htmlContent={htmlContent} />
    </div>
  );
}
