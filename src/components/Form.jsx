"use client"

import { useState } from "react"
import axios from "axios"
import { motion } from "framer-motion"
import { api } from "../vite.api"
import { useTranslation } from "react-i18next"

const ContactPage = () => {
  const { t } = useTranslation()

  const [form, setForm] = useState({
    username: "",
    phone_number: "",
    organization: "",
    services: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const fetchData = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${api}/api/orders`, form)
      console.log("Ma'lumot yuborildi:", response.data)
    } catch (error) {
      console.error("Xatolik yuz berdi:", error)
    }
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  }

  const formFields = [
    {
      name: "username",
      label: t("form.username"),
      placeholder: t("form.placeholder.username"),
    },
    {
      name: "phone_number",
      label: t("form.phone_number"),
      placeholder: t("form.placeholder.phone_number"),
    },
    {
      name: "organization",
      label: t("form.organization"),
      placeholder: t("form.placeholder.organization"),
    },
    {
      name: "services",
      label: t("form.services"),
      placeholder: t("form.placeholder.services"),
    },
  ]

  return (
    <>
      <div className="min-h-screen bg-white px-4 py-16 flex items-center justify-center">
        <div className="w-full max-w-6xl">
       

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-700 to-blue-400 text-transparent bg-clip-text leading-tight text-start"
          >
            {t("form.title_line_1")} <br />
            {t("form.title_line_2")}
          </motion.h1>

          {/* Form + Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row justify-between gap-12 md:gap-[100px]"
          >
            {/* Form */}
            <form onSubmit={fetchData} className="w-full md:flex-1 space-y-6">
              {formFields.map(({ name, label, placeholder }, i) => (
                <motion.div key={name} {...fadeInUp} transition={{ delay: 0.05 * i }} className="text-start">
                  {/* Step Number + Label */}
                  <div className="flex items-center gap-2 mb-1 px-1 sm:px-2 md:px-3">
                    <p className="text-xs text-gray-400">{String(i + 1).padStart(2, "0")}</p>
                    <label className="text-sm font-medium text-black">{label}</label>
                  </div>

                  {/* Input */}
                  <input
                    type="text"
                    name={name}
                    value={form[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none placeholder:text-gray-400 text-sm px-1 sm:px-2 md:px-3 py-2"
                  />
                </motion.div>
              ))}

              {/* Message (05) */}
              <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="text-start">
                <div className="flex items-center gap-2 mb-1 px-1 sm:px-2 md:px-3">
                  <p className="text-xs text-gray-400">05</p>
                  <label className="text-sm font-medium text-black">{t("form.message")}</label>
                </div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t("form.placeholder.message")}
                  rows={3}
                  className="w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none placeholder:text-gray-400 text-sm px-1 sm:px-2 md:px-3 py-2 resize-none"
                />
              </motion.div>

              {/* Submit */}
              <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="pt-4 text-start">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full font-medium transition duration-300"
                >
                  {t("form.send")}
                </button>
              </motion.div>
            </form>

            {/* Contact Info */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.5 }}
              className="w-full md:w-1/4 text-start space-y-6 text-sm text-gray-700 mt-10 md:mt-0"
            >
              <div>
                <p className="text-xs text-gray-400 mb-1">{t("form.contact_info")}</p>
                <p className="text-base font-semibold text-black">+998 88 488 87 37</p>
              </div>

              <div>
                <p className="text-xs text-gray-400 mb-1">{t("form.social")}</p>
                <ul className="space-y-1 font-medium">
                  <li>
                    <a href="#" className="hover:underline">
                      Telegram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Threads
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="bg-white rounded-b-[50%] h-34 w-full flex items-center justify-center"></div>
    </>
  )
}

export default ContactPage
