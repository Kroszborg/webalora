"use client";

import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";

interface CaseStudyContentProps {
  serializedContent: MDXRemoteSerializeResult;
}

export default function CaseStudyContent({
  serializedContent,
}: CaseStudyContentProps) {
  return (
    <div className="prose prose-lg max-w-none mb-12 prose-headings:text-gray-900 prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-blockquote:border-blue-600 prose-blockquote:bg-blue-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-lg prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-2 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none">
      <MDXRemote {...serializedContent} />
    </div>
  );
}
