// components/Gallery.tsx
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import React from 'react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: '/images/restaurant1.jpg', alt: 'Restaurant interior' },
  { id: 2, src: '/images/restaurant2.jpg', alt: 'Dining area' },
  { id: 3, src: '/images/food1.jpg', alt: 'Food spread' },
  // Add more images as needed
];

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="w-full py-16 bg-gray-50">
      <motion.h1 
        className="text-6xl font-bold text-red-500 text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Gallery
      </motion.h1>
      
      <motion.div
        ref={ref}
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              className="relative h-64 overflow-hidden rounded-lg shadow-lg"
              variants={itemVariants}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="transform transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Gallery;