import React, { ReactChild, useMemo } from 'react';

interface Props {
  content: string | ReactChild;
  isActive: boolean;
}

const Slide = ({ content, isActive }: Props) => {
  const className = useMemo(() => {
    if (isActive) return 'relative visible opacity-100';
    return 'absolute invisible opacity-0';
  }, [isActive]);

  return (
    <div style={{ minHeight: 200 }} className={`flex flex-col item-centers justify-center transition duration-500 ${className}`}>
      {isActive && content}
    </div>
  )
};

export default Slide;
