"use client";

import { motion, useReducedMotion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

export function TextReveal({
  text,
  className,
  delay = 0,
  stagger = 0.04,
  as: Tag = "div",
}: TextRevealProps) {
  const shouldReduce = useReducedMotion();
  const words = text.split(" ");

  if (shouldReduce) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className} aria-label={text}>
      <motion.span
        className="inline"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        transition={{ staggerChildren: stagger, delayChildren: delay }}
        aria-hidden
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: "110%", opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
              {word}
            </motion.span>
            {i < words.length - 1 && <span className="inline-block">&nbsp;</span>}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
