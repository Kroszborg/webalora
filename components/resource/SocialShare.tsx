"use client"

import { Facebook, Twitter, Linkedin, LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

interface SocialShareProps {
  url: string
  title: string
}

export function SocialShare({ url, title }: SocialShareProps) {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, "_blank")
  }

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, "_blank")
  }

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`, "_blank")
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      toast.success("Link copied to clipboard!")
    } catch {
      toast.error("Failed to copy link")
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-4 mb-8">
      <span className="text-sm font-medium text-white">Share this article:</span>
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={shareOnFacebook}
          variant="outline"
          size="sm"
          className="bg-white hover:bg-gray-50 text-gray-700"
        >
          <Facebook className="w-4 h-4 mr-2" />
          Facebook
        </Button>
        <Button
          onClick={shareOnTwitter}
          variant="outline"
          size="sm"
          className="bg-white hover:bg-gray-50 text-gray-700"
        >
          <Twitter className="w-4 h-4 mr-2" />
          Twitter
        </Button>
        <Button
          onClick={shareOnLinkedIn}
          variant="outline"
          size="sm"
          className="bg-white hover:bg-gray-50 text-gray-700"
        >
          <Linkedin className="w-4 h-4 mr-2" />
          LinkedIn
        </Button>
        <Button
          onClick={copyToClipboard}
          variant="outline"
          size="sm"
          className="bg-white hover:bg-gray-50 text-gray-700"
        >
          <LinkIcon className="w-4 h-4 mr-2" />
          Copy Link
        </Button>
      </div>
    </div>
  )
}

