'use client';
import React, { useEffect, useRef } from 'react';
import './Technologies.css';

const Technologies = () => {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const intervalRef1 = useRef(null);
  const intervalRef2 = useRef(null);

  const names = [
    'one', 'two', 'three', 'four', 'five',
    'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
    'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ];

  const duplicated = [...names, ...names];

  const startAutoScroll = (ref, intervalRef) => {
    intervalRef.current = setInterval(() => {
      const el = ref.current;
      if (el) {
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        } else {
          el.scrollLeft += 1;
        }
      }
    }, 30);
   };

  const stopAutoScroll = (intervalRef) => {
    clearInterval(intervalRef.current);
   };

  const enableDragScroll = (ref, intervalRef) => {
    const el = ref.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    const onMouseDown = (e) => {
      isDown = true;
      el.classList.add('dragging');
      startX = e.clientX;
      scrollLeft = el.scrollLeft;
      stopAutoScroll(intervalRef);
    };

    const onMouseLeave = () => {
      if (!isDown) return;
      isDown = false;
      el.classList.remove('dragging');
      startAutoScroll(ref, intervalRef);
    };

    const onMouseUp = () => {
      isDown = false;
      el.classList.remove('dragging');
      startAutoScroll(ref, intervalRef);
    };

    const onMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.clientX;
      const walk = (x - startX) * 1.5;
      el.scrollLeft = scrollLeft - walk;
    };

    const onTouchStart = (e) => {
      isDown = true;
      startX = e.touches[0].clientX;
      scrollLeft = el.scrollLeft;
      stopAutoScroll(intervalRef);
    };

    const onTouchEnd = () => {
      isDown = false;
      startAutoScroll(ref, intervalRef);
    };

    const onTouchMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.touches[0].clientX;
      const walk = (x - startX) * 1.5;
      el.scrollLeft = scrollLeft - walk;
    };

    el.addEventListener('mousedown', onMouseDown);
    el.addEventListener('mouseleave', onMouseLeave);
    el.addEventListener('mouseup', onMouseUp);
    el.addEventListener('mousemove', onMouseMove);
    el.addEventListener('touchstart', onTouchStart, { passive: false });
    el.addEventListener('touchend', onTouchEnd);
    el.addEventListener('touchmove', onTouchMove, { passive: false });

    return () => {
      el.removeEventListener('mousedown', onMouseDown);
      el.removeEventListener('mouseleave', onMouseLeave);
      el.removeEventListener('mouseup', onMouseUp);
      el.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
      el.removeEventListener('touchmove', onTouchMove);
    };
  };

  useEffect(() => {
    startAutoScroll(scrollRef1, intervalRef1);
    startAutoScroll(scrollRef2, intervalRef2);

    const cleanup1 = enableDragScroll(scrollRef1, intervalRef1);
    const cleanup2 = enableDragScroll(scrollRef2, intervalRef2);

    return () => {
      stopAutoScroll(intervalRef1);
      stopAutoScroll(intervalRef2);
      cleanup1();
      cleanup2();
    };
  }, []);

  return (
    <div className="tech-container">
      <h2 className="tech-heading">
        Medical Billing Software We Leverage for Revenue Cycle Management
      </h2>
      <p className="tech-subtext">
        Here are some Industry top listed EHR being operated by us.
      </p>

      <div className="tech-row-container" ref={scrollRef1}>
        {duplicated.slice(0, 20).map((name, index) => (
          <img
            src={`/assets/home/tech/${name}.webp`}
            key={`row1-${index}`}
            alt={name}
            className="tech-logo"
            draggable="false"
          />
        ))}
      </div>

      <div className="tech-row-container" ref={scrollRef2}>
        {duplicated.slice(10).map((name, index) => (
          <img
            src={`/assets/home/tech/${name}.webp`}
            key={`row2-${index}`}
            alt={name}
            className="tech-logo"
            draggable="false"
          />
        ))}
      </div>
    </div>
  );
};

export default Technologies;
