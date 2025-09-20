"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Code,
  Rocket,
  Star,
  Users,
  Globe,
  createLucideIcon,
  Layers,
  Terminal,
  Palette,
  Server,
  Database,
  Cloud,
  Container,
  Settings,
  Zap,
  GitBranch,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "motion/react";

export default function DeveloperPage() {
  const skills = [
    { name: "Next.js", icon: Layers, color: "from-gray-600 to-black" },
    { name: "React", icon: Code, color: "from-blue-500 to-cyan-500" },
    { name: "TypeScript", icon: Terminal, color: "from-blue-600 to-blue-800" },
    { name: "Tailwind CSS", icon: Palette, color: "from-cyan-500 to-blue-500" },
    { name: "Azure", icon: Cloud, color: "from-blue-500 to-blue-700" },
    { name: "C#", icon: Settings, color: "from-purple-600 to-indigo-600" },
    { name: "ASP.NET Core", icon: Globe, color: "from-blue-700 to-purple-700" },
    { name: ".NET Core", icon: Zap, color: "from-purple-500 to-blue-500" },
    { name: "Git", icon: GitBranch, color: "from-orange-500 to-red-500" },
  ];

  const XIcon = createLucideIcon("XIcon", [
    [
      "path",
      {
        d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
      },
    ],
  ]);
  // const achievements = [
  //   { icon: Code, value: "50+", label: "Projects Built", color: "from-blue-500 to-cyan-500" },
  //   { icon: Users, value: "100K+", label: "Users Impacted", color: "from-purple-500 to-pink-500" },
  //   { icon: Star, value: "5K+", label: "GitHub Stars", color: "from-yellow-500 to-orange-500" },
  //   { icon: Rocket, value: "99.9%", label: "Uptime Record", color: "from-green-500 to-emerald-500" },
  // ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/hamzaaitaissa",
      color: "hover:text-orange-300",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/hamza-ait-aissa/",
      color: "hover:text-blue-400",
    },
    { icon: XIcon, label: "X", href: "#", color: "hover:text-white-500" },
  ];

  return (
    <AuroraBackground>
      <nav className="fixed md:absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 md:p-6 bg-transparent">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-950 to-purple-950 rounded-lg flex items-center justify-center">
            <Code className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-gray-500 via-neutral-300 to-gray-500 bg-clip-text text-transparent hover:text-white transition">
            ByteLink
          </span>
        </Link>
        <Link href="/">
          <Button
            variant="ghost"
            className="glass hover:glass-card transition-all duration-300 text-white"
          >
            Back to App
          </Button>
        </Link>
      </nav>

      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-10 items-center justify-center px-4 md:px-10 max-w-6xl mx-auto pt-15 md:pt-20 pb-10"
      >
        <div className="text-center">
          <motion.div
            className="w-32 h-32 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/20240413_174914.jpg"
              alt="Hamza Ait Aissa"
              width={32}
              height={32}
              className="w-full h-full object-cover rounded-full"
            />{" "}
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Hamza Ait Aissa
          </h1>
          <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl mx-auto leading-relaxed">
            Aspiring Software engineer passionate about crafting meaningful
            digital experiences, driven by a love for technology, minimalism,
            and their intersection.
          </p>
        </div>
        {/* 
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <Card className="glass-card p-6 text-center border-0 hover:scale-105 transition-all duration-300">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${achievement.color} rounded-lg flex items-center justify-center mx-auto mb-4`}
                >
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{achievement.value}</div>
                <div className="text-sm text-neutral-400">{achievement.label}</div>
              </Card>
            </motion.div>
          ))}
        </div> */}

        <Card className="glass-card p-8 border-0 w-full max-w-5xl">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-100">
              Tech Arsenal in <code className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">this Project;</code>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    delay: 0.03 * index,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -12,
                    transition: { duration: 0.2, type: "spring", stiffness: 400 },
                  }}
                  className="group cursor-pointer"
                >
                  <div className="relative">
                    {/* Floating card with minimal design */}
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] hover:border-white/20 transition-all duration-700 hover:bg-white/[0.12] p-5 text-center group-hover:shadow-2xl group-hover:shadow-white/10">
                      {/* Subtle inner glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl" />

                      {/* Animated gradient border on hover */}
                      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-sm -z-10" />

                      <div className="relative z-10 space-y-3">
                        {/* Icon with sophisticated gradient and glow */}
                        <div className="relative mx-auto w-12 h-12 group-hover:scale-110 transition-all duration-500">
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-2xl blur-sm opacity-50 group-hover:opacity-80 transition-opacity duration-500`}
                          />
                          <div
                            className={`relative w-full h-full bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500`}
                          >
                            <skill.icon className="w-6 h-6 text-white drop-shadow-sm" />
                          </div>
                        </div>

                        {/* Refined typography */}
                        <div className="text-xs font-medium text-white/90 group-hover:text-white transition-colors duration-300 tracking-wide">
                          {skill.name}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        <Card className="glass-card p-5 border-0 w-full max-w-2xl">
          <h2 className="text-3xl font-bold mb-5 text-center text-gray-100">
            Let's Connect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <Button
                  variant="ghost"
                  className={`cursor-pointer glass hover:glass-card transition-all duration-300 w-full h-16 flex-col space-y-1 text-neutral-300 ${link.color}`}
                onClick={()=>window.open(link.href, '_blank')}>
                  <link.icon className="w-6 h-6" />
                  <span className="text-xs">{link.label}</span>
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center ">
            {/* <div className="flex items-center justify-center space-x-2 text-neutral-300">
              <Mail className="w-5 h-5 text-blue-400" />
              <span>alex@bytelink.dev</span>
            </div> */}
            <div className="flex items-center justify-center space-x-2 text-neutral-300">
              <Globe className="w-5 h-5 text-cyan-700" />
              <span>Morocco, Casablanca</span>
            </div>
          </div>
        </Card>
      </motion.div>
    </AuroraBackground>
  );
}
