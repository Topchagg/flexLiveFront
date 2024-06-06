import React from 'react';
import './ui/arrows.css'

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const NextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{...style,}}
    onClick={onClick}>
      <img className='arrow-png' src="/icons/arrowRight.png" alt="" />
  </div>
);

export const PrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{...style,}}
    onClick={onClick}>
      <img className='arrow-png' src="/icons/arrowLeft.png" alt="" />
  </div>

);