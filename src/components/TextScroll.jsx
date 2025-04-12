import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import Slide from './Slide';

const TextScroll = () => {
  const { t } = useTranslation(); // Initialize i18next translation
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const text = t("text"); // Fetch translated text
  const words = text.split(' '); // Split the text into words

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const totalScroll = rect.height + windowHeight;
        const scrollAmount = windowHeight - rect.top;
        const progress = Math.min(Math.max(scrollAmount / totalScroll, 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate the total number of characters and determine how many should be visible based on scroll progress
  const allChars = text.replace(/\s+/g, '').length;
  const visibleLetters = Math.floor(scrollProgress * allChars);

  // Track the index of characters to be highlighted
  let charIndex = 0;

  return (
    <>
      <div
        className="min-h-screen flex justify-center items-center text-center px-4"
        ref={sectionRef}
      >
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-8xl font-bold leading-relaxed">
          {words.map((word, wordIndex) => {
            const letters = word.split('').map((char, i) => {
              const isVisible = charIndex < visibleLetters;
              const span = (
                <span
                  key={`${wordIndex}-${i}`}
                  className={`transition-colors duration-300 ${
                    isVisible ? 'text-blue-500' : 'text-gray-500'
                  }`}
                >
                  {char}
                </span>
              );
              charIndex++;
              return span;
            });

            const withSpace = (
              <span key={`word-${wordIndex}`} className="mr-2">
                {letters}
              </span>
            );

            const isLineBreak = (wordIndex + 1) % 3 === 0;

            return (
              <React.Fragment key={wordIndex}>
                {withSpace}
                {isLineBreak && <br />}
              </React.Fragment>
            );
          })}
        </h1>
      </div>

      <Slide />
    </>
  );
};

export default TextScroll;
