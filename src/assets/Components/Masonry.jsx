/* eslint-disable react/prop-types */

export default function Masonry({data}) {
  return (
    <div className="w-[100%] place-items-center columns-1 md:columns-3 lg:columns-4 gap-4 p-4">
      {data.map((image, index) => (
        <div 
          key={index} 
          className="mb-4 break-inside-avoid rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
        >
          <img 
            src={image.src} 
            alt={image.id} 
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
