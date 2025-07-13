// copy from https://codepen.io/jh3y/pen/oNqdmbW
import StarIcon from '@/assets/icons/star_icon.svg?react';
import { type FC } from 'react';
import './index.css';
import clsx from 'clsx';

interface StarButtonProps {
  onClick: () => void;
  text: string;
  color: string;
  shadow: string;
  glare: string;
  fontSize?: string;
  transition: string;
}

const StarButton: FC<StarButtonProps> = ({
  onClick,
  text,
  color,
  shadow,
  glare,
  fontSize,
  transition,
}) => {
  const sparkles = [
    { x: '0', y: '20', s: '1.1', d: '1' },
    { x: '15', y: '80', s: '1.25', d: '2' },
    { x: '45', y: '40', s: '1.1', d: '3' },
    { x: '75', y: '60', s: '0.9', d: '2' },
    { x: '100', y: '30', s: '0.8', d: '4' },
  ];

  return (
    <div
      className={clsx(
        'star-button',
        'cursor-pointer',
        'relative',
        'flex',
        'box-border',
        'px-5',
        'py-1',
        'transition-colors',
        'duration-200',
        'hover:dark:bg-gray-700',
        'hover:bg-white/5'
      )}
      style={
        {
          '--color': color,
          '--shadow': shadow,
          '--glare': glare,
          '--font-size': fontSize,
          '--transition': transition,
        } as React.CSSProperties
      }
      onClick={onClick}
    >
      {sparkles.map((sparkle, i) => (
        <StarIcon
          key={i}
          style={
            {
              '--x': sparkle.x,
              '--y': sparkle.y,
              '--s': sparkle.s,
              '--d': sparkle.d,
            } as React.CSSProperties
          }
        />
      ))}
      <span>{text}</span>
      <span>{text}</span>
    </div>
  );
};
export default StarButton;
