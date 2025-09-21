"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Copy, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import NextLink from "next/link";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { apiService } from "@/Services/api";
import { Toaster } from "@/components/ui/toaster";
import { parseApiError } from "@/utilities/errorApi";

export default function HomePage() {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [longUrlText, setLongUrlText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { toast } = useToast();
  interface ShortenedUrl {
    id: string;
    shortCode: string;
    ihortUrl: string;
    longUrl: string;
  }

  const handleShorten = async () => {
    if (!url) return;

    setIsLoading(true);
    try {
      const response = await apiService.post<ShortenedUrl>(
        "/api/ShortenedUrl",
        {
          longUrl: url,
        }
      );
      console.log(response);
      if (response) {
        setShortenedUrl(`bytelink.dev/${response.shortCode}`);
        setLongUrlText(url);
        setShowResult(true);
        setErrorMessage("");
      }
    } catch (error : any) {
      setErrorMessage(parseApiError(error));
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(`https://${shortenedUrl}`);
    toast({
      title: "Copied!",
      description: "Short URL copied to clipboard",
    });
  };

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
        <NextLink href="/developer">
          <Button
            variant="ghost"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-300 text-white font-medium"
          >
            Developer
          </Button>
        </NextLink>
      </nav>

      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 max-w-4xl mx-auto   pb-10"
      >
        <div className="text-center mb-4">
          <h1 className="text-4xl md:text-7xl font-bold text-gray-200 mb-6 leading-tight">
            Shorten URLs with
            <br />
            <span className="text-gray-200">Premium Style</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-200 max-w-2xl mx-auto leading-relaxed">
            Stop sharing long scary links, short is better :)
          </p>
        </div>

        <div className="w-full max-w-2xl mb-4">
          <div className="flex items-center bg-white/90  rounded-full p-2  ">
            <Input
              placeholder="Paste your long URL here..."
              value={url}
              onChange={(e) => {
                setUrl(e.target.value)
                setErrorMessage("")
              }}
              className="flex-1 bg-transparent text-gray-800 placeholder:text-gray-500  text-lg px-4 py-3"
            />
            <Button
              onClick={handleShorten}
              disabled={!url || isLoading}
              className="cursor-pointer bg-gray-900 hover:bg-gray-800 text-white font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-lg"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Shortening...</span>
                </div>
              ) : (
                "Shorten URL"
              )}
            </Button>
          </div>
          {errorMessage && <p className="text-red-400 text-sm mt-2 text-center font-medium">{errorMessage}</p>}
        </div>

        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-2xl"
          >
            <Card className="bg-white/90 backdrop-blur-sm border border-white/20 shadow-2xl rounded-2xl p-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-600 mb-1 block">Original URL</label>
                  <div className="bg-gray-50 rounded-lg p-3 border">
                    <p className="text-gray-800 truncate text-sm">{longUrlText}</p>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600 mb-1 block">Shortened URL</label>
                  <div className="flex items-center bg-gray-50 rounded-lg p-3 border">
                    <span className="text-blue-600 font-mono text-lg flex-1">{shortenedUrl}</span>
                    <Button
                      size="sm"
                      onClick={copyToClipboard}
                      className="bg-gray-900 hover:bg-gray-800 text-white ml-3 rounded-lg"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </motion.div>
    </AuroraBackground>
  );
}
