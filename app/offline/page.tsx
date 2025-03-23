import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function OfflinePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          You&apos;re Offline
        </h1>
        <p className="text-gray-600 mb-6">
          It seems you&apos;re currently offline. Please check your internet
          connection.
        </p>
        <div className="flex justify-center">
          <Button asChild>
            <Link href="/">Retry Connection</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
