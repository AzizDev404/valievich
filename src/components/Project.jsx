"use client"
import { motion } from "framer-motion"
import { FiArrowRight } from "react-icons/fi"
import { useTranslation } from 'react-i18next'; // Import i18next hook
import usat from "../assets/usat.png"
import carshift from "../assets/carshift.png"
import unicum from "../assets/unicum.png"

const Project = () => {
  const { t } = useTranslation(); // Initialize i18next translation

  const projects = [
    {
      img: usat,
      name: t('projects.names.usat'), // Translate name
      link: "",
    },
    {
      img: carshift,
      name: t('projects.names.carshift'), // Translate name
      link: "",
    },
    {
      img: unicum,
      name: t('projects.names.unicum'), // Translate name
      link: "",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <div className="mx-auto py-[80px] px-4 sm:px-8 lg:px-16 flex flex-col gap-[60px] lg:gap-[80px]">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-blue-500 text-center">
          {t('projects.title')} {/* Translate title */}
        </h1>
      </motion.div>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-8">
        {/* First project - full width */}
        <motion.div
          variants={itemVariants}
          whileHover="hover"
          className="relative overflow-hidden rounded-xl shadow-lg bg-white"
        >
          <div className="relative h-[400px] sm:h-[500px] md:h-[800px] overflow-hidden">
            <img
              src={projects[0].img || "/placeholder.svg"}
              alt={projects[0].name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
            <div className="absolute bottom-6 left-6 flex items-center gap-3">
              <div className="px-6 py-2 bg-white/20 backdrop-blur-md rounded-full flex items-center">
                <h2 className="text-2xl sm:text-xl font-bold text-white">{projects[0].name}</h2>
              </div>
              <motion.div
                className="ml-3 bg-white/30 p-3 rounded-full cursor-pointer -rotate-45"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiArrowRight className="text-white text-lg" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Second row - two projects side by side */}
        <div className="flex flex-col sm:flex-row gap-8">
          {projects.slice(1).map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="relative overflow-hidden rounded-xl shadow-lg bg-white flex-1"
            >
              <div className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
                <img
                  src={item.img || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="px-6 py-2 bg-white/20 backdrop-blur-md rounded-full flex items-center">
                    <h2 className="text-xl sm:text-xl font-bold text-white">{item.name}</h2>
                  </div>
                  <motion.div
                    className="ml-3 bg-white/30 p-3 rounded-full cursor-pointer -rotate-45"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiArrowRight className="text-white text-lg" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Project
