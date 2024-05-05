import Image from "next/image";

interface CarouselImageProps {
  id: number;
  image: string;
}

export default function CarouselImage({ image }: CarouselImageProps) {
  return (
    <div className="duration-700 ease-in-out data-carousel-item">
     <Image
  src={image}
  alt={image}
  width={500}
  height={1000}
  objectFit="contain"
  className="absolute block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
/>

    </div>
  );
}

