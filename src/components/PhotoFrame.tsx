
import React from 'react';
import { cn } from '@/lib/utils';

interface PhotoFrameProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape';
}

const PhotoFrame = ({ src, alt, className, aspectRatio = 'square' }: PhotoFrameProps) => {
  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
  };

  const isHeroFrame = className?.includes('hero-frame');
  const isSmallFrame = className?.includes('small-frame');

  return (
    <div className={cn(
      'photo-frame',
      isHeroFrame && 'p-0 hover:-translate-y-0 rounded-lg border border-white/30',
      isSmallFrame && 'border border-white/30 rounded-lg',
      className
    )}>
      <div className={cn(
        'photo-container', 
        aspectRatioClasses[aspectRatio],
        isHeroFrame ? 'rounded-lg' : 'rounded-lg',
        isSmallFrame && 'border border-white/30 rounded-lg'
      )}>
        <img 
          src={src} 
          alt={alt} 
          className={cn(
            "photo rounded-lg",
            isHeroFrame && "object-cover w-full h-full rounded-lg"
          )}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default PhotoFrame;

