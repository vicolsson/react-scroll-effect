import React, { useCallback, useEffect, useRef, useState } from "react";

const outerContainerStyles = {
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
} as React.CSSProperties;

const innerContainerStyles = {
  position: 'sticky',
  top: 0,
}  as React.CSSProperties;

function Container(
  { scrollContainer,
    scrollDistance,
    children,
    onlyAnimateFullyVisible = false,
    logPercentage = false,
    containerClassName = ''
  } :
  {
    scrollContainer: HTMLDivElement | null,
    scrollDistance: number,
    children: (percentage: number) => JSX.Element,
    onlyAnimateFullyVisible?: boolean,
    logPercentage?: boolean,
    containerClassName?: string
  }
) {
  const [percentage, setPercentage] = useState(0);
  const subContainerRef = useRef<HTMLDivElement>(null);

  const scrollContainerHeight = scrollContainer?.clientHeight ?? 0;

  const calculate = useCallback(() => {
    const scrollContainerBoundingRect = scrollContainer?.getBoundingClientRect();
    const subContainerBoundingRect = subContainerRef.current?.getBoundingClientRect();
    if (!scrollContainerBoundingRect || !subContainerBoundingRect) return;

    const deltaTop = subContainerBoundingRect.top - scrollContainerBoundingRect.top;

    let newPercentage;
    if (onlyAnimateFullyVisible) {
      newPercentage = Math.min(1, Math.max(0,
        -1 * deltaTop / (scrollDistance - scrollContainerHeight)
      ));
    } else {
      const totalHeight = scrollDistance + scrollContainerHeight;
      const top = -1 * (deltaTop - scrollContainerHeight);
      newPercentage = Math.min(1, Math.max(0, top / totalHeight));
    }
    
    if (logPercentage) {
      console.log('Scroll for', subContainerRef.current, 'is', Math.round(newPercentage * 10000) / 100, '%');
    }

    setPercentage(newPercentage);
  }, [scrollContainer, scrollContainerHeight, scrollDistance, onlyAnimateFullyVisible, logPercentage]);

  useEffect(() => {
    if (!scrollContainer) return;

    scrollContainer.addEventListener('scroll', calculate);
    return () => {
      scrollContainer.removeEventListener('scroll', calculate);
    }
  }, [scrollContainer, calculate]);

  useEffect(() => {
    calculate();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      style={{ ...outerContainerStyles, height: `${scrollDistance}px` }}
      ref={subContainerRef}
    >
      <div
        className={containerClassName}
        style={{ ...innerContainerStyles, height: `${scrollContainerHeight}px` }}
      >
        {children(percentage)}
      </div>
    </div>
  );
}

export default Container;
