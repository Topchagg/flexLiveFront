import Slider from 'react-slick';
import { FC, useState } from 'react';
import { NextArrow,PrevArrow } from '../sharedApi';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ui/carousel.css'


interface PropsInterface<T> {
  itemList: Array<T>;
  Item: React.FC<T>;
}

const Carousel: FC<PropsInterface<any>> = ({ itemList, Item }) => {

  const [currentDot, setCurrentDot] = useState(0)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    afterChange: (currnet:number) => setCurrentDot(currnet),
    appendDots: (dots:React.ReactNode) => (
      <div>
          <ul className='btn-wrapper'>
            {dots}
          </ul>
      </div>
    ),
    customPaging: (i:number) => (
      <div className={i==currentDot ? 'pagging-btn-active' : 'pagging-btn-unactive'}>
       
      </div>)
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {itemList.map((item, index) => (
          <div className='product-wrapper' key={index}>
            <Item {...item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;