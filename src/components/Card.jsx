"use client"

import React from "react"
import { motion } from "framer-motion"
import Python from "../assets/Python.png"
import Game from "../assets/Game.png"
import Library from "../assets/Library.png"

const Card = () => {
  const data = [
    {
      image: Game,
      title: "Дизайн, который работает",
      description:
        "Создаю сайты, которые не просто выглядят стильно, но и приносят реальную пользу бизнесу: увеличивают конверсии, привлекают клиентов и работают на результат.",
    },
    {
      image: Python,
      title: "Сертифицированный профи",
      description:
        "Сертифицирован школами: Udemy, Yudaev.School, Django Academy. Постоянно прокачиваю навыки, чтобы предлагать клиентам только актуальные и эффективные решения.",
    },
    {
      image: Library,
      title: "Дизайн и разработка в одном месте",
      description:
        "Предоставляю не только услуги по веб-дизайну, но и программную часть (верстка, фронтенд, бэкенд) — за дополнительную плату. Всё в одном месте, без лишних хлопот.",
    },
  ]

  return (
    <div className="py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white w-[600px] h-[400px] rounded-[40px] p-6 md:p-8 flex flex-col gap-15 shadow-xl max-w-[90vw] sm:max-w-full mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.03, }}
          >
            <img src={item.image} alt={item.title} className="w-14 h-14 sm:w-16 sm:h-16" />
            <div className="flex flex-col gap-3 w-[400px]">
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
