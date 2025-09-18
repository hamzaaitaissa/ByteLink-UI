"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { apiService } from "@/Services/api";
import { parseApiError } from "@/utilities/errorApi";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Zap } from "lucide-react";

const ShortcodePage = () => {
  const params = useParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const shortcode = params.shortCode as string;

  useEffect(() => {
    const handleRedirect = async () => {
      try {
        const response: any = await apiService.get(`/${shortcode}`);
        if (response) {
          window.location.href = response.longUrl;
        }
      } catch (error) {
        setError(parseApiError(error));
      }
    };

    if (shortcode) {
      handleRedirect();
    }
  }, [shortcode]);

  if (isLoading) {
    return (
      <AuroraBackground>
        <nav className="fixed md:absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-6 bg-transparent">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-950 to-purple-950 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="cursor-pointer text-2xl font-bold bg-gradient-to-r from-gray-500 via-neutral-300 to-gray-500 bg-clip-text text-transparent hover:text-white transition">
              ByteLink
            </span>
          </div>
          
        </nav>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p>Redirecting...</p>
          </div>
        </div>
      </AuroraBackground>
    );
  }

  if (error) {
    return (
      <AuroraBackground>
        <nav className="fixed md:absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-6 bg-transparent">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-950 to-purple-950 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="cursor-pointer text-2xl font-bold bg-gradient-to-r from-gray-500 via-neutral-300 to-gray-500 bg-clip-text text-transparent hover:text-white transition">
              ByteLink
            </span>
          </div>
          
        </nav>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Oops!</h1>
            <p className="text-gray-600 mb-4">{error}</p>
            <button
              onClick={() => router.push("/")}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Go Home
            </button>
          </div>
        </div>
      </AuroraBackground>
    );
  }

  return null;
};

export default ShortcodePage;
