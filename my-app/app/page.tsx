"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowDown, Code, Github, Mail } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const sections = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      sections.current.forEach((section) => {
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const addToSectionRefs = (el: HTMLDivElement) => {
    if (el && !sections.current.includes(el)) {
      sections.current.push(el)
    }
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      })
    }
  }

  // Cyberpunk glitch effect for text
  const GlitchText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    return (
      <div className={`relative inline-block ${className}`}>
        <span className="relative z-10">{children}</span>
        <span className="absolute top-0 left-0 -translate-x-[2px] translate-y-[2px] text-[#ff00ea] opacity-70 z-0">
          {children}
        </span>
        <span className="absolute top-0 left-0 translate-x-[2px] -translate-y-[2px] text-[#00ffff] opacity-70 z-0">
          {children}
        </span>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#050510] text-white overflow-hidden">
      {/* Cyberpunk/Space Background Elements */}
      <div className="fixed inset-0 z-0 opacity-30">
        {/* Stars */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KPHJhZGlhbEdyYWRpZW50IGlkPSJzdGFyIiBjeD0iNTAlIiBjeT0iNTAlIiByPSI1MCUiPgogIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IndoaXRlIiAvPgogIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMCUiIC8+CjwvcmFkaWFsR3JhZGllbnQ+CjwvZGVmcz4KPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idHJhbnNwYXJlbnQiIC8+CjxjaXJjbGUgY3g9IjEwJSIgY3k9IjEwJSIgcj0iMSIgZmlsbD0idXJsKCNzdGFyKSIgLz4KPGNpcmNsZSBjeD0iMjAlIiBjeT0iMzAlIiByPSIwLjUiIGZpbGw9InVybCgjc3RhcikiIC8+CjxjaXJjbGUgY3g9IjMwJSIgY3k9IjE1JSIgcj0iMC44IiBmaWxsPSJ1cmwoI3N0YXIpIiAvPgo8Y2lyY2xlIGN4PSI0MCUiIGN5PSI0MCUiIHI9IjAuNiIgZmlsbD0idXJsKCNzdGFyKSIgLz4KPGNpcmNsZSBjeD0iNTAlIiBjeT0iMjAlIiByPSIwLjciIGZpbGw9InVybCgjc3RhcikiIC8+CjxjaXJjbGUgY3g9IjYwJSIgY3k9IjUwJSIgcj0iMC40IiBmaWxsPSJ1cmwoI3N0YXIpIiAvPgo8Y2lyY2xlIGN4PSI3MCUiIGN5PSIxMCUiIHI9IjAuOSIgZmlsbD0idXJsKCNzdGFyKSIgLz4KPGNpcmNsZSBjeD0iODAlIiBjeT0iMzAlIiByPSIwLjUiIGZpbGw9InVybCgjc3RhcikiIC8+CjxjaXJjbGUgY3g9IjkwJSIgY3k9IjQ1JSIgcj0iMC43IiBmaWxsPSJ1cmwoI3N0YXIpIiAvPgo8Y2lyY2xlIGN4PSIxNSUiIGN5PSI2MCUiIHI9IjAuNiIgZmlsbD0idXJsKCNzdGFyKSIgLz4KPGNpcmNsZSBjeD0iMjUlIiBjeT0iODAlIiByPSIwLjgiIGZpbGw9InVybCgjc3RhcikiIC8+CjxjaXJjbGUgY3g9IjM1JSIgY3k9IjcwJSIgcj0iMC40IiBmaWxsPSJ1cmwoI3N0YXIpIiAvPgo8Y2lyY2xlIGN4PSI0NSUiIGN5PSI5MCUiIHI9IjAuNyIgZmlsbD0idXJsKCNzdGFyKSIgLz4KPGNpcmNsZSBjeD0iNTUlIiBjeT0iNjUlIiByPSIwLjUiIGZpbGw9InVybCgjc3RhcikiIC8+CjxjaXJjbGUgY3g9IjY1JSIgY3k9Ijg1JSIgcj0iMC45IiBmaWxsPSJ1cmwoI3N0YXIpIiAvPgo8Y2lyY2xlIGN4PSI3NSUiIGN5PSI3MCUiIHI9IjAuNiIgZmlsbD0idXJsKCNzdGFyKSIgLz4KPGNpcmNsZSBjeD0iODUlIiBjeT0iOTAlIiByPSIwLjQiIGZpbGw9InVybCgjc3RhcikiIC8+CjxjaXJjbGUgY3g9Ijk1JSIgY3k9Ijc1JSIgcj0iMC44IiBmaWxsPSJ1cmwoI3N0YXIpIiAvPgo8L3N2Zz4=')]"></div>

        {/* Nebula effect */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purple-900 via-fuchsia-700 to-transparent blur-[120px]"></div>
          <div className="absolute bottom-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-900 via-cyan-700 to-transparent blur-[100px]"></div>
        </div>

        {/* Circuit patterns */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0dGVybiBpZD0iY2lyY3VpdCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogIDxwYXRoIGQ9Ik0gMTAgMTAgTCA5MCAxMCBMIDkwIDkwIEwgMTAgOTAgWiIgc3Ryb2tlPSIjMjAyMDYwIiBzdHJva2Utd2lkdGg9IjAuNSIgZmlsbD0ibm9uZSIgLz4KICA8cGF0aCBkPSJNIDIwIDEwIEwgMjAgMzAgTCA0MCAzMCBMIDQwIDUwIEwgNjAgNTAgTCA2MCA3MCBMIDgwIDcwIEwgODAgOTAiIHN0cm9rZT0iIzIwMjA2MCIgc3Ryb2tlLXdpZHRoPSIwLjUiIGZpbGw9Im5vbmUiIC8+CiAgPHBhdGggZD0iTSA4MCAxMCBMIDgwIDMwIEwgNjAgMzAgTCA2MCA1MCBMIDQwIDUwIEwgNDAgNzAgTCAyMCA3MCBMIDIwIDkwIiBzdHJva2U9IiMyMDIwNjAiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIiAvPgogIDxjaXJjbGUgY3g9IjIwIiBjeT0iMzAiIHI9IjIiIGZpbGw9IiMyMDIwNjAiIC8+CiAgPGNpcmNsZSBjeD0iNDAiIGN5PSI1MCIgcj0iMiIgZmlsbD0iIzIwMjA2MCIgLz4KICA8Y2lyY2xlIGN4PSI2MCIgY3k9IjMwIiByPSIyIiBmaWxsPSIjMjAyMDYwIiAvPgogIDxjaXJjbGUgY3g9IjgwIiBjeT0iNzAiIHI9IjIiIGZpbGw9IiMyMDIwNjAiIC8+Cjwvc3ZnPg==')] opacity-10"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050510]/80 backdrop-blur-md border-b border-[#ff00ea]/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-white relative overflow-hidden">
            <GlitchText>NEW GRAD 26&apos;</GlitchText>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00ffff] to-transparent"></div>
          </div>
          <div className="hidden md:flex space-x-6">
            {["home", "projects", "about", "skills", "resume"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm uppercase tracking-wider hover:text-[#00ffff] transition-colors relative group ${
                  activeSection === item ? "text-[#00ffff]" : "text-white/70"
                }`}
              >
                {item}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-[1px] bg-[#00ffff] transition-all duration-300 ${activeSection === item ? "w-full" : "group-hover:w-full"}`}
                ></span>
              </button>
            ))}
          </div>
            <Button asChild className="bg-transparent border border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff]/10 group relative overflow-hidden">
            <a
              href="https://www.linkedin.com/in/srijan-suresh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="relative z-10">CONNECT</span>
              <span className="absolute inset-0 w-0 bg-[#00ffff]/20 transition-all duration-300 group-hover:w-full"></span>
            </a>
            </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        ref={addToSectionRefs}
        className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20"
      >
        <div className="container mx-auto px-4 z-10 relative">
          <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
          >
        <Badge className="mb-4 bg-[#ff00ea]/20 text-[#ff00ea] hover:bg-[#ff00ea]/20 border-[#ff00ea]/50">
          SYSTEM.ONLINE
        </Badge>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <GlitchText className="block">SRIJAN SURESH</GlitchText>
          <span className="text-2xl md:text-3xl block mt-2 text-[#00ffff]"></span>
        </h1>
        <div className="relative mb-8 pl-4 border-l-2 border-[#ff00ea]">
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl font-mono">
            <span className="text-[#00ffff]">$</span> Creating digital experiences from the future
            <span className="animate-pulse">_</span>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={() => scrollToSection("projects")}
            className="bg-[#ff00ea] hover:bg-[#ff00ea]/80 text-white relative group overflow-hidden"
          >
            <span className="relative z-10">EXPLORE PROJECTS</span>
            <span className="absolute inset-0 w-0 bg-[#00ffff]/30 transition-all duration-300 group-hover:w-full"></span>
          </Button>
          <Button variant="outline" className="border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff]/10">
            <a href="./Srijan_Suresh_Resume.pdf" download>DOWNLOAD PROFILE</a>
          </Button>
        </div>
          </motion.div>
        </div>

        {/* Cyberpunk UI Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Horizontal scan line effect */}
          <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,255,0.025)_50%)] bg-[length:100%_4px]"></div>

          {/* Corner brackets */}
          <div className="absolute top-20 left-10 w-20 h-20 border-t-2 border-l-2 border-[#00ffff]/50"></div>
          <div className="absolute top-20 right-10 w-20 h-20 border-t-2 border-r-2 border-[#00ffff]/50"></div>
          <div className="absolute bottom-10 left-10 w-20 h-20 border-b-2 border-l-2 border-[#00ffff]/50"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-[#00ffff]/50"></div>

          {/* Tech circles */}
          <div className="absolute top-1/4 right-20 w-40 h-40 rounded-full border border-[#ff00ea]/30 flex items-center justify-center">
        <div className="w-32 h-32 rounded-full border border-[#ff00ea]/40 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full border border-[#ff00ea]/50 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-[#ff00ea]/20 animate-pulse"></div>
          </div>
        </div>
          </div>

          <div className="absolute bottom-1/4 left-20 w-40 h-40 rounded-full border border-[#00ffff]/30 flex items-center justify-center">
        <div className="w-32 h-32 rounded-full border border-[#00ffff]/40 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full border border-[#00ffff]/50 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-[#00ffff]/20 animate-pulse"></div>
          </div>
        </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-[#00ffff]/70 text-sm mb-2 font-mono">SCROLL_DOWN</span>
          <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        onClick={() => scrollToSection("projects")}
        className="cursor-pointer"
          >
        <ArrowDown className="text-[#00ffff]" />
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={addToSectionRefs} className="min-h-screen py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 relative">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff00ea]/50 to-transparent -translate-y-1/2"></div>
        <Badge className="mb-4 bg-[#00ffff]/20 text-[#00ffff] hover:bg-[#00ffff]/20 border-[#00ffff]/50 relative z-10">
          PROJECTS.LOAD()
        </Badge>
        <h2 className="text-4xl md:text-6xl font-bold mb-4 relative z-10">
          <GlitchText>DIGITAL CREATIONS</GlitchText>
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto relative z-10 font-mono"></p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { id: 1, name: "IoT Environmental Monitoring", img: "image/img1.jpg", link: "https://github.com/SrijanSuresh/IoT_Environmental_Monitoring_System" },
          { id: 2, name: "Real-Time Lane Detection", img: "image/img22.jpg", link: "https://github.com/SrijanSuresh/LaneTrack" },
          { id: 3, name: "3-Card Poker", img: "image/img3.jpg", link: "https://github.com/SrijanSuresh/3CardPoker" },
          { id: 4, name: "MonteCarlo Risk Analyst", img: "image/img7.jpeg", link: "https://github.com/SrijanSuresh/MonteCarlo-Trade-Optimizer"  },
          { id: 5, name: "Document Analyst", img: "image/img5.jpg", link: "https://github.com/SrijanSuresh/DocumentAnalyst-WebApp-" },
          { id: 6, name: "AI-Generated FlashCards", img: "image/img4.jpg", link: "https://github.com/SrijanSuresh/FlashCard"},
        ].map((project) => (
          <Card
            key={project.id}
            className="bg-[#0a0a20]/50 backdrop-blur-sm border-[#00ffff]/20 overflow-hidden group hover:border-[#00ffff] transition-all duration-300 relative"
          >
            {/* Glitch overlay effect on hover */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZmlsdGVyIGlkPSJub2lzZSI+CiAgPGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giIHJlc3VsdD0ibm9pc2UiPjwvZmVUdXJidWxlbmNlPgogIDxmZURpc3BsYWNlbWVudE1hcCBpbj0ibm9pc2UiIHNjYWxlPSIxMCIgeENoYW5uZWxTZWxlY3Rvcj0iUiI+PC9mZURpc3BsYWNlbWVudE1hcD4KPC9maWx0ZXI+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuMDUiPjwvcmVjdD4KPC9zdmc+')] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>

            <div className="relative aspect-video overflow-hidden border-b border-[#00ffff]/20">
          <Image
            src={`/${project.img}`}
            alt={project.name}
            width={600}
            height={300}
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a20] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div className="flex gap-3">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border-[#ff00ea] text-[#ff00ea] bg-black/50 backdrop-blur-sm hover:bg-[#ff00ea]/20 px-4 py-2 text-sm rounded flex items-center transition-all duration-300 pointer-events-auto"
            >
              CODE
            </a>
            </div>
          </div>

          {/* Project number in corner */}
          <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm text-[#00ffff] px-2 py-1 text-xs font-mono border border-[#00ffff]/30">
            {project.name.toUpperCase()}
          </div>
            </div>
            <CardContent className="p-6 relative">
          <h3 className="text-xl font-bold mb-2 group-hover:text-[#00ffff] transition-colors font-mono">
            {project.name}
          </h3>
          <p className="text-white/70 mb-4 font-mono text-sm"></p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-[#0a0a20]/80 border-[#ff00ea]/50 text-[#ff00ea]">
              React
            </Badge>
            <Badge variant="outline" className="bg-[#0a0a20]/80 border-[#00ffff]/50 text-[#00ffff]">
              Next.js
            </Badge>
            <Badge variant="outline" className="bg-[#0a0a20]/80 border-[#ff00ea]/50 text-[#ff00ea]">
              TypeScript
            </Badge>
          </div>
            </CardContent>
          </Card>
        ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={addToSectionRefs} className="min-h-screen py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <Badge className="mb-4 bg-[#ff00ea]/20 text-[#ff00ea] hover:bg-[#ff00ea]/20 border-[#ff00ea]/50">
                USER.PROFILE
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <GlitchText>WHO I AM</GlitchText>
              </h2>
              <div className="space-y-4 text-white/70 font-mono relative">
                <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-[#ff00ea] via-[#00ffff] to-transparent"></div>
                <p className="pl-4">
                  <span className="text-[#00ffff]">{">"}</span> I am Srijan Suresh, a developer(prev Intern ACT) and researcher(@UIC) with a passion for building AI-driven applications, 
                  efficient systems, and tools that make life easier and smarter. Whether it’s frontend finesse or backend logic, I’m all about crafting clean, 
                  impactful experiences.
                </p>
                <p className="pl-4">
                  <span className="text-[#00ffff]">{">"}</span> My journey spans LLM-powered travelbots, real-time data pipelines, and kernel-level network tooling. 
                  I’ve contributed to research at UIC, built tools with OpenAI, Firebase, and Pinecone, and even used CUDA to supercharge transportation models.
                </p>
                <p className="pl-4">
                  <span className="text-[#00ffff]">{">"}</span> Outside the code grind, you’ll find me diving into open-source, reverse-engineering systems for fun, playing chess or Replaying Elden Ring for 100th time. 
                  I move fast, learn faster, and I’m always down to build something that pushes the edge.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
              {/* CONTACT VIA EMAIL */}
              <Button asChild className="bg-[#ff00ea] hover:bg-[#ff00ea]/80 text-white relative group overflow-hidden">
                <a
                  href="mailto:youremail@example.com?subject=Hello%20from%20your%20portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative z-10">CONTACT.ME()</span>
                  <span className="absolute inset-0 w-0 bg-[#00ffff]/30 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </Button>

              {/* DOWNLOAD RESUME */}
              <Button asChild variant="outline" className="border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff]/10">
                <a href="./Srijan_Suresh_Resume.pdf" download>
                  DOWNLOAD.CV()
                </a>
              </Button>
            </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="aspect-square rounded-2xl overflow-hidden border-2 border-[#00ffff]/50 relative z-10 bg-[#0a0a20]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/image/pfp3.jpeg"
                    alt="Profile"
                    width={600}
                    height={600}
                    className="object-cover"
                  />
                </div>

                {/* Cyberpunk frame elements */}
                <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#ff00ea]"></div>
                <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[#ff00ea]"></div>
                <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[#ff00ea]"></div>
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#ff00ea]"></div>

                {/* Scan lines effect */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(255,0,234,0.025)_50%)] bg-[length:100%_4px]"></div>

                {/* Status indicators */}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#ff00ea] animate-pulse"></div>
                  <div className="text-xs text-[#ff00ea] font-mono">ONLINE</div>
                </div>
              </div>

              {/* Background tech elements */}
              <div className="absolute -bottom-10 -right-10 w-full h-full border-2 border-[#00ffff]/20 rounded-2xl"></div>
              <div className="absolute -top-10 -left-10 w-full h-full border-2 border-[#ff00ea]/20 rounded-2xl"></div>

              {/* Circuit pattern */}
              <div className="absolute -z-10 -bottom-20 -right-20 w-64 h-64 opacity-20">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10,10 L90,10 L90,90 L10,90 Z" stroke="#00ffff" strokeWidth="0.5" fill="none" />
                  <path
                    d="M20,10 L20,30 L40,30 L40,50 L60,50 L60,70 L80,70 L80,90"
                    stroke="#00ffff"
                    strokeWidth="0.5"
                    fill="none"
                  />
                  <circle cx="20" cy="30" r="2" fill="#00ffff" />
                  <circle cx="40" cy="50" r="2" fill="#00ffff" />
                  <circle cx="60" cy="70" r="2" fill="#00ffff" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={addToSectionRefs} className="min-h-screen py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 relative">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00ffff]/50 to-transparent -translate-y-1/2"></div>
            <Badge className="mb-4 bg-[#ff00ea]/20 text-[#ff00ea] hover:bg-[#ff00ea]/20 border-[#ff00ea]/50 relative z-10">
              SKILLS.LOAD()
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 relative z-10">
              <GlitchText>TECH ARSENAL</GlitchText>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto relative z-10 font-mono">
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              {
              name: "Python",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
              },
              {
              name: "C",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
              },
              {
              name: "Docker",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
              },
              {
              name: "Redis",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
              },
              {
              name: "PostgreSQL",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
              },
              {
              name: "Kubernetes",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
              },
              {
              name: "AWS",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
              },
              {
              name: "Linux",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
              },
              {
              name: "JavaScript",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
              },
              {
              name: "React",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              },
              {
              name: "Java",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
              },
              {
              name: "Node.js",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
              },
            ].map((skill) => (
              <Card
              key={skill.name}
              className="bg-[#0a0a20]/50 backdrop-blur-sm border-[#00ffff]/20 hover:border-[#00ffff] transition-all duration-300 group relative overflow-hidden"
              >
              {/* Glitch effect on hover */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZmlsdGVyIGlkPSJub2lzZSI+CiAgPGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giIHJlc3VsdD0ibm9pc2UiPjwvZmVUdXJidWxlbmNlPgogIDxmZURpc3BsYWNlbWVudE1hcCBpbj0ibm9pc2UiIHNjYWxlPSIxMCIgeENoYW5uZWxTZWxlY3Rvcj0iUiI+PC9mZURpc3BsYWNlbWVudE1hcD4KPC9maWx0ZXI+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuMDUiPjwvcmVjdD4KPC9zdmc+')] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

              <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 relative">
              <div className="absolute inset-0 bg-[#ff00ea]/10 rounded-full filter blur-md group-hover:bg-[#ff00ea]/20 transition-all duration-300"></div>
              <Image
              src={skill.icon || "/placeholder.svg"}
              alt={skill.name}
              width={64}
              height={64}
              className="relative z-10 group-hover:scale-110 transition-transform duration-300"
              />
              </div>
              <h3 className="font-mono group-hover:text-[#00ffff] transition-colors">{skill.name}</h3>

              {/* Tech loading bar */}
              <div className="w-full h-1 bg-[#0a0a20] mt-2 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#ff00ea] to-[#00ffff] w-0 group-hover:w-full transition-all duration-1000"></div>
              </div>
              </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" ref={addToSectionRefs} className="min-h-screen py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 relative">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff00ea]/50 to-transparent -translate-y-1/2"></div>
            <Badge className="mb-4 bg-[#00ffff]/20 text-[#00ffff] hover:bg-[#00ffff]/20 border-[#00ffff]/50 relative z-10">
              RESUME.EXECUTE()
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 relative z-10">
              <GlitchText>DIGITAL PROFILE</GlitchText>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto relative z-10 font-mono">
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-[#0a0a20]/70 backdrop-blur-sm border-[#00ffff]/20 overflow-hidden">
              <div className="bg-[#0a0a20] px-4 py-2 flex items-center gap-2 border-b border-[#00ffff]/20">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff00ea]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffff00]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#00ffff]"></div>
                </div>
                <div className="text-sm text-white/70 flex-1 text-center font-mono">resume.json</div>
              </div>
              <CardContent className="p-0">
                <pre className="p-6 text-sm md:text-base font-mono overflow-x-auto text-[#00ffff]">
                  <code className="language-json">
                    {`{
  "name": "SRIJAN_SURESH",
  "title": "FULL_STACK_DEVELOPER",
  "contact": {
    "email": "srijansuresh04@gmail.com",
    "location": "CHICAGO, ILLINOIS",
    "website": "ssrijan.vercel.app",
    "github": "github.com/SrijanSuresh"
  },
  "experience": [
    {
      "company": "ACT_INC",
      "position": "SWE_INTERN",
      "period": "2022_JUNE - 2022_AUGUST",
      "responsibilities": [
        "Automated internal Python workflows and used ETL to extract data",
        "Designed Tableau dashboards to visualize academic metrics",
        "Resolved JIRA tickets during Agile sprints & contributed to updates used by clients",
        "Collaborated with cross-functional teams to enhance product features"
      ],
      "technologies": ["Python", "Tableau", "AWS", "Node.js", "JIRA", "Git", "Jenkins"]
    },
    {
      "company": "UNIVERSITY_OF_ILLINOIS_CHICAGO",
      "position": "RESEARCH_ASSISTANT",
      "period": "2024 - 2025",
      "responsibilities": [
        "Fine-tuned LLaMA3 and Mistral on CUDA-accelerated HPC clusters",
        "Modeled commuter behavior in agent-based simulations for travel demand forecasting",
        "Optimized database queries improving performance by 30%",
        "integrated Hugging Face LLMs to simulate realistic respondents for surveys"
      ],
      "technologies": ["Python", "Jinja2", "HuggingFace", "CUDA", "Ollama"]
    }
  ],
  "education": [
    {
      "institution": "UNIVERSITY_OF_ILLINOIS_CHICAGO",
      "degree": "BACHELOR_OF_SCIENCE_IN_COMPUTER_SCIENCE",
      "year": "2023 - 2025",
    }
  ],
  "skills": {
    "languages": [ "C/C++, "Python", "JavaScript", "Java", "GoLang", "HTML", "CSS"],
    "frameworks": ["React", "Next.js", "Node.js", "Express"],
    "tools": ["Git", "Docker", "AWS", "Langchain", "VS Code"],
    "databases": ["MongoDB", "PostgreSQL", "Firebase", "ChromaDB, Redis"],
  },
  "interests": ["OPEN_SOURCE", "AI", "MACHINE_LEARNING", "FULL_STACK_DEVELOPMENT", "DATA_SCIENCE"]
}`}
                  </code>
                </pre>
              </CardContent>

              {/* Terminal cursor blinking effect */}
              <div className="px-6 py-2 border-t border-[#00ffff]/20 font-mono text-[#00ffff] text-sm flex items-center">
                <span className="mr-2">{"$"}</span>
                <span>download_resume</span>
                <span className="w-2 h-4 bg-[#00ffff] ml-2 animate-pulse"></span>
              </div>
            </Card>

            <div className="mt-8 flex justify-center">
              <Button className="bg-[#ff00ea] hover:bg-[#ff00ea]/80 text-white relative group overflow-hidden">
                <a href="./Srijan_Suresh_Resume.pdf" download>
                  <span className="relative z-10">DOWNLOAD.FULL_RESUME()</span>
                </a>
                <span className="absolute inset-0 w-0 bg-[#00ffff]/30 transition-all duration-300 group-hover:w-full"></span>
                <Code className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#ff00ea]/20 relative overflow-hidden">
        {/* Background circuit pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0dGVybiBpZD0iY2lyY3VpdCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogIDxwYXRoIGQ9Ik0gMTAgMTAgTCA5MCAxMCBMIDkwIDkwIEwgMTAgOTAgWiIgc3Ryb2tlPSIjMjAyMDYwIiBzdHJva2Utd2lkdGg9IjAuNSIgZmlsbD0ibm9uZSIgLz4KICA8cGF0aCBkPSJNIDIwIDEwIEwgMjAgMzAgTCA0MCAzMCBMIDQwIDUwIEwgNjAgNTAgTCA2MCA3MCBMIDgwIDcwIEwgODAgOTAiIHN0cm9rZT0iIzIwMjA2MCIgc3Ryb2tlLXdpZHRoPSIwLjUiIGZpbGw9Im5vbmUiIC8+CiAgPHBhdGggZD0iTSA4MCAxMCBMIDgwIDMwIEwgNjAgMzAgTCA2MCA1MCBMIDQwIDUwIEwgNDAgNzAgTCAyMCA3MCBMIDIwIDkwIiBzdHJva2U9IiMyMDIwNjAiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIiAvPgogIDxjaXJjbGUgY3g9IjIwIiBjeT0iMzAiIHI9IjIiIGZpbGw9IiMyMDIwNjAiIC8+CiAgPGNpcmNsZSBjeD0iNDAiIGN5PSI1MCIgcj0iMiIgZmlsbD0iIzIwMjA2MCIgLz4KICA8Y2lyY2xlIGN4PSI2MCIgY3k9IjMwIiByPSIyIiBmaWxsPSIjMjAyMDYwIiAvPgogIDxjaXJjbGUgY3g9IjgwIiBjeT0iNzAiIHI9IjIiIGZpbGw9IiMyMDIwNjAiIC8+Cjwvc3ZnPg==')] opacity-10"></div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-xl font-bold text-white relative overflow-hidden mb-2">
                <GlitchText>SRIJAN_SURESH</GlitchText>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00ffff] to-transparent"></div>
              </div>
              <p className="text-white/50 text-sm font-mono">© {new Date().getFullYear()}</p>
            </div>
            <div className="flex gap-6">
              <Link href="https://github.com/SrijanSuresh" className="text-white/50 hover:text-[#ff00ea] transition-colors relative group">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#ff00ea] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="mailto:srijansuresh04@gmail.com" className="text-white/50 hover:text-[#00ffff] transition-colors relative group">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#00ffff] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              {/* Add more social icons as needed */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
