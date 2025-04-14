
import React from 'react';
import Header from '@/components/Header';
import PhotoAlbum from '@/components/PhotoAlbum';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0f1218]">
      <Header />
      <main className="flex-1 container mx-auto max-w-7xl py-6">
        <PhotoAlbum />
      </main>
      <footer className="py-4 text-center text-sm text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} Manolito's Photo Album. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
