import React from 'react';
import PhotoFrame from './PhotoFrame';
import { ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

// Importar las imágenes
import photo1 from '/public/photos/1.jpg';
import photo2 from '/public/photos/2.jpg';
import photo3 from '/public/photos/3.jpg';
import photo4 from '/public/photos/4.jpg';
import photo5 from '/public/photos/5.jpg';

interface Photo {
  id: number;
  src: string;
  alt: string;
  aspectRatio: 'square' | 'video' | 'portrait' | 'landscape';
}

const photos: Photo[] = [
  {
    id: 1,
    src: photo2, // Usar la importación
    alt: 'SUUU',
    aspectRatio: 'landscape',
  },
  {
    id: 2,
    src: photo3,
    alt: 'SUUUU',
    aspectRatio: 'landscape',
  },
  {
    id: 3,
    src: photo4,
    alt: 'SUUUUU',
    aspectRatio: 'landscape',
  },
  {
    id: 4,
    src: photo5,
    alt: 'SUUUUUU',
    aspectRatio: 'portrait',
  },
];

const heroPhoto = {
  id: 101,
  src: photo1, // Usar la importación
  alt: 'JEEJAOJFRID',
  aspectRatio: 'landscape',
};

const PhotoAlbum = () => {
  const isMobile = useIsMobile();

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between px-4 md:px-6 py-4 bg-[#1a1f2c] border-b border-gray-800 mb-4">
        <h2 className="text-xl font-bold text-white mb-2 md:mb-0">Fotos</h2>
        
        <Button 
          variant="outline" 
          className="border-gray-700 hover:bg-blue-900/20 text-black bg-white hover:text-black"
          onClick={() => window.open('https://manolitoweb.netlify.app/', '_blank')}
        >
          Visitar Web Original
          <ExternalLink className="h-4 w-4 ml-2" />
        </Button>
      </div>

      <div className="w-full">
        {/* Hero Image */}
        <div className="relative w-full h-[50vh] md:h-[70vh] mb-6 overflow-hidden">
          <PhotoFrame 
            src={heroPhoto.src} 
            alt={heroPhoto.alt} 
            aspectRatio="landscape" 
            className="hero-frame h-full"
          />
        </div>
        
        {/* Grid of smaller photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {photos.map((photo) => (
            <PhotoFrame
              key={photo.id}
              src={photo.src}
              alt={photo.alt}
              aspectRatio={photo.aspectRatio}
              className="small-frame"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoAlbum;