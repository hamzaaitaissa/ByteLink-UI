"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Twitter, Mail, Code, Rocket, Star, Users, Globe, createLucideIcon } from "lucide-react"
import Link from "next/link"
import { AuroraBackground } from "@/components/ui/aurora-background"
import { motion } from "motion/react"

export default function DeveloperPage() {
  const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "SQL SERVER",
    "AZURE",
    "Docker",
    "C#",
    "ASP.NET Core",
    ".NET Core",
    "Docker",
    
  ]

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
    { icon: Github, label: "GitHub", href: "#", color: "hover:text-white" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-blue-400" },
    { icon: XIcon, label: "X", href: "#", color: "hover:text-white-500" },
  ]

  return (
    <AuroraBackground>
      <nav className="fixed md:absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 md:p-6 bg-transparent">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Code className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            ByteLink
          </span>
        </Link>
        <Link href="/">
          <Button variant="ghost" className="glass hover:glass-card transition-all duration-300 text-white">
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
        className="relative flex flex-col gap-10 items-center justify-center px-4 md:px-10 max-w-6xl mx-auto pt-24 md:pt-32 pb-10"
      >
        <div className="text-center">
          <motion.div
            className="w-32 h-32 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Code className="w-16 h-16 text-white" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Hamza Ait Aissa</h1>
          <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl mx-auto leading-relaxed">
           I'm a developer passionate about crafting meaningful digital experiences, driven by a love for technology, minimalism, and their intersection.
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

        <Card className="glass-card p-5 border-0 w-full max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Tech Arsenal
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.05 * index, duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
              >
                <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border-blue-500/30 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 px-4 py-2 text-sm">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </Card>

        <Card className="glass-card p-5 border-0 w-full max-w-2xl">
          <h2 className="text-3xl font-bold mb-5 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
                  className={`glass hover:glass-card transition-all duration-300 w-full h-16 flex-col space-y-1 text-neutral-300 ${link.color}`}
                >
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
              <Globe className="w-5 h-5 text-purple-400" />
              <span>Morocco, Casablanca</span>
            </div>
          </div>
        </Card>
      </motion.div>
    </AuroraBackground>
  )
}
