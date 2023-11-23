import React, { use, useEffect, useState } from 'react'
import Defs from './Defs';
import GElements from './GElements';
import styles from '../SaudiMap/index.module.scss'
const Svg = () => {
  const [viewBox, setViewBox] = useState()
  const [smallScreen, setSmallScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      if (viewportWidth >= 450) {
        setSmallScreen(true)
      } else {
        setSmallScreen(false)

      }

      if (viewportWidth <= 600) {
        setViewBox("0 0 700 882");
      } else if (viewportWidth <= 1200) {
        setViewBox("0 0 700 882");
      } else {
        setViewBox("0 0 858 724");
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <>
      <div id="map">
        <svg id='svg1' width="393" height="421" viewBox="0 0 393 421" fill="none" xmlns="http://www.w3.org/2000/svg">
          <GElements />
        </svg>
      </div>




    </>
  )
}

export default Svg