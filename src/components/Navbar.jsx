import React, { useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import { CiGlobe } from 'react-icons/ci'
import { HiMenuAlt3 } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import { useTranslation } from 'react-i18next'
import logo from '../assets/logo.png'

const createMagnetic = (ref) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { damping: 10, stiffness: 100 })
  const springY = useSpring(y, { damping: 10, stiffness: 100 })

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const offsetX = e.clientX - rect.left - rect.width / 2
    const offsetY = e.clientY - rect.top - rect.height / 2
    x.set(offsetX * 0.3)
    y.set(offsetY * 0.3)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return {
    ref,
    style: { x: springX, y: springY },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  }
}

const menuVariants = {
  initial: {
    scale: 0,
    opacity: 0,
    borderRadius: '50% 0% 50% 50%',
  },
  animate: {
    scale: 50,
    opacity: 1,
    borderRadius: '0%',
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  exit: {
    scale: 0,
    opacity: 0,
    borderRadius: '50% 0% 50% 50%',
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
}

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const globeRef = useRef(null)
  const writeRef = useRef(null)

  const globeMagnet = createMagnetic(globeRef)
  const writeMagnet = createMagnetic(writeRef)

  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setIsLangOpen(false)
  }

  const menuItems = [
    { key: 'about' },
    { key: 'services' },
    { key: 'portfolio' },
    { key: 'contacts' },
  ]

  return (
    <nav className="px-4 sm:px-6 md:px-10 py-4 relative z-[9999]">
      <div className="flex justify-between items-center flex-wrap gap-y-4">
        {/* Logo */}
        <img src={logo} alt="logo" className="w-[160px] sm:w-[200px] md:w-[235px]" />

        {/* Burger */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="lg:hidden text-3xl text-[#F6F6F6] bg-[#0140FF] rounded-full p-3"
        >
          <HiMenuAlt3 />
        </button>

        {/* Desktop menu */}
        <ul className="hidden lg:flex bg-white gap-6 xl:gap-10 py-3 px-6 xl:py-[25px] xl:px-[50px] rounded-full text-gray-500 text-sm xl:text-base">
          {menuItems.map((item, i) => (
            <li
              key={i}
              className="cursor-pointer hover:text-black transition-colors duration-300"
            >
              <a href="#">{t(item.key)}</a>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex gap-3 sm:gap-4 items-center max-lg:hidden relative">
          {/* Language Switcher */}
          <motion.button
            {...globeMagnet}
            className="p-3 sm:p-[18px] xl:p-[20px] rounded-full bg-[#FFFFFF] text-[#0140FF] relative"
            onClick={() => setIsLangOpen(prev => !prev)}
          >
            <CiGlobe size={22} className="sm:size-[25px]" />
          </motion.button>

          {isLangOpen && (
            <div className="absolute top-20 w-[200px] -left-15 p-5 bg-white rounded-xl text-sm text-[#0140FF] hover:text-black overflow-hidden z-50 flex flex-col gap-3 shadow-xl">
              <button
                onClick={() => changeLanguage('ru')}
                className={`w-full px-4 py-4 rounded-xl hover:bg-[#F0F0F0] hover:text-black flex items-center gap-2 transition-all duration-300 ${
                  i18n.language === 'ru' ? 'bg-blue-500 text-white' : 'bg-[#E7E7E7]'
                }`}
              >
                🇷🇺 Русский
              </button>
              <button
                onClick={() => changeLanguage('uz')}
                className={`w-full px-4 py-4 rounded-xl hover:bg-[#F0F0F0] hover:text-black flex items-center gap-2 transition-all duration-300 ${
                  i18n.language === 'uz' ? 'bg-blue-500 text-white' : 'bg-[#E7E7E7]'
                }`}
              >
                🇺🇿 O‘zbekcha
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`w-full px-4 py-4 rounded-xl hover:bg-[#F0F0F0] hover:text-black flex items-center gap-2 transition-all duration-300 ${
                  i18n.language === 'en' ? 'bg-blue-500 text-white' : 'bg-[#E7E7E7]'
                }`}
              >
                🇬🇧 English
              </button>
            </div>
          )}

          <motion.button
            {...writeMagnet}
            className="py-2 px-4 sm:py-[16px] sm:px-[25px] xl:py-[20px] xl:px-[30px] rounded-full bg-[#0140FF] text-white text-sm sm:text-base"
          >
            {t('write')}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
  {isMobileMenuOpen && (
    <>
      <motion.div
        variants={menuVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed w-[40px] h-[40px] bg-[#0140FF] rounded-full top-0 right-0 z-40 origin-top-right"
        style={{ originX: 1, originY: 0 }}
      />

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0, duration: 0.5 } }}
        exit={{ opacity: 0, x: 100 }}
        className="fixed inset-0 z-50 flex flex-col justify-start pt-20 items-start text-white gap-6 text-xl px-6 text-center"
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute p-3 top-6 right-6 rounded-full bg-[#F6F6F6] text-[#0140FF] text-3xl sm:text-4xl"
        >
          <IoClose />
        </button>

        <hr className="w-2/3 border-white" />

        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            whileTap={{ scale: 0.95 }}
            className="hover:underline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: index * 0.2, duration: 0.4 } }}
            exit={{ opacity: 0 }}
          >
            <a href="#">{t(item.key)}</a>
          </motion.div>
        ))}

        {/* HR line */}
        <hr className="w-2/3 border-white my-6" />

        {/* Social Links */}
        <div className="flex flex-col items-start gap-3 text-white text-2xl">
          <motion.a
            href="https://threads.net"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.4 } }}
            exit={{ opacity: 0 }}
            className="hover:underline"
          >
            Threads
          </motion.a>
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.8, duration: 0.4 } }}
            exit={{ opacity: 0 }}
            className="hover:underline"
          >
            Instagram
          </motion.a>
          <motion.a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1, duration: 0.4 } }}
            exit={{ opacity: 0 }}
            className="hover:underline"
          >
            Telegram
          </motion.a>
        </div>

        {/* Always open language switcher */}
        <motion.div
          className="w-[350px] flex gap-3 text-[#0140FF] text-base bg-gray-400  p-5 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1.2, duration: 0.4 } }}
          exit={{ opacity: 0 }}
        >
          <motion.button
            onClick={() => changeLanguage('ru')}
            className={`w-[100px] px-4 py-3 text-[10px] rounded-xl hover:text-black hover:bg-[#F0F0F0] flex items-center gap-2 transition-all duration-300 ${
              i18n.language === 'ru' ? 'bg-blue-500 text-white' : 'bg-[#E7E7E7]'
            }`}
            whileHover={{ scale: 1.05 }}
          >
            🇷🇺 Русский
          </motion.button>
          <motion.button
            onClick={() => changeLanguage('uz')}
            className={`w-[100px] px-4 py-3 text-[10px] rounded-xl hover:text-black hover:bg-[#F0F0F0] flex items-center gap-2 transition-all duration-300 ${
              i18n.language === 'uz' ? 'bg-blue-500 text-white' : 'bg-[#E7E7E7]'
            }`}
            whileHover={{ scale: 1.05 }}
          >
            🇺🇿 O‘zbekcha
          </motion.button>
          <motion.button
            onClick={() => changeLanguage('en')}
            className={`w-[100px] px-4 py-3 text-[10px] rounded-xl hover:text-black hover:bg-[#F0F0F0] flex items-center gap-2 transition-all duration-300 ${
              i18n.language === 'en' ? 'bg-blue-500 text-white' : 'bg-[#E7E7E7]'
            }`}
            whileHover={{ scale: 1.05 }}
          >
            🇬🇧 English
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  )}
</AnimatePresence>


    </nav>
  )
}

export default Navbar
