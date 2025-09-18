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

export default function HomePage() {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const { toast } = useToast();

  const handleShorten = async () => {
    if (!url) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const shortCode = Math.random().toString(36).substring(2, 8);
    setShortenedUrl(`bytelink.dev/${shortCode}`);
    setShowResult(true);
    setIsLoading(false);
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
        className="relative flex flex-col gap-8 items-center justify-center px-4 max-w-4xl mx-auto pt-24 md:pt-32 pb-10"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Shorten URLs with
            <br />
            <span className="text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Premium Style
            </span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-200 max-w-2xl mx-auto leading-relaxed">
            Stop sharing long scary links, short is better :)
          </p>
        </div>

        <Card className="glass-card p-8 border-0 shadow-2xl w-full max-w-3xl">
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <Input
                placeholder="Paste your long URL here..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 h-16 text-lg glass border-0 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 text-white placeholder:text-neutral-400"
              />
              <Button
                onClick={handleShorten}
                disabled={!url || isLoading}
                className="h-16 px-8 cursor-pointer 
             bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600
             hover:from-cyan-500 hover:via-blue-600 hover:to-indigo-700
             text-white font-semibold rounded-xl
             transition-all duration-300 shadow-lg 
             hover:shadow-indigo-500/30 hover:scale-105"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Shortening...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Zap className="w-5 h-5" />
                    <span>Shorten It!</span>
                  </div>
                )}
              </Button>
            </div>

            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="glass p-6 border-blue-500/20">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-neutral-400">
                        Original URL
                      </label>
                      <p className="text-white truncate">{url}</p>
                    </div>
                    <div>
                      <label className="text-sm text-neutral-400">
                        Shortened URL
                      </label>
                      <div className="flex items-center justify-between bg-black/20 rounded-lg p-4 mt-1">
                        <span className="text-blue-400 font-mono text-lg">
                          {shortenedUrl}
                        </span>
                        <Button
                          size="sm"
                          onClick={copyToClipboard}
                          className="cursor-pointer bg-blue-900 hover:bg-blue-700 text-white transition"
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}
          </div>
        </Card>
      </motion.div>
    </AuroraBackground>
  );
}
