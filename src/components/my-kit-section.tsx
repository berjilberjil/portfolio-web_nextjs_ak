'use client'

import { motion } from 'framer-motion'
import { SiFlutter, SiReact, SiTypescript, SiTailwindcss, SiFirebase, SiGit } from 'react-icons/si'

const tools = [
  { name: 'Flutter', icon: <SiFlutter className="text-4xl text-blue-500" /> },
  { name: 'React', icon: <SiReact className="text-4xl text-blue-400" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-4xl text-blue-600" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-4xl text-teal-400" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-4xl text-yellow-500" /> },
  { name: 'Git', icon: <SiGit className="text-4xl text-red-500" /> },
]

type Tool = {
  name: string;
  icon: JSX.Element;
};

type ToolCardProps = {
  tool: Tool;
};

const ToolCard = ({ tool }: ToolCardProps) => (
  <motion.div
    className="bg-[#1C1C1C] rounded-lg p-6 flex flex-col items-center justify-center shadow-lg"
    whileHover={{ scale: 1.05 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    {tool.icon}
    <h3 className="mt-4 text-lg font-semibold text-white">{tool.name}</h3>
  </motion.div>
)

export function MyKitSectionComponent() {
  return (
    <section id="my-kit" className="py-12 md:py-20 bg-black">
      <div className="mx-auto px-[6%]">
        <motion.h2 
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Kit
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ToolCard tool={tool} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MyKitSectionComponent;