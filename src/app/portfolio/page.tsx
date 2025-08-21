'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const PortfolioPage: React.FC = () => {
  const portfolioItems = [
    {
      id: 'web-dev-1',
      title: 'Portfolio Website',
      description: 'Modern responsive portfolio built with Next.js',
      image: '/images/web-dev-project.png',
      category: 'web-dev'
    },
    {
      id: 'game-dev-1',
      title: 'Roblox Adventure Game',
      description: 'Immersive 3D adventure game with custom scripting',
      image: '/images/roblox-game.png',
      category: 'game-dev'
    },
    {
      id: 'software-1',
      title: 'Desktop Application',
      description: 'Windows desktop app for productivity',
      image: '/images/unity-game.jpg',
      category: 'software-dev'
    }
  ]

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Portfolio Gallery</h2>
        <p>
          A showcase of my best work across different domains including web development, 
          game development, and software engineering.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="grid grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative overflow-hidden rounded-lg bg-bg-tertiary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={200}
                loading="lazy"
                className="w-full h-[200px] object-cover transition-transform duration-normal group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 transform translate-y-full transition-transform duration-normal group-hover:translate-y-0">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  )
}

export default PortfolioPage 