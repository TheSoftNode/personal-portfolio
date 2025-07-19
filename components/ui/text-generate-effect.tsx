"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  highlightWords = [],
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  highlightWords?: string[];
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");

  // Define key phrases that should be highlighted
  const keyPhrases = [
    "efficient and scalable solutions",
    "5+ hackathons",
    // "Stacks, NEAR, Stellar, and Hedera",
    // "Web2 and Web3 technologies",
    // "6 years of experience",
    // "4 years in frontend development",
    // "Blockchain Hackathon Contributor & Builder",
    ...highlightWords
  ];

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.15),
      }
    );
  }, [scope.current, animate, duration, filter]);

  const isWordHighlighted = (word: string, index: number) => {
    // Remove punctuation for better matching
    const cleanWord = word.replace(/[.,!?;:]/g, '').toLowerCase();

    if (['and', 'or', 'the', 'a', 'an', 'in', 'on', 'at', 'to', 'for', 'of', 'with'].includes(cleanWord)) {
      return false;
    }
    
    // Check if this word is part of a key phrase
    for (let phrase of keyPhrases) {
      const phraseWords = phrase.toLowerCase().split(" ");
      const phraseStart = wordsArray.slice(index, index + phraseWords.length)
        .map(w => w.replace(/[.,!?;:]/g, '').toLowerCase());
      
      if (phraseWords.length > 1 && 
          phraseWords.every((pw, i) => phraseStart[i] === pw)) {
        return true;
      }
      
      if (phraseWords.includes(cleanWord)) {
        return true;
      }
    }

    // Specific important single words
    const importantWords = [
      'fullstack', 
      'rust', 'solana', 'polkadot', 'won',
      'expert', 'specialized', 'scalable', 'efficient', 'decentralized'
    ];
    
    return importantWords.includes(cleanWord);
  };

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          const isHighlighted = isWordHighlighted(word, idx);
          
          return (
            <motion.span
              key={word + idx}
              className={cn(
                "opacity-0 transition-colors duration-300",
                isHighlighted 
                  ? "text-[#FE705A] dark:text-[#FE705A] font-semibold" 
                  : "text-muted-foreground dark:text-muted-foreground"
              )}
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-normal", className)}>
      <div className="my-2">
        <div className="leading-relaxed tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

