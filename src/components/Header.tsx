
import React from 'react';

const Header = () => {
  const today = new Date();
  const formattedDate = `${today.toLocaleDateString('es-ES', { weekday: 'long' })}, ${today.getDate()} De ${today.toLocaleDateString('es-ES', { month: 'long' })} De ${today.getFullYear()}`;
  
  // Capitalize first letter of each word
  const capitalizedDate = formattedDate
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <header className="py-4 px-6 flex flex-col md:flex-row md:justify-between md:items-center bg-[#1a1f2c] border-b border-gray-800">
      <div className="flex items-center gap-3">
        <img 
          src="/lovable-uploads/73b47774-665f-4a92-aa15-9ad0cc794be2.png" 
          alt="Manolito con gorro de Navidad" 
          className="h-10 w-10 rounded-full object-cover border border-white/30"
        />
        <h1 className="text-2xl font-bold text-white">brbrpatapim</h1>
      </div>
      <p className="text-gray-400 text-sm mt-2 md:mt-0">
        {capitalizedDate}
      </p>
    </header>
  );
};

export default Header;
