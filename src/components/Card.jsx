"use client"

import React from "react"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import Python from "../assets/Python.png"
import Game from "../assets/Game.png"
import Library from "../assets/Library.png"

const Card = () => {
  const { t } = useTranslation()

  const data = [
    {
      image: Game,
      title: t("card.design_title"),
      description: t("card.design_description"),
    },
    {
      image: Python,
      title: t("card.certified_title"),
      description: t("card.certified_description"),
    },
    {
      image: Library,
      title: t("card.design_dev_title"),
      description: t("card.design_dev_description"),
    },
  ]

  return (
    <div className="py-10 p-[15px]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white w-[600px] h-[400px] rounded-[40px] p-6 md:p-8 flex flex-col gap-15 shadow-xl max-w-[90vw] sm:max-w-full mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.03 }}
          >
            <img src={item.image} alt={item.title} className="w-14 h-14 sm:w-16 sm:h-16" />
            <div className="flex flex-col gap-3 max-w-[400px] max-md:w-[300px]">
              <h2 className="text-xl sm:text-2xl md:text-4xl">{item.title}</h2>
              <p className="text-gray-700 text-sm sm:text-base">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Card
