"use client"
import CarouselImage from "./CarouselImage";
import { useState, useEffect } from "react";

interface CarouselImageProps {
  id: number;
  image: string;
  active?: boolean;
}

interface ICarouselProps {
  images: CarouselImageProps[];
}

export default function Carousel({ images }: ICarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setActiveIndex(randomIndex);
    }, 5000); // Cambia este valor según la duración de cambio de imagen deseada

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel-container">
      <div className="carousel-images">
        {images.map((image, index) => (
          <CarouselImage
            key={image.id}
            id={image.id}
            image={image.image}
            active={index === activeIndex}
          />
        ))}
      </div>
    </div>
  );
}
