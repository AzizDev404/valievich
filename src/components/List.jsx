import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const List = () => {
  const { t } = useTranslation()
  const [hoveredClient, setHoveredClient] = useState(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  const clients = t('clients.list', { returnObjects: true })

  return (
    <div className="relative p-[15px]" onMouseMove={handleMouseMove}>
      {/* Floating Image */}
      <AnimatePresence>
        {hoveredClient && (
          <motion.div
            className="pointer-events-none fixed z-50 w-64 h-40 overflow-hidden rounded-xl shadow-2xl border border-white"
            style={{
              top: mousePos.y - 100,
              left: mousePos.x + 20,
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <img
              src={hoveredClient.img}
              alt={hoveredClient.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Table */}
      <motion.div
        className="mx-auto px-4 py-12"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.1, duration: 0.6 },
          },
        }}
      >
        <div className="grid grid-cols-3 font-semibold text-gray-500 text-sm border-b pb-4 mb-4">
          <div>{t('clients.columns.client')}</div>
          <div className="text-center">{t('clients.columns.service')}</div>
          <div className="text-right">{t('clients.columns.year')}</div>
        </div>

        {clients.map((client, index) => (
          <motion.div
            key={index}
            className="grid grid-cols-3 py-10 border-b items-center text-lg text-black hover:bg-gray-100/50 transition-all duration-300 cursor-pointer"
            variants={{ hidden: { y: 10, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            onMouseEnter={() => setHoveredClient(client)}
            onMouseLeave={() => setHoveredClient(null)}
          >
            <div className="font-medium text-xl sm:text-3xl">{client.name}</div>
            <div className="text-center text-sm sm:text-xl">{client.service}</div>
            <div className="text-right">{client.year}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default List
