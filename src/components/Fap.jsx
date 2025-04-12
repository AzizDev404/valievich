"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function FAQComponent() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(2); // Setting the second question as active initially
  const [mounted, setMounted] = useState(false);

  // Handle hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Create data array from translations
  const data = [1, 2, 3, 4].map((id) => ({
    id,
    question: t(`questions.${id}.question`),
    answer: t(`questions.${id}.answer`),
  }));

  if (!mounted) {
    return null; // Prevent hydration issues
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-6xl flex flex-col gap-10">

        <motion.h2
          className="text-6xl font-medium text-blue-600 text-center mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {t("faqTitle")}
        </motion.h2>

        <motion.p
          className="text-gray-500 text-center mb-10 max-w-2xl mx-auto text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t("faqSubtitle")}
        </motion.p>

        <div className="space-y-3">
          {data.map((item) => (
            <motion.div
              key={item.id}
              className="hover:bg-white transition-all duration-300 rounded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="flex justify-between items-center w-full py-5 px-6 text-left focus:outline-none"
                onClick={() => toggleAccordion(item.id)}
              >
                <span className="text-base font-normal text-gray-800">{item.question}</span>
                <motion.div
                  animate={{ rotate: activeIndex === item.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-400 w-5 h-5 flex items-center justify-center"
                >
                  {/* Custom chevron using border */}
                  <div className="w-2.5 h-2.5 border-r-2 border-b-2 border-gray-400 transform rotate-45 mt-[-4px]"></div>
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0 text-sm text-gray-500">{item.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}