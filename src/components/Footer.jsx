"use client"
import { motion } from "framer-motion"
import { FaTelegram, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { MdEmail, MdPhone } from "react-icons/md"

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  return (
    <footer className="relative text-white pt-16 mt-8 pb-16">
      {/* Fancy Gradient ClipPath Background */}
      <div
        className="absolute inset-0 -z-10 bg-blue-800"
        style={{
          clipPath: "ellipse(50% 19% at 50% 2%)",
        }}
      ></div>

      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Column */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-4 bg-blue-700/50 p-6 rounded-3xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-2">
              Есть вопросы?
              <br />
              Связитесь с нами!
            </h2>
            <p className="text-blue-100 max-w-md">
              Мы всегда готовы помочь вам и ответить на ваши вопросы. Напишите нам, и мы постараемся ответить как можно быстрее.
            </p>
            <motion.div
              className="inline-flex max-w-[250px] items-center bg-white text-blue-600 rounded-full py-2 px-4 mt-4 cursor-pointer shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MdPhone className="mr-2" />
              <span>Позвонить по телефону</span>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-4 bg-blue-700/50 p-6 rounded-3xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-2">
              Присоединяйтесь к нам
              <br />в социальных сетях
            </h2>
            <p className="text-blue-100 max-w-md">
              Подпишитесь на наши обновления, чтобы первыми узнавать о новых курсах, акциях и полезных материалах.
            </p>
            {/* Fancy Social Icons with Animations */}
            <div className="flex gap-4 mt-6">
              {[
                { href: "#", icon: <FaTelegram size={20} /> },
                { href: "#", icon: <FaInstagram size={20} /> },
                { href: "#", icon: <FaWhatsapp size={20} /> },
                { href: "#", icon: <MdEmail size={20} /> },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="relative inline-flex h-12 w-12 overflow-hidden rounded-full p-[2px] focus:outline-none"
                  whileHover={{ scale: 1.2, rotate: 15 }}  // Hover animatsiya
                  whileTap={{ scale: 0.9 }}  // Tap animatsiya
                >
                  <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,theme(colors.blue.400),theme(colors.purple.400),theme(colors.blue.400))]"></span>
                  <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-white text-blue-600 shadow-md backdrop-blur-3xl">
                    {item.icon}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-blue-500 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center flex-wrap gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-sm text-blue-200">
            © 2025 vallevich.design | Условия конфиденциальности
          </motion.div>
          <motion.div variants={itemVariants} className="text-sm text-blue-200">
            Frontend dev | Backend dev | Web designer
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
