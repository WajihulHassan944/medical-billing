'use client';

import { useEffect, useRef, useState } from "react";
import TopHeader from "./Navbar/TopNavbar";
import MainNavbar from "./Navbar/Navbar";

export default function HeaderWrapper() {
  const [scrolled, setScrolled] = useState(false);
  const [topHeight, setTopHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const topRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 6);
    };

    const updateHeights = () => {
      if (topRef.current) {
        setTopHeight(topRef.current.offsetHeight);
      }
      setWindowWidth(window.innerWidth);
    };

    updateHeights(); // Initial

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateHeights);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateHeights);
    };
  }, []);

  let navbarTop = "0px";
  if (windowWidth <= 768) {
    navbarTop = scrolled ? "0px" : "50px";
  } else {
    navbarTop = scrolled ? "0px" : `${topHeight}px`;
  }

  return (
    <>
      <div
        ref={topRef}
        className={`topHeaderWrapper ${scrolled ? "relativeHeader" : "fixedHeader"}`}
      >
        <TopHeader />
      </div>
      <div className="mainNavbarFixed" style={{ top: navbarTop }}>
        <MainNavbar scrolled={scrolled} />
      </div>
    </>
  );
}
