import React from "react";
import ReactMarkdown from "react-markdown";

interface ResourceContentProps {
  content: string;
}

export const ResourceContent: React.FC<ResourceContentProps> = ({
  content,
}) => {
  console.log("ResourceContent received:", {
    hasContent: Boolean(content),
    contentLength: content?.length || 0,
    contentPreview: content?.substring(0, 100) || "",
  });

  if (!content || content.trim() === "") {
    return (
      <div className="py-4 px-6 bg-gray-50 rounded-md text-gray-500 italic">
        No content available for this resource.
      </div>
    );
  }

  // ReactMarkdown can handle both Markdown and plain text nicely
  return (
    <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-blockquote:border-blue-600 prose-blockquote:bg-blue-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-lg prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-2 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};
