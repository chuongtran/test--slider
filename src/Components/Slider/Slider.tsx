import React, { ReactChild, useEffect, useState } from 'react';
import Bullets from './Bullets';
import Slide from './Slide';

export type SlideProps = {
  content: string | ReactChild;
}

interface Props {
  slides: SlideProps[];
  activeIndex: number;
  onChange: (idx: number) => void;
}
const Slider = (props: Props) => {
  const { slides, activeIndex: propsActiveIndex, onChange } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (propsActiveIndex > slides.length - 1) setActiveIndex(slides.length - 1);
    else if (propsActiveIndex < 0) setActiveIndex(0);
    else setActiveIndex(propsActiveIndex)
  }, [propsActiveIndex, slides]);

  const handleSlideChange = (idx: number) => {
    if (typeof onChange === 'function') onChange(idx);
    setActiveIndex(propsActiveIndex);
  };

  return (
    <div className="slider">
      <div className="slider__container container mx-auto px-4 py-5 rounded border-dashed border border-light-blue-500">
        <div className="mb-5">
          {
            slides.map((slide, slideIndex) => (
              <Slide isActive={slideIndex === activeIndex} key={slideIndex} content={slide.content} />
            ))
          }
        </div>
        <Bullets total={slides.length} activeIndex={activeIndex} onChange={handleSlideChange} />
      </div>
    </div>
  );
};

export default Slider;
