import { useEffect, useState } from 'react';

/**
 * useTypingEffect Hook
 * 
 * Creates a dynamic typing animation effect for text.
 * Cycles through multiple texts with backspace animation.
 * 
 * Design: Dynamic typing creates sense of "live" AI interface
 */
export function useTypingEffect(
  texts: string[],
  speed: number = 100,
  backspaceSpeed: number = 50,
  delayBetweenTexts: number = 2000
) {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      // Typing phase
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, speed);
      } else {
        // Finished typing, wait before backspacing
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, delayBetweenTexts);
      }
    } else {
      // Backspacing phase
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, backspaceSpeed);
      } else {
        // Move to next text
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentTextIndex, texts, speed, backspaceSpeed, delayBetweenTexts]);

  return displayText;
}
