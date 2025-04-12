"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import Bg from "../assets/Bg.png"
import Hi from "../assets/hi.png"
import { useTranslation } from "react-i18next"

const Header = () => {
    const { t } = useTranslation()
  const controls = useAnimation()
  const textControls = useAnimation()
  const buttonControls1 = useAnimation()
  const buttonControls2 = useAnimation()

  // Start the animation sequence when component mounts
  useEffect(() => {
    const startAnimations = async () => {
      // First animate the text
      await textControls.start("visible")

      // Then animate the first button
      await buttonControls1.start("visible")

      // Wait 1.5 seconds before animating the second button
      setTimeout(async () => {
        await buttonControls2.start("visible")
      }, 1500)
    }

    startAnimations()
  }, [textControls, buttonControls1, buttonControls2])

  // Text animation variants
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  // Button animation variants
  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="my-10 sm:my-16 md:my-20 p-[15px]">
      <div
        style={{
          backgroundImage: `url(${Bg || "/placeholder.svg"})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          borderRadius: "50px",
        }}
        className="relative flex items-center h-[80vh] sm:h-[85vh] md:h-[90vh] lg:h-[95vh] xl:h-[100vh]"
      >
        {/* Positioned buttons with overlap - now positioned at the top right */}
        <div
          className="absolute 
          top-[300px] right-8
          sm:top-20 sm:right-12
          md:top-[500px] md:right-16
          lg:top-24 lg:right-24
          xl:top-32 xl:right-32
          2xl:top-[550px] 2xl:right-[350px]
          z-30"
        >
          {/* Container for overlapping buttons */}
          <div className="relative ">
            {/* First button (Привееет) - positioned on top */}
            <motion.button
              className="md:w-[200px] w-[120px] sm:min-w-[150px] flex items-center gap-2 sm:gap-3 
                bg-[#0140FF] 
                py-2 sm:py-3 md:py-4 lg:py-5
                px-4 sm:px-6 md:px-8 lg:px-10
                rounded-full text-white -rotate-4 shadow-lg 
                absolute z-20
                text-sm sm:text-base md:text-lg"
              initial="hidden"
              animate={buttonControls1}
              variants={buttonVariants}
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                top: "-10px",
                right: "30px",
              }}
            >
              <img src={Hi || "/placeholder.svg"} alt="Hi" className="w-5 h-5 sm:w-6 sm:h-6" />
                {t("hi")}
            </motion.button>

            {/* Second button (Меня зовут Абдулла) - positioned below with overlap */}
            <motion.button
              className="flex items-center gap-2 sm:gap-3
                w-[180px] sm:w-[200px] md:w-[250px] lg:min-w-[260px]
                backdrop-blur-xl bg-white/10 
                2xl:my-5
                max-lg:my-5
                py-2 sm:py-3 md:py-5 lg:py-5
                px-4 sm:px-6 md:px-8 lg:px-10
                rounded-full text-white rotate-4 shadow-lg 
                absolute z-10
                text-sm sm:text-base md:text-lg"
              initial="hidden"
              animate={buttonControls2}
              variants={buttonVariants}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                top: "20px",
                right: "0",
              }}
            >
              {t("myName")}
            </motion.button>
          </div>
        </div>

        {/* Text container - now positioned at the bottom */}
        <div className="flex justify-start items-end h-full w-full px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-10 md:py-16 lg:py-24 xl:py-32">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[110px] text-[#F6F6F6] font-bold"
            initial="hidden"
            animate={textControls}
            variants={textVariants}
          >
            {t("headerText1")}
            <br />
            {t("headerText2")}
          </motion.h1>
        </div>
      </div>
    </div>
  )
}

export default Header
