import React from 'react';

interface Props {
  total: number;
  activeIndex: number;
  onChange: (idx: number) => void;
}

const Bullets = ({ total, activeIndex, onChange }: Props) => {
  return (
    <div className="slider__bullets flex items-center justify-center">
      {[...Array(total)].map((item, itemIndex) => (
        <span
          className={`cursor-pointer transition duration-500 bg-blue-600 ml-1 mr-1 rounded-full h-3 w-3 ${activeIndex === itemIndex ? 'bg-opacity-100' : 'bg-opacity-50'}`} key={itemIndex}
          onClick={() => onChange(itemIndex)}
        />
      ))}
    </div>
  )
};

export default Bullets;
