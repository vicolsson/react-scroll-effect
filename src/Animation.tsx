import React from 'react';

const baseStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  animationDuration: '1s',
  animationPlayState: 'paused'
} as React.CSSProperties;

function ScrollEffect(
  {
    children,
    className = '',
    animationClassName,
    percentage,
  } :
  {
    children: JSX.Element,
    className?: string,
    animationClassName: string,
    percentage: number,
  }
) {

  return (
    <div
      className={`${className} ${animationClassName}`}
      style={{ ...baseStyles, animationDelay: `${Math.max(-0.999999, -1 * percentage)}s` }}
    >
      {children}
    </div>
  );
}

export default ScrollEffect;
