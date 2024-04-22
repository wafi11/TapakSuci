"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/utils/cn";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

export const ParallaxScrollSecond = ({ cards }: { cards: Card[] }) => {
  const gridRef = useRef<any>(null);
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);
  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
    console.log("sclick");
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateYFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateXFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotateXFirst = useTransform(scrollYProgress, [0, 1], [0, -20]);

  const translateYThird = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateXThird = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotateXThird = useTransform(scrollYProgress, [0, 1], [0, 20]);

  const third = Math.ceil(cards.length / 3);

  const firstPart = cards.slice(0, third);
  const secondPart = cards.slice(third, 2 * third);
  const thirdPart = cards.slice(2 * third);

  return (
    <div
      className={cn(
        "h-full items-start overflow-y-auto no-scrollbar w-full ",
        cards.map((i) => i.className)
      )}
      ref={gridRef}>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full items-start max-w-7xl mx-auto gap-10 py-40 px-10 h-full"
        ref={gridRef}>
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{
                y: translateYFirst,
                x: translateXFirst,
                rotateZ: rotateXFirst,
              }} // Apply the translateY motion value here
              key={"grid-1" + idx}
              onClick={() => handleClick(el)}
              className={cn(
                el.className,
                "relative overflow-hidden",
                selected?.id === el.id
                  ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-3/4 m-auto z-50 flex justify-center items-center flex-col"
                  : lastSelected?.id === el.id
                  ? "z-40 bg-white rounded-xl h-full w-full"
                  : "bg-white rounded-xl h-full w-full"
              )}
              layout>
              {selected?.id === el.id ? (
                <SelectedCard selected={selected} />
              ) : (
                <Image
                  src={el.thumbnail}
                  className="h-80 w-full object-cover object-center rounded-lg gap-10 !m-0 !p-0 "
                  height="400"
                  width="400"
                  alt="thumbnail"
                />
              )}
              <BlurImage card={el} />
            </motion.div>
          ))}
          <motion.div
            onClick={handleOutsideClick}
            className={cn(
              "absolute h-screen w-full left-0 top-0 bg-black opacity-0 z-10",
              selected?.id ? "pointer-events-auto" : "pointer-events-none"
            )}
            animate={{ opacity: selected?.id ? 0.3 : 0 }}
          />
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div
              key={"grid-1" + idx}
              onClick={() => handleClick(el)}
              className={cn(
                el.className,
                "relative overflow-hidden",
                selected?.id === el.id
                  ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-3/4 m-auto z-50 flex justify-center items-center flex-col"
                  : lastSelected?.id === el.id
                  ? "z-40 bg-white rounded-xl h-full w-full"
                  : "bg-white rounded-xl h-full w-full"
              )}
              layout>
              {selected?.id === el.id ? (
                <SelectedCard selected={selected} />
              ) : (
                <Image
                  src={el.thumbnail}
                  className="h-80 w-full object-cover object-center rounded-lg gap-10 !m-0 !p-0 "
                  height="400"
                  width="400"
                  alt="thumbnail"
                />
              )}
              <BlurImage card={el} />
            </motion.div>
          ))}
          <motion.div
            onClick={handleOutsideClick}
            className={cn(
              "absolute h-screen w-full left-0 top-0 bg-black opacity-0 z-10",
              selected?.id ? "pointer-events-auto" : "pointer-events-none"
            )}
            animate={{ opacity: selected?.id ? 0.3 : 0 }}
          />
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div
              style={{
                y: translateYThird,
                x: translateXThird,
                rotateZ: rotateXThird,
              }} // Apply the translateY motion value here
              key={"grid-1" + idx}
              onClick={() => handleClick(el)}
              className={cn(
                el.className,
                "relative overflow-hidden",
                selected?.id === el.id
                  ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full top-[50%] bottom-[50%] md:w-3/4 m-auto z-50 flex justify-center items-center flex-col"
                  : lastSelected?.id === el.id
                  ? "z-40 bg-white rounded-xl h-full w-full"
                  : "bg-white rounded-xl h-full w-full"
              )}
              layout>
              {selected?.id === el.id ? (
                <SelectedCard selected={selected} />
              ) : (
                <Image
                  src={el.thumbnail}
                  className="h-80 w-full object-cover object-center rounded-lg gap-10 !m-0 !p-0 "
                  height="400"
                  width="400"
                  alt="thumbnail"
                />
              )}
              <BlurImage card={el} />
            </motion.div>
          ))}
          <motion.div
            onClick={handleOutsideClick}
            className={cn(
              "absolute h-screen w-full left-0 top-0 bg-black opacity-0 z-10",
              selected?.id ? "pointer-events-auto" : "pointer-events-none"
            )}
            animate={{ opacity: selected?.id ? 0.3 : 0 }}
          />
        </div>
      </div>
    </div>
  );
};

const BlurImage = ({ card }: { card: Card }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Image
      src={card.thumbnail}
      height="500"
      width="500"
      onLoad={() => setLoaded(true)}
      className={cn(
        "object-cover object-top absolute inset-0 h-full w-full transition duration-200",
        loaded ? "blur-none" : "blur-md"
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]">
        {selected?.content}
        {/* <h3 className="text-black text-4xl absolute top-0">hahaah</h3> */}
      </motion.div>
    </div>
  );
};
