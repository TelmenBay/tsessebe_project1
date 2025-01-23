'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function FlipCard({ frontImage, children }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flip-card" onClick={handleClick}>
      <div className={`flip-card-inner ${isFlipped ? 'is-flipped' : ''}`}>
        <div className="flip-card-front">
          <Image 
            src={frontImage}
            alt="Workshop thumbnail"
            width={400}
            height={300}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '10px'
            }}
          />
        </div>
        <div className="flip-card-back">
          {children}
        </div>
      </div>
    </div>
  );
} 